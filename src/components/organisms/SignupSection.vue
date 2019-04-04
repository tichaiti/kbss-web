<template>
     <Form class='sign-section'>
        <Field placeholder='First...'  name='First Name'/>
        <Field placeholder='Last...' name='Last Name'/>
        <Field placeholder='Username...' name='Username'/>
        <Field type='password' placeholder='Password' name='Password'/>
        <Button> Signup </Button>
    </Form>

</template>


<script>
import { Field } from '../molecules';
import { Form, Button } from '../atoms';


export default {
    name: 'SignupSection',
    components: {
        Field,
        Form,
        Button,
    },
    props: {
        className: String,
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
