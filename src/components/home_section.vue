<script>
import contact_button from "@/components/contact_button.vue";
export default {
  components: {contact_button},
}
</script>

<template>
  <section id="home" class="home-section d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 text-center">
          <!-- Заголовок -->
          <div class="mb-5">
            <h1 class="display-3 fw-bold text-light mb-4">
              Hello, I'm Alexander Rashidov
            </h1>
            <h2 class="h3 text-light opacity-75">
              Alexander Ivanovich is a frontend developer at Vue.
              HTML, CSS, JS, VUE stack.
            </h2>
          </div>

          <!-- Кнопка контакта -->
          <div class="mt-5">
            <contact_button class="btn-custom" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  min-height: 100vh;
  background: transparent;
  padding: 2rem 0;
}


h1 {
  font-family: "Corbel", serif !important;
  color: #e6f7ff !important;
  line-height: 1.2;
}

h2 {
  font-family: "Corbel", serif !important;
  color: #e6f7ff !important;
  font-weight: 400;
  line-height: 1.5;
}


@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem !important;
  }

  h2 {
    font-size: 1.25rem !important;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 2rem !important;
  }

  h2 {
    font-size: 1.1rem !important;
  }

  .home-section {
    padding: 1rem 0;
  }
}
</style>