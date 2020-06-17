<template>
    <div class="header">
     <div class="logo">BLogWebSite</div>
      <ul>
      <router-link to="/" tag="li">Home</router-link> 
      <router-link to="/about" tag="li">About</router-link> 
      <router-link to="/blog" tag="li">Blog</router-link> 
      <router-link to="/news" tag="li">News</router-link>
    </ul>
    <div class="logIn" id="appd">
        <div class="row">
            <div class="col-md-4"><input type="email" class="loginput" placeholder="User Name"></div>
            <div class="col-md-4"><input type="Password" class="loginput" placeholder="Password" /></div>
            <div class="col-md-2"><button  class="hide">login</button></div>
        </div>
    </div>
    </div>
</template>

<script>

export default{
    name: 'AppHeader',
}

</script>
<style lang="scss" scoped>
.header {
    background-color: #fff;
        border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    font-weight: 600;
    box-shadow: 0px 3px 5px #3333330f;
    .logo{
    font-size: 24px;
    color: #FF5C15;
    padding: 20px;
    float: left;
    width: 200px;
        }
    ul{
     list-style-type: none;
    margin: 0;
    display: flex;
    float: left;
    padding: 16px;
    width: calc(100% - 700px);
    li{
        padding: 10px;
        color: #333;
        cursor: pointer;
    }
        }
    .logIn{
        margin: 23px 0;
        width: 500px;
        display: inline-block;
        color: #333;
        .loginput{
            height: 30px;
    padding: 0px 10px;
    border: 1px solid #33333363;
    border-radius: 6px;
    font-size: 14px;
        }
    }
    .hide{
        display: inline-block;
        background: #FF5C15;
        border: none;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
    }
}
</style>