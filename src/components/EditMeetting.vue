<template>
  <div>
    <x-header class="my-header">{{headerTitleName}}</x-header>
    <group>
      <x-input title="会议主题"  placeholder="请输入会议主题" v-model="meetting.meettingName"></x-input>
    </group>
    <panel :list="list" type="1"></panel>
    <box gap="10px 10px">
      <button-tab v-model="selectMeettingDay">
        <button-tab-item v-for="item in this.$store.state.meettingDates" :key="item.label">{{item.label}}</button-tab-item>
      </button-tab>
    </box>
    <div class="check-panel">
      <checker v-model="selectMeettingTimes" type="checkbox" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
        <checker-item v-for="i in meettingTimes" :key="i.name" :value="i.name">{{i.name}}</checker-item>
      </checker>
    </div>
    <box gap="15px 20px">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="saveMeetting">确认修改</x-button>
      <x-button v-if="meetting.id != null" :gradients="['#FF2719', '#FF61AD']" @click.native="deleteMeetting">取消预定</x-button>
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
    deleteMeetting:function(){
        this.$store.commit("DELETE_MEETTING",this.meetting.id);
        AlertModule.show({ title: "提示", content: "删除预定会议成功" });
        this.$router.push("/Main");
    },
    saveMeetting:function(){
      if(this.selectMeettingTimes.length ==0){
        AlertModule.show({ title: "提示", content: "请选择会议时间" });
        return;
      }
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
      var date = this.$store.state.meettingDates[this.selectMeettingDay].time;
      this.meetting.startTime = date + " " + this.selectMeettingTimes[0].split("-")[0];
      this.meetting.endTime = date + " " + this.selectMeettingTimes[length-1].split("-")[1];
      this.meetting.meetingRoom = this.list[0];

      this.$store.commit("ADD_MEETTING_LIST",this.meetting);
      AlertModule.show({ title: "提示", content: "预定成功" });
      this.$router.push("/Main");
    }
  },
  data () {
    return {
      meetting:{
        id:null,
        meettingName:"",
        startTime:"",
        endTime:"",
        meetingRoom:null
      },
      meettingTimes:this.$store.state.meettingTimes,
      list: [],
      selectMeettingTimes: [],
      selectMeettingDay:0
    }
  },
  computed:{
    headerTitleName:function(){
      var id = this.$route.query.id;
      if(id){
        var meetting = this.$store.getters.FIND_MEETTING_BYID(id);
        if(meetting != undefined){
          this.meetting = meetting;
          this.list = [this.meetting.meetingRoom];
          for(var i=0;i<this.$store.state.meettingDates.length;i++){
            if(this.$store.state.meettingDates[i].time == this.meetting.startTime.substring(0,10)){
              this.selectMeettingDay = i;
              break;
            }
          }
          return "编辑预定会议";
        }
      }

      var mr_id = this.$route.query.mr_id;
      if(mr_id){
        var meettingRoom = this.$store.getters.FIND_MEETTING_ROOM_BYID(mr_id);
        this.list = [meettingRoom];
        return "预定会议室";
      }

      AlertModule.show({ title: "提示", content: "会议室加载失败" });
      this.$router.push("/Main");
      return;
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
