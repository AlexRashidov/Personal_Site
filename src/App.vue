
<template>
  <div class="app-container">
    <header_nav_menu/>
    <home_section ref="homeSection"/>
    <about_section ref="aboutSection"/>
    <resume_section ref="resumeSection"/>
    <footer_contact ref="footerContact"/>
  </div>
</template>

<script >
import Header_nav_menu from "@/components/header_nav_menu.vue";
import Home_section from "@/components/home_section.vue";
import About_section from "@/components/about_section.vue";
import Resume_section from "@/components/resume_section.vue";
import Footer_contact from "@/components/footer_contact.vue";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
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

<style >

body {
  background:
      radial-gradient(circle at 20% 50%, rgba(100, 100, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 100, 100, 0.1) 0%, transparent 50%),
      #1a1a2e !important;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Corbel', serif;
}

.app-container {
  min-height: 100vh;
  position: relative;
  background-color: rgb(0, 0, 0, 0.65);

}

.content {
  padding-top: 120px; /* Чтобы контент не заезжал под фиксированную навигацию */
  padding: 20px;
}

</style>