import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <p className="about-eyebrow">Introduction</p>
        <h2 className="about-title">Hello — I'm Mariella</h2>
        <p className="about-text">
          I'm a software developer focused on backend systems, data workflows,
          and building reliable, maintainable products. I enjoy turning complex
          problems into clear solutions and collaborating on projects that
          deliver real value. I'm available for freelance work and collaboration.
        </p>
        <div className="about-actions">
          <button className="about-cta">Learn more</button>
        </div>
      </div>

      <div className="about-visual">
        <div className="photo-frame">
          <div className="profile-photo">MJ</div>
        </div>
      </div>
    </section>
  );
}
