<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      pageName: 'About Us',
      pageDescription: 'Our technology allows employers to buy a monthly subscription per employee, giving them unlimited access to hundreds of buses operated directly by us.'
    };
  },
    name: 'About'
}
</script>