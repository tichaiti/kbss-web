<template>
    <Form className='login-section'>
        <Field placeholder='Username...' name='Username'/>
        <Field placeholder='Password' name='Password'/>
        <Button> Submit </Button>
    </Form>

</template>


<script>
import { Field } from '../molecules';
import { Form, Button } from '../atoms';


export default {
    name: 'LoginSection',
    components: {
        Field,
        Form,
        Button,
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
