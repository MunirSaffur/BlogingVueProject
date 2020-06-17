<template>
  <div class="home">
    <div class="row productRow">
    <product v-for="product in products" v-bind:key="product.id" :src="product.src" :name="product.name" :price="product.price"/>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import product from "@/components/product.vue";
import jsonPorducts from "../json/productData.json" 

export default {
  data: ()=>{
    return {
      products : jsonPorducts,
    }
  },
  name: "Home",
  components: {
    HelloWorld,
    product,
  }
};
</script>
<style lang="scss" scoped>

</style>