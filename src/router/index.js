import Vue from 'vue'
import Router from 'vue-router'

// 引入 tabbar中的组件
import Home from "@/components/tabbar/home"
import Member from "@/components/tabbar/member"
import Cart from "@/components/tabbar/cart"
import Search from "@/components/tabbar/search"

// 引入商品相关的组件
import GoodsList from "@/components/goods/list"
import GoodDetail from "@/components/goods/detail"
import GoodsDesc from "@/components/goods/desc"
import GoodsComment from "@/components/goods/comment"


// 引入新闻相关的组件
import NewsList from "@/components/news/list"
import NewsDetail from "@/components/news/detail"


// 引入图片相关的组件
import PicList from "@/components/pictures/list"
import PicDetail from "@/components/pictures/detail"

Vue.use(Router)

export default new Router({
  routes: [
    //tabbar中的路由
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/member",
      component: Member
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/search",
      component: Search
    },

    //商品的
    {
      path: "/goods",
      component: GoodsList
    },
    {
      path: "/goods/detail/:id",
      component: GoodDetail
    },
    {
      path: "/goods/desc/:id",
      component: GoodsDesc
    },
    {
      path: "/goods/comment/:id",
      component: GoodsComment
    },

    // 新闻
    {
      path: "/news",
      component: NewsList
    },
    {
      path: "/news/detail/:id",
      component: NewsDetail
    },

    //  图片
    {
      path: "/pics/:id",
      component: PicList
    },
    {
      path: "/pics/detail/:id",
      component: PicDetail
    }
  ],
  linkActiveClass: "mui-active"
})
