
<template>
  <div class="woman">
    <product v-for="(item, index) of list" :product="item" :key="index" />
  </div>
</template>

<script>
import Product from '@/components/product'
import { getList } from '@/product'
export default {
  name: 'VueWoman',
  components: { Product },
  data(){
    return {
      list: []
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList(){
      const list = getList('woman')
      this.list = list
    }
  }
}
</script>

<style scoped lang="scss">
.woman{
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
}
</style>