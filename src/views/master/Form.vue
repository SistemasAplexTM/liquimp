<template lang="html">
  <el-form :inline="true" :model="ruleForm" :rules="rules"
  label-position="top" ref="ruleForm"
  label-width="120px" class="" size="medium" autocomplete="off">
    <el-form-item label="N° Master" prop="master" required>
      <el-input v-model="ruleForm.master" placeholder="Número de Master"></el-input>
    </el-form-item>
    <el-form-item label="Fecha de liquidación" prop="liquidation_date" required>
      <el-date-picker
        v-model="ruleForm.liquidation_date"
        type="date"
        placeholder="Fecha de liquidación">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Fecha de Master" prop="master_date" required>
      <el-date-picker
        v-model="ruleForm.master_date"
        type="date"
        placeholder="Fecha de Master">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="Tasa" prop="master_rate" required>
      <el-input-number
        v-model="ruleForm.master_rate"
        placeholder="$ 0.00"
        :precision="2"
        :step="0.1" controls-position="right">
      </el-input-number>
    </el-form-item>
    <el-form-item label="Peso Global" prop="global_weight" required>
      <el-input-number
        v-model="ruleForm.global_weight"
        placeholder="0.00"
        :precision="2"
        :step="0.1" controls-position="right">
      </el-input-number>
    </el-form-item>
    <el-form-item label="RATE" prop="rate" required>
      <el-input-number
        v-model="ruleForm.rate"
        placeholder="$ 0.00"
        :precision="2"
        :step="0.1" controls-position="right">
      </el-input-number>
    </el-form-item>
    <el-form-item label="Total Guias Hijas" prop="master_daughters" required>
      <el-input-number
        v-model="ruleForm.master_daughters"
        placeholder="0"
        controls-position="right">
      </el-input-number>
    </el-form-item>
    <el-form-item label="N° Manifiesto" prop="manifest" required>
      <el-input v-model="ruleForm.manifest" placeholder="Número de Manifiesto"></el-input>
    </el-form-item>
    <el-form-item label="Fecha de Manifiesto" prop="manifest_date" required>
      <el-date-picker
        v-model="ruleForm.manifest_date"
        type="date"
        placeholder="Fecha de Manifiesto">
      </el-date-picker>
    </el-form-item>

    <el-form-item label="Sticker Declaración" prop="declaration_sticker">
      <el-input v-model="ruleForm.declaration_sticker" placeholder="Sticker Declaración"></el-input>
    </el-form-item>
    <el-form-item label="Fecha de Declaración" prop="declaration_date">
      <el-date-picker
        v-model="ruleForm.declaration_date"
        type="date"
        placeholder="Fecha de Declaración">
      </el-date-picker>
    </el-form-item>

    <el-form-item label="CIFT" prop="rate" required>
      <el-input-number
        v-model="ruleForm.rate"
        placeholder="$ 0.00"
        :precision="2"
        :step="0.1" controls-position="right">
      </el-input-number>
    </el-form-item>


    <el-form-item style="width: 100%;">
      <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
      return {
        ruleForm: {
          master: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="css" scoped>
</style>
