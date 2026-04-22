import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a href="https://wa.me/yourlink" target="_blank" rel="noopener noreferrer" className="wa-link">
        <MessageCircle size={30} fill="currentColor" />
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        .whatsapp-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1001;
        }

        .wa-link {
          background-color: #25d366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .wa-link:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            bottom: 20px;
            right: 20px;
          }
          .wa-link {
            width: 50px;
            height: 50px;
          }
        }
      `}} />
    </div>
  );
};

export default WhatsAppButton;
