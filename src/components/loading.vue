<template>
<div v-if="isOpen" class="loading" :class="{
  'is-part': isPart
  }">
  <div class="bd">
    <div class="spinner">
      <span v-for="i in 12" class="spinner-blade"></span>
    </div>
    <p v-if="content" class="cnt">
      {{content}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isPart: {
      type: Boolean,
      default: true
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.loading {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: transparent;
}

.loading.is-part {
  position: absolute;
}

.bd {
  position: relative;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: .5rem;

  border-radius: .160000rem;
  background: rgba(48, 48, 48, .8);

  align-items: center;
  justify-content: center;
}

.spinner {
  position: relative;

  width: 1.1rem;
  height: 1.1rem;
  margin: 0 auto;
}

.spinner-blade {
  position: absolute;
  top: 37%;
  left: 44.5%;

  width: 8.57143%;
  height: 25.71429%;

  -webkit-animation: spinner-blade-fade 1s linear infinite;
  animation: spinner-blade-fade 1s linear infinite;
  -webkit-animation-play-state: running;
  animation-play-state: running;

  border-radius: 50%/16.67%;
  background: #fff;
}

.spinner-blade:nth-child(1) {
  -webkit-transform: rotate(30deg) translate(0, -150%);
  transform: rotate(30deg) translate(0, -150%);
  -webkit-animation-delay: -1.66667s;
  animation-delay: -1.66667s;
}
.spinner-blade:nth-child(2) {
  -webkit-transform: rotate(60deg) translate(0, -150%);
  transform: rotate(60deg) translate(0, -150%);
  -webkit-animation-delay: -1.58333s;
  animation-delay: -1.58333s;
}
.spinner-blade:nth-child(3) {
  -webkit-transform: rotate(90deg) translate(0, -150%);
  transform: rotate(90deg) translate(0, -150%);
  -webkit-animation-delay: -1.5s;
  animation-delay: -1.5s;
}
.spinner-blade:nth-child(4) {
  -webkit-transform: rotate(120deg) translate(0, -150%);
  transform: rotate(120deg) translate(0, -150%);
  -webkit-animation-delay: -1.41667s;
  animation-delay: -1.41667s;
}
.spinner-blade:nth-child(5) {
  -webkit-transform: rotate(150deg) translate(0, -150%);
  transform: rotate(150deg) translate(0, -150%);
  -webkit-animation-delay: -1.33333s;
  animation-delay: -1.33333s;
}
.spinner-blade:nth-child(6) {
  -webkit-transform: rotate(180deg) translate(0, -150%);
  transform: rotate(180deg) translate(0, -150%);
  -webkit-animation-delay: -1.25s;
  animation-delay: -1.25s;
}
.spinner-blade:nth-child(7) {
  -webkit-transform: rotate(210deg) translate(0, -150%);
  transform: rotate(210deg) translate(0, -150%);
  -webkit-animation-delay: -1.16667s;
  animation-delay: -1.16667s;
}
.spinner-blade:nth-child(8) {
  -webkit-transform: rotate(240deg) translate(0, -150%);
  transform: rotate(240deg) translate(0, -150%);
  -webkit-animation-delay: -1.08333s;
  animation-delay: -1.08333s;
}
.spinner-blade:nth-child(9) {
  -webkit-transform: rotate(270deg) translate(0, -150%);
  transform: rotate(270deg) translate(0, -150%);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.spinner-blade:nth-child(10) {
  -webkit-transform: rotate(300deg) translate(0, -150%);
  transform: rotate(300deg) translate(0, -150%);
  -webkit-animation-delay: -.91667s;
  animation-delay: -.91667s;
}
.spinner-blade:nth-child(11) {
  -webkit-transform: rotate(330deg) translate(0, -150%);
  transform: rotate(330deg) translate(0, -150%);
  -webkit-animation-delay: -.83333s;
  animation-delay: -.83333s;
}
.spinner-blade:nth-child(12) {
  -webkit-transform: rotate(360deg) translate(0, -150%);
  transform: rotate(360deg) translate(0, -150%);
  -webkit-animation-delay: -.75s;
  animation-delay: -.75s;
}

.cnt {
  font-size: 28px; /*px*/
  line-height: 1.2;

  margin-top: .200000rem;
  padding: 0 .133333rem;

  color: #fff;
}

@-webkit-keyframes spinner-blade-fade {
  0% {
    opacity: .85;
  }
  50% {
    opacity: .25;
  }
  100% {
    opacity: .25;
  }
}
@keyframes spinner-blade-fade {
  0% {
    opacity: .85;
  }
  50% {
    opacity: .25;
  }
  100% {
    opacity: .25;
  }
}
</style>
