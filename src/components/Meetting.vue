<template>
  <div>
    <x-header class="my-header">预定会议室
      <a slot="right">我的预定</a>
    </x-header>
    <panel header="请选择要预约的会议室" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>
<script>
import { Panel, Group, Radio,XHeader } from 'vux'

export default {
  components: {
    Panel,
    Group,
    Radio,
    XHeader
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      type: '1',
      list: [{
        src: require("../assets/room.jpg"),
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '二楼205会议室（30-50人）',
        desc: '编号：10001',
        url: '/component/cell'
      }, {
        src: require("../assets/room.jpg"),
         title: '二楼206会议室（10-20人）',
        desc: '编号：10002',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    }
  }
}
</script>