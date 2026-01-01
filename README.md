
---

# Project 4: TrendPulse - Price Anomaly Detector

## 🎯 Project Overview

This project fulfills the **Advanced Python** requirements for **Project 4**. It features a data pipeline that scrapes live e-commerce data, processes it using Machine Learning to identify statistical outliers, and visualizes the results in a React.js dashboard.

---

## 🛠️ Grading & Bonus Point Strategy (+40 Points)

| Category | Implementation Detail | Bonus Points |
| --- | --- | --- |
| **Dataset** | Scraped "Books to Scrape" using `BeautifulSoup4` with manual cleaning. | **+10** |
| **Analysis** | Implemented **Isolation Forest** for Anomaly Detection. | **+15** |
| **Visualization** | Developed a **React.js** dashboard using `react-plotly.js`. | **+15** |
| **Total Bonus** |  | **+40** |

---

## 🧹 Step-by-Step Data Cleaning Process

To satisfy the "Messy Data" requirement, the following pipeline was implemented in `analysis.py`:

1. **Currency Extraction:** The raw scraped price contained the "£" symbol (e.g., `£51.77`). I used string manipulation (`.replace('£', '')`) and type casting to convert these to `float` for mathematical analysis.
2. **Ordinal Encoding:** The website stores user ratings as text strings (e.g., "Three", "Four"). I created a custom mapping dictionary to convert these into a 1-5 integer scale.
3. **Anomaly Injection:** To test the robustness of the detection model, I manually injected an extreme price outlier into the first record to verify the model's identification capabilities.

---

## 🤖 Data Science Implementation

Instead of simple aggregations like mean or max, I utilized the **Isolation Forest** algorithm from `scikit-learn`:

* **Logic:** Isolation Forest is an unsupervised learning algorithm that identifies anomalies by isolating observations. Because anomalies are "few and different," they are easier to isolate than normal data points.
* **Feature Set:** The model analyzes the relationship between **Price** and **Rating** to find items that are priced inconsistently compared to their quality score.

---

## 💻 Technical Setup & Execution

### Prerequisites

* **Python 3.x:** `beautifulsoup4`, `pandas`, `scikit-learn`, `requests`.
* **Node.js & npm:** Required for the React dashboard.

### Running the Project

> **🚀 Note for Graders:**
> A pre-processed `processed_books.json` is already included in `frontend/src/`. You can skip the Python steps and run the **Frontend Launch** immediately to view the results.

1. **Backend Analysis (Optional):**
To refresh the data from the live web source:
```bash
# Install dependencies
pip install -r requirements.txt

# Run the scraper and ML model
python3 analysis.py

```


*Note: This generates a new `processed_books.json`. Ensure it is moved to `frontend/src/` if updated.*
2. **Frontend Launch:**
```bash
cd frontend
npm install
npm run dev

```


3. **View:** Open `http://localhost:5173/` to view the interactive anomaly detection chart.

---
