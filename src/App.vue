

<template>
  <daohang/>
  <div class="common-layout layout11">
    <el-container>
      <el-container  class="main-container1">
        <xinjianrenwu/>
        <qingxi/>
      </el-container>
      <el-container  class="main-container1">
      <yulan/>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Xinjianrenwu from "@/components/xinjianrenwu.vue";
import daohang from "@/components/daohang.vue";
import Daohang from "@/components/daohang.vue";
import qingxi from "@/components/qingxi.vue"
import Yulan from "@/components/yulan.vue";
</script>

<style scoped>
.layout11{
  display: flex;
  flex-direction: column; /* 设置垂直布局 */
}
.main-container1 {
  display: flex;
  flex-direction: column; /* 设置垂直布局 */
  height: 100%; /* 使用视口高度作为容器的高度 */
  flex: 1;
}


</style>
