<template>
  <div class="blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="posts-area">
                    <BlogPost v-for="post in posts" v-bind:key="post.id" :views="post.view" :title="post.title" :date="post.addDate" :content="post.postContent" :author="post.author" :category="post.category" :avatar="post.avatar" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="sidebar">
                    <blogSidebar />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/blog/blogPosts.vue"
import blogSidebar from "@/components/blog/blogSidebar.vue"
import jsonPosts from "../json/postData.json" 


export default {
  data: ()=>{
    return {
      pageName: 'Blogs',
      pageDescription: 'Our technology allows employers to buy a monthly subscription per employee, giving them unlimited access to hundreds of buses operated directly by us.',
      posts : jsonPosts,
    };
  },
    name: 'Blog',
    components: {
        BlogPost,
        blogSidebar
    }
}
</script>