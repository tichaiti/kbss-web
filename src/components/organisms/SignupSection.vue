<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
    <p class="error" v-if="isError">{{errorMessage}}</p>
    <el-form-item label="Username" prop="username">
      <el-input
        @focus="handleChange"
        placeholder="Please input your username"
        v-model="form.username">
      </el-input>
    </el-form-item>

    <el-form-item label="Email" prop="email">
      <el-input
        @focus="handleChange"
        placeholder="Please input your email"
        v-model="form.email">
      </el-input>
    </el-form-item>

    <el-form-item label="Password" prop="password">
      <el-input
        @change="handleChange"
        placeholder="Please input your password"
        v-model="form.password" show-password>
      </el-input>
    </el-form-item>

    <el-button :disabled="isInvalid" @click="onSubmit">Sign Up</el-button>
  </el-form>

  <div>
    <p>Already have an account, <router-link to="login">login</router-link></p>
  </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SignUpSection',
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
        username: '',
        isUsernameEmpty: true,
        isPasswordEmpty: true,
        isEmailEmpty: true,
      },
      rules: {
        password: [
          { validator: validateField, trigger: 'blur' },
        ],
        email: [
          { validator: validateField, trigger: 'blur' },
        ],
        username: [
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
      this.$store.dispatch('signup', user);
    },

    isFieldEmpty(field) {
      if (field === 'email') {
        this.form.isEmailEmpty = false;
        return;
      }
      if (field === 'username') {
        this.form.isUsernameEmpty = false;
      }
      this.form.isPassword = false;
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
