<template>
  <section class="hero is-fullheight is-clipped">
    <projectPage :is-active="this.isActive" @close="this.isActive = false"></projectPage>
    <div class="hero-body">
      <div class="content">
        <div class="column has-text-centered is-12">
          <h1 class=" title"> Projects </h1>
        </div>
        <div class="tile is-ancestor has-text-centered column">
          <div id="homeHacker" class="tile is-vertical is-parent box">
            <div class="tile is-child ">
              <p class="subtitle">HomeHacker</p>
            </div>
            <div class="tile is-child ">
              <p class="projectText">A small project meant to make managing properties easier,
                 keeps track of tenants information as well as outgoings and
                 incoming rental payments.</p>
            </div>
            <div class="tile is-child">
              <a  class="button is-light" @mouseover="buttonEnlarge(['#homeHacker', '#homeHacker>*'], 1.2)"
              @mouseleave="buttonShrink(['#homeHacker', '#homeHacker>*'])"
              @click="this.isActive = true">
                View
              </a>
            </div>
          </div>
          <div id="blockmarkRegistry" class="tile is-vertical is-parent box">
            <div class="tile is-child ">
              <p class="subtitle">Blockmark Registry</p>
            </div>
            <div class="tile is-child ">
              <p class="projectText"> A certification platform owned by Blockmark Technologies</p>
            </div>
            <div class="tile is-child">
              <a class="button is-light" @mouseover="buttonEnlarge(['#blockmarkRegistry', '#blockmarkRegistry>*'], 1.2)"
              @mouseleave="buttonShrink(['#blockmarkRegistry', '#blockmarkRegistry>*'])"
              @click="this.isActive = true">
                View
              </a>
            </div>
          </div>
          <div id="biPolarBears" class="tile is-vertical is-parent box">
            <div class="tile is-child ">
              <p class="subtitle">Bi-polar Bears</p>
            </div>
            <div class="tile is-child ">
              <p class="projectText"> An NFT project with generated polar bears
                representing different facetes of the mental disorder.</p>
            </div>
            <div class="tile is-child">
              <a class="button is-light" @mouseover="buttonEnlarge(['#biPolarBears', '#biPolarBears>*'], 1.2)"
              @mouseleave="buttonShrink(['#biPolarBears', '#biPolarBears>*'])"
              @click="this.isActive = true">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import anime from 'animejs'
import * as animations from '../assets/animations.js'
import projectPage from './projectPage.vue'


export default{
  name: "Work",
  data (){
    return {
      isActive: false
    }
  },
  components: {
    projectPage
  },
  methods: {
    outroSequence(){
      return anime({
        targets: '.content',
        translateY: '100%',
        easing: "easeInExpo",
        duration: 300
      });
    },
    buttonShrink(self){
      return animations.buttonShrink(self)
    },
    buttonEnlarge(self, scale){
      return animations.buttonEnlarge(self, scale)
    }
  },
  mounted() {
    anime({
      targets: ".content",
      translateY: ["100%", "0"],
      "opacity": ["0", "1"],
      easing: "easeOutExpo",
      duration: 300
    })
  },
}
</script>

<style lang="css" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap');
  .tile > .subtitle{
    font-family: 'Readex Pro', sans-serif;
  }
  .title, a{
    text-shadow: 2px 2px 2px grey;
  }
  .tile.is-parent{
    margin: 4rem;
    opacity: 0.8;
  }
  .hero-body{
    background-color: #fffaf1;
  }
  .projectText{
    max-width: 70%;
    margin: 0 auto;
  }
  .button{
    max-height: 2rem;
    margin:0 auto;
    border-radius: 5px;
  }

</style>
