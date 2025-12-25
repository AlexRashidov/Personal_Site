<script setup>

</script>

<template>
  <section id = "home" class = "home_section">
    <div class="content">
      <div class="full_name">
        <p>Hello, I`m Alexander Rashidov</p>
        <p>Alexander Ivanovich is a frontend developer at Vue. HTML, CSS, JS, VUE stack.</p>
      </div>
      <div class="download">
        <button class="download_button">Download CV</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download{
  margin-top: 30px;
  padding-right: 20px;
  display: flex;
  justify-content: center;

}

.download_button {
  font-family: "Corbel",serif;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 12px 30px;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  width: 220px;

  /* Градиент для текста */
  background: linear-gradient(45deg, #891BAD, #1F108B);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.download_button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 25px;
  background: linear-gradient(45deg, #891BAD, #8b5cf6, #1F108B) border-box;
  -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  z-index: -1;
}

.home_section{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.full_name{
  font-size: 50px;
  font-family: "Corbel",serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:  #e6f7ff;
}
.full_name p:first-child{
  align-self: center;
  padding-left: 0;
}
.full_name p:nth-child(2){
  font-size: 25px;
}
</style>