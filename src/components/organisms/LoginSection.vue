<template>
  <el-form v-model="form" label-width="120px">
    <p class="error" v-if="isError">{{errorMessage}}</p>
    <el-form-item label="Email">
      <el-input @focus="handleChange" placeholder="Please input your email" v-model="form.email" prop="checkPass"></el-input>
    </el-form-item>

    <el-form-item label="Password" prop="checkPass">
      <el-input @focus="handleChange" placeholder="Please input your password" v-model="form.password" show-password></el-input>
    </el-form-item>

    <el-button @click="onSubmit">Sign in</el-button>
  </el-form>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoginSection',
  data() {
    return {
      form: {
        password: '',
        email: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      isError: 'isError',
      errorMessage: 'errorMessage',
    }),
  },
  components: {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const user = {
        email: this.form.email,
        password: this.form.password,
      };
      this.$store.dispatch('login', user);
    },
    handleChange() {
        if (this.isError) {
            this.$store.commit('removeError');
        }
    },
  },
};
</script>

<style>
.login-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.error {
  color: red;
}
</style>
