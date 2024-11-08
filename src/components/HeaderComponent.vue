<script>
</script>

<template>
  <div class="">
    <p class="text-gray-200 text-center text-5xl">PulseHub</p>
    <p class="text-gray-400 text-center text-xl">A place to scan your local area for <span class="text-blue-500">police</span>, <span class="text-red-500">fire</span>, and
      <span class="text-gradient">EMS</span> traffic.</p>
<!--    <div class="container">-->
<!--      <div class="content">-->
<!--        <div class="heart-rate">-->
<!--          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73"-->
<!--               enable-background="new 0 0 150 73" xml:space="preserve">-->
<!--    <polyline fill="none" stroke="#d90f31" stroke-width="3" stroke-miterlimit="10"-->
<!--              points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"-->
<!--    />-->
<!--  </svg>-->

<!--          <div class="fade-in"></div>-->

<!--          <div class="fade-out"></div>-->
<!--        </div>-->

<!--      </div>-->

<!--    </div>-->

<!--    <br>-->
  </div>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(120deg, red, white, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body {
  background: #000 none repeat scroll 0 0;
  color: #999;
  font-size: 100%;
  line-height: 24px;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.heading h1 {
  font-family: sans-serif;
  text-rendering: optimizeLegibility;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
}

.container {
  margin: 0 auto;
  text-align: center;
}

.heart-rate {
  width: 150px;
  height: 73px;
  position: relative;
  margin: 20px auto;
}

.fade-in {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #222223;
  top: 0;
  right: 0;
  animation: heartRateIn 2.5s linear infinite;
}

.fade-out {
  position: absolute;
  width: 120%;
  height: 100%;
  background-color: #222223;
  top: 0;
  right: -120%;
  animation: heartRateOut 2.5s linear infinite;
}

@keyframes heartRateIn {
  0% {
    width: 100%;
  }
  50% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

@keyframes heartRateOut {
  0% {
    left: -120%;
  }
  30% {
    left: -120%;
  }
  100% {
    left: 0;
  }

}


</style>