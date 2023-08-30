

<template>
  <el-row :style="{margin:'20px 5px 0px 25px'
}" class="el_row11">
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark --el-box-shadow-darkk" >
        <span class="text_header">&nbsp;&nbsp;爬取数据预览</span></div></el-col>
  </el-row>
  <el-main :style="{boxShadow:'--el-box-shadow-dark', height:'100%',
  margin:'0px 10px 0px 28px'}" class="inline-flex --el-box-shadow-dark">
    <div class="card_row">
    <el-card class="box-card1" shadow="always">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
<!--      第一张图表-->
      <Line_area/>
    </el-card>
    <el-card class="box-card2" shadow="always">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <World/>
    </el-card>
    </div>
    <div class="table_row">
      <tablee/>
    </div>

  </el-main>
</template>

<script setup>
import Tablee from "@/components/subsub/tablee.vue"
import Line_area from "@/components/subsub/line_area.vue";
import World from "@/components/subsub/world.vue";

</script>

<style scoped>
.yulan_main{
  margin:20px 0px 0px 28px;
  flex: 1;
  padding: 0px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.ep-bg-purple-dark{
  background: #f2f2f2;
}
.--el-box-shadow-darkk{
  margin-right: -10px; /* 使用负边距使子元素超出父元素 */
}
.el_row11{
  flex: 1;
  justify-content: space-between;

}

.card_row{
  display: flex;
}
.--el-box-shadow-dark{

  /*background-color: #333;*/
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


.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card1 {
   margin-right: 10px;
  flex: 1;
}

.box-card2 {
  margin-left: 10px;
  flex: 1;
}
.table_row{
  margin-top: 30px;
}
</style>