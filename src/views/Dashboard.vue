<template>
    <div>
        <h1>I am the Dashboard Component</h1>
        <p>First Name: {{user.firstName}}</p>
        <p>Last Name: {{user.lastName}}</p>
        <p>Username: {{user.username}}</p>
    </div>
</template>


<script>

import { mapState } from 'vuex';

export default {
    name: 'Dashboard',
    computed: {
        ...mapState([
            'user',
        ]),
    },
};
</script>
