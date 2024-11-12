import React from 'react';

const PreviewWrapper = ({ children }) => {
  const watermarkStyle = {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      rgba(150, 150, 150, 0.1),
      rgba(150, 150, 150, 0.1) 20px,
      transparent 20px,
      transparent 40px
    )`,
  };

  const watermarkText = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 50,
  };

  const watermarkItem = {
    transform: 'rotate(-45deg)',
    color: 'rgba(100, 100, 100, 0.1)',
    fontSize: '24px',
    padding: '20px',
    userSelect: 'none',
  };

  const previewBanner = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    zIndex: 1000,
    fontSize: '14px',
  };

  const contactInfo = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    zIndex: 1000,
    fontSize: '14px',
  };

  // Create a grid of watermarks
  const watermarkGrid = [];
  for (let i = 0; i < 100; i++) {
    watermarkGrid.push(
      <div key={i} style={watermarkItem}>
        Preview Mode
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Preview banner */}
      <div style={previewBanner}>
        Preview Mode
      </div>

      {/* Contact information */}
      <div style={contactInfo}>
        Contact: eshangunathilaka10@gmail.com
      </div>

      {/* Watermark overlay */}
      <div style={watermarkText}>
        {watermarkGrid}
      </div>

      {/* Main content with diagonal pattern */}
      <div style={watermarkStyle} className="min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default PreviewWrapper;