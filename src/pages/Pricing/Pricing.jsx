import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Choose Your Plan</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$0/month</p>
          <ul>
            <li>Live Crypto Prices</li>
            <li>Top 10 Coins</li>
            <li>Email Support</li>
          </ul>
        </div>

        <div className="pricing-card featured">
          <h3>Pro</h3>
          <p className="price">$29/month</p>
          <ul>
            <li>All Market Data</li>
            <li>Advanced Charts</li>
            <li>Priority Support</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>Custom APIs</li>
            <li>White Labeling</li>
            <li>Dedicated Manager</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
