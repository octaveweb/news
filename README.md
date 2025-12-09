# 📰 News Feed Application

A dynamic news feed web application built using JavaScript to fetch and display the latest news from the **NewsData.io** API. This project includes features like client-side data caching to minimize API calls, a featured top story card, category tags, and a detailed article modal view.

## 🚀 Live Demo
You can view the live application here:
[Click Here](https://octaveweb.github.io/news)

## ✨ Features

* **API Integration:** Fetches real-time news data using a custom API key.
* **Client-Side Caching:** Utilizes `localStorage` to cache news data for **30 minutes**, reducing API requests and improving load times.
* **Featured Top Story:** Highlights the most recent news item in a prominent card.
* **Dynamic News Grid:** Displays news articles in an organized grid layout.
* **Category Tags:** Automatically generates unique clickable tags based on the categories present in the fetched news data.
* **Article Modal:** A detailed, responsive modal view that appears when a news card is clicked, showing the full story title, description, source, and a link to the original article.
* **Fallback Content:** Provides a default image if an article is missing an image URL.

## 💻 Code Structure & Functions

The application's logic is encapsulated within several clear and purposeful JavaScript functions:

Here is your updated **README section for `getNewsData()`**, fully rewritten to match the **new sliding-expiry caching logic** in your code 👇

---

### 1. `getNewsData()`

* **Primary Function:** Handles retrieving news data either from cache or API.
* **Smart Sliding Cache Logic:**

  * Checks `localStorage` for:

    * Cached news data → `newsCache`
    * Saved timestamp → `newsCacheTime`
  * If cached data exists **and** the user has been active within the last **30 minutes**,
    it uses cached data and **refreshes the timestamp** to extend cache life.
  * If the data is missing or inactive for **30+ minutes**, it fetches fresh news from the
    NewsData.io API (`https://newsdata.io/api/1/latest`) and updates the cache.
* **Post Fetch / Cache Use:**

  * Calls the UI rendering functions:

    * `dataInsert(data)` → Displays news cards
    * `modalOpen(data)` → Enables modal view on click
    * `topCardData(data)` → Shows the featured news card
* **Goal:**
  Minimize API usage while always keeping news updated when the user returns after inactivity.




### 2. `newsFeed(data)`

* **Renders News Grid:** Iterates over the news `data` array and dynamically generates HTML for each news card.
    * The cards are appended to the `newsGrid` element.
    * It implements a simple title truncation (`.slice(0, 7)`) and uses a fallback image if necessary.
* **Generates Category Tags:**
    * Uses a `Set` to collect all **unique** categories from the news data.
    * Generates a list of `<a>` tags with a `#` prefix for each category and inserts them into the `tags` container.

### 3. `topCardData(data)`

* **Renders Featured Card:** Takes the first element (`data[0]`) from the news array.
* Generates the HTML content for the `featuredCard` element, displaying the main title, description, and a "Read Full Story" link.

### 4. `modalOpen(data)`

* **Handles Interactivity:** Attaches click event listeners to every `.news-card` element.
* **Displays Modal:** When a card is clicked, it shows the detailed `articleModal`.
* **Dynamic Content:** Populates the modal with the specific article's title, image, source, date, and description.
* **Interaction Handlers:**
    * Sets up the `closeArticle` button listener to close the modal.
    * Sets up a listener for the `article-modal-overlay` (clicking outside the modal) to close it.

## 🔑 API Key Note

The current code uses an API key (`xyz`) directly in the client-side JavaScript. For production applications, it is highly recommended to use an environment variable or a secure backend service to proxy API requests to protect your key.

## 🔧 Installation and Setup

1.  Clone or download the repository.
2.  Ensure you have an HTML structure with the following element IDs for the script to target:
    * `#newsGrid` (for the main news feed)
    * `#tags` (for category tags)
    * `#featuredCard` (for the top story)
    * `#articleModal` (for the news modal)
3.  Include the JavaScript file in your HTML.
4.  (Optional) Replace the placeholder API key with your own from [NewsData.io](https://newsdata.io) if needed.