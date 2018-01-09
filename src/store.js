import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var moment = require('moment');
const store = new Vuex.Store({
  state: {
    meettingRoomList: [{
      id:1,
      src: require("./assets/room.jpg"),
      title: '二楼205会议室（30-50人）',
      desc: '编号：10001',
      url:{
        path:"/EditMeetting?mr_id=" + 1
      }
    }, {
      id:2,
      src: require("./assets/room.jpg"),
      title: '二楼206会议室（10-20人）',
      desc: '编号：10002',
      url:{
        path:"/EditMeetting?mr_id=" + 2
      }
    }], 
    meettingTimes: [
      { name: "08:00-08:30", type: 0 }, { name: "08:30-09:00", type: 0 }, { name: "09:00-09:30", type: 0 }, { name: "09:30-10:00", type: 0 }, { name: "10:00-10:30", type: 0 },
      { name: "10:30-11:00", type: 0 }, { name: "11:00-11:30", type: 0 }, { name: "11:30-12:00", type: 0 }, { name: "12:00-12:30", type: 0 }, { name: "12:30-13:00", type: 0 },
      { name: "13:00-13:30", type: 0 }, { name: "13:30-14:00", type: 0 }, { name: "14:00-14:30", type: 0 }, { name: "14:30-15:00", type: 0 }, { name: "15:00-15:30", type: 0 },
      { name: "15:30-16:00", type: 0 }, { name: "16:00-16:30", type: 0 }, { name: "16:30-17:00", type: 0 }, { name: "17:00-17:30", type: 0 }, { name: "17:30-18:00", type: 0 }
      , { name: "18:00-18:30", type: 0 }
    ],
    meettingDates:[{
      label:"今天(" + moment().format("M月D日") + ")",
      time:moment().format("YYYY-MM-DD")
    },{
      label:"明天(" + moment().add(1, 'd').format("M月D日") + ")",
      time:moment().add(1, 'd').format("YYYY-MM-DD")
    },{
      label:"后天(" + moment().add(2, 'd').format("M月D日") + ")",
      time:moment().add(2, 'd').format("YYYY-MM-DD")
    }],
    meettingList: []
  },
  mutations: {
    ADD_MEETTING_LIST(state, m) {
      m.id = state.meettingList.length + 1
      state.meettingList.push(m);
    },
    DELETE_MEETTING(state, id) {
      for(var i=0;i<state.meettingList.length;i++){
        if(state.meettingList[i].id == id){
          state.meettingList.splice(i,1);
          break;
        }
      }
    }
  },
  getters: {
    GET_MEETTING_LIST(state) {
      var result = [];
      for (var i = 0; i < state.meettingList.length; i++) {
        var meetting = state.meettingList[i];
        var date = meetting.startTime.substring(0,10);
        var time_start = meetting.startTime.substring(11,16)
        var time_end = meetting.endTime.substring(11,16)
        result.push({
          src: require("./assets/meetting.png"),
          desc: meetting.startTime.substring(0,10) +"(" + time_start + "至" + time_end+")",
          title: meetting.meettingName + "<br/>" + meetting.meetingRoom.title,
          url: {
            path: '/EditMeetting?id=' + meetting.id
          }
        });
      }
      return result;
    },
    FIND_MEETTING_BYID(state,getters){
      return function(id){
        for (var i = 0; i < state.meettingList.length; i++) {
          if(state.meettingList[i].id == id){
            return state.meettingList[i];
          }
        }
      }
    },
    FIND_MEETTING_ROOM_BYID(state,getters){
      return function(mr_id){
        for (var i = 0; i < state.meettingRoomList.length; i++) {
          if(state.meettingRoomList[i].id == mr_id){
            return state.meettingRoomList[i];
          }
        }
      }
    }
  }
})

export default store