import React, { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#1a202c',
        color: 'white',
        padding: '4rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Notification Popup */}
      {messageSent && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#38a169',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          Message sent successfully!
        </div>
      )}

      <div style={{ maxWidth: '800px', width: '100%', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Contact Us</h1>
        <p style={{ color: '#a0aec0', marginTop: '0.5rem' }}>
          We are here to help! Contact us for any support, questions, or collaboration opportunities.
        </p>
      </div>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'left',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Send Message</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            style={{
              padding: '0.8rem',
              border: 'none',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              outline: 'none',
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: '0.8rem',
              border: 'none',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              outline: 'none',
            }}
            required
          />
          <textarea
            placeholder="Type your message..."
            style={{
              padding: '0.8rem',
              border: 'none',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              height: '6rem',
              outline: 'none',
            }}
            required
          ></textarea>
          <button
            type="submit"
            style={{
              padding: '0.8rem',
              backgroundColor: '#2b6cb0',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2c5282')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2b6cb0')}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
