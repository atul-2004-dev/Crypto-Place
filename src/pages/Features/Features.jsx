import React from 'react';
import './Feature.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose <span className="highlight">CryptoPlace?</span></h2>
      <p className="features-subtext">
        Empowering you with real-time data, advanced analytics, and a secure experience.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Crypto Market Rank</h3>
          <p>Track rankings of your favorite coins based on live market data and performance.</p>
        </div>

        <div className="feature-card">
          <h3>Current Price</h3>
          <p>Always stay updated with the latest crypto prices across global currencies.</p>
        </div>

        <div className="feature-card">
          <h3>Market Cap</h3>
          <p>See the total value of cryptocurrencies to measure market strength and stability.</p>
        </div>

        <div className="feature-card">
          <h3>24H High / Low</h3>
          <p>Analyze daily volatility with precise 24-hour high and low price data.</p>
        </div>

        <div className="feature-card">
          <h3>Secure & Private</h3>
          <p>Your data and transactions are protected with industry-standard encryption.</p>
        </div>

        <div className="feature-card">
          <h3>Optimized UI</h3>
          <p>Enjoy a fast, clean, and responsive user interface tailored for all devices.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
