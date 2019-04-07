<template>
    <Div className='field'>
        <Label :id="id"> {{name | capitalize}} </Label>
        <Input
            :placeholder='placeholder'
            :type='type'
            :name='name'
            class='large'
            v-on:inputChange="onChange"
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
        onChange: Function,
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
