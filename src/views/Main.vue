<template>
  <transition name="fade">
    <div v-if="isVisible" class="main-page fade">
      <div class="media-block">
        <div class="media-text-top">
          <span>YOU</span>
          <span>ARE</span>
          <span>AWESOME</span>
        </div>
        <img
          v-if="gifReady"
          class="media-img"
          src="/static/chuck.gif"
          alt="Chuck"
        />
        <p class="media-text-bottom">CHUCK NORRIS APPROVES</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
    gifReady: false,
    isVisible: false
  }),
  beforeRouteEnter(to, from, next) {
    if (!to.params.auth) {
      next({
        name: 'login'
      })
    } else next()
  },
  mounted() {
    this.isVisible = true
    setTimeout(() => {
      this.gifReady = true
    }, 7800)
  }
}
</script>

<style>
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.main-page {
  background-color: black;
  height: 100%;
}

.media-block {
  color: white;
  width: 960px;
  margin: auto;
}

.media-text-top {
  padding-top: 40px;
  font-size: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 40px;
}

.media-text-top > span {
  opacity: 0;
  margin: 0 12px;
}

.media-text-top > :nth-child(1) {
  animation: opacity 1.5s ease-out 3.5s forwards;
}
.media-text-top > :nth-child(2) {
  animation: opacity 1.5s ease-out 5s forwards;
}
.media-text-top > :nth-child(3) {
  animation: opacity 1.5s ease-out 6.5s forwards;
}

.media-img {
  opacity: 0;
  width: 100%;
  animation: opacity 1.5s ease-out 0s forwards;
}

.media-text-bottom {
  opacity: 0;
  font-size: 60px;
  display: flex;
  justify-content: center;
  animation: opacity 1.5s ease-out 8.4s forwards;
}

.fade-enter {
  background-color: white;
}
.fade-enter-to {
  background-color: black;
}
.fade-enter-active {
  transition: background-color 1.5s ease-in;
}
</style>
