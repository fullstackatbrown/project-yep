import React from 'react';
import Link from 'next/link'; 
import './ContentSection.css';

// THE INTERFACE: new parameters
interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  reverse?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  text, 
  reverse = false,
  // THE ARGUMENTS: This actually pulls them in to be used
  buttonText, 
  buttonLink  
}) => {
  return (
    <section className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="content-container">
        
        <div className="image-wrapper">
          <img src={imageSrc} alt={imageAlt} className="section-image" />
        </div>

        <div className="text-card">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{text}</p>
          
          {/* Code knows exactly what this button logic means! */}
          {buttonText && buttonLink && (
            <Link href={buttonLink} className="card-btn">
              {buttonText}
            </Link>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContentSection;