import React, { useState, useEffect } from 'react';
import { Languages, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'es', name: 'Spanish' },
    { code: 'ar', name: 'Arabic' }
  ];

  useEffect(() => {
    // Initialize Google Translate
    const addGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,fr,pt,es,ar',
              autoDisplay: false,
            },
            'google_translate_element'
          );
        };
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addGoogleTranslateScript();
  }, []);

  const selectLanguage = (langName, langCode) => {
    setCurrentLang(langName);
    setIsOpen(false);

    // Trigger Google Translate
    const translateCombo = document.querySelector('.goog-te-combo');
    if (translateCombo) {
      translateCombo.value = langCode;
      translateCombo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="language-toggle-wrapper">
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="language-dropdown"
          >
            {languages.map((lang) => (
              <button 
                key={lang.code}
                onClick={() => selectLanguage(lang.name, lang.code)}
                className={`lang-option ${currentLang === lang.name ? 'active' : ''}`}
              >
                {lang.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lang-trigger-btn"
        aria-label="Change language"
      >
        <Languages size={20} />
        <span className="lang-label">{currentLang}</span>
        <ChevronUp size={16} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .language-toggle-wrapper {
          position: fixed;
          bottom: 30px;
          left: 30px;
          z-index: 9999;
        }

        /* Hide Google Translate UI elements for a clean look */
        .goog-te-banner-frame, 
        .goog-te-balloon-frame,
        .goog-tooltip,
        .goog-tooltip:hover,
        .goog-te-gadget-icon,
        .goog-te-gadget-simple span,
        #goog-gt-tt,
        .VIpgJd-ZVi9nd-ORHb-nS1RWf {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
        }

        .lang-trigger-btn {
          background: rgba(18, 18, 18, 0.95);
          backdrop-filter: blur(10px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1.2rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .lang-trigger-btn:hover {
          transform: translateY(-3px);
          background: #111;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .lang-label {
          min-width: 70px;
          text-align: left;
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .chevron-icon.rotate {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          bottom: calc(100% + 15px);
          left: 0;
          background: white;
          min-width: 180px;
          border-radius: 20px;
          padding: 0.8rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          border: 1px solid #f0f0f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .lang-option {
          width: 100%;
          text-align: left;
          padding: 0.8rem 1rem;
          border: none;
          background: transparent;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          color: #444;
          transition: all 0.2s ease;
          font-family: var(--font-headings);
        }

        .lang-option:hover {
          background: #f5f5f5;
          color: #000;
          padding-left: 1.5rem;
        }

        .lang-option.active {
          background: #f0f0f0;
          color: #000;
          font-weight: 800;
        }

        @media (max-width: 768px) {
          .language-toggle-wrapper {
            bottom: 20px;
            left: 20px;
          }
          .lang-label {
            display: none;
          }
          .lang-trigger-btn {
            padding: 0.8rem;
          }
        }
      `}} />
    </div>
  );
};

export default LanguageToggle;
