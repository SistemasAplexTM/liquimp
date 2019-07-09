<template lang="html">
  <el-form :inline="true" :model="ruleForm" :rules="rules"
  label-position="top" ref="ruleForm"
  label-width="120px" class="" size="medium" autocomplete="off">
  <el-row :gutter="20">
    <el-col :span="16" class="pt-10">
      <el-row type="flex" class="" justify="space-between">
        <el-col :span="7">
          <el-form-item label="N° Master" prop="master" required class="w-100">
            <el-input v-model="ruleForm.master" placeholder="Número de Master"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Fecha de Master" prop="master_date" required class="w-100">
            <el-date-picker
              v-model="ruleForm.master_date"
              type="date"
              placeholder="Fecha de Master">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Fecha de liquidación" prop="liquidation_date" required class="w-100">
            <el-date-picker
              v-model="ruleForm.liquidation_date"
              type="date"
              placeholder="Fecha de liquidación">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" class="" justify="space-between">
        <el-col :span="7">
          <el-form-item label="TRM" prop="master_rate" required class="w-100">
            <el-input-number
              v-model="ruleForm.master_rate"
              placeholder="$ 0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Rate" prop="rate" required class="w-100">
            <el-input v-model="ruleForm.rate" placeholder="Rate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Peso Global" prop="global_weight" required class="w-100">
            <el-input-number
              v-model="ruleForm.global_weight"
              placeholder="0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" class="" justify="space-between">
        <el-col :span="7">
          <el-form-item label="Total Guias Hijas" prop="master_daughters" required class="w-100">
            <el-input-number
              v-model="ruleForm.master_daughters"
              placeholder="0"
              controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Cliente" prop="client" class="w-100">
            <el-input v-model="ruleForm.client" placeholder="Cliente"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Cobro" prop="payment" required class="w-100">
            <el-input-number
              v-model="ruleForm.payment"
              placeholder="$ 0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" class="" justify="space-between">
        <el-col :span="7">
          <el-form-item label="N° Manifiesto" prop="manifest" required class="w-100">
            <el-input v-model="ruleForm.manifest" placeholder="Número de Manifiesto"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Fecha de Manifiesto" prop="manifest_date" required class="w-100">
            <el-date-picker
              v-model="ruleForm.manifest_date"
              type="date"
              placeholder="Fecha de Manifiesto">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="Diferencia" prop="difference" required class="w-100">
            <el-input-number
              v-model="ruleForm.difference"
              placeholder="0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="8"><div class="grid-content bg-green-aplex pt-10">
      <el-row type="flex" class="" justify="space-around">
        <el-col :span="16">
          <el-form-item label="CIF" prop="cif" required class="w-100">
            <el-input-number
              v-model="ruleForm.cif"
              placeholder="$ 0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="" justify="space-around">
        <el-col :span="16">
          <el-form-item label="Arancel" prop="rate" required class="w-100">
            <el-input-number
              v-model="ruleForm.rate"
              placeholder="$ 0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="" justify="space-around">
        <el-col :span="16">
          <el-form-item label="IVA" prop="iva" required class="w-100">
            <el-input-number
              v-model="ruleForm.iva"
              placeholder="% 0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="" justify="space-around">
        <el-col :span="16">
          <el-form-item label="Total" prop="total" required class="w-100">
            <el-input-number
              v-model="ruleForm.total"
              placeholder="$ 0.00"
              :precision="2"
              :step="0.1" controls-position="right">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
    </div></el-col>
  </el-row>
    <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"> -->

    <!-- </el-col> -->
    <!-- <el-form-item label="Sticker Declaración" prop="declaration_sticker">
      <el-input v-model="ruleForm.declaration_sticker" placeholder="Sticker Declaración"></el-input>
    </el-form-item>
    <el-form-item label="Fecha de Declaración" prop="declaration_date">
      <el-date-picker
        v-model="ruleForm.declaration_date"
        type="date"
        placeholder="Fecha de Declaración">
      </el-date-picker>
    </el-form-item> -->
    <el-row :gutter="20">
      <el-col :span="16" class="pt-10">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <el-form-item style="">
              <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </el-col>
    </el-row>
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
  .pt-10{
    padding-top: 10px;
  }
  .w-25{
    width: 25%
  }
  .w-50{
    width: 50%
  }
  .w-100{
    width: 100%
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-input-number, .el-input{
    width: 100%
  }
  .el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-green-aplex {
    background: #F0F9EB;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
