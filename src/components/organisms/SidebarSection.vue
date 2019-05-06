<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2', '3']">
      <NavigatorSubmenu/>

      <AdminSubmenu/>

      <SettingSubmenu/>
    </el-menu>
  </el-aside>
</template>


<script>
import NavigatorSubmenu from '../molecules/submenus/NavigatorSubmenu.vue';
import AdminSubmenu from '../molecules/submenus/AdminSubmenu.vue';
import SettingSubmenu from '../molecules/submenus/SettingSubmenu.vue';

export default {
  name: 'LoginSection',

  components: {
    NavigatorSubmenu,
    AdminSubmenu,
    SettingSubmenu,
  },
  props: String,
};
</script>

<style>
.sidebar {
  width: 276px;
}
</style>
