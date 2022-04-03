<template>
  <div class="home">
    <div v-for="update in updates" v-bind:key="update.id">
      <div class="update">
        <div class="text">
          <p class="user-name">{{ update.name }}</p>
          <p>{{ update.update }}</p>
          <p>{{ update.contact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "HomeView",
  data() {
    return {
      updates: [],
    };
  },
  created() {
    this.getUpdates();
  },
  methods: {
    async getUpdates() {
      try {
        let response = await axios.get("/api/update");
        this.updates = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style scoped>
.home {
  width: calc(100% - 30%);
  margin: auto;
}
.update {
  background-color: #e1bee710;
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
}
.user-name {
  justify-self: flex-start;
  border-bottom: solid black 1px;
  padding: 5px;
  padding-bottom: 10px;
}
</style>
