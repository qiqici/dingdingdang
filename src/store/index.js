import Vue from "vue"
import Vuex from "vuex";
Vue.use(Vuex);

function readCartsFromStorage() {
  var cartsStr = localStorage.getItem("carts-info");
  if (cartsStr == null || cartsStr.trim() == "") {
    return []
  } else {
    return JSON.parse(cartsStr);
  }
}

function writeCartsToStorage(carts) {
  localStorage.setItem("carts-info", JSON.stringify(carts));
}

export default new Vuex.Store({
  state: {
    carts: readCartsFromStorage()
  },
  getters: {
    totalCount: state => {
      var result = 0;
      state.carts.forEach(v => {
        result += v.count;
      })
      return result;
    },
    getIds:state=>{
        return state.carts.map(v=>v.id).join(",");
    },
    getCountById:state=>id=>{
        var temp=state.carts.find(v=>v.id==id);
        return temp.count;
    }
  },
  mutations: {
    addToCarts(state, cart) {
      // console.log(cart);
      // state.carts.push(cart);
      let temp = state.carts.find(v => {
        return v.id == cart.id;
      })
      if (temp) {
        temp.count += cart.count;
      } else {
        state.carts.push(cart);
      }
      writeCartsToStorage(state.carts);
    },
    updateCarts(state,cartsList){
        cartsList.forEach(v=>{
            let cart=state.carts.find(e=>{
                return e.id==v.id;
            })
            cart.count=v.count;
        })
        writeCartsToStorage(state.carts);
    }
  }
})
