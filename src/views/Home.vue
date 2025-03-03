<template>
  <div class="home">
    <h1>Welcome to Our Job Portal</h1>
    <p>
      Your career journey starts here! Explore thousands of job opportunities
      across various industries.
    </p>

    <div class="features">
      <div class="feature-card">
        <h3>🔍 Job Search Made Easy</h3>
        <p>
          Find jobs that match your skills and experience with our smart search
          and filters.
        </p>
      </div>
      <div class="feature-card">
        <h3>💼 Top Companies Hiring</h3>
        <p>
          Get hired by leading companies in tech, design, marketing, and more.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home {
  text-align: center;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  max-width: 800px;
  height: auto;
  margin: 40px auto;
  color: black;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
  word-break: break-word;
  white-space: normal;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.feature-card {
  background: white;
  padding: 17px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}

h3 {
  font-size: 1.5rem;
  color: #3498db;
}

@media (max-width: 768px) {
  .home {
    max-width: 90%;
    padding: 30px;
  }

  .features {
    flex-direction: column;
  }

  .feature-card {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.2;
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: center;
  }

  p {
    font-size: 1rem;
  }
}
</style>
