<template>
  <el-row :style="{margin:'20px -15px 0px 8px',
}" class="el_row11">
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark --el-box-shadow-darkk" >
        <span class="text_header">&nbsp;&nbsp;数据分析与清洗</span></div></el-col>
  </el-row>
  <el-footer :style="{boxShadow:'--el-box-shadow-dark',
  width:'100%', height:'100%',
  margin:'0px 0px 5px 10px'}" class="inline-flex --el-box-shadow-dark">
    <div class="buttonn_com">
      <qingxisub/>
    </div>
    <div class="buttonn_com">
    <buttonn/>
    </div>
  </el-footer>
</template>

<script setup>

import qingxisub from "@/components/qingxisub.vue";
import Buttonn from "@/components/buttonn.vue";
</script>

<style scoped>

.buttonn_com{
  margin: 10px 20px 10px 10px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  width: 100%;
}

.ep-bg-purple-dark{
  background: #f2f2f2;
}
.--el-box-shadow-darkk{
  width: 100%;
  margin-right: -3px; /* 使用负边距使子元素超出父元素 */
}
.el_row11{
}
.--el-box-shadow-dark{
/*background-color: #333;*/
  padding: 5px; /* 设置内边距 */
  box-shadow: 2px 2px 4px 4px #F5F7FA;
}

.text_header{
  /*margin-top: 10px;*/
  line-height: 40px;
  font-weight: bold;
  left: 20px;
  margin-right: 30px;
  /*font-size: "bold";*/
}
</style>
