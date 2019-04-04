<template>
    <Div className='field'>
        <Label :id="id"> {{name}} </Label>
        <Input
            :placeholder='placeholder'
            :type='type'
            className='large'
        />
    </Div>
</template>


<script>
import { Label, Div, Input } from '../../atoms';

export default {
    name: 'Field',
    props: {
        name: String,
        className: String,
        id: String,
        type: String,
        placeholder: String,
    },
    components: {
        Label,
        Div,
        Input,
    },
};
</script>

<style>
    .field {
        padding: 5px 0px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }
</style>
