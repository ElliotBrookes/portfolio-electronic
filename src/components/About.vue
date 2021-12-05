<template>
  <section class="hero is-clipped is-fullheight">
    <div class="columns hero-body">
      <div class="column">
        <div class="container">
          <ul class="has-text-centered">
            <li>Elliot Brookes</li>
            <li>Born 30/05/2001</li>
            <li>Currently work as a software developer for Blockmark Technologies,
            I have worked on a number of projects ranging from general web
            development using Django and Vue to the use of blockchain technologies
            and smart contracts</li>
            <li>I have Achieved 10 GCSEs at grade C and above, recieved ABB at
              A level and am currently working towards earning my degree ias a
              technological solutions professional</li>
            <li><a href="#">CV Download</a></li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import anime from 'animejs'

  export default {
    name:"About",
    methods: {
      outroSequence(){
        return anime({
          targets: '.has-text-centered',
          translateY: '100%',
          easing: "easeInExpo",
        });
      }
    }
  }
</script>

<style scoped>
section{
  text-shadow: 2px 2px 2px grey;
}
.has-text-centered{
  text-align: center;
  max-width: 40%;
  margin: 0 auto;
}
ul>li{
  margin: 20px;
  float: none;
}
.hero-body{
  background-color: #fffaf1;
}
</style>
