<script setup>

</script>

<template>
  <section id="about" class="about-section py-5">
    <!-- Bootstrap Container -->
    <div class="container">
      <!-- Заголовок -->
      <div class="row mb-5">
        <div class="col-12">
          <h2 class="display-4 fw-bold text-light mb-0 corbel-font">
            About Me:
          </h2>
        </div>
      </div>

      <!-- Основной контент -->
      <div class="row">
        <!-- Текстовая часть -->
        <div class="col-lg-6 col-md-12 mb-5 mb-lg-0">
          <div class="about-text">
            <p class="text-light fs-4 mb-4 corbel-font">
              Hello! I'm Alexander Rashidov, a Frontend Developer specialized in Vue.js.
            </p>
            <p class="text-light fs-4 mb-5 corbel-font">
              With expertise in modern web technologies, I create responsive, user-friendly applications.
            </p>

            <!-- Навыки -->
            <div class="skills-card p-4">
              <h3 class="text-light h3 mb-4 corbel-font">Skills:</h3>
              <div class="d-flex flex-wrap gap-3">
                <span class="badge bg-primary fs-6 py-3 px-4 skill-badge">
                  Vue.js | Vue Router
                </span>
                <span class="badge bg-primary fs-6 py-3 px-4 skill-badge">
                  JavaScript
                </span>
                <span class="badge bg-primary fs-6 py-3 px-4 skill-badge">
                  HTML 5 & CSS3 / SCSS
                </span>
                <span class="badge bg-primary fs-6 py-3 px-4 skill-badge">
                  Git & GitHub
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Изображение - выше и правее -->
        <div class="col-lg-6 col-md-12">
          <div class="about-image-wrapper">
            <img
                src="../img/alexander_rashidov.png"
                alt="Alexander Rashidov"
                class="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  min-height: 100vh;
  background-color: #0a0a1a;
  display: flex;
  align-items: center;
  font-family: "Corbel", serif;
}

.corbel-font {
  font-family: "Corbel", serif !important;
}

/* Навыки */
.skills-card {
  border: 2px solid #25108D;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.05);
}

.badge.bg-primary {
  background-color: #25108D !important;
  color: #e6f7ff !important;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 25px;
  cursor: default;
}

.skill-badge:hover {
  background-color: #3a1cb3 !important;
  transform: translateY(-2px);
}

/* Изображение - ВЫШЕ и ПРАВЕЕ */
.about-image-wrapper {
  display: flex;
  justify-content: flex-end; /* Выравниваем по правому краю */
  align-items: flex-start;    /* Выравниваем по верхнему краю */
  margin-top: -250px;          /* Поднимаем выше на 50px */
  padding-left: 60px;         /* Сдвигаем правее на 60px */
}

.about-image {
  width: 105%;               /* Немного увеличиваем ширину */
  max-width: 110%;           /* Максимальная ширина */
  height: auto;
  max-height: 750px;         /* Увеличиваем высоту */
  border-radius: 20px;
  object-fit: contain;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .about-image-wrapper {
    margin-top: -30px;
    padding-left: 40px;
  }

  .about-image {
    max-height: 700px;
  }
}

@media (max-width: 992px) {
  .about-image-wrapper {
    margin-top: 0;           /* На мобильных убираем поднятие */
    padding-left: 0;
    justify-content: center; /* Центрируем на мобильных */
    align-items: center;
  }

  .about-image {
    width: 100%;
    max-width: 100%;
    max-height: 550px;
  }

  .display-4 {
    font-size: 2.5rem !important;
  }

  .fs-4 {
    font-size: 1.25rem !important;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .about-image {
    max-height: 450px;
  }

  .display-4 {
    font-size: 2rem !important;
  }

  .fs-4 {
    font-size: 1.1rem !important;
  }

  .skill-badge {
    font-size: 0.9rem !important;
    padding: 0.5rem 1rem !important;
  }
}

@media (max-width: 576px) {
  .about-image {
    max-height: 350px;
  }

  .skills-card {
    padding: 1.5rem !important;
  }
}
</style>