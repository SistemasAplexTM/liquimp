<template lang="html">
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="350">
    <el-table-column
      fixed
      prop="date"
      label="Fecha"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nombre"
      width="300">
    </el-table-column>
    <el-table-column
      prop="state"
      label="Estado"
      width="300">
    </el-table-column>
    <el-table-column
      prop="city"
      label="Ciudad"
      width="300">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Dirección"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Código postal"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operaciones"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          Eliminar
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
}
</script>

<style lang="css" scoped>
</style>
