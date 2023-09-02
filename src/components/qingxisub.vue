<template>
  <el-row :gutter="10" :align="'middle'">
    <el-col :span="4">
      <div class="btn-pilll">
        <span class="text_ss">数据清洗：</span>
      </div>
    </el-col>
    <el-col :span="15">
  <el-checkbox-group v-model="checkList" class="texttt">
    <el-checkbox label="全选"/>
    <el-checkbox label="去重"/>
    <el-checkbox label="去html"/>
    <el-checkbox label="去乱码" />
    <el-checkbox label="去网址" />
    <el-checkbox label="去@用户"/>
  </el-checkbox-group>

    </el-col>
    <el-col :span="5">
      <el-button type="success" plain class="buttooon">Success</el-button>
    </el-col>
  </el-row>
</template>

<style scoped>
.buttooon{
  position: relative;
  margin: 10px 20px 10px 10px;
  padding: 5px 12px;
  height: 25px;
  width: 100%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.btn-pilll{
  display: flex;
  justify-content: right;
  align-items: center;
}

el-button{
  height: 45px;
  width: 100%;
}

.text_ss{
  font-weight: bold;
}

.texttt{
  margin: 10px 0px 10px 5px;
  padding: 5px 12px;
}

</style>


<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref([])
</script>
