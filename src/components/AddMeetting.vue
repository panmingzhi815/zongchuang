<template>
  <div>
    <x-header class="my-header">会议室预定</x-header>
    <group>
      <x-input title="会议主题"  placeholder="请输入会议主题"></x-input>
    </group>
    <panel :list="list" type="1"></panel>
    <box gap="10px 10px">
      <button-tab>
        <button-tab-item selected>今天(9月21日)</button-tab-item>
        <button-tab-item>明天(9月22日)</button-tab-item>
        <button-tab-item>后天(9月23日)</button-tab-item>
      </button-tab>
    </box>
    <div class="check-panel">
      <checker v-model="selectMeettingTimes" type="checkbox" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
        <checker-item v-for="i in meettingTimes" :key="i.name" :value="i.name">{{i.name}}</checker-item>
      </checker>
    </div>
    <box gap="15px 20px">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="saveMeetting">确认预定</x-button>
    </box>
  </div>
</template>
<script>
import { Panel, Group, XInput,XHeader,ButtonTab, ButtonTabItem,Box, Checker, CheckerItem,XButton,AlertModule} from 'vux'

export default {
  components: {
    Panel,
    Group,
    XInput,
    XHeader,
    ButtonTab,
    ButtonTabItem,
    Box,
    Checker, 
    CheckerItem,
    XButton,
    AlertModule
  },
  methods:{
    saveMeetting:function(){
      this.selectMeettingTimes.sort();
      var length = this.selectMeettingTimes.length;
      for(var i=0;i<this.selectMeettingTimes.length;i++){
        if(i != this.selectMeettingTimes.length - 1){
          var split1 = this.selectMeettingTimes[i].split("-");
          var split2 = this.selectMeettingTimes[i+1].split("-");
          if(split1[1] != split2[0]){
            console.log(split1);
            console.log(split2);       
            AlertModule.show({ title: "提示", content: "会议时间应该是连续的" });
            return;
          }
        }
      }

      var time = this.selectMeettingTimes[0].split("-")[0] + this.selectMeettingTimes[length-1].split("-")[1];
      this.meetting.time = time;
      this.meetting.meetingRoom = this.list[0].title;

      this.$store.state.meettingList.push(this.meetting);
      AlertModule.show({ title: "提示", content: "预定成功" });
      this.$router.push("/Main");
    }
  },
  data () {
    return {
      meetting:{
        meettingName:"",
        time:"",
        meetingRoom:""
      },
      meettingTimes:[
          {name:"08:00-08:30",type:0},{name:"08:30-09:00",type:0},{name:"09:00-09:30",type:0},{name:"09:30-10:00",type:0},{name:"10:00-10:30",type:0},
          {name:"10:30-11:00",type:0},{name:"11:00-11:30",type:0},{name:"11:30-12:00",type:0},{name:"12:00-12:30",type:0},{name:"12:30-13:00",type:0},
          {name:"13:00-13:30",type:0},{name:"13:30-14:00",type:0},{name:"14:00-14:30",type:0},{name:"14:30-15:00",type:0},{name:"15:00-15:30",type:0},
          {name:"15:30-16:00",type:0},{name:"16:00-16:30",type:0},{name:"16:30-17:00",type:0},{name:"17:00-17:30",type:0},{name:"17:30-18:00",type:0}
          ,{name:"18:00-18:30",type:0}
        ],
      selectMeettingTimes: [],
      type: '1',
      list: [this.$store.state.meettingRoomList[0]]
    }
  }
}
</script>

<<style>
.check-panel{
  text-align:center;
}
.demo5-item {
  width: 90px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 3px;
}
.demo5-item-selected {
  background: #ffffff url(../assets/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>
