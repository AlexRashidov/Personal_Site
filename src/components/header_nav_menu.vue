<script setup>

</script>

<template>
  <header>
    <nav>
      <ul class="navigation_menu">
        <li><a data-section="home" @click="$router.push({name: 'home', hash: '#home'})">Home</a></li>
        <li><a data-section="about" @click="$router.push({name: 'about', hash: '#about'})">About</a></li>
        <li><a data-section="resume" @click="$router.push({name: 'resume', hash: '#resume'})">Resume</a></li>
        <li><a data-section="contact" @click="$router.push({name: 'contact', hash: '#contact'})">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navigation_menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 15px 30px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  /* Glass effect */
  background: rgba(37, 16, 141, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);


  list-style: none;
  margin: 0;


  width: auto;
  max-width: 90vw;
  white-space: nowrap;
  overflow-x: hidden;
}

.navigation_menu li {
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation_menu a {
  color: #e6f7ff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  position: relative;
  font-family: "Corbel", serif;
  display: inline-block;
}

/* Медиа-запрос для мобильных устройств */
@media (max-width: 768px) {
  .navigation_menu {
    gap: 15px;
    padding: 10px 20px;
    max-width: 95vw;
    top: 10px;
  }

  .navigation_menu a {
    font-size: 14px;
    padding: 6px 12px;
  }
}
</style>