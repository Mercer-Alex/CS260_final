import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  getUpdate() {
    return this.update;
  },
  addUpdate(name, text, contact) {
    this.update.push({
      id: this.currentID,
      name: name,
      text: text,
      contact: contact,
    });
    this.currentID += 1;
  },
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
