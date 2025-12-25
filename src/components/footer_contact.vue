<script setup>

</script>

<template>
  <footer id="contact" class="footer">
    <div class="footer_container">
      <!-- Контактная информация -->
      <div class="footer_contact">
        <h3 class="footer_title">Get in Touch</h3>

        <div class="contact_item">
          <div class="contact_icon"><img class="social_icon" src="../img/email.png" alt=""></div>
          <div class="contact_info">
            <span class="contact_label">Email</span>
            <a href="mailto:rashidov.sasha@yandex.ru" class="contact_link">rashidov.sasha@yandex.ru</a>
          </div>
        </div>

        <div class="contact_item">
          <div class="contact_icon"><img class="social_icon" src="../img/phone.png" alt=""></div>
          <div class="contact_info">
            <span class="contact_label">Phone</span>
            <a href="tel:+1234567890" class="contact_link">+7 923-442-21-15</a>
          </div>
        </div>

        <div class="contact_item">
          <div class="contact_icon">
            <img class="social_icon" src="../img/location.png" alt="">
          </div>
          <div class="contact_info">
            <span class="contact_label">Location</span>
            <span class="contact_text">Tomsk, Russia</span>
          </div>
        </div>
      </div>

      <!-- Социальные сети -->
      <div class="footer_social">
        <h3 class="footer_title">Follow Me</h3>
        <div class="social_links">
          <a href="https://github.com/AlexRashidov" class="social_link" aria-label="GitHub">
            <img class="social_icon" src="../img/github.png" alt="">
          </a>
          <a href="@fonvi1" class="social_link" aria-label="Telegram">
            <img class="social_icon" src="../img/telegram.png" alt="">
          </a>
        </div>
      </div>

      <div class="footer_links">
        <h3 class="footer_title">Quick Links</h3>
        <ul class="links_list">
          <li><a data-section="home" @click="$router.push({name: 'home', hash: '#home'})">Home</a></li>
          <li><a data-section="about" @click="$router.push({name: 'about', hash: '#about'})">About</a></li>
          <li><a data-section="resume" @click="$router.push({name: 'resume', hash: '#resume'})">Resume</a></li>
        </ul>
      </div>
    </div>

    <div class="footer_bottom">
      <p class="copyright">© 2024 Alexander Rashidov. All rights reserved.</p>
      <p class="footer_note">Designed with ❤️</p>
    </div>
  </footer>
</template>

<style scoped>




.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
}

.footer_container {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin: 0 auto 3rem;
}

.footer_title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  color: #fff;
}

.footer_title::after {
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
.contact_item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.contact_item:hover {
  transform: translateX(10px);
}

.contact_icon {
  background: rgba(255, 255, 255, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact_item:hover .contact_icon {
  background: linear-gradient(135deg, #00dbde 0%, #fc00ff 100%);
}

.contact_label {
  display: block;
  font-size: 0.9rem;
  color: #a0aec0;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact_link,
.contact_text {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.contact_link:hover {
  color: #00dbde;
  text-decoration: underline;
}

/* Социальные иконки */
.social_links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

}

.social_link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social_link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.social_link:hover::before {
  left: 100%;
}

.social_link:hover {
  background: linear-gradient(135deg, #00dbde 0%, #fc00ff 100%);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.social_icon {
  width: 24px;
  height: 24px;
  fill: white;
}

/* Быстрые ссылки */
.links_list {
  list-style: none;
  padding: 0;
}

.links_list li {
  margin-bottom: 0.8rem;
}

.footer_link {
  color: #a0aec0;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  display: inline-block;
}

.footer_link::before {
  content: '→';
  position: absolute;
  left: -20px;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer_link:hover {
  color: #fff;
  padding-left: 20px;
}

.footer_link:hover::before {
  opacity: 1;
  left: 0;
}

/* Нижняя часть футера */
.footer_bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: #a0aec0;
  font-size: 0.9rem;
}

.footer_note {
  color: #fff;
  font-size: 0.9rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Адаптивность */
@media (max-width: 768px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }

  .footer_container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer_bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>