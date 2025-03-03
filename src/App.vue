<template>
  <nav class="navBar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/jobs" class="nav-link">Jobs</router-link>
  </nav>
  <router-view />
</template>

<script setup></script>

<style scoped>
.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.3s;
}

.nav-link:hover {
  color: #3498db;
}

.navBar {
  display: flex;
  width: 890px;
  justify-content: space-evenly;
  padding: 15px 0;
  background: #333;
  margin-top: 10px;
}

nav a.router-link-exact-active {
  color: #3498db;
}

@media (max-width: 768px) {
  .home,
  .about,
  .jobs,
  .job-detail {
    padding: 30px;
    max-width: 80%;
    height: auto;
  }

  h3 {
    font-size: 26px;
  }

  p {
    font-size: 16px;
  }

  .job-card {
    max-width: 90%;
    padding: 15px;
  }

  .job-title {
    font-size: 1.2rem;
  }

  nav {
    width: 100%;
    flex-direction: row;
    gap: 70px;
    align-items: center;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
