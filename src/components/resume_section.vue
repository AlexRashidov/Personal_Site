<script>
import {useResumeStore} from '@/stores/resume_store.js'
import {mapState, mapActions} from "pinia";
export default {
  computed: {
    ...mapState(useResumeStore,['resumes', 'isLoading', 'error']),
  },
  methods: {
    ...mapActions(useResumeStore,['fetchResumes']),
  },
  mounted() {
    this.fetchResumes()
  }
}
</script>

<template>
  <section id="resume" class="resume-section py-5">
    <!-- Bootstrap Container -->
    <div class="container">
      <!-- Заголовок -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h2 class="display-4 fw-bold text-light mb-0 corbel-font">
            Resume
          </h2>
        </div>
      </div>

      <!-- Содержимое резюме -->
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="resume-container border border-primary rounded-4 p-4 p-md-5">

            <!-- Таблица опыта -->
            <div class="experience-timeline">
              <!-- Заголовок таблицы - только на десктопе -->
              <div class="d-none d-md-grid timeline-header mb-4 pb-3 border-bottom">
                <div class="header-cell fw-bold text-uppercase text-light fs-5">
                  Company
                </div>
                <div class="header-cell fw-bold text-uppercase text-light fs-5">
                  Time of work and position
                </div>
              </div>

              <!-- Элементы опыта -->
              <div v-for="resume in resumes" :key="resume.id" class="timeline-item py-4 border-bottom">
                <div class="row">
                  <!-- Информация о компании -->
                  <div class="col-md-4 mb-4 mb-md-0">
                    <div class="company-info">
                      <h3 class="h4 fw-bold text-light mb-2">{{resume.company_name}}</h3>
                      <span class="company-badge">
                        {{ resume.industry }}
                      </span>
                    </div>
                  </div>

                  <!-- Информация о должности -->
                  <div class="col-md-8">
                    <div class="position-info">
                      <!-- Даты -->
                      <div class="date-range mb-2">
                        <span class="date fw-semibold text-light">
                          {{resume.employment_date}} - {{ resume.dismissal_date }}
                        </span>
                        <span class="duration text-light opacity-75 ms-2">
                          (9 months)
                        </span>
                      </div>

                      <!-- Должность -->
                      <h4 class="position h5 fw-bold text-light mb-2">
                        {{resume.post}}
                      </h4>

                      <!-- Описание -->
                      <p class="position-desc text-light opacity-90 mb-0">
                        {{ resume.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Состояния загрузки -->
              <div v-if="isLoading" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>

              <div v-if="error" class="alert alert-danger" role="alert">
                {{ error }}
              </div>

              <div v-if="!isLoading && resumes.length === 0" class="text-center py-5">
                <p class="text-light">No experience records found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume-section {
  font-family: "Corbel", serif;
}

.corbel-font {
  font-family: "Corbel", serif !important;
}

/* Контейнер резюме */
.resume-container {
  border-color: #25108D !important;
  border-radius: 30px !important;
}

/* Бейдж компании */
.company-badge {
  display: inline-block;
  background: linear-gradient(45deg, #861BAC, #23108C) !important;
  color: #e6f7ff !important;
  padding: 6px 16px !important;
  border-radius: 20px !important;
  font-size: 14px;
  font-weight: 600;
  border: none !important;
}

/* Элементы таймлайна */
.timeline-item:last-child {
  border-bottom: none !important;
}

.timeline-header {
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

/* Текст */
.date {
  font-size: 16px;
}

.duration {
  font-size: 14px;
}

.position-desc {
  font-size: 16px;
  line-height: 1.6;
}

/* Адаптивность с Bootstrap breakpoints */
@media (max-width: 768px) {
  .resume-section {
    padding: 2rem 0 !important;
  }

  .display-4 {
    font-size: 2.5rem !important;
  }

  .resume-container {
    padding: 1.5rem !important;
  }

  .timeline-item {
    padding: 1.5rem 0 !important;
  }

  .company-info h3 {
    font-size: 1.25rem !important;
  }

  .position {
    font-size: 1.1rem !important;
  }
}

@media (max-width: 576px) {
  .display-4 {
    font-size: 2rem !important;
  }

  .resume-container {
    padding: 1rem !important;
    border-radius: 20px !important;
  }

  .timeline-item {
    padding: 1rem 0 !important;
  }

  .company-badge {
    font-size: 12px !important;
    padding: 4px 12px !important;
  }
}
</style>