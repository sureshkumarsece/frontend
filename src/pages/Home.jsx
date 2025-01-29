import React from "react";

const Home = () => {
  return (
    <div
      style={{
        fontFamily: "'Inter', Arial, sans-serif",
        textAlign: "center",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        color: "white",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          width: "100%",
          padding: "120px 20px",
          background: "url('https://example.com/electronics-hero.jpg') no-repeat center center/cover",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            lineHeight: "1.2",
            marginBottom: "20px",
            color: "#00ffcc",
            textTransform: "uppercase",
          }}
        >
          Your Tech Destination
        </h1>
        <p
          style={{
            fontSize: "22px",
            maxWidth: "800px",
            margin: "auto",
            opacity: 0.9,
          }}
        >
          Explore the latest gadgets, smart devices, and unbeatable deals in one place.
        </p>
      </section>

      {/* Categories Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "80px 20px",
          flexWrap: "wrap",
          gap: "40px",
          background: "rgba(0, 0, 0, 0.2)",
          width: "100%",
        }}
      >
        {[
          {
            title: "Smartphones",
            desc: "Discover the latest flagship devices with cutting-edge technology.",
            icon: "📱",
          },
          {
            title: "Laptops",
            desc: "Find high-performance laptops for work, gaming, and creativity.",
            icon: "💻",
          },
          {
            title: "Wearables",
            desc: "Stay connected with smartwatches and fitness trackers.",
            icon: "⌚",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "40px 30px",
              borderRadius: "15px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s, background 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.background = "rgba(255, 255, 255, 0.1)";
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>{item.icon}</div>
            <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#00ffcc" }}>{item.title}</h2>
            <p style={{ fontSize: "18px", opacity: 0.9 }}>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
