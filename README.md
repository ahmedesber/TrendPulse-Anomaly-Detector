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

* **Python:** `beautifulsoup4`, `pandas`, `scikit-learn`, `requests`.
* **Node.js:** `react-plotly.js`, `plotly.js`.

### Running the Project

1. **Backend:** Run `python3 analysis.py`. This generates `processed_books.json`.
2. **Frontend Setup:** Ensure `processed_books.json` is located in `frontend/src/`.
3. **Launch:** Navigate to the `frontend` directory and run:
```bash
npm run dev

```


4. **View:** Open `http://localhost:5173/` to view the interactive anomaly detection chart.

---
