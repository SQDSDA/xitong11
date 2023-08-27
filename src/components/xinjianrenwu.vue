<template>
  <el-row :style="{margin:'20px 0px 0px 10px',
  width:'100%'}" class="--el-box-shadow-dark">
    <el-col :span="24"
            :style="{width:'100%'}">
      <div class="grid-content ep-bg-purple-dark" :style="{width:'100%'}">
        <span class="text_header" :style="{width:'100%'}">&nbsp;&nbsp;新建爬取任务</span></div></el-col>
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
      <el-form-item label="爬取模式选择" required>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :key="city" :label="city" class="buttton_model">
            {{ city }}
          </el-checkbox-button>
        </el-checkbox-group>
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
      <el-form-item label="批量爬取上传" prop="IDD">
        <el-upload
            ref="upload"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
        >
          <template #trigger>
            <el-button type="primary" class="el_cc_button1">select file</el-button>
          </template>
          <el-button class="ml-3 el_cc_button2" type="success"  @click="submitUpload">
            upload to server
          </el-button>
          <template #tip>
            <div class="el-upload__tip text-red">
              支持格式：csv、xls、xlsx ，单个文件不能超过5MB
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="Activity type" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="Sponsorship" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-aside>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
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
const checkboxGroup1 = ref(['按用户爬取'])
const cities = ['按用户爬取', '按关键词爬取', '按话题爬取']
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
    { required: true, message: 'Please input activity form', trigger: 'blur' },
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
  //margin-top: 10px;
  line-height: 40px;
  font-weight: bold;
  left: 20px;
  margin-right: 30px;
  //font-size: "bold";
}

.el_cc_button1{
  width: 150px;
  margin-right: 20px;
}

.el_cc_button2{
  width: 150px;
}

.buttton_model{
  //width: 150px;
  margin: 0;
}
</style>