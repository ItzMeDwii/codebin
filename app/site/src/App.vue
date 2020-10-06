<template>
  <div id="app">
    <div class="">
      <div class="container">
        <Navbar/>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";

@Component({
    name: "App",
    components: {
        Navbar
    }
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./style.scss"></style>
