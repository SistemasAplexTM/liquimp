<template lang="html">
  <vue-scroll class="page-element-form">
    <page-header :title="$route.meta" :items="datos"/>
      <!-- <template v-slot:list="{item}">
        <i :class="'fal fa-' + item.icon"></i>
      </template> -->
		<div class="card-base card-shadow--medium p-30">
      <el-tabs >
        <el-tab-pane>
          <span slot="label"><i class="fal fa-plus-circle"></i> Registro de Guias Master</span>
          <form-master class="formMaster"/>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="fal fa-list-ul"></i> Listado de Guias</span>
          <list-master class="listMaster"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </vue-scroll>
</template>

<script>
import formMaster from './Form'
import listMaster from './List'

export default {
  name: 'Master',
	components: { formMaster, listMaster },
  data(){
    return{
      datos:[
        {des : 'asdf', icon:'user'},
        {des : 'ttt', icon:'home'},
        {des : 'gggg', icon:'book'}
      ]
    }
  }
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
