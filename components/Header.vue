<template>
<header>
<div class="logo">
  <img src="../static/sustech/logo_sustech_long.png" alt="Company Logo">
</div>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><NuxtLink to="/Dorm">Select Dorm</NuxtLink></li>
    <li><a href="/Contact">Contact</a></li>
    <!-- Add more navigation links as needed -->
  </ul>
</nav>
</header>
</template>

<style scoped>
/* Add styling for the header and logo here */
header {
  background-color: white;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  max-height: 50px; /* Adjust the height as needed */
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #333; /* Change the text color to a different color, e.g., black (#333) */
  font-weight: bold;
  font-size: 16px;
  font-family: "Roboto", sans-serif;

}
</style>
<script setup>
</script>
