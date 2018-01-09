<template>
  <div>
    <x-header class="my-header">会议室列表</x-header>
    <panel :list="list" type="1"></panel>
  </div>
</template>
<script>
import { Panel,XHeader } from 'vux'

export default {
  components: {
    Panel,
    XHeader
  },
  data () {
    return {
      list: this.$store.state.meettingRoomList
    }
  }
}
</script>