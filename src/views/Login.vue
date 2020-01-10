<template>
  <div class="loginPage">
    <div class="codeword">
      <div v-show="error" class="error-message">{{ error }}</div>
      <form class="codeword-form" @submit.prevent="checkForm">
        <label class="codeword-label" for="codeword">Codeword</label>
        <input id="codeword" type="text" v-model="codeword" />
        <input class="submitButton" type="submit" value="OK" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    codeword: null,
    error: null
  }),
  methods: {
    checkForm() {
      if (!this.codeword) this.error = 'Not so fast! Codeword is required!'
      else if (this.codeword !== 'test')
        this.error = 'You can do better! Incorrect code word!'
      else
        this.$router.push({
          name: 'main',
          params: {
            auth: true
          }
        })
    }
  }
}
</script>

<style>
.loginPage {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-message {
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 15px;
  color: #a51e2a;
}
</style>
