<template>
     <Form class='sign-section'>
        <Field
            :onChange="handleChange"
            placeholder='First...'
            name='firstName'/>
        <Field
            :onChange="handleChange"
            placeholder='Last...'
            name='lastName'/>
        <Field
            :onChange="handleChange"
            placeholder="Username..."
            name='username'/>
        <Field
            :onChange="handleChange"
            type='password'
            placeholder='Password...'
            name='password'/>
        <Button :click='handleSubmit'> Signup </Button>
    </Form>

</template>


<script>
import { Field } from '../molecules';
import { Form, Button } from '../atoms';


export default {
    name: 'SignupSection',
    data() {
        return {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
        };
    },
    components: {
        Field,
        Form,
        Button,
    },
    props: {
        className: String,
    },

    methods: {
        handleChange(event) {
            const { name } = event.target;
            this[name] = event.target.value;
        },
        handleSubmit(event) {
            event.preventDefault();
            const user = {
                username: this.username,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
            };

            // TODO: implement authentication
            this.$store.commit('processAuthentication', user);
            this.$router.push('/dashboard'); // TODO: implement authentication
            console.log('State: ', this.$store.state);
        },
    },
};

</script>

<style>
    .sign-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
