<script>
import contact_button from "@/components/contact_button.vue";
import api from "@/api/api.js";
export default {
  components: {contact_button},
  data() {
    return {
      contacts:[],
      sending: false,
      error: '',
    }
  },
  mounted() {
    this.contactSendMessage()
  },
  methods: {
    //POST запрос для добавления нового контакта
    async contactSendMessage(newContact) {
      this.sending = true
      this.error = ''
      try{
        const response = await api.post('/api/contacts', newContact)
        this.contacts.push(response.data)
        return response.data
      } catch(err){
        this.error = "Something went wrong"
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<template>
  <section id = "home" class = "home_section">
    <div class="content">
      <div class="full_name">
        <p>Hello, I`m Alexander Rashidov</p>
        <p>Alexander Ivanovich is a frontend developer at Vue. HTML, CSS, JS, VUE stack.</p>
      </div>
      <div class="contact">
        <contact_button/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact{
  margin-top: 30px;
  padding-right: 20px;
  display: flex;
  justify-content: center;

}
.home_section{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.full_name{
  font-size: 50px;
  font-family: "Corbel",serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  color:  #e6f7ff;
}
.full_name p:first-child{
  align-self: center;
  padding-left: 0;
}
.full_name p:nth-child(2){
  font-size: 25px;
}
</style>