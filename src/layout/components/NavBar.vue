<template>
  <div class="navBox">
    <div class="left"><b>VueAdmin后台管理系统</b></div>
    <div class="right">
      <img class="portrait" :src="$store.getters.userInfo.avatar" />
      <span class="dropdown">
        <el-dropdown>
          {{ $store.getters.userInfo.username }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push('/')"
                >个人中心</el-dropdown-item
              >
              <el-dropdown-item @click="data.dialogVisible = true"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </span>
    </div>
    <el-dialog v-model="data.dialogVisible" title="警告！" width="30%">
      <span>确定退出吗？</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="data.dialogVisible = false">关闭</el-button>
          <el-button type="primary" @click="logOut">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
// 对话框的默认状态
const data = reactive({
  dialogVisible: false
})
/**
 * @描述 退出登录
 */
const logOut = () => {
  data.dialogVisible = false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 500)
  }).then(() => {
    store.commit('user/logout')
  })
}
</script>
<style lang="scss" scoped>
.navBox {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #17b3a3;
}
.right {
  .portrait {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .dropdown {
    margin: 0 10px;
  }
}
</style>
