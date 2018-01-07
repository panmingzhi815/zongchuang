<template>
  <div>
    <x-header class="my-header">预定会议室
      <a slot="right">我要预定</a>
    </x-header>
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