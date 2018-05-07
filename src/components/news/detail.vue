<template>
  <div class="page news">
     <div class="news-detail">
       <div class="news-title">
         <h4 v-text="newsInfo.title"></h4>
       </div>
       <div class="news-content"></div>
       <p class="news-info">
         <span>发表时间:{{newsInfo.add_time}}</span>
         <span class="mui-pull-right">点击:{{newsInfo.click}}次</span>
       </p>
       <hr>
     </div>
     <div class="news-comment" v-html="newsInfo.content">
       
     </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      newsInfo:{}
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getnew/"+this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        this.newsInfo=res.data.message[0]
      }
    })
  }
}
</script>

<style>
.news {
    padding-left: 5px;
    padding-right: 5px;
}
.news img{
  width:100%;
}
</style>
