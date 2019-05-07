<template>
  <div>
    <el-button @click="goToSignup">Signup</el-button>
    <el-button @click="goToLogin">Login</el-button>
  </div>
</template>


<script>
export default {
  name: 'Home',
  methods: {
    goToSignup() {
      this.$router.push('/login');
    },

    goToLogin() {
      this.$router.push('/login');
    },
  },

};
</script>


<style>

</style>
