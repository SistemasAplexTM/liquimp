<template lang="html">
  <vue-scroll class="page-element-form">
    <el-tabs type="border-card" lazy="true">
      <el-tab-pane label="Registro de Guias Master">
        <form-master class="formMaster"/>
      </el-tab-pane>
      <el-tab-pane label="Listado de Guias">
        <list-master class="listMaster"/>
      </el-tab-pane>
    </el-tabs>
  </vue-scroll>
</template>

<script>
import formMaster from './Form'
import listMaster from './List'

export default {
  name: 'Master',
	components: { formMaster, listMaster },
}
</script>

<style lang="css" scoped>
  .layout-container .container .view{
    max-width: 100%;
      min-width: 100%;
  }
  .formMaster, .listMaster{
    margin-top: 30px;
  }
</style>
