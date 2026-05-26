import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image, url }) => {
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

    // Update Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || "AASU, All-Africa Students Union, African Students, Student Rights, African Education, Pan-Africanism, Student Leadership");
    }

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title || baseTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || "The principal continental body representing the voice of 170 million African students.");

    // Update OG Image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image || "/NEW LOGO [AASU] 2022 (T1).jpg");

    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url || `https://aasuonline.org${location.pathname}`);

  }, [title, description, keywords, image, url, location]);

  return null;
};

export default SEO;

