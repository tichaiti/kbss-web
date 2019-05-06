<template>
  <el-form v-model="form" label-width="120px">
    <p class="error" v-if="isError">{{errorMessage}}</p>
    <el-form-item label="Username">
      <el-input @focus="handleChange" placeholder="Please input your username" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item label="Email">
      <el-input @focus="handleChange" placeholder="Please input your email" v-model="form.email"></el-input>
    </el-form-item>

    <el-form-item label="Password" prop="checkPass">
      <el-input @change="handleChange" placeholder="Please input your password" v-model="form.password" show-password></el-input>
    </el-form-item>

    <el-button @click="onSubmit">Sign Up</el-button>
  </el-form>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SignUpSection',
  data() {
    return {
      form: {
        password: '',
        email: '',
        username: '',
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
      this.$store.dispatch('signup', user);
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
.signup-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.error {
  color: red;
}
</style>
