import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Why Bitcoin Dominates the Market',
    excerpt: 'Bitcoin has maintained its dominance due to first-mover advantage, institutional trust, and limited supply.',
    author: 'Satoshi Insights',
    date: 'May 15, 2025',
    link: '#'
  },
  {
    title: 'Top 5 Altcoins to Watch in 2025',
    excerpt: 'Explore altcoins gaining momentum in 2025 based on market cap growth, ecosystem strength, and adoption.',
    author: 'CryptoVision',
    date: 'May 22, 2025',
    link: '#'
  },
  {
    title: 'How to Read Crypto Charts Like a Pro',
    excerpt: 'Master the art of candlestick patterns, RSI, MACD, and more to trade smarter.',
    author: 'Chart Mastery',
    date: 'May 10, 2025',
    link: '#'
  },
  {
    title: 'DeFi: The Future of Finance?',
    excerpt: 'A deep dive into decentralized finance protocols and how they are reshaping global finance.',
    author: 'DeFi Watch',
    date: 'April 30, 2025',
    link: '#'
  },
  {
    title: 'Regulations in Crypto: What You Need to Know',
    excerpt: 'New global regulations are coming—what do they mean for investors and builders?',
    author: 'Crypto Law Daily',
    date: 'April 25, 2025',
    link: '#'
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <h2>Latest Insights</h2>
      <p className="blog-intro">Stay updated with the latest trends, analysis, and news from the world of cryptocurrencies and blockchain technology.</p>
      
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p className="blog-date">📅 {post.date} | ✍️ {post.author}</p>
            <p>{post.excerpt}</p>
            <a href={post.link}>Read Full Article →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
