import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import './Updates.css';

const POSTS = [
  {
    id: 'campaign-kickoff',
    title: 'Campaign Kickoff: Student Leaders Assembly in Southern Africa',
    category: 'Advocacy',
    date: 'Dec 14, 2021',
    author: 'AASU Secretariat',
    readTime: '3 min read',
    excerpt: 'Student representatives from across Southern and Central Africa convened to initiate regional lobbying and campaign efforts on digital inclusion.',
    image: '/assets/hty.jpg'
  },
  {
    id: 'lobbying-advocacy',
    title: 'Advocacy Action: Petition Submitted to ISPs for Free Student Data',
    category: 'Press Release',
    date: 'Jan 10, 2022',
    author: 'Campaign Media Committee',
    readTime: '4 min read',
    excerpt: 'Lobbying actions ramp up as student unions present a formal declaration demanding data subsidization and free portals for learning.',
    image: '/assets/z.jpg'
  },
  {
    id: 'policy-brief',
    title: 'Policy Brief: Digital Inequalities in Higher Education Post-COVID-19',
    category: 'Reports',
    date: 'Feb 05, 2022',
    author: 'OSISA Research Partner',
    readTime: '6 min read',
    excerpt: 'A comprehensive study highlighting structural bottlenecks in rural communities and the urgent need for internet cost elimination.',
    image: '/assets/min1.jpg'
  },
  {
    id: 'hello-world',
    title: 'Hello World! Launching the Digital Inclusion Campaign Web Portal',
    category: 'Press Release',
    date: 'Dec 14, 2021',
    author: 'System Admin',
    readTime: '1 min read',
    excerpt: 'Welcome to the official campaign hub for the Digital Inclusion Campaign. Follow us for active calls and campaign updates.',
    image: '/assets/aw.jpg'
  }
];

const CATEGORIES = ['All', 'Advocacy', 'Press Release', 'Reports'];

export const Updates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="updates-page fade-in">
      {/* Page Title Banner */}
      <div className="updates-banner">
        <div className="container">
          <h1 className="page-title">Updates & Press</h1>
          <p className="page-subtitle">
            Follow the latest stories, press releases, reports, and events from our digital rights campaigns.
          </p>
        </div>
      </div>

      <section className="section updates-list-section">
        <div className="container">
          {/* Filters Bar */}
          <div className="filters-bar glass">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                id="updates-search-input"
                type="text"
                placeholder="Search updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="category-filters">
              {CATEGORIES.map(cat => (
                <button
                  id={`filter-btn-${cat.toLowerCase().replace(' ', '-')}`}
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid-2 posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="card post-card">
                  <div className="post-image-wrapper">
                    <img src={post.image} alt={post.title} className="post-card-img" />
                    <span className="post-card-category">{post.category}</span>
                  </div>
                  
                  <div className="post-card-content">
                    <div className="post-card-meta">
                      <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                      <span className="meta-item"><User size={14} /> {post.author}</span>
                      <span className="meta-item"><Clock size={14} /> {post.readTime}</span>
                    </div>
                    
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    
                    <a href={`/updates/${post.id}`} className="read-more-link" onClick={(e) => e.preventDefault()}>
                      Read Article <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results text-center glass">
              <h3>No updates found</h3>
              <p>We couldn't find any articles matching your search query or filters.</p>
              <button 
                id="reset-filters-btn"
                className="btn btn-primary" 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
export default Updates;
