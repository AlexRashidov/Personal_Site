<script>
export default {
  data() {
    return {
      showForm: false,
      isSubmitting: false,
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    openForm() {
      this.showForm = true;
      document.body.style.overflow = 'hidden';
    },
    closeForm() {
      this.showForm = false;
      document.body.style.overflow = 'auto';
    },
    async submitForm() {
      try {
        if(!this.validateForm()){
          return false;
        }
        await this.sendToApi()

        this.showSucsess()
        this.resetForm()
        this.closeForm()
      } catch (error) {
        this.showError(error);
      } finally {
        this.isSubmitting = false;
      }
    },
    validateForm() {
      if (!this.formData.name.trim()) {
        alert("Please enter a name address");
        return false;
      }
      if (!this.formData.email.trim()) {
        alert("Please enter a valid email address");
        return false;
      }
      if (!this.formData.message.trim()) {
        alert("Please enter a valid message.");
        return false;
      }
      return true
    },
    async sendToApi() {
      const api = (await import('@/api/api.js')).default
      return await api.post('/api/contacts',this.formData)
    },
    showSucsess() {
      alert('Message sent successfully!');
    },
    showError(error) {
      console.log(error);
      alert("Sent message error" + error.message);
    },
    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
}

</script>

<template>
  <div class="contact-wrapper">
    <!-- Кнопка -->
    <button class="contact_button" @click="openForm">
      Contact me
    </button>

    <!-- Модальное окно с формой -->
    <div v-if="showForm" class="contact-modal-overlay" @click.self="closeForm">
      <div class="contact-modal">
        <div class="modal-header">
          <h2>Contact Me</h2>
          <button class="close-btn" @click="closeForm">×</button>
        </div>

        <form @submit.prevent="submitForm" class="contact-form">
          <!-- Поля формы -->
          <div class="form-group">
            <label>Name *</label>
            <input
                v-model="formData.name"
                type="text"
                placeholder="Your name"
                required
            >
          </div>

          <div class="form-group">
            <label>Email *</label>
            <input
                v-model="formData.email"
                type="email"
                placeholder="email@example.com"
                required
            >
          </div>

          <div class="form-group">
            <label>Message *</label>
            <textarea
                v-model="formData.message"
                rows="4"
                placeholder="Enter message..."
                required
            ></textarea>
          </div>

          <!-- Кнопки формы -->
          <div class="form-actions">
            <button type="submit" :disabled="isSubmitting" class="submit-btn">
              {{ isSubmitting ? 'Sending...' : 'Send' }}
            </button>
            <button type="button" @click="closeForm" class="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Контейнер */
.contact-wrapper {
  display: inline-block;
}

/* Кнопка Contact me */
.contact_button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.contact_button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.contact_button:active {
  transform: translateY(-1px);
}

/* Модальное окно */
.contact-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.contact-modal {
  background: white;
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.modal-header h2 {
  margin: 0;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  line-height: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
}

.close-btn:hover {
  background: #f5f5f5;
}

/* Форма */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.submit-btn {
  flex: 2;
  background: #667eea;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #5a6fd8;
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.cancel-btn {
  flex: 1;
  background: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.cancel-btn:hover {
  background: #e5e5e5;
}

/* Анимации */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

/* Адаптивность */
@media (max-width: 600px) {
  .contact-modal {
    padding: 20px;
    width: 95%;
  }

  .form-actions {
    flex-direction: column;
  }

  .submit-btn,
  .cancel-btn {
    width: 100%;
  }
}
</style>