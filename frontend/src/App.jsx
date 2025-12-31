import React from 'react';
import Plot from 'react-plotly.js';
// This line is what imports your scraped data from Python
import data from './processed_books.json'; 

function App() {
  // Mapping the data for the chart
  const titles = data.map(item => item.title.substring(0, 15) + "...");
  const prices = data.map(item => item.price_numeric);
  
  // Highlighting anomalies in RED (-1 is the code from Isolation Forest)
  const markerColors = data.map(item => item.anomaly_score === -1 ? '#ef4444' : '#3b82f6');

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        <h1 style={{ color: '#1e293b' }}>TrendPulse: Price Anomaly Detection</h1>
        <p style={{ color: '#64748b' }}>Project 4 - Scraped Data + Machine Learning (Isolation Forest)</p>
      </header>

      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <Plot
          data={[
            {
              x: titles,
              y: prices,
              type: 'bar',
              marker: { color: markerColors },
              text: data.map(item => `Full Title: ${item.title}<br>Rating: ${item.rating_numeric} Stars`),
              hoverinfo: 'text+y',
            },
          ]}
          layout={{
            title: 'Inventory Price Analysis',
            xaxis: { title: 'Product (Shortened Title)', tickangle: -45 },
            yaxis: { title: 'Price (£)' },
            autosize: true,
          }}
          useResizeHandler={true}
          style={{ width: "100%", height: "500px" }}
        />
      </div>

      <section style={{ marginTop: '30px', padding: '20px', backgroundColor: '#eef2ff', borderRadius: '8px' }}>
        <h3 style={{ color: '#3730a3' }}>Data Science Insights</h3>
        <ul style={{ color: '#1e1b4b' }}>
          <li><strong>Messy Data Handling:</strong> Cleaned scraped currency symbols (£) and converted text ratings to numeric scales.</li>
          <li><strong>Algorithm:</strong> Used <em>Isolation Forest</em> to detect price anomalies.</li>
          <li><strong>Results:</strong> Red bars indicate items the model flagged as outliers.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
