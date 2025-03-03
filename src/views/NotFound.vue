<template>
  <div class="not-found">
    <section :style="{ backgroundImage: `url(${PageNotFoundImage})`}"></section>
    <p>Oops! The page you're looking for does not exist.</p>
    <router-link to="/" class="back-button">🏠 Go Home</router-link>
  </div>
</template>

<script setup>
import PageNotFoundImage from '../assets/PageNotFoundImage.jpg'
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  max-width: 800px;
  height: 500px;
  margin: 40px auto;
  color: black;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
section{
  height: 300px;
  width: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
p {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 20px;
}

.back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
}

.back-button:hover {
  background-color: #2c3e50;
}

@media (max-width: 768px) {
  .not-found {
    max-width: 90%;
    padding: 30px;
  }
  
  p {
    font-size: 1rem;
  }

  .back-button {
    font-size: 0.9rem;
  }
}
</style>
