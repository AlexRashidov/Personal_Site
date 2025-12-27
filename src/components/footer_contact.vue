<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigate = (name) => {
  router.push({ name, hash: `#${name}` })
}
</script>

<template>
  <footer id="contact" class="footer pt-5">
    <!-- Основной контейнер -->
    <div class="container">
      <div class="row g-4 g-lg-5 mb-5">
        <!-- Контактная информация -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-contact">
            <h3 class="footer-title mb-4">Get in Touch</h3>

            <!-- Email -->
            <div class="contact-item d-flex align-items-start mb-4">
              <div class="contact-icon me-3">
                <img class="social-icon" src="../img/email.png" alt="Email">
              </div>
              <div class="contact-info">
                <span class="contact-label d-block mb-1">Email</span>
                <a href="mailto:rashidov.sasha@yandex.ru" class="contact-link">
                  rashidov.sasha@yandex.ru
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="contact-item d-flex align-items-start mb-4">
              <div class="contact-icon me-3">
                <img class="social-icon" src="../img/phone.png" alt="Phone">
              </div>
              <div class="contact-info">
                <span class="contact-label d-block mb-1">Phone</span>
                <a href="tel:+79234422115" class="contact-link">
                  +7 923-442-21-15
                </a>
              </div>
            </div>

            <!-- Location -->
            <div class="contact-item d-flex align-items-start">
              <div class="contact-icon me-3">
                <img class="social-icon" src="../img/location.png" alt="Location">
              </div>
              <div class="contact-info">
                <span class="contact-label d-block mb-1">Location</span>
                <span class="contact-text">Tomsk, Russia</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Социальные сети -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-social">
            <h3 class="footer-title mb-4">Follow Me</h3>
            <div class="social-links d-flex gap-3">
              <!-- GitHub -->
              <a
                  href="https://github.com/AlexRashidov"
                  class="social-link d-flex align-items-center justify-content-center"
                  aria-label="GitHub"
                  target="_blank"
              >
                <img class="social-icon" src="../img/github.png" alt="GitHub">
              </a>

              <!-- Telegram -->
              <a
                  href="https://t.me/fonvi1"
                  class="social-link d-flex align-items-center justify-content-center"
                  aria-label="Telegram"
                  target="_blank"
              >
                <img class="social-icon" src="../img/telegram.png" alt="Telegram">
              </a>
            </div>
          </div>
        </div>

        <!-- Быстрые ссылки -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-links">
            <h3 class="footer-title mb-4">Quick Links</h3>
            <ul class="links-list list-unstyled">
              <li class="mb-3">
                <a
                    href="#"
                    class="footer-link text-decoration-none"
                    @click.prevent="navigate('home')"
                >
                  Home
                </a>
              </li>
              <li class="mb-3">
                <a
                    href="#"
                    class="footer-link text-decoration-none"
                    @click.prevent="navigate('about')"
                >
                  About
                </a>
              </li>
              <li>
                <a
                    href="#"
                    class="footer-link text-decoration-none"
                    @click.prevent="navigate('resume')"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Нижняя часть футера -->
      <div class="footer-bottom py-4 border-top">
        <div class="row align-items-center">
          <div class="col-md-6 mb-3 mb-md-0">
            <p class="copyright mb-0">© 2024 Alexander Rashidov. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="footer-note mb-0">Designed with ❤️</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  font-family: "Corbel", serif;
  margin-top: 4rem;
}

/* Заголовки секций */
.footer-title {
  font-size: 1.5rem;
  color: #fff;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
  border-radius: 2px;
}

/* Контактные элементы */
.contact-icon {
  background: rgba(255, 255, 255, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  background: linear-gradient(135deg, #00dbde 0%, #fc00ff 100%);
}

.contact-label {
  font-size: 0.9rem;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-link,
.contact-text {
  color: #fff;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #00dbde;
  text-decoration: underline !important;
}

.contact-item {
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(10px);
}

/* Социальные ссылки */
.social-link {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  background: linear-gradient(135deg, #00dbde 0%, #fc00ff 100%);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.social-icon {
  width: 24px;
  height: 24px;
}

/* Быстрые ссылки */
.footer-link {
  color: #a0aec0;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding-left: 0;
}

.footer-link::before {
  content: '→';
  position: absolute;
  left: -20px;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #fff;
  padding-left: 20px;
}

.footer-link:hover::before {
  opacity: 1;
  left: 0;
}

/* Нижняя часть футера */
.footer-bottom {
  border-top-color: rgba(255, 255, 255, 0.1) !important;
}

.copyright {
  color: #a0aec0;
  font-size: 0.9rem;
}

.footer-note {
  color: #fff;
  font-size: 0.9rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Адаптивность с Bootstrap breakpoints */
@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 !important;
    margin-top: 2rem;
  }

  .footer-title {
    font-size: 1.25rem;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
  }

  .social-link {
    width: 40px;
    height: 40px;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }

  .footer-bottom {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 2rem 0 !important;
  }

  .contact-item {
    margin-bottom: 1.25rem;
  }

  .links-list li {
    margin-bottom: 0.5rem;
  }
}
</style>