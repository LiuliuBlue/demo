<template>
  <div class="NavBar">
  vueAdmin后台管理系统
   <el-dropdown>
    <span class="el-dropdown-link">
   text
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
     
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
  
</template>
<script setup></script>
<style lang="scss" scoped>
.NavBar {
  width: 100%;
  height: 50px;
  line-height:50px;
  color: black;
  // margin-left: 700px;
  left: 100px;
  text-align: center;
  background-color: aqua;

}
.el-dropdown-link{
  width: 50px;
  height: 50px;
  line-height: 50px;
  // padding-left: 300px;
}
</style>
