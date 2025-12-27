import {defineStore} from "pinia";
import  api from '@/api/api.js';

export const useResumeStore = defineStore("resume", {
    state: () =>({
        resumes: [],
        isLoading: false,
        error: ''
    }),
    getters: {},
    actions: {
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
    },
})