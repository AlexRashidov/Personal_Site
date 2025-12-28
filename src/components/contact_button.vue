<script>
import {useContactButtonStore} from "@/stores/contact_button_store.js";
import {mapActions, mapState} from "pinia";
export default {
  computed:{
    ...mapState(useContactButtonStore, ['showForm', 'isSubmitting', 'formData'])
  },
  methods:{
    ...mapActions(useContactButtonStore, ['openForm', 'closeForm', 'submitForm', 'validateForm', 'sendToApi', 'showSucsess', 'showError', 'resetForm'])
  },
  mounted() {

  }
}
</script>

<template>
  <div class="contact-wrapper">
    <!-- Кнопка Contact me -->
    <button
        class="contact-btn btn btn-lg px-5 py-3"
        @click="openForm"
    >
      Contact me
    </button>

    <!-- Bootstrap Modal -->
    <div
        v-if="showForm"
        class="modal show d-block"
        tabindex="-1"
        role="dialog"
        style="background-color: rgba(0, 0, 0, 0.5);"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <!-- Заголовок модального окна -->
          <div class="modal-header">
            <h5 class="modal-title fw-bold">Contact Me</h5>
            <button
                type="button"
                class="btn-close"
                @click="closeForm"
                aria-label="Close"
            ></button>
          </div>

          <!-- Тело модального окна с формой -->
          <div class="modal-body">
            <form @submit.prevent="submitForm" class="contact-form">
              <!-- Имя -->
              <div class="mb-3">
                <label for="name" class="form-label fw-semibold">Name *</label>
                <input
                    v-model="formData.name"
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Your name"
                    required
                >
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="email" class="form-label fw-semibold">Email *</label>
                <input
                    v-model="formData.email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="email@example.com"
                    required
                >
              </div>

              <!-- Сообщение -->
              <div class="mb-4">
                <label for="message" class="form-label fw-semibold">Message *</label>
                <textarea
                    v-model="formData.message"
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter message..."
                    required
                ></textarea>
              </div>

              <!-- Кнопки формы -->
              <div class="d-flex gap-3">
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="btn btn-primary flex-grow-1 py-2"
                >
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
                <button
                    type="button"
                    @click="closeForm"
                    class="btn btn-outline-secondary py-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.contact-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border: none !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
  z-index: -1;
}

.contact-btn:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;
}

.contact-btn:hover::before {
  left: 100%;
}

.contact-btn:active {
  transform: translateY(-1px) !important;
}

/* Кастомизация модального окна */
.modal-content {
  border: none !important;
  border-radius: 12px !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  animation: slideUp 0.3s ease !important;
}

.modal-header {
  border-bottom: 1px solid #e9ecef !important;
  padding: 1.5rem 1.5rem 1rem !important;
}

.modal-title {
  color: #333 !important;
  font-size: 1.5rem !important;
}

.modal-body {
  padding: 1rem 1.5rem 1.5rem !important;
}

/* Кастомизация формы */
.form-control {
  border: 1px solid #dee2e6 !important;
  border-radius: 8px !important;
  padding: 0.75rem 1rem !important;
  font-size: 1rem !important;
  transition: all 0.3s ease !important;
}

.form-control:focus {
  border-color: #667eea !important;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
}

.form-label {
  color: #555 !important;
  margin-bottom: 0.5rem !important;
}


.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border: none !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3) !important;
}

.btn-primary:disabled {
  background: #ccc !important;
  transform: none !important;
  box-shadow: none !important;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa !important;
}


@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 768px) {
  .contact-btn {
    padding: 0.75rem 1.5rem !important;
    font-size: 15px !important;
  }

  .modal-dialog {
    margin: 1rem !important;
  }

  .modal-content {
    padding: 0.5rem !important;
  }

  .d-flex {
    flex-direction: column !important;
  }

  .btn {
    width: 100% !important;
    margin-bottom: 0.5rem !important;
  }
}

@media (max-width: 576px) {
  .contact-btn {
    padding: 0.6rem 1.25rem !important;
    font-size: 14px !important;
  }

  .modal-header {
    padding: 1rem !important;
  }

  .modal-body {
    padding: 1rem !important;
  }

  .form-control {
    padding: 0.6rem 0.75rem !important;
  }
}
</style>