<template>
     <div>
       <x-header class="my-header">二维码</x-header>
       <flexbox>
      <flexbox-item>
        <div class="flex-demo">
          <img src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=7bcb659c9745d688a302b5a29cf91a23/2934349b033b5bb571dc8c5133d3d539b600bc12.jpg"/>
        </div>
      </flexbox-item>
    </flexbox>
     <flexbox>
      <flexbox-item>
        <p class="tips">扫描二维码开门</p>
      </flexbox-item>
    </flexbox>
     </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem } from "vux";
export default {
  components: {
    XHeader,Flexbox, FlexboxItem
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style>

.tips{
  text-align: center;
  color: #3f4444;
  font-size: 20pt;
}

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: rgb(64, 124, 243);
  border-radius: 4px;
  background-clip: padding-box;
  margin: 1.5rem;
  box-shadow: 1px 5px 15px rgb(64, 124, 243);
}

.flex-demo img{
  width: 10rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 3%;
  border: 4px solid #ececec;
}
</style>