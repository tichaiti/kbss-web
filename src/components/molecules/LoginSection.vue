<template>
    <Div className='login'>
        <Heading title="Please Login" />
        <Form>
            <Input type="number"/>
            <Input />
        </Form>
        <Button> Submit </Button>
    </Div>
</template>


<script>
import {
    Input, Button, Heading, Div,
} from '../atoms';


export default {
    name: 'LoginSection',
    components: {
        Button,
        Input,
        Div,
        Heading,
    },
};

</script>

<style>
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login form {
        display: flex;
        flex-direction: column;
    }

    .login form input {
        margin-bottom: 10px;
    }
</style>
