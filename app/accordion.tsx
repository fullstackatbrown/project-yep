import React, { useState, useRef } from 'react';

const Accordion = ({ title, content }: { title: any, content: any }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="accordion-item">
      <div ref={contentRef} className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
      </div>
      <div
        ref={contentRef}
        className={`accordion-content-container ${isActive ? 'active' : ''}`}
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="accordion-content" style={{
          maxHeight: '500px',
        }}>
          {content}
        </div>
      </div>
    </div>
  );
};


export default Accordion;