<template>
    <div class="post-box">
        
        <span class="post-views">{{ views }}</span>
        <h3 class="post-titile">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">{{ content | shorten(200) }}</p>
        <div class="row">
            <div class="col-md-6">
                <span class="author"><img :src="avatar" />{{ author }}</span>
            </div>
            <div class="col-md-6">
                <span class="category">{{ category }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views", "title", "date", "content", "author", "category", "avatar"],
    name: 'post'
}
</script>

<style lang="scss" scoped>
.post-box{
    text-align: left;
    padding: 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 14px #dcdcdc;
    margin: 10px;
    .post-views{
        float: right;
        padding: 3px 6px;
        background: #FF621E;
        color: #fff;
        border-radius: 3px;
        margin: 0px;
    }
    .post-titile{
        text-align: left;
        font-size :30px;
    }
    .post-date{
        background: #333;
        color: #fff;
        border-radius: 3px;
        padding: 2px 5px;
        font-size: 12px;
    }
    .post-content{
        margin: 5px 0;
        color: rgb(47, 47, 47);
    }
}
</style>