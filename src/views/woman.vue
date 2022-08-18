
<template>
  <div class="woman">
    <product v-for="(item, index) of 20" :key="index" />
  </div>
</template>

<script>
import Product from '@/components/product'
export default {
  name: 'VueWoman',
  components: { Product }
}
</script>

<style scoped lang="scss">
.woman{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}
</style>