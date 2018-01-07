<template>
  <div>
    <x-header class="my-header">系统设置</x-header>
    <group>
      <x-switch title="启动时直接显示二维码" v-model="autoOpenEqcode"></x-switch>
    </group>

    <group>
      <cell title="当前版本" v-model="currentVersion"></cell>
      <cell title="检查更新" is-link @click.native="checkUpdate"></cell>
    </group>
    <box gap="15px 20px">
      <x-button :gradients="['#FF2719', '#FF61AD']" link="/Login">退出登录</x-button>
    </box>
  </div>
</template>

<script>
import {
  XHeader,
  XSwitch,
  XButton,
  Group,
  Cell,
  Box,
  Alert,
  AlertPlugin,
  AlertModule
} from "vux";
export default {
  components: {
    XHeader,
    XSwitch,
    XButton,
    Group,
    Cell,
    Box,
    Alert,
    AlertModule
  },
  data() {
    return {
      autoOpenEqcode: false,
      currentVersion: "1.0"
    };
  },
  mounted(){
    if ("undefined" != typeof api) {
        this.currentVersion = api.version;
    }
  },
  methods: {
    checkUpdate: function() {
      if ("undefined" == typeof api) {
        AlertModule.show({ title: "提示", content: "本功能需要apicloud支持，请打包后使用" });
        return;
      }

      var mam = api.require("mam");
      mam.checkUpdate(function(ret, err) {
        if (ret) {
          var result = ret.result;
          if (result.update == true && result.closed == false) {
            var str =
              "新版本型号:" +
              result.version +
              ";\r\n更新提示语:" +
              result.updateTip +
              ";\r\n发布时间:" +
              result.time;
            api.confirm(
              {
                title: "有新的版本,是否下载并安装 ",
                msg: str,
                buttons: ["确定", "取消"]
              },
              function(ret, err) {
                if (ret.buttonIndex == 1) {
                  if (api.systemType == "android") {
                    api.download(
                      {
                        url: result.source,
                        report: true
                      },
                      function(ret, err) {
                        if (ret && 0 == ret.state) {
                          /* 下载进度 */
                          api.toast({
                            msg: "正在下载应用" + ret.percent + "%",
                            duration: 2000
                          });
                        }
                        if (ret && 1 == ret.state) {
                          /* 下载完成 */
                          var savePath = ret.savePath;
                          api.installApp({
                            appUri: savePath
                          });
                        }
                      }
                    );
                  }
                  if (api.systemType == "ios") {
                    api.installApp({
                      appUri: result.source
                    });
                  }
                }
              }
            );
          } else {
            AlertModule.show({ title: "提示", content: '暂无更新' });
          }
        } else {
          AlertModule.show({ title: "提示", content: err.msg });
        }
      });
    }
  }
};
</script>

<style>

</style>