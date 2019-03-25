<template>
    <Div class='signup'>
        <Heading> Please login </Heading>
        <Form>
            <Input />
            <Input />
        </Form>
        <Button> Submit </Button>
    </Div>
</template>


<script>
import { Input, Button, Heading, Div } from '../atoms';

export default {
    name: 'SignupSection',
    components: {
        Button,
        Input,
        Div,
        Heading,
    },
};

</script>
