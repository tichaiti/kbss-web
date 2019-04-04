<template>
    <div class='login-template'>
      <LoginSection />
    </div>
</template>


<script>
import LoginSection from '../organisms/LoginSection.vue';

export default {
  name: 'LoginTemplate',
  components: {
    LoginSection,
  },
};

</script>


<style>

  .login-template {
    width: 100%;
  }
</style>
