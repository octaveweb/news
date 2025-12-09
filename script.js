

function newsFeed(data) {

    // News Feed data add
    let newsGrid = document.querySelector("#newsGrid")

    const fallbackImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNK7-n-r_w_qCEIjsnu8VXMBamUkSmLUr9Eg&s";


    let newsFeedData = ""
    data.forEach((elm, ind) => {
        newsFeedData += `
    
    <div class="news-card" id=${ind}>
    <img src="${elm.image_url === null ? fallbackImage : elm.image_url}" alt="${elm.title}" class="news-card-image">
    <div class="news-card-content">
      <span class="news-card-category">${elm.category[0].toUpperCase()}</span>
      <h3 class="news-card-title">${elm.title.split(" ").slice(0, 7).join(" ") + "..."}</h3>
      <p class="news-card-description">${elm.description}</p>
      <div class="news-card-footer">
        <div class="news-card-author">
          <div class="news-card-author-avatar">${elm.source_name.split("")[0]}</div>
          <span>${elm.source_name}</span>
        </div>
        <span class="news-card-time">${elm.pubDate.split(" ")[0]}</span>
      </div>
      </div>
      </div>`


    })
    newsGrid.innerHTML = newsFeedData

    let domNewsGrid = document.querySelectorAll(".news-card");
    // console.log(domNewsGrid);

    // Tags Contener Add
    let uniqueCategories = new Set();
    data.forEach(elm => {
        if (Array.isArray(elm.category)) {
            elm.category.forEach(c => uniqueCategories.add(c));
        } else {
            uniqueCategories.add(elm.category);
        }
    });

    let category = [...uniqueCategories]
    let tags_con = document.getElementById("tags")
    haslist = ""
    category.filter((e) => {

        let hasTag = "#";
        hasTag += e


        haslist += `<a href="#" class="tag" style="text-transform: capitalize;">${hasTag}</a>`




    })
    tags_con.innerHTML = haslist



    // console.log(data.results[0].category);


}

function modalOpen(data) {

    let domNewsFeed = document.querySelectorAll(".news-card")


    let modal = document.querySelector("#articleModal")
    let modalData = ""
    domNewsFeed.forEach((elm, index) => {

        elm.addEventListener("click", () => {
            modal.classList.add("active");
            let news = data[elm.id]
            let res = data[index]

            modalData = `<div class="article-modal-overlay"></div>
        <div class="article-modal-content">
            <button class="article-close-btn" id="closeArticle">
                <i class="fas fa-times"></i>
            </button>
            <div class="article-container">
                <div class="article-header">
                  
                    <img id="articleImage" src="${news.image_url === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNK7-n-r_w_qCEIjsnu8VXMBamUkSmLUr9Eg&s" : news.image_url}" alt="${news.title}" class="article-image">
                    <div class="article-header-content">
                      
                        <h1 id="articleTitle" class="article-title">${news.title}</h1>
                        <div class="article-meta">
                            <div class="article-author-info">
                                <div id="articleAuthorAvatar" class="article-avatar">${news.source_name.split("")[0]}</div>
                                <div>
                                    <p id="articleAuthor" class="article-author">${news.source_name}</p>
                                    <p id="articleDate" class="article-date">${news.pubDate.split(" ").join(" | ")}</p>
                                </div>
                            </div>
                            <div class="article-actions">
                                <button class="article-action-btn" id="shareBtn" title="Share">
                                    <i class="fas fa-share-alt"></i> Share
                                </button>
                                <button class="article-action-btn" id="bookmarkBtn" title="Bookmark">
                                    <i class="fas fa-bookmark"></i> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="article-body">
                                  <span id="articleCategory" class="article-badge" style="margin-bottom: 0.75rem;">${news.category[0].toUpperCase()}</span>

                    <div id="articleDescription" class="article-description">${news.title}</div>
                    <div id="articleContent" class="article-content">${news.description}  <a target="_blank" href="${res.link}">more</a></div>
                </div>

                <div class="article-footer">
                    <div class="article-tags">
                        <h3>Tags:</h3>
                        <div id="articleTagsContainer" class="article-tags-list">${news.category}</div>
                    </div>
                    <div class="article-related">
                        <h3>Related Articles</h3>
                        <a id="relatedArticles" class="related-articles-list" target="_blank" href="${res.link}">${res.title}</a>

                    </div>
                </div>
            </div>
        </div>`



            modal.innerHTML = modalData


            let closeArticle = document.querySelector("#closeArticle")
            closeArticle.addEventListener("click", () => {
                modal.classList.remove("active");
            })
            document.querySelector(".article-modal-overlay").addEventListener("click", () => {
                modal.classList.remove("active");
            })
        })
    })

}

function topCardData(data) {

    let topCard = document.getElementById("featuredCard")


    let content = `<img src="${data[0].image_url}" alt="Featured Story">
    <div class="featured-content">
                <span class="featured-badge">BREAKING</span>
                <h2>${data[0].title}</h2>
                <p>${data[0].description}</p>
                <a href="${data[0].link}" target="_blank" class="read-more">Read Full Story</a>
            </div>`

    topCard.innerHTML = content
    

}
function getNewsData() {
    const cacheKey = "newsCache";
    const timeKey = "newsCacheTime";
    const expiryTime = 30 * 60 * 1000; // 30 minutes

    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(timeKey);
    const now = Date.now();

    if (cachedData && cachedTime && (now - cachedTime < expiryTime)) {
        const data = JSON.parse(cachedData);

        // Update time on interaction
        localStorage.setItem(timeKey, now);

        dataInsert(data);
        modalOpen(data);
        topCardData(data);
        return;
    }

    // API fetch (cache expired or not available)
    const apikey = "pub_9eb027e16d5249ff921c4d8bd079be3d";
    const url = `https://newsdata.io/api/1/latest?apikey=${apikey}&q=US%20tariffs&prioritydomain=top`;

    fetch(url)
        .then(response => response.json())
        .then(newsFeedData => {
            const data = newsFeedData.results;

            // Store fresh data + new time
            localStorage.setItem(cacheKey, JSON.stringify(data));
            localStorage.setItem(timeKey, now);

            dataInsert(data);
            modalOpen(data);
            topCardData(data);
        })
        .catch(err => console.error(err));
}


getNewsData();

