<template>
    <div>
        <DashboardTemplate />
    </div>
</template>


<script>

import { mapState } from 'vuex';
import DashboardTemplate from '../components/templates/DashboardTemplate.vue';

export default {
    name: 'Dashboard',
    computed: {
        ...mapState([
            'user',
        ]),
    },
    components: {
        DashboardTemplate,
    },
};
</script>
