<template>
  <v-app>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  font-family: mainFont;
  color:rgba(0,0,0,.9);
}
*,
*:active,
*:focus {
  user-select: none;
  outline: none;
  text-decoration: none;
}

@font-face {
  font-family: mainFont;
  src: url("/static/charter-400-normal.woff");
}

</style>
