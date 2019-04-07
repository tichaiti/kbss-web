<template>
    <Div class="sidebar">
        <Accordion title="Admin">
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
        </Accordion>

        <Accordion title="Profile">
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
            <IconText iconName="toolbox">
                I am happy to be here
            </IconText>
        </Accordion>
    </Div>
</template>


<script>
import { Accordion, IconText } from '../molecules';
import { Div } from '../atoms';


export default {
    name: 'LoginSection',

    components: {
        Accordion,
        Div,
        IconText,
    },
    props: String,
};

</script>

<style>
    .sidebar {
        width: 276px;
    }

</style>
