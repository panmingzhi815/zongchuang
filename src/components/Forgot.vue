<template>
  <div>
    <x-header class="my-header">找回密码</x-header>
    <group>
      <x-input title="手机号" v-model="username" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="新密码" v-model="password" type="password"></x-input>
      <x-input title="验证码" class="weui-vcode">
        <x-button slot="right" type="primary" :gradients="['#1D62F0','#1D62F0']" mini :disabled="timeSec<60" @click.native="resetTime">{{ timeValidButton }}</x-button>
      </x-input>
    </group>
     <box gap="15px 20px">
      <x-button :gradients="['#1D62F0','#1D62F0']">确认找回</x-button>
    </box>
  </div>
</template>

<script>
import { XHeader, XInput, Group, XButton, Box } from "vux";
var timeout;
export default {
  components: {
    XHeader,
    XInput,
    Group,
    XButton,
    Box
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