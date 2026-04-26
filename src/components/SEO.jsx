import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    const baseTitle = "AASU - All-Africa Students Union";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "The principal continental body representing the voice of 170 million African students.");
    }

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title || baseTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || "The principal continental body representing the voice of 170 million African students.");

  }, [title, description, location]);

  return null;
};

export default SEO;
