<template>
    <el-container style="border: 1px solid #eee">
        <SidebarSection />
        <MainSection />
    </el-container>
</template>


<script>

import { mapState } from 'vuex';
import SidebarSection from '../organisms/SidebarSection.vue';
import MainSection from '../organisms/MainSection.vue';

export default {
    name: 'Dashboard',
    computed: {
        ...mapState([
            'user',
        ]),
    },
    components: {
        SidebarSection,
        MainSection,
    },
};
</script>
