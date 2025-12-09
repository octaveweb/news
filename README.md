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

### 1. `getNewsData()`

* **Primary Function:** Orchestrates the data fetching process.
* **Caching Logic:**
    * Checks `localStorage` for cached news data (`newsCache`) and its timestamp (`newsCacheTime`).
    * If the cache is less than **30 minutes** old, it uses the cached data.
    * If the cache is expired or non-existent, it fetches fresh data from the NewsData.io API (`https://newsdata.io/api/1/latest`).
* **Post-Fetch:** Stores the new data and current timestamp in `localStorage`.
* **Data Flow:** Calls `dataInsert()`, `topCardData()`, and `modalOpen()` with the retrieved data.

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

The current code uses an API key (`pub_9eb027e16d5249ff921c4d8bd079be3d`) directly in the client-side JavaScript. For production applications, it is highly recommended to use an environment variable or a secure backend service to proxy API requests to protect your key.

## 🔧 Installation and Setup

1.  Clone or download the repository.
2.  Ensure you have an HTML structure with the following element IDs for the script to target:
    * `#newsGrid` (for the main news feed)
    * `#tags` (for category tags)
    * `#featuredCard` (for the top story)
    * `#articleModal` (for the news modal)
3.  Include the JavaScript file in your HTML.
4.  (Optional) Replace the placeholder API key with your own from [NewsData.io](https://newsdata.io) if needed.