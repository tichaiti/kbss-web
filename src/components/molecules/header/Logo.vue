<template>
    <Div class="logo">
        <Picture src="https://via.placeholder.com/150"/>
        <Heading> KBSS </Heading>
    </Div>
</template>


<script>
import { Div, Picture, Heading } from '../../atoms';

export default {
    components: {
        Div,
        Picture,
        Heading,
    },
};
</script>

<style>
    .logo {
        display: flex;
        align-items: center;
    }
    .logo img {
        width: 70px;
    }
    .logo h1 {
        margin-left: 10px;
    }

</style>
