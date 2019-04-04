<template>
    <div class='signup-template'>
      <SignupSection />
    </div>
</template>


<script>
import SignupSection from '../organisms/SignupSection.vue';

export default {
  name: 'SignupTemplate',
  components: {
    SignupSection,
  },
};

</script>


<style>

  .signup-template {
    width: 100%;
  }
</style>
