<template>
  <div class="home">
    <div class="update-container">
      <div v-for="update in updates" v-bind:key="update.id">
        <div class="update">
          <div class="text">
            <h2 class="user-name">{{ update.name }}</h2>
            <p>{{ update.update }}</p>
            <p>Get in touch with me: {{ update.contact }}</p>
          </div>
          <div class="actions">
            <button @click="deleteUpdate(update)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    async deleteUpdate(update) {
      try {
        await axios.delete("/api/update/" + update._id);
        this.findUpdate = null;
        this.getUpdates();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
}
.home {
  color: #cecece;
  width: 70%;
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
button {
  border: 1px solid #121212;
  background: #7f6085;
  border-radius: 4px;
  border: none;
  color: #121212;
}
button:hover {
  background: #af8eb5;
  box-shadow: 0 0 5px 0px #7f6085;
}

@media screen and (max-width: 600px) {
  .update-container {
    padding-bottom: 70px;
  }
  .home {
    width: 90%;
  }
}
</style>
