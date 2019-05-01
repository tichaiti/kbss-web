<template>
    <Form className='login-section'>
        <Field
            :onChange="handleChange"
            placeholder='Username...'
            name='username'/>
        <Field
            :onChange="handleChange"
            type="password"
            placeholder='Password'
            name='password'/>
        <Button class="red" :click="handleClick"> Submit </Button>

        <p>Username: {{username}}</p>
    </Form>

</template>


<script>
import { Field } from '../molecules';
import { Form, Button } from '../atoms';


export default {
    name: 'LoginSection',
    data() {
        return {
            username: '',
            password: '',
        };
    },

    components: {
        Field,
        Form,
        Button,
    },
    methods: {
        handleChange(event) {
            const { name } = event.target;
            this[name] = event.target.value;
        },

        handleClick(event) {
            event.preventDefault();
            const user = {
                username: this.username,
                password: this.password,
            };
            // TODO: implement authentication
            this.$store.commit('processAuthentication', user);
            this.$router.push('/dashboard'); // TODO: implement authentication
            console.log('State: ', this.$store.state);
        },
    },
    props: String,
};

</script>

<style>
    .login-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
</style>
