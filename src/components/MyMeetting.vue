<template>
  <div>
    <x-header class="my-header">会议室列表
    </x-header>
    <panel :list="list" type="1" @on-img-error="onImgError"></panel>
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
      list: this.$store.getters.GET_MEETTING_LIST
    }
  }
}
</script>