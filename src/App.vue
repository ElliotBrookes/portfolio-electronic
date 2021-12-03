<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="#" @click="this.activeComponent = 'Base'">Logo</a>
        <a class="navbar-item" href="#" @click="this.activeComponent = 'Work'">Work</a>
        <a class="navbar-item" href="#" @click="this.activeComponent = 'About'">About Me</a>
      </div>
    </div>
  </nav>
  <component v-bind:is="this.activeComponent"></component>
</template>

<script>
import Base from './components/base.vue'
import Work from './components/Work.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Base, Work
  },
  data: function(){
    return{
      activeComponent: "Base"
    }
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

.navbar-end{
  margin-left: 43%;
}
</style>
