<template>
  <div class="add-update">
    <div class="add-container">
      <div class="update-header">
        <span><h3>Create an update:</h3></span>
        <p>
          Show off your talents, advertise your new business, or share your
          interests. Hey Wow is here to get the word out!
        </p>
        <p>
          Add your name, and then write what you do, what you want people to
          know, or just how you feel
        </p>
        <p>Include your contact info if you want people to reach out to you</p>
      </div>
      <div class="update">
        <form class="update-inputs" v-if="creating" @submit.prevent="addUpdate">
          <input class="update-name" v-model="name" placeholder="Name" />
          <p></p>
          <textarea
            class="update-content"
            v-model="update"
            placeholder="type here"
          ></textarea>
          <br />
          <input
            class="update-contact"
            v-model="contact"
            placeholder="contact"
          />
          <br />
          <button class="update-submit" type="submit">Submit</button>
        </form>
        <div v-else class="update__else">
          <p>Thank you for submitting an update!</p>
          <p><a @click="toggleForm" href="#">Add something else?</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddUpdate",
  data() {
    return {
      creating: true,
      name: "",
      update: "",
      contact: "",
    };
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    async addUpdate() {
      try {
        let r1 = await axios.post("/api/update", {
          name: this.name,
          update: this.update,
          contact: this.contact,
        });
        this.addItem = r1.data;
      } catch (error) {
        console.log(error);
      }
      this.creating = false;
    },
  },
};
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 400px;
  background: #e1bee721;
  border: none;
  border-radius: 4px;
  color: #cecece;
}
input:focus-visible {
  box-shadow: 0 0 10px 1px #7f6085;
  border: #cecece;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
  background: #e1bee721;
  border: none;
  border-radius: 4px;
  color: #cecece;
}
textarea:focus-visible {
  box-shadow: 0 0 10px 1px #7f6085;
  border: #cecece;
}

button {
  color: #121212;
  border: 1px solid #121212;
  margin-top: 20px;
  font-size: 1.2em;
  background-color: #7f6085;
  border: none;
  border-radius: 4px;
  max-width: 70%;
  justify-self: center;
  margin-top: 0;
}
button:hover {
  background-color: #af8eb5;
  box-shadow: 0 0 10px 0px #7f6085;
}
.update {
  background: #e1bee709;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin: 15px;
  padding: 15px;
}
.update-inputs {
  display: grid;
  justify-content: center;
  align-content: center;
}
.add-update {
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
}
.update-header {
  font-size: 25px;
  margin: 15px;
  padding: 15px;
  background: #e1bee709;
  color: #cecece;
}

.update__else {
  color: #cecece;
  font-size: 1.5em;
}
.update__else a {
  color: #af8eb5;
}
@media screen and (max-width: 480px) {
  input {
    max-width: 100%;
  }
  textarea {
    max-width: 100%;
  }
  .update-inputs {
    grid-template-columns: 300px;
  }
}
@media screen and (max-width: 600px) {
  .add-container {
    margin-bottom: 70px;
  }
}
</style>