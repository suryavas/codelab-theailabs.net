# The AI Labs

**Domain:** [theailabs.net](https://theailabs.net)
**Description:** A professional site offering Local LLM and Home Automation consulting services.

## 📂 Project Structure

This project is separated into two parts:

*   **`frontend/`**: Contains the static website (HTML, CSS, JS). This is what the user sees.
*   **`backend/`**: Contains the Node.js server. This serves the site and handles API requests (like the Chatbot).

## 🚀 How to Run

### Option 1: Static (Simple)
If you just want to see the website design:
1.  Open the `frontend` folder.
2.  Double-click `index.html` to open it in your browser.

### Option 2: Full Stack (With Server)
If you want to run the backend API:
1.  Open your terminal in the root folder.
2.  Navigate to backend: `cd backend`
3.  Install dependencies: `npm install`
4.  Start the server: `npm start`
5.  Open your browser to: `http://localhost:3000`

## 🛠️ Configuration

*   **Contact Form:** Update the Formspree URL in `frontend/index.html` line 75.
*   **Chat Logic:** Currently set to "Mock Mode" in `frontend/js/script.js`. To use the backend API, uncomment the fetch logic in that file.

## 📄 License
(C) 2025 The AI Labs.