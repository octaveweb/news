async function getData() {
    let apikey = "pub_5ca9fafe438347a99ca388cd5d8737e3"
    let url = `https://newsdata.io/api/1/latest?apikey=${apikey}&q=US%20tariffs&prioritydomain=top`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        console.log(result)



    } catch (error) {
        console.error(error.message);
    }
}


// getData()










// Sample News Data
const newsData = [
    {
        id: 1,
        title: "Latest AI Breakthrough Transforms Healthcare",
        description: "Researchers announce a major advancement in artificial intelligence that could revolutionize medical diagnosis and treatment.",
        image: "https://via.placeholder.com/900x400/3b82f6/fff?text=AI+Healthcare",
        category: "technology",
        author: "John Smith",
        date: "2 hours ago",
        authorInitial: "JS",
        fullContent: "<p>In a groundbreaking development, a team of researchers has unveiled a new artificial intelligence system that can diagnose complex medical conditions with unprecedented accuracy. The system, trained on millions of medical cases, can analyze patient data and imaging results in seconds.</p><h2>Key Achievements</h2><p>The AI system achieved a 99.2% accuracy rate in preliminary trials, surpassing the performance of experienced radiologists. This breakthrough could significantly reduce diagnostic errors and improve patient outcomes.</p><p>The technology is currently being tested in leading hospitals across the country, with plans for wider deployment within the next year.</p>",
        tags: ["AI", "Healthcare", "Technology", "Medical"],
        views: "45.2K"
    },
    {
        id: 2,
        title: "Stock Market Hits Record Highs",
        description: "Global markets rally as investors show confidence in economic recovery and corporate earnings growth.",
        image: "https://via.placeholder.com/900x400/10b981/fff?text=Stock+Market",
        category: "business",
        author: "Sarah Johnson",
        date: "3 hours ago",
        authorInitial: "SJ",
        fullContent: "<p>Stock markets around the world reached all-time highs today as investors celebrated strong quarterly earnings reports and positive economic indicators. The rally was led by technology and financial sectors, with major indices gaining over 2% in trading.</p><h2>Market Analysis</h2><p>Analysts attribute the surge to growing consumer confidence, strong employment numbers, and easing inflation concerns. International markets also participated in the rally, with European and Asian exchanges posting significant gains.</p><p>Experts predict continued momentum as companies report strong revenue growth and maintain positive outlook for the coming year.</p>",
        tags: ["Markets", "Business", "Economy", "Finance"],
        views: "32.8K"
    },
    {
        id: 3,
        title: "Championship Team Wins Historic Victory",
        description: "In an thrilling match, the home team clinches their first championship title in 25 years with a stunning comeback.",
        image: "https://via.placeholder.com/900x400/f59e0b/fff?text=Sports+Championship",
        category: "sports",
        author: "Mike Wilson",
        date: "4 hours ago",
        authorInitial: "MW",
        fullContent: "<p>In an unforgettable display of athletic prowess and determination, the home team secured their first championship title in 25 years with a dramatic comeback victory. The team, which was trailing by 15 points at halftime, mounted an impressive offensive surge to claim the trophy.</p><h2>Match Highlights</h2><p>The turning point came in the third quarter when the team's star player delivered an exceptional performance, leading multiple scoring drives and defensive plays. The final moments were filled with tension as the opposing team had one last chance to win, but the home team's defense held strong.</p><p>This victory marks a significant milestone for the franchise and its dedicated fan base who have waited decades for this championship moment.</p>",
        tags: ["Sports", "Championship", "Athletic", "Victory"],
        views: "58.5K"
    },
    {
        id: 4,
        title: "New Health Guidelines Released",
        description: "Medical authorities release updated guidelines for healthy living with focus on mental health and wellness.",
        image: "https://via.placeholder.com/900x400/ec4899/fff?text=Health+Guidelines",
        category: "health",
        author: "Dr. Emily Brown",
        date: "5 hours ago",
        authorInitial: "EB",
        fullContent: "<p>Health authorities have released comprehensive new guidelines focused on promoting mental health and overall wellness. The guidelines emphasize the importance of balanced diet, regular exercise, and mental health awareness.</p><h2>Key Recommendations</h2><p>The updated guidelines recommend at least 150 minutes of moderate physical activity weekly, adequate sleep of 7-9 hours, and active stress management techniques. Mental health is now given equal importance to physical health in the new framework.</p><p>Healthcare providers worldwide are being encouraged to adopt these guidelines in their patient care programs and public health initiatives.</p>",
        tags: ["Health", "Wellness", "Guidelines", "Medical"],
        views: "28.3K"
    },
    {
        id: 5,
        title: "Blockbuster Movie Sets Box Office Records",
        description: "The highly anticipated film breaks opening weekend records, becoming the fastest film to reach $100 million.",
        image: "https://via.placeholder.com/900x400/8b5cf6/fff?text=Box+Office+Success",
        category: "entertainment",
        author: "Alex Turner",
        date: "6 hours ago",
        authorInitial: "AT",
        fullContent: "<p>A highly anticipated blockbuster film has shattered box office records, becoming the fastest movie ever to cross the $100 million mark. The film earned $150 million domestically in its opening weekend, surpassing previous records set by major franchise films.</p><h2>Record-Breaking Performance</h2><p>The film's success is attributed to its compelling storyline, stellar cast performances, and positive critical reviews. Audiences have given it an exceptional rating, with many calling it a modern masterpiece.</p><p>Industry analysts predict the film will continue its strong performance in the coming weeks, potentially becoming one of the highest-grossing films of the year.</p>",
        tags: ["Entertainment", "Movies", "Box Office", "Cinema"],
        views: "41.7K"
    },
    {
        id: 6,
        title: "Tech Giant Launches Revolutionary Product",
        description: "A major technology company unveils its latest innovation, promising to change how we interact with devices.",
        image: "https://via.placeholder.com/900x400/06b6d4/fff?text=Tech+Innovation",
        category: "technology",
        author: "Lisa Chen",
        date: "7 hours ago",
        authorInitial: "LC",
        fullContent: "<p>A leading technology company has announced its most ambitious product launch in recent years. The revolutionary device combines cutting-edge AI technology with intuitive user interface, promising to redefine consumer expectations for smart devices.</p><h2>Innovation Highlights</h2><p>The new product features advanced machine learning capabilities, seamless integration with existing ecosystems, and unprecedented processing power. Pre-orders have already exceeded initial projections by 300%.</p><p>The company plans to begin shipping units next month, with manufacturing already underway to meet the overwhelming demand from early adopters and technology enthusiasts.</p>",
        tags: ["Technology", "Innovation", "Product Launch", "Tech"],
        views: "52.1K"
    },
    {
        id: 7,
        title: "Economic Report Shows Strong Growth",
        description: "Quarterly economic report indicates robust growth in employment and consumer spending across all sectors.",
        image: "https://via.placeholder.com/900x400/14b8a6/fff?text=Economic+Growth",
        category: "business",
        author: "David Martinez",
        date: "8 hours ago",
        authorInitial: "DM",
        fullContent: "<p>The latest quarterly economic report reveals robust growth across multiple sectors of the economy. Employment numbers hit record highs, with businesses adding over 500,000 jobs in the quarter. Consumer spending also showed strong performance, indicating healthy economic activity.</p><h2>Economic Indicators</h2><p>GDP growth exceeded expectations at 3.8%, driven by strong exports, business investments, and consumer confidence. Unemployment rates reached historic lows, while wage growth continued to outpace inflation.</p><p>Economists remain optimistic about sustained economic growth, though they caution about potential headwinds from global factors. Government officials have praised the positive economic trajectory.</p>",
        tags: ["Economy", "Business", "Growth", "Employment"],
        views: "36.2K"
    },
    {
        id: 8,
        title: "Olympic Games Begin with Opening Ceremony",
        description: "Athletes from around the world gather for the opening ceremony of the international sporting event.",
        image: "https://via.placeholder.com/900x400/f97316/fff?text=Olympic+Games",
        category: "sports",
        author: "James Anderson",
        date: "9 hours ago",
        authorInitial: "JA",
        fullContent: "<p>The Olympic Games officially commenced with a spectacular opening ceremony that showcased the host nation's culture, history, and values. Athletes from over 200 countries participated in the parade of nations, marking the beginning of two weeks of world-class athletic competition.</p><h2>Ceremony Highlights</h2><p>The opening ceremony featured breathtaking performances, artistic displays, and a tribute to the Olympic spirit. World leaders and dignitaries attended the event, which was broadcast to billions of viewers worldwide.</p><p>Competition begins tomorrow across multiple venues, with athletes competing in dozens of sports. The host nation is expected to face fierce competition from traditionally strong countries in various disciplines.</p>",
        tags: ["Sports", "Olympics", "Athletics", "Competition"],
        views: "73.4K"
    }
];

let currentCategory = 'all';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    displayNews(newsData);
    setupEventListeners();
    setupArticleModal();
});

// Display news cards
function displayNews(articles) {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';

    articles.forEach(article => {
        const newsCard = createNewsCard(article);
        newsGrid.appendChild(newsCard);
    });
}

// Create a news card element
function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
    <img src="https://images.unsplash.com/photo-1764893216863-f4e2bbd62a5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D}" alt="${article.title}" class="news-card-image">
    <div class="news-card-content">
      <span class="news-card-category">${article.category.toUpperCase()}</span>
      <h3 class="news-card-title">${article.title}</h3>
      <p class="news-card-description">${article.description}</p>
      <div class="news-card-footer">
        <div class="news-card-author">
          <div class="news-card-author-avatar">${article.authorInitial}</div>
          <span>${article.author}</span>
        </div>
        <span class="news-card-time">${article.date}</span>
      </div>
    </div>
  `;




    card.addEventListener('click', () => openArticle(article));
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Category navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Filter news
            currentCategory = link.dataset.category;
            filterNews();
        });
    });

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Subscribe form
    document.getElementById('subscribeForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset();
    });

    // Trending items
    document.querySelectorAll('.trending-item').forEach(item => {
        item.addEventListener('click', () => {
            alert('Loading trending article...');
        });
    });
}

// Setup article modal
function setupArticleModal() {
    const modal = document.getElementById('articleModal');
    const closeBtn = document.getElementById('closeArticle');
    const overlay = document.querySelector('.article-modal-overlay');

    closeBtn.addEventListener('click', closeArticle);
    overlay.addEventListener('click', closeArticle);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeArticle();
        }
    });
}

// Open article modal
function openArticle(article) {
    const modal = document.getElementById('articleModal');

    // Set article data
    //   document.getElementById('articleImage').src = article.image;
    document.getElementById('articleImage').src = "https://images.unsplash.com/photo-1764893216863-f4e2bbd62a5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    document.getElementById('articleCategory').textContent = article.category.toUpperCase();
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleAuthor').textContent = article.author;
    document.getElementById('articleDate').textContent = article.date;
    document.getElementById('articleAuthorAvatar').textContent = article.authorInitial;
    document.getElementById('articleDescription').textContent = article.description;
    document.getElementById('articleContent').innerHTML = article.fullContent;

    // Set tags
    const tagsContainer = document.getElementById('articleTagsContainer');
    tagsContainer.innerHTML = '';
    article.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'article-tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    // Set related articles
    const relatedContainer = document.getElementById('relatedArticles');
    relatedContainer.innerHTML = '';
    const relatedArticles = newsData.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

    if (relatedArticles.length === 0) {
        relatedContainer.innerHTML = '<p style="color: var(--text-light);">No related articles found.</p>';
    } else {
        relatedArticles.forEach(relArticle => {
            const relatedItem = document.createElement('div');
            relatedItem.className = 'related-article-item';
            relatedItem.innerHTML = `
        <h4>${relArticle.title}</h4>
        <p>${relArticle.description.substring(0, 80)}...</p>
      `;
            relatedItem.addEventListener('click', () => {
                openArticle(relArticle);
                document.querySelector('.article-modal-content').scrollTop = 0;
            });
            relatedContainer.appendChild(relatedItem);
        });
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close article modal
function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Filter news by category
function filterNews() {
    if (currentCategory === 'all') {
        displayNews(newsData);
    } else {
        const filtered = newsData.filter(article => article.category === currentCategory);
        displayNews(filtered);
    }
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm.trim() === '') {
        filterNews();
        return;
    }

    const filtered = newsData.filter(article =>
        article.title.toLowerCase().includes(searchTerm) ||
        article.description.toLowerCase().includes(searchTerm) ||
        article.category.toLowerCase().includes(searchTerm)
    );

    displayNews(filtered);
}