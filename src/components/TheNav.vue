<template>
  <nav class="navbar">
    <!-- Home Link with JetBlue Plane Image -->
    <router-link to="/" class="nav-logo">
      <img src="/public/image/Jetblue1.jpg" alt="JetBlue Logo" />
    </router-link>

    <!-- Navigation Links -->
    <div class="nav-links">
      <router-link to="/team-managers">Team Managers</router-link>
      <router-link to="/coaching">Coaching</router-link>
    </div>
  </nav>
</template>

<script setup>
// No need for complex setup; this is a simple component
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00539f; /* JetBlue Blue */
  padding: 10px 20px;
}

.nav-logo img {
  height: 70px; /* Increase the height for more visibility */
  width: 150px; /* Maintain the aspect ratio */
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
