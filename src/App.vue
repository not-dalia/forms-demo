<template>
  <div id="app">
    <PreHealthForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PreHealthForm from './components/PreHealthForm.vue'

export default {
  name: 'app',
  components: {
    PreHealthForm
  }
}
</script>

<style lang="stylus">
#app {
  font-family: canada-type-gibson, Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  font-size: 18px;
}

body {
  // background-color #51B1A7
  padding 30px 0
}

@media only screen and (max-width: 600px)  {
  body {
    // background-color #51B1A7
    // padding 30px 0
  }
}
</style>
