

<template>
  <daohang/>
  <div class="common-layout layout11">
    <el-container>
      <el-container  class="main-container1">
        <xinjianrenwu/>
        <qingxi/>
      </el-container>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script setup>
import Xinjianrenwu from "@/components/xinjianrenwu.vue";
import daohang from "@/components/daohang.vue";
import Daohang from "@/components/daohang.vue";
import qingxi from "@/components/qingxi.vue"
</script>

<style scoped>
.layout11{
  display: flex;
  flex-direction: column; /* 设置垂直布局 */
  width:50%;
}
.main-container1 {
  display: flex;
  flex-direction: column; /* 设置垂直布局 */
  height: 100%; /* 使用视口高度作为容器的高度 */
  width: 100%;
}


</style>
