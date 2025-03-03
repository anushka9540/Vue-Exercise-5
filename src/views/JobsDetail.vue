<template>
  <div class="job-detail">
    <h1>{{ jobTitle }}</h1>
    <p class="job-id">Job ID: {{ jobId }}</p>
    <p class="job-description">{{ jobDetails }}</p>
  
    <router-link to="/jobs" class="back-button">← Back to Job Listings</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const jobId = computed(() => route.params.id);

const jobs = [
  {
    id: 1,
    title: 'UX Designer',
    details:
      'A UX (User Experience) Designer focuses on enhancing user satisfaction by improving the usability, accessibility, and interaction of a product.'
  },
  {
    id: 2,
    title: 'Web Developer',
    details:
      'A Web Developer builds and maintains websites and web applications, ensuring functionality, performance, and responsiveness.'
  },
  {
    id: 3,
    title: 'Node.js Developer',
    details:
      'A Node.js Developer specializes in backend development using Node.js to build scalable and high-performance web applications.'
  }
];

const job = computed(() =>
  jobs.find((job) => job.id === Number(jobId.value))
);

const jobTitle = computed(() => job.value?.title || 'Job Not Found');
const jobDetails = computed(
  () => job.value?.details || 'The job you are looking for does not exist.'
);

</script>

<style scoped>
.job-detail {
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
  text-decoration: underline;
}

.job-id {
  font-size: 1.5rem;
  color: #0e296f;
  margin-bottom: 10px;
  margin-top: 30px;
}

.job-description {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
}

.back-button:hover {
  background-color: #e74c3c;
}

@media (max-width: 768px) {
  .job-detail {
    max-width: 90%;
    padding: 30px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .job-id {
    font-size: 1rem;
  }

  .job-description {
    font-size: 1rem;
  }
}
</style>
