
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, X, Send, Search, FileText, Rocket, 
  Handshake, GraduationCap, Compass, Download, ArrowRight,
  Bot, User, Sparkles, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { documents, programs, intents, quickActions } from '../data/assistantData';

const SmartAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hello! I am your AASU Assistant. How can I help you today?',
      isInitial: true
    }
  ]);
  const [suggestions, setSuggestions] = useState([]);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) return;

    const userMsg = { type: 'user', text: searchTerm };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setSuggestions([]);

    setTimeout(() => {
      processIntent(searchTerm.toLowerCase());
    }, 600);
  };

  const processIntent = (term) => {
    let results = {
      text: "I couldn't find a specific answer for that, but you can try searching for 'reports', 'programs', or 'about AASU'.",
      docs: [],
      progs: [],
      links: []
    };

    // 1. Check Intents
    const matchedIntent = intents.find(intent => 
      intent.keywords.some(kw => term.includes(kw))
    );

    if (matchedIntent) {
      results.text = matchedIntent.answer;
      results.links = matchedIntent.links;
    }

    // 2. Check Documents (if searching for reports or specific topics)
    if (term.includes('report') || term.includes('doc') || term.includes('policy') || term.includes('plan')) {
      const filteredDocs = documents.filter(doc => 
        doc.title.toLowerCase().includes(term.replace('report', '').trim()) ||
        doc.type.toLowerCase().includes(term)
      ).slice(0, 5);
      
      if (filteredDocs.length > 0) {
        results.text = matchedIntent ? matchedIntent.answer : "Here are the documents I found for you:";
        results.docs = filteredDocs;
      }
    }

    // 3. Check Programs
    if (term.includes('program') || term.includes('project') || term.includes('initiat')) {
      results.text = matchedIntent ? matchedIntent.answer : "Explore some of our current programs:";
      results.progs = programs;
    }

    const botMsg = { 
      type: 'bot', 
      text: results.text,
      docs: results.docs,
      progs: results.progs,
      links: results.links
    };
    
    setMessages(prev => [...prev, botMsg]);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    if (val.length > 1) {
      const allSuggestions = [
        ...intents.flatMap(i => i.keywords),
        ...documents.map(d => d.title),
        ...programs.map(p => p.title)
      ];
      const filtered = allSuggestions
        .filter(s => s.toLowerCase().includes(val.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        className="assistant-trigger"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="trigger-icon-wrap">
          {isOpen ? <X size={20} /> : <Sparkles size={20} className="sparkle-icon" />}
        </div>
        <span className="trigger-text">Ask AASU</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="assistant-window"
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            {/* Header */}
            <div className="assistant-header">
              <div className="header-info">
                <div className="bot-avatar">
                  <Bot size={20} />
                  <div className="online-indicator" />
                </div>
                <div>
                  <h3>AASU Smart Assistant</h3>
                  <span>Online | Ready to help</span>
                </div>
              </div>
              <button onClick={toggleChat} className="close-btn"><X size={20} /></button>
            </div>

            {/* Chat Body */}
            <div className="assistant-body">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message-wrapper ${msg.type}`}>
                  <div className="message-icon">
                    {msg.type === 'bot' ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className="message-content">
                    <p>{msg.text}</p>
                    
                    {/* Quick Actions (Only on initial message) */}
                    {msg.isInitial && (
                      <div className="quick-actions">
                        {quickActions.map((action, aIdx) => (
                          <button 
                            key={aIdx} 
                            onClick={() => handleSearch(action.query)}
                            className="action-pill"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Result: Documents */}
                    {msg.docs?.length > 0 && (
                      <div className="result-list docs">
                        {msg.docs.map((doc, dIdx) => (
                          <a key={dIdx} href={doc.link} target="_blank" rel="noopener noreferrer" className="result-card doc-card">
                            <div className="card-info">
                              <FileText size={16} className="text-primary" />
                              <div>
                                <span className="card-title">{doc.title}</span>
                                <span className="card-meta">{doc.year} • {doc.type}</span>
                              </div>
                            </div>
                            <Download size={16} />
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Result: Programs */}
                    {msg.progs?.length > 0 && (
                      <div className="result-list progs">
                        {msg.progs.map((prog, pIdx) => (
                          <Link key={pIdx} to={prog.link} onClick={toggleChat} className="result-card prog-card">
                            <div className="card-info">
                              <Rocket size={16} className="text-secondary" />
                              <div>
                                <span className="card-title">{prog.title}</span>
                                <span className="card-meta">{prog.status}</span>
                              </div>
                            </div>
                            <ChevronRight size={16} />
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Result: Links */}
                    {msg.links?.length > 0 && (
                      <div className="result-links">
                        {msg.links.map((link, lIdx) => (
                          <Link key={lIdx} to={link.url} onClick={toggleChat} className="deep-link">
                            {link.label} <ArrowRight size={14} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="assistant-footer">
              {suggestions.length > 0 && (
                <div className="suggestions-overlay">
                  {suggestions.map((s, sIdx) => (
                    <button key={sIdx} onClick={() => handleSearch(s)}>{s}</button>
                  ))}
                </div>
              )}
              <div className="input-container">
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="Ask AASU anything..." 
                  value={query}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
                />
                <button 
                  className={`send-btn ${query ? 'active' : ''}`}
                  onClick={() => handleSearch(query)}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .assistant-trigger {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: var(--primary-red);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1.2rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 10px 30px rgba(227, 30, 36, 0.2);
          cursor: pointer;
          z-index: 1000;
          font-weight: 700;
          font-family: var(--font-headings);
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .assistant-trigger:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(227, 30, 36, 0.3);
        }
        .trigger-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sparkle-icon { animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        .assistant-window {
          position: fixed;
          bottom: 6rem;
          right: 2rem;
          width: 400px;
          height: 600px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          z-index: 1001;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .assistant-header {
          background: var(--primary-red);
          color: white;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-info { display: flex; align-items: center; gap: 1rem; }
        .bot-avatar {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .online-indicator {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 12px;
          height: 12px;
          background: #4ade80;
          border: 2px solid var(--primary-red);
          border-radius: 50%;
        }
        .header-info h3 { font-size: 1rem; margin: 0; font-weight: 800; }
        .header-info span { font-size: 0.75rem; opacity: 0.8; }
        .close-btn { background: none; border: none; color: white; cursor: pointer; opacity: 0.7; transition: 0.3s; }
        .close-btn:hover { opacity: 1; }

        .assistant-body {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: #fdfdfd;
        }
        .message-wrapper { display: flex; gap: 0.8rem; max-width: 90%; }
        .message-wrapper.bot { align-self: flex-start; }
        .message-wrapper.user { align-self: flex-end; flex-direction: row-reverse; }
        
        .message-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .bot .message-icon { background: var(--primary-red); color: white; }
        .user .message-icon { background: #333; color: white; }

        .message-content {
          background: white;
          padding: 1rem;
          border-radius: 18px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          border: 1px solid #f0f0f0;
        }
        .bot .message-content { border-top-left-radius: 4px; color: #222; }
        .user .message-content { background: #333; color: white; border-top-right-radius: 4px; border-color: #333; }
        .message-content p { font-size: 0.95rem; line-height: 1.5; margin: 0; }

        .quick-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
        .action-pill {
          background: #f0f0f0;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }
        .action-pill:hover { background: var(--primary-red); color: white; }

        .result-list { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1rem; }
        .result-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem;
          background: #f9f9f9;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          border: 1px solid #eee;
          transition: 0.3s;
        }
        .result-card:hover { border-color: var(--primary-red); transform: translateX(5px); background: white; }
        .card-info { display: flex; align-items: center; gap: 0.8rem; }
        .card-title { display: block; font-size: 0.85rem; font-weight: 700; color: #111; }
        .card-meta { display: block; font-size: 0.7rem; color: #666; opacity: 1; }
        .result-card svg { color: #555; }
        .text-primary { color: var(--primary-red) !important; }
        .text-secondary { color: #8E24AA !important; }

        .result-links { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
        .deep-link {
          font-size: 0.85rem;
          color: var(--primary-red);
          text-decoration: none;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .deep-link:hover { text-decoration: underline; }

        .assistant-footer {
          padding: 1rem;
          background: white;
          border-top: 1px solid #eee;
          position: relative;
        }
        .input-container {
          display: flex;
          align-items: center;
          background: #f5f5f5;
          padding: 0.4rem;
          border-radius: 15px;
        }
        .input-container input {
          flex: 1;
          border: none;
          background: none;
          padding: 0.6rem 1rem;
          font-size: 0.95rem;
          outline: none;
        }
        .send-btn {
          width: 40px;
          height: 40px;
          background: #ccc;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }
        .send-btn.active { background: var(--primary-red); }

        .suggestions-overlay {
          position: absolute;
          bottom: 100%;
          left: 1rem;
          right: 1rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
          margin-bottom: 0.5rem;
        }
        .suggestions-overlay button {
          text-align: left;
          background: none;
          border: none;
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
          cursor: pointer;
          border-radius: 8px;
        }
        .suggestions-overlay button:hover { background: #f5f5f5; color: var(--primary-red); }

        @media (max-width: 480px) {
          .assistant-window {
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
          .assistant-trigger { 
            bottom: 20px; 
            right: 20px; 
            padding: 0.6rem 1rem;
            font-size: 0.75rem;
            gap: 0.5rem;
          }
          .trigger-icon-wrap {
            width: 30px;
            height: 30px;
          }
          .trigger-icon-wrap svg {
            width: 18px;
            height: 18px;
          }
        }
      `}} />
    </>
  );
};

export default SmartAssistant;
