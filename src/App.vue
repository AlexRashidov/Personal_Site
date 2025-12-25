<template>
  <div class="app-container">
    <header_nav_menu/>
    <home_section ref="homeSection"/>
    <about_section ref="aboutSection"/>
    <resume_section ref="resumeSection"/>
    <footer_contact ref="footerContact"/>
  </div>
</template>

<script>
import Header_nav_menu from "@/components/header_nav_menu.vue";
import Home_section from "@/components/home_section.vue";
import About_section from "@/components/about_section.vue";
import Resume_section from "@/components/resume_section.vue";
import Footer_contact from "@/components/footer_contact.vue";

export default {
  components: {Footer_contact, Resume_section, About_section, Home_section, Header_nav_menu},
  watch:{
    '$route'(to){
      this.scrollToSection();
    }
  },
  mounted(){
    this.scrollToSection();
  },
  methods: {
    scrollToSection(){
      const hash = this.$route.hash;
      if(hash){
        const sectionId = hash.replace("#","");
        this.scrollToElement(sectionId);
      }
    },
    scrollToElement(elementId){
      const element = document.getElementById(elementId);
      if(element){
        setTimeout(()=>{
          element.scrollIntoView({behavior: "smooth"});
        }, 100);
      }
    }
  }
}
</script>

<style scoped>
:global(body) {
  margin: 0;
  padding: 0;
  background:
      radial-gradient(circle at 20% 50%, rgba(100, 100, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 100, 100, 0.1) 0%, transparent 50%),
      #1a1a2e;
}

*{
  padding: 0;
  margin: 0;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  overflow-x: hidden;
}

html, body {
  overflow-x: hidden; /* убирает горизонтальный скролл */
  max-width: 100vw;
  width: 100%;
}

.app-container{
  background-color: rgb(0, 0, 0, 0.65);
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  font-family:"Corbel",serif;
  overflow-x: hidden;
  position: relative;
}

</style>