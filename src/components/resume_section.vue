<script>
import api from "@/api/api.js";
export default {
  data() {
    return {
      resumes: [],
      loading: false,
      sending: false,
      error: ''
    }
  },
  mounted() {
    this.fetchResumes()
  },
  methods: {
    //GET запрос для получения резюме
    async fetchResumes() {
      this.loading = true
      this.error = ''
      try{
        const response = await api.get('/api/resumes')
        this.resumes = response.data.data
      } catch(err){
        this.error = "Something went wrong"
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<template>
  <section id="resume" class="resume_section">
    <div class="resume_content">
      <h2>Resume</h2>
      <div class="resume_grid">
        <div class="resume_text">
          <div class="experience_timeline">
            <!-- Заголовок -->
            <div class="timeline_header">
              <div class="header_cell">Company</div>
              <div class="header_cell">Time of work and position</div>
            </div>

            <!-- Элемент опыта -->
            <div v-for="resume in resumes" :key="resume.id" class="timeline_item">
              <div class="company_info">
                <h3>{{resume.company_name}}</h3>
                <div class="company_badge">{{ resume.industry }}</div>
              </div>
              <div class="position_info">
                <div class="date_range">
                  <span class="date">{{resume.employment_date}} - {{ resume.dismissal_date }}</span>
                  <span class="duration">(9 months)</span>
                </div>
                <h3 class="position">{{resume.post}}</h3>
                <p class="position_desc">{{ resume.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume_content{
  display: flex;
  flex-direction: column;
  align-items: center;
  color:  #e6f7ff;
  font-size: 30px;
}
.resume_section {
  color: #e6f7ff;
  padding: 80px 20px;
}

.resume_content {
  max-width: 1200px;
  margin: 0 auto;
}

.resume_content h2 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 60px;
  text-align: center;
}

/* Сетка резюме */
.resume_grid {
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid #25108D;
  border-radius: 30px;
}

/* Таймлайн опыта */
.experience_timeline {
  padding: 40px;
}

/* Заголовок таблицы */
.timeline_header {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e2e8f0;
}

.header_cell {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}

/* Элемент опыта */
.timeline_item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  padding: 30px 0;
  border-bottom: 1px solid #f1f5f9;
  align-items: start;
}

.timeline_item:last-child {
  border-bottom: none;
}

/* Левая колонка - информация о компании */
.company_info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.company_info h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.company_badge {
  display: inline-block;
  background: linear-gradient(45deg, #861BAC, #23108C);
  color: #e6f7ff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
}

/* Правая колонка - информация о должности */
.position_info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.date_range {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}

.date {
  font-size: 16px;
  font-weight: 600;
}

.duration {
  font-size: 14px;
}

.position {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.position_desc {
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  padding-right: 20px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .resume_content h2 {
    font-size: 36px;
  }

  .experience_timeline {
    padding: 20px;
  }

  .timeline_header,
  .timeline_item {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .timeline_header {
    display: none;
  }

  .timeline_item {
    padding: 20px 0;
  }

  .position_desc {
    padding-right: 0;
  }
}
</style>