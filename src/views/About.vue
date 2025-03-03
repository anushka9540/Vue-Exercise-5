<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      Welcome to our job portal, where we connect talented professionals with
      top companies worldwide. Our mission is to help job seekers find their
      dream careers.
    </p>

    <div class="about-content">
      <div class="about-card">
        <h3>🌟 Why Choose Us?</h3>
        <p>
          We provide a seamless job search experience with advanced filtering,
          real-time job alerts, and AI-powered recommendations.
        </p>
      </div>

      <div class="about-card">
        <h3>💼 Connecting Talent with Opportunities</h3>
        <p>
          From startups to Fortune 500 companies, we bridge the gap between
          businesses and skilled professionals across various industries.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about {
  text-align: center;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  max-width: 800px;
  margin: 40px auto;
  color: black;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.about-card {
  background: white;
  padding: 8.5px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}

h3 {
  font-size: 1.5rem;
  color: #3498db;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about {
    max-width: 90%;
    padding: 30px;
  }

  .about-content {
    flex-direction: column;
  }

  .about-card {
    padding: 15px;
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
