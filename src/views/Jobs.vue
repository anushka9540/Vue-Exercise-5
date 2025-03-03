<template>
  <div class="jobs">
    <h1>Job Listings</h1>
    <p class="job-intro">
      Browse the latest job openings and kickstart your career with top
      companies.
    </p>

    <div class="jobs-container">
      <div v-for="job in jobs" :key="job.id" class="job-card">
        <router-link :to="`/jobs/${job.id}`" class="job-title">
          {{ job.title }}
        </router-link>
      </div>
    </div>
  </div>

  <router-view :jobs="jobs" />
</template>

<script setup>
import { jobs } from './jobData/jobData.js'; 
</script>

<style scoped>
.jobs {
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
}

.job-intro {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.jobs-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.job-card {
  height: 80px;
  background: white;
  padding: 18px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}

.job-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #3498db;
  transition: 0.3s;
}

.job-title:hover {
  color: #e74c3c;
}

.job-details {
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .jobs {
    max-width: 90%;
    padding: 30px;
  }

  .jobs-container {
    flex-direction: column;
  }

  .job-card {
    padding: 15px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .job-intro {
    font-size: 1rem;
  }
}
</style>
