<template lang="html">
  <div class="page-header">
    <h1>
      <i :class="'fal fa-' + title.icon"></i>
      {{ title.title }}
      <!-- <slot v-for="item in items" name="list" :item="item"></slot> -->
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      Object
    },
    items:{
      type: Array
    }
  }
}
</script>

<style lang="css" scoped>
</style>
