<template>
  <el-container>
    <Header />

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140"></el-table-column>
        <el-table-column prop="name" label="Name" width="120"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>


<script>
import Header from '../molecules/header/Header.vue';

export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    };
    return {
      tableData: Array(20).fill(item),
    };
  },

  components: {
    Header,
  },
};
</script>
