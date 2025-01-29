import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Gadget Gear!</h1>
      <p style={styles.subtitle}>Your one-stop destination for innovative gadgets and smart technology.</p>
      
      {/* Hero Section with GIF */}
      <div style={styles.heroSection}>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnRqcGVoY2gxYXA3MzQ5MHRraXkxdW9jNHQ3YTZxbnhxcndlYzE4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5UxKuKlPlTqpR63Qws/giphy.gif"
          alt="Gadget Gear Hero"
          style={styles.heroImage}
        />
      </div>

      <section style={styles.section}>
        <h2 style={styles.heading}>Gadget Gear Store</h2>
        <p style={styles.description}>
          Our mission is to bring cutting-edge gadgets to your fingertips, ensuring quality, innovation, and accessibility in one place.
        </p>
        
        {/* Categories Section */}
        <div style={styles.categories}>
          {/* Home Appliances */}
          <div style={styles.categoryBox}>
            <h3 style={styles.categoryTitle}>Home Appliances</h3>
            <img
              src="https://www.goldmedalindia.com/blog/wp-content/uploads/2023/05/Which-home-appliances-use-the-most-electricity-new.jpg"
              alt="Home Appliances"
              style={styles.categoryImage}
            />
          </div>

          {/* Electronics */}
          <div style={styles.categoryBox}>
            <h3 style={styles.categoryTitle}>Electronics</h3>
            <img
              src="https://rukminim2.flixcart.com/image/750/900/xif0q/watch/t/b/j/children-kids-digital-watches-sports-square-electronic-led-watch-original-imagtr5qaaagffyh.jpeg?q=20&crop=false"
              alt="Electronics"
              style={styles.categoryImage}
            />
          </div>

          {/* Grooming Products */}
          <div style={styles.categoryBox}>
            <h3 style={styles.categoryTitle}>Grooming Products</h3>
            <img
              src="https://vgrofficial.in/cdn/shop/products/1-13-1.webp?v=1678783810&width=1200"
              alt="Grooming Products"
              style={styles.categoryImage}
            />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>What Makes Us Unique?</h2>
        <ul style={styles.featuresList}>
          <li style={styles.featureItem}><strong>Exclusive Products</strong>: We source and curate the best tech gadgets from around the world.</li>
          <li style={styles.featureItem}><strong>Transparency</strong>: Real product reviews, images, and detailed descriptions—what you see is what you get.</li>
          <li style={styles.featureItem}><strong>Customer Satisfaction</strong>: Fast shipping, hassle-free returns, and 24/7 support to enhance your experience.</li>
        </ul>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7pHMNFD_ARrbxcLKB7QS1xe9HK-OtMDrKg&s"
          alt="Unique Gadgets"
          style={styles.sectionImage}
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Corporate Gifting</h2>
        <p style={styles.description}>
          Looking for personalized corporate gifts? We offer tailored solutions for brands, events, and businesses.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnt-R6h4_IA0rLguOKddmJSuAbbGLqBbwanQ&s"
          alt="Corporate Gifting"
          style={styles.sectionImage}
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Meet Our Team</h2>
        <p style={styles.description}>
          Founded by passionate tech enthusiasts, our dedicated team ensures a seamless shopping experience.
        </p>
      </section>

      <footer style={styles.footer}>
        <p style={styles.contact}>Contact us: <a href="mailto:support@gadgetgear.com" style={styles.link}>support@gadgetgear.com</a></p>
        <p style={styles.socialMedia}>Follow us on social media: <a href="https://www.instagram.com/GadgetGearOfficial" style={styles.link}>@GadgetGearOfficial</a></p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px',
  },
  heroSection: {
    marginBottom: '40px',
  },
  heroImage: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '40px',
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '15px',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '15px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  featuresList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '18px',
    color: '#555',
    textAlign: 'left',
    maxWidth: '800px',
    margin: '0 auto',
  },
  featureItem: {
    marginBottom: '10px',
  },
  sectionImage: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  categoryBox: {
    width: '32%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  categoryImage: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    marginTop: '40px',
    fontSize: '16px',
    color: '#555',
  },
  contact: {
    fontSize: '18px',
    color: '#333',
  },
  socialMedia: {
    fontSize: '18px',
    color: '#333',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default About;
