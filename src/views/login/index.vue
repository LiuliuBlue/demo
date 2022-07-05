<template>
  <div class="login">
    <el-form :model="loginForm" :rules="loginRules" class="demo-ruleForm">
      <h3 class="title">欢迎来到VueAdmin管理系统</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="loginForm.code" @keyup.enter="onLogin" />
        <img :src="imgCodeUrl" alt="正在加载" class="codeImg" />
        <span @click="getImgCode">换一个</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCaptcha, getLogin } from '@/api/login'
const router = useRouter()
/**
 * @描述 表单数据对象
 */
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
// 验证码图片地址
const imgCodeUrl = ref('')
// 用户名验证规则
const validateUsername = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  }
}
// 密码验证规则
const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 6) {
    callback(new Error('密码不能少于6位'))
  }
}
// 验证码验证规则
const validateCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (value.length !== 5) {
    callback(new Error('验证码为5个字符'))
  }
}
/**
 * @描述 表单验证规则
 */
const loginRules = {
  username: [
    {
      required: true,
      trigger: 'blur',
      validator: validateUsername
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      validator: validateCode
    }
  ]
}
/**
 * @描述 登录事件
 */
const onLogin = async () => {
  try {
    await getLogin(loginForm)
    await router.push('/index')
  } catch (error) {
    console.log(error)
  }
}
/**
 * @描述 获取验证码事件
 */
const getImgCode = async () => {
  const res = await getCaptcha()
  loginForm.token = res.token
  imgCodeUrl.value = res.captchaImg
}
getImgCode()
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;

  .demo-ruleForm {
    .title {
      text-align: center;
      padding: 20px;
      transform: translateY(-20px);
    }
    padding: 50px;
    width: 500px;
    border: 1px solid #000;
    .codeImg {
      width: 120px;
      height: 40px;
      border: 1px solid #000;
    }
  }
}
</style>
