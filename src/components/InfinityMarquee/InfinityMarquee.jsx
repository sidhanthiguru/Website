import React from 'react';
import './InfinityMarquee.css';

const images = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", // Hatha yoga
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop", // Vinyasa flow
  "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=600&auto=format&fit=crop", // Meditation
  "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600&auto=format&fit=crop", // Corporate Yoga
  "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600&auto=format&fit=crop", // Yoga pose
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop"  // Mindfulness
];

export default function InfinityMarquee() {
  // Duplicate images multiple times for seamless infinite scrolling
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="infinity-marquee-container">
      <div className="infinity-marquee-track">
        {duplicatedImages.map((src, index) => (
          <div key={index} className={`marquee-item item-${index % images.length}`}>
            <img src={src} alt={`Yoga studio moment ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
