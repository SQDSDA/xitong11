

<template>

  <div class="common-layout">
    <el-container>
      <el-container >
        <daohang/>
          <xinjianrenwu/>
        <el-footer>Footer</el-footer>
      </el-container>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Xinjianrenwu from "@/components/xinjianrenwu.vue";
import daohang from "@/components/daohang.vue";
import Daohang from "@/components/daohang.vue";
</script>

<style scoped>

</style>
