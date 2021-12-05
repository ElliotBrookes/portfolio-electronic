<template>
  <p>hello</p>
</template>

<script type="text/javascript">
import anime from 'animejs'

export default{
  name: "Work",
  methods: {
    outroSequence(){
      return anime({
        targets: 'p',
        translateY: '100%',
        easing: "easeInExpo",
      });
    }
  }
}
</script>

<style lang="css" scoped>

</style>
