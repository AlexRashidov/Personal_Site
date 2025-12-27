import {defineStore} from "pinia";
export const useContactButtonStore = defineStore("contactButtonStore",   {
    state:() =>( {
        showForm: false,
        isSubmitting: false,
        error: '',
        formData: {
            name: '',
            email: '',
            message: ''
        }
    }),
    getters: {},
    actions: {
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
                const ApiData = {
                    name: this.formData.name,
                    email: this.formData.email,
                    message: this.formData.message
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
})
