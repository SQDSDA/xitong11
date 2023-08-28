<template>
  <el-row :style="{margin:'20px -15px 0px 8px',
}" class="el_row11">
    <el-col :span="24">
      <div class="grid-content ep-bg-purple-dark --el-box-shadow-darkk" >
        <span class="text_header">&nbsp;&nbsp;新建爬取任务</span></div></el-col>
  </el-row>
  <el-aside :style="{boxShadow:'--el-box-shadow-dark',
    width:'100%',
    margin:'0px 0px 5px 10px'}" class="inline-flex --el-box-shadow-dark"
            h="30"
            w="30"
            m="2">

    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
    >
      <el-form-item label="爬取命名" prop="name">

        <el-input v-model="ruleForm.name" />
      </el-form-item>
<!--      // prop是啥意思？-->
      <el-form-item label="爬取ID" prop="IDD">
        <el-input v-model="ruleForm.IDD" disabled/>
      </el-form-item>
      <el-form-item label="爬取日期选择" prop="region">
        <el-date-picker
            v-model="value2"
            type="daterange"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :shortcuts="shortcuts"></el-date-picker>
<!--            :size="size"-->
<!--        v-model的理解
https://blog.csdn.net/Menqq/article/details/115002838
-->

      </el-form-item>
      <el-form-item label="爬取模式选择" required >
<!--        <el-checkbox-group v-model="checkboxGroup1" >-->
<!--          <el-checkbox-button class="buttton_model" v-for="city in cities" :key="city" :label="city" >-->
<!--            {{ city }}-->
<!--          </el-checkbox-button>-->
          <a-radio-group v-model:value="checkboxGroup1" class="father_button">
            <a-radio-button value="按用户爬取" class="buttton_model">按用户爬取</a-radio-button>
            <a-radio-button value="按关键词爬取" class="buttton_model">按关键词爬取</a-radio-button>
            <a-radio-button value="按话题爬取" class="buttton_model">按话题爬取</a-radio-button>
          </a-radio-group>
<!--        </el-checkbox-group>-->
<!--        <el-col :span="11">-->
<!--          <el-form-item prop="date1">-->
<!--            <el-date-picker-->
<!--                v-model="ruleForm.date1"-->
<!--                type="date"-->
<!--                label="Pick a date"-->
<!--                placeholder="Pick a date"-->
<!--                style="width: 100%"-->
<!--            />-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--        <el-col class="text-center" :span="2">-->
<!--          <span class="text-gray-500">-</span>-->
<!--        </el-col>-->
<!--        <el-col :span="11">-->
<!--          <el-form-item prop="date2">-->
<!--            <el-time-picker-->
<!--                v-model="ruleForm.date2"-->
<!--                label="Pick a time"-->
<!--                placeholder="Pick a time"-->
<!--                style="width: 100%"-->
<!--            />-->
<!--          </el-form-item>-->
<!--        </el-col>-->
      </el-form-item>

      <el-form-item label="批量爬取上传" prop="IDD" class="form_file">
        <el-upload
            ref="upload"
            class="upload-demo upload-demo1"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              支持格式：csv、xls、xlsx ，单个文件不能超过5MB
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item :label="selectedLabel" prop="name" class="form_filee">
        <el-input v-model="ruleForm.name" />
        <div class=" message_warn">用逗号作为分隔符；按话题爬取时，可以输入hashtag</div>
      </el-form-item>
      <el-form-item label="爬取备注" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item >
        <div class="button_chuang">
        <el-button type="primary" @click="submitForm(ruleFormRef)" class="chuangjian">
          创建任务
        </el-button>
        <el-button @click="resetForm(ruleFormRef)" class="chuangjian">重置</el-button>
          </div>
      </el-form-item>
    </el-form>
  </el-aside>
</template>

<script lang="ts" setup>
// ref 是 Vue 3 中的一个函数，用于将普通的 JavaScript 数据转换成响应式数据，使其在 Vue 组件中能够被自动追踪和更新。
import { UploadFilled } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { computed } from 'vue';
import { getSelectedLabel } from '../assets/xinjianrenwuts/chage_label'; // 请根据实际路径调整
// 文件上传
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'



const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
// 爬取模式选择
const checkboxGroup1= ref<string>('按用户爬取')
// const cities = ['按用户爬取', '按关键词爬取', '按话题爬取']
// 日期选择器
const value2 = ref('')

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]


interface RuleForm {
  name: string
  // 在ts中没有int类型，直接用
  IDD: number
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  IDD: getCurrentDateTimeNumeric(),
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  IDD:[
    {required: true,
    message: 'Please select Activity zone',
      // trigger change是啥意思
    trigger: 'change'
    }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: false, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

const currentDateTimeNumeric = getCurrentDateTimeNumeric();
function getCurrentDateTimeNumeric(): number {
  const currentTime = new Date();

  const year = currentTime.getFullYear();
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // 注意月份是从 0 开始的
  const day = currentTime.getDate().toString().padStart(2, '0');

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');

  // 将各个部分组合成一个连续的数字
  const dateTimeNumeric = parseInt(`${year}${month}${day}${hours}${minutes}`);

  return dateTimeNumeric;
}
const selectedLabel = computed(() => {
  return getSelectedLabel(checkboxGroup1.value);
});

</script>
<!--<style scoped>-->

<!--</style>-->

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
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
  //background-color: #333; /* 设置背景颜色 */
  padding: 5px; /* 设置内边距 */
  box-shadow: 2px 2px 4px 4px #F5F7FA;
}
</style>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.text_header{
  /*margin-top: 10px;*/
  line-height: 40px;
  font-weight: bold;
  left: 20px;
  margin-right: 30px;
  /*font-size: "bold";*/
}

.el_cc_button1{
  width: 150px;
  margin-right: 20px;
}

.el_cc_button2{
  width: 150px;
}

.buttton_model{
  width: 33.3333%;
  text-align: center;
  /*margin: 0;*/
  /*color: #F56C6C;*/
}
.father_button{
  width: 100%;
}
.upload-demo1{
  width: 100%;
}
.form_file{
  margin-bottom: 0px;
}
.form_filee{
  margin-bottom: 15px;
}
.message_warn{
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 10px;
  margin-bottom: 5px;
  line-height: 0px;
  /*margin-bottom: 0px;*/
}

.chuangjian{
  width: 50%;
  text-align: center;
}
.button_chuang{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>