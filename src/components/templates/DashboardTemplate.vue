<template>
    <div>
        <HeaderSection />
        <SidebarSection />
    </div>
</template>


<script>

import { mapState } from 'vuex';
import HeaderSection from '../organisms/HeaderSection.vue';
import SidebarSection from '../organisms/SidebarSection.vue';

export default {
    name: 'Dashboard',
    computed: {
        ...mapState([
            'user',
        ]),
    },
    components: {
        HeaderSection,
        SidebarSection,
    },
};
</script>
