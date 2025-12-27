<script setup>
// Роуты остаются без изменений
</script>

<template>
  <header>
    <!-- Bootstrap Navbar с твоим фоном -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <!-- Логотип/бренд (опционально) -->
        <a class="navbar-brand" href="#">
          <span style="color: #e6f7ff; font-family: 'Corbel', serif;">Alexander Rashidov</span>
        </a>

        <!-- Кнопка для мобильного меню -->
        <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Навигационное меню -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                  class="nav-link custom-nav-link"
                  data-section="home"
                  @click="$router.push({name: 'home', hash: '#home'})"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                  class="nav-link custom-nav-link"
                  data-section="about"
                  @click="$router.push({name: 'about', hash: '#about'})"
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                  class="nav-link custom-nav-link"
                  data-section="resume"
                  @click="$router.push({name: 'resume', hash: '#resume'})"
              >
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a
                  class="nav-link custom-nav-link"
                  data-section="contact"
                  @click="$router.push({name: 'contact', hash: '#contact'})"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

.navbar {
  background: rgba(37, 16, 141, 0.15) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin-top: 20px;
  padding: 10px 30px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

/* Кастомные ссылки с твоим стилем */
.custom-nav-link {
  color: #e6f7ff !important;
  text-decoration: none !important;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 12px !important;
  border-radius: 20px;
  font-family: "Corbel", serif !important;
  background: transparent !important;
  border: none !important;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease !important;
}

.custom-nav-link:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1) !important;
  transform: translateY(-1px);
}

.custom-nav-link.active {
  color: white !important;
  background: rgba(255, 255, 255, 0.15) !important;
}

/* Кастомная кнопка меню */
.custom-toggler {
  border-color: rgba(230, 247, 255, 0.3) !important;
  padding: 4px 8px !important;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(230, 247, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

/* Бренд */
.navbar-brand {
  color: #e6f7ff !important;
  font-family: "Corbel", serif !important;
  font-weight: 600;
  padding: 0 !important;
  margin-right: 30px;
}

/* Мобильная версия */
@media (max-width: 992px) {
  .navbar {
    margin-top: 10px;
    padding: 10px 20px !important;
    max-width: 95%;
  }

  .navbar-collapse {
    background: rgba(37, 16, 141, 0.2);
    border-radius: 15px;
    padding: 15px;
    margin-top: 10px;
    text-align: center;
  }

  .custom-nav-link {
    margin: 8px 0 !important;
    display: inline-block;
  }

  .navbar-brand {
    margin-right: 0;
  }
}

/* Для очень маленьких экранов */
@media (max-width: 576px) {
  .navbar {
    padding: 8px 15px !important;
  }

  .custom-nav-link {
    font-size: 14px;
    padding: 5px 10px !important;
  }
}
</style>