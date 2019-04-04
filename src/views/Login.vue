<template>
    <div class='login'>
        <LoginTemplate />
    </div>
</template>


<script>
import LoginTemplate from '../components/templates/LoginTemplate.vue';

export default {
  name: 'LoginComponent',
  components: {
    LoginTemplate,
  },
};

</script>


<style>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    margin: 0 auto;
    width: 700px;
  }

</style>
