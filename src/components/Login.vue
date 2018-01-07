<template>
  <div>
    <x-header class="my-header" :left-options="{showBack: false}">用户登录</x-header>
    <div class="logo-panel">
      <img class="logo" src="../assets/logo.png"/>
    </div>
    <group>
      <x-input title="手机号" v-model="username" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="密　码" v-model="password" type="password"></x-input>
    </group>
     <box gap="15px 20px">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="login">登录</x-button>
    </box>
    <box gap="10px 20px">
    <flexbox>
      <flexbox-item class="pull-left"><router-link to="Register" class="text-tips">用户注册</router-link></flexbox-item>
      <flexbox-item class="pull-right"><router-link to="Forgot" class="text-tips">忘记密码</router-link></flexbox-item>
    </flexbox>
      </box>
  </div>
</template>

<script>
import { XHeader, XInput, Group,XButton,Box,Flexbox, FlexboxItem} from "vux";
export default {
  components: {
    XHeader,
    XInput,
    Group,
    XButton,
    Box,
    Flexbox, 
    FlexboxItem
  },
  data() {
    return {
      username:"",
      password:""
    };
  },
  methods:{
    login:function(){
      console.log('/Main');
      this.$router.push('/Main')
    }
  }
};
</script>

<style>

.logo-panel{
  text-align: center;
  width: 100%;
}
.logo{
  width: 6rem;
  height: 6rem;
  margin-top: 1rem;
}

</style>