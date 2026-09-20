import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1>About BlogVerse</h1>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
        Welcome to <strong>BlogVerse</strong>—a modern blogging platform built with a 
        decoupled architecture. Here you can write blogs, interact with other readers via likes and comments, and follow your favorite authors.
      </p>

      <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

      <h2>🚀 Core Features </h2>
      <ul style={{ lineHeight: '1.8', color: '#333' }}>
        <li><strong>Authentication:</strong> Secure signup and login system.</li>
        <li><strong>Blog Management:</strong> Create, edit, and publish blogs seamlessly.</li>
        <li><strong>Interactions:</strong> Express thoughts with real-time likes and comments.</li>
        <li><strong>Follow System:</strong> Connect with creators and keep track of their latest posts.</li>
      </ul>

      <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

      <h2>💻 Tech Stack & Architecture</h2>
      <p style={{ color: '#555', lineHeight: '1.6' }}>
        This app is structured using clean separation of concerns:
      </p>
      <ul style={{ lineHeight: '1.8', color: '#333' }}>
        <li><strong>Frontend:</strong> React.js, Custom Hooks, and Modular Service Layer (`api.js`)</li>
        <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
        <li><strong>Database:</strong> MongoDB</li>
      </ul>
    </div>
  );
};

export default About;