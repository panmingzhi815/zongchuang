<template>
  <div>
    <blur :blur-amount=20 :url="url">
      <p class="center">
        <img :src="url" />
        <br/>
        潘明智
      </p>
    </blur>
      <group>
      <cell title="门禁二维码" is-link>
        <i slot="icon" width="20" class="icon iconfont">&#xe601;</i>
      </cell>
      <cell title="预定会议室" is-link>
        <i slot="icon" width="20" class="icon iconfont">&#xe65d;</i>
      </cell>
      <cell title="系统设置" is-link>
        <i slot="icon" width="20" class="icon iconfont">&#xe607;</i>
      </cell>
    </group>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur,Grid, GridItem,GroupTitle,Group, XSwitch,Cell  } from 'vux'

export default {
  components: {
    Blur,
    Flexbox,
    FlexboxItem,
    Grid, 
    GridItem,
    GroupTitle,
    Group, 
    XSwitch,
    Cell
  },
  data () {
    return {
      images: [
        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: require('../assets/banner.png')
    }
  }
}
</script>

<style>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
  margin-bottom: 1rem
}
i{
  margin-right: 0.5rem;
}

@font-face {
  font-family: "iconfont";
  src: url('../icon/iconfont.eot'); /* IE9*/
  src: url('../icon/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../icon/iconfont.woff') format('woff'), /* chrome, firefox */
  url('../icon/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../icon/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>