<template>
   <div>
       <p>Child Component below</p>
        <Child
            class="child"
            id="one"
            data-id="welcometovuejs"
            data-name="student"
        />
   </div>

</template>


<script>
import Child from './Child.vue';

export default {
    components: {
        Child,
    },
};
</script>
