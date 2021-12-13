<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-menu">
      <div class="navbar-end">
        <a id="logoLink" class="navbar-item button borderless"
        @click="this.changeComponent('Base')"
        :class="{'is-static': this.activeComponent == 'Base'}">
        Home
      </a>
        <a class="navbar-item button borderless"
        @click="this.changeComponent('Work')"
        :class="{'is-static': this.activeComponent == 'Work'}">
        Work
      </a>
        <a class="navbar-item button borderless"
        @click="this.changeComponent('About')"
        :class="{'is-static': this.activeComponent == 'About'}">
        About Me
      </a>
      </div>
    </div>
  </nav>
  <component ref="component" v-bind:is="this.activeComponent"></component>
</template>

<script>
import Base from './components/base.vue'
import Work from './components/Work.vue'
import About from './components/About.vue'


export default {
  name: 'App',
  components: {
    Base, Work, About
  },
  data: function(){
    return{
      activeComponent: "Base"
    }
  },
  methods: {
    outroAnimation(){
      return this.$refs.component.outroSequence()
    },
    async changeComponent(newComponent){
      let animation = this.outroAnimation()
      await animation.finished
      animation.finished.then(this.activeComponent = newComponent)
    }
  },
  mounted() {

  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";



.navbar-end{
  margin-left: 43%;
}


.borderless{
  border: 0px;
}
.button{
  height: 100%;
  border-radius: 0;
}
</style>
