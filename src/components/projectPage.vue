<template lang="html">
<div class="modal" :class='{"is-active" : isActive}'>
  <div class="modal-background"></div>
  <div class="modal-content is-clipped">
      <p>Hello</p>
      <div class="buttons">
        <button class="button is-success">linkedin</button>
        <button class="button">website</button>
        <button class="button">github</button>
      </div>
  </div>
  <button class="delete" aria-label="close" @click="$emit('close')"></button>
</div>
</template>

<script>
export default {
  name: "projectPage",
  data () {
    return {
    }
  },
  props: {
    isActive: Boolean,
    content: Array,
    links: Array,
    titles: Array
  },
}
</script>

<style lang="css" scoped>
.modal-content{
  background-color: white;
  border-radius: 5px;
  width: 90%;
  height: 85%;
}
</style>
