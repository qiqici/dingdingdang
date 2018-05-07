<template>
  <div>
      <h4>发表评论</h4>
      <hr>
      <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

     <ul class="mui-table-view">
      <li v-for="(v, i ) in commentList" :key="i" class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <p class="comment-tilte">
            <span>第{{i+1}}楼</span>
            <span>发表时间：{{v.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
            <span class="mui-pull-right">
              {{v.user_name}}
            </span>
          </p>
          <img src="../../assets/images/menu1.png" class="mui-media-object mui-pull-right">
          <div class="mui-media-body">
            <p class="mui-ellipsis comment-content" v-text="v.content"></p>
          </div>
        </a>
      </li>
    </ul>
    <mt-button type="danger" v-show="showMoreBtn" size="large" :plain="true" @click="more">加载更多</mt-button>

  </div>
</template>

<script>
import axios from "axios"
import dateformat from "../../filters/dateformat";
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      commentList:[],
      currentIndex:1,
      showMoreBtn:true,
      content:""
    }
  },
  props:["id"],
  created(){
    // alert(this.id);
    this.getData();
    axios({
      url:"http://www.escook.cn:3000/api/getcomments/"+this.id+"?pageindex="+this.currentIndex
    }).then(res=>{
      if(res.data.status==0){
        this.commentList=res.data.message;
        if(res.data.message.length==0){
          this.showMoreBtn=false;
          Toast("没有更多的数据了")
        }
      }
    })
  },
  filters:{
    dateformat
  },
  methods:{
    postComment(){
      // alert(this.content)
      if(this.content.trim()){
        axios({
          url:"http://www.escook.cn:3000/api/postcomment/"+this.id,
          method:"post",
          data:"content"+this.content
        }).then(res=>{
          if(res.data.status==0){
            this.commentList.unshift({
              add_time:new Date(),
              content:this.content,
              user_name:"匿名用户",
            });
            this.content="";
          }
        })
      }
    },
    getData(){
      axios({
        url:"http://www.escook.cn:3000/api/getcomments/"+this.id+"?pageindex="+this.currentIndex
      }).then(res=>{
        if(res.data.status==0){
          // this.commentList.push(...res.data.message);
          this.commentList=this.commentList.concat(res.data.message)
        }
      })
    },
    more(){
      this.currentIndex++;
      this.getData();
    }
  }
}
</script>

<style scoped>
textarea{
    margin-top: 10px;
    margin-bottom: 0px;
}
</style>
