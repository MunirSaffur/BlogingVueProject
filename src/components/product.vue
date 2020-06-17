<template>
    <div class="col-md-3">
      <div class="product ">
      <img class="productImg" :src="src"/> 
      <h2 class="productName">{{ name | shorten(15) }}</h2>
      <p class="price">{{ price }} TL</p>
      <button class="addcart">Add To Cart</button>
      </div>
    </div>
</template>


<script>
export default {
  props: ["src", "name", "price"],
  name: 'product',
}
</script>

<style lang="scss" scoped>
.product{
  padding: 10px;
  background: #fff;
    box-shadow: 0 0 15px #33333340;
    border-radius: 10px;
    margin: 10px;
    .productImg{
      width: 200px;
    }
    .price{
      margin: 10px 0;
      font-weight: 600;
    }
    .productName{
      font-size: 20px;
      margin: 10px
    }
    .addcart{
      background: #FF5C15;
      color: #fff;
      border: none;
      padding: 5px 10px;
      margin: 20px;
      margin-top: 0;
      font-weight: 600;
      border-radius: 5px;
      box-shadow: 0 0 20px #ff5c1585;
      }
  }

</style>