<script setup>

</script>

<template>
  <section id="about" class="about_section">
    <div class="about_content">
      <h2>About Me:</h2>
      <div class="about_grid">
        <div class="about_text">
          <p>Hello! I'm Alexander Rashidov, a Frontend Developer specialized in Vue.js.</p>
          <p>With expertise in modern web technologies, I create responsive, user-friendly applications.</p>
          <div class="skills">
            <h3>Skills:</h3>
            <ul>
              <li>Vue.js | Vue Router</li>
              <li>JavaScript</li>
              <li>HTML 5 & CSS3 / SCSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
        <div class="about_img">
          <img src="C:\Users\rashi\WebstormProjects\test\src\img\alexander_rashidov.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about_section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: #0a0a1a;
  font-family: "Corbel", serif;
}

.about_content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;

}

.about_content h2 {
  font-size: 45px;
  color: #e6f7ff;
  margin: 0;
  text-align: left;
  padding-left: 20px;


}

.about_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.about_text {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 100px;

}

.about_text p {
  color: #e6f7ff;
  font-size: 25px;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}

.skills {
  margin-top: 20px;
  padding: 25px;
  border: 2px solid #25108D;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  width: 100%;
}

.skills h3 {
  font-size: 24px;
  color: #e6f7ff;
  margin: 0 0 20px 0;
}

.skills ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skills li {
  background-color: #25108D;
  color: #e6f7ff;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skills li:hover {
  background-color: #3a1cb3;
  transform: translateY(-2px);
}

.about_img {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  height: 635px;
  width: 100%;
}

.about_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
</style>