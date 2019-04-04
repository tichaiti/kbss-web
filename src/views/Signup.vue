<template>
    <div class='signup'>
        <SignupTemplate />
    </div>
</template>


<script>
import SignupTemplate from '../components/templates/SignupTemplate.vue';

export default {
  name: 'SignupComponent',
  components: {
    SignupTemplate,
  },
};

</script>


<style>
  .signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    margin: 0 auto;
    width: 700px;
  }

</style>
