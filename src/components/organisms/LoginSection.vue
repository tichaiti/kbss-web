<template>
  <div>
    <el-form :model="form" :rules="rules" label-width="120px" ref="form">
      <p class="error" v-if="isError">{{errorMessage}}</p>
      <el-form-item label="Email" prop="email">
        <el-input
          @focus="handleChange"
          placeholder="Please input your email"
          v-model="form.email">
        </el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input
          @focus="handleChange"
          placeholder="Please input your password"
          v-model="form.password"
          show-password>
        </el-input>
      </el-form-item>

      <el-button :disabled="isInvalid" @click="onSubmit">Sign in</el-button>
  </el-form>

  <div>
    <p>Don't have an account yet, <router-link to="signup">Create one</router-link></p>
  </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoginSection',
  data() {
    const validateField = ({ field }, value, callback) => {
      if (value === '' || value === undefined) {
        callback(new Error(`Please fill in the ${field}`));
        return;
      }
      // eslint-disable-next-line no-useless-escape
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (field === 'email' && !regex.test(value)) {
        callback(new Error('Please enter a valid email'));
        return;
      }
      this.isFieldEmpty(field);
      callback();
    };
    return {
      form: {
        password: '',
        email: '',
        isEmailEmpty: true,
        isPassword: true,
      },
      rules: {
        password: [
          { validator: validateField, trigger: 'blur' },
        ],
        email: [
          { validator: validateField, trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    ...mapGetters({
      isError: 'isError',
      errorMessage: 'errorMessage',
    }),
    isInvalid() {
      return this.form.isEmailEmpty || this.form.isPassword;
    },
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

    isFieldEmpty(field) {
      if (field === 'email') {
        this.form.isEmailEmpty = false;
        return;
      }
      this.form.isPassword = false;
    },

    goToSignup() {
      this.$router.push('/signup');
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
