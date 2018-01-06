<template>
  <div style="height:100%;background-color:#1D62F0">
    <x-header class="my-header">门禁</x-header>
  </div>
</template>

<script>
import { ViewBox } from "vux";
var timeout;
export default {
  components: {
    ViewBox
  },
  data() {
    return {
      username: "",
      password: "",
      timeSec: 60,
      timeValidButton: "发送验证码"
    };
  },
  created(){
     console.log("created");
  },
  methods: {
      resetTime:function() {
        this.timeSec = 0;
      }
  },
  watch:{
     $router:'cleanValidTime'
  },
  mounted() {
    var that = this;
    timeout = setInterval(function() {
      console.log(that.timeSec);
      that.timeSec = that.timeSec + 1;
      if (that.timeSec >= 60) {
        that.timeValidButton = "发送验证码";
      } else {
        that.timeValidButton = 60 - that.timeSec + "秒";
      }
    }, 1000);
  },
  beforeRouteLeave(to, from, next){
    if(timeout){
      console.log("clearTimeout");
      clearTimeout(timeout);
    }
    next();
  }
};

</script>

<style>
.my-header {
  background-color: #1d62f0 !important;
}
.logo-panel {
  text-align: center;
  width: 100%;
}
.logo {
  width: 6rem;
  height: 6rem;
  margin-top: 1rem;
}
.pull-left {
  text-align: left;
}
.pull-right {
  text-align: right;
}
</style>