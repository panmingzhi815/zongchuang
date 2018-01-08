import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    meettingRoomList: [{
        src: require("./assets/room.jpg"),
        title: '二楼205会议室（30-50人）',
        desc: '编号：10001',
        url: {
          path: '/AddMeetting'
        }
      }, {
        src: require("./assets/room.jpg"),
        title: '二楼206会议室（10-20人）',
        desc: '编号：10002',
        url: {
          path: '/AddMeetting'
          }
      }],
    meettingList:[]
  },
  mutations:{
      
  },
  getters:{
      GET_MEETTING_LIST:state=>{
          var result = [];
          for(m in state.meettingList){
              result.push({
                  src:require("./assets/meetting.png"),
                  title:m.time,
                  desc:m.meettingName
              });
          }
          console.log(result);
          return result;
      }
  }
})

export default store