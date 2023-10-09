<template>
  <div class="zxf comp">
    <div class="ul form-container">
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="110px"
        class="demo-ruleForm"
      >
        <el-form-item label="是否涉及财产:" prop="property">
          <el-radio-group class="radio-group" v-model="ruleForm.property">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 标的额 -->
        <el-form-item
          label="标的额"
          prop="BDE"
          v-if="ruleForm.property == '是'"
        >
          <el-input @input="onInput" class="selector" v-model="ruleForm.BDE">
            <template #suffix>
              <i>元</i>
              <i
                v-if="ruleForm.BDE != ''"
                class="el-icon-circle-close"
                @click="clearInput"
              ></i>
            </template>
          </el-input>
        </el-form-item>

        <!-- 提交按钮 -->
        <el-form-item class="form-btns">
          <div class="btns flex">
            <div>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <el-button
                class="calculator-btn"
                id="zxf-calculator"
                type="primary"
                @click="submitForm('ruleForm')"
                >计算</el-button
              >
            </div>
          </div>
        </el-form-item>

        <!-- 计算结果 -->
        <el-dialog title="计算结果" :visible.sync="dialogVisible" width="50%">
          <p>执行费: {{ resultText }}</p>
          <p style="color: #c5c5c5">
            以上计算结果仅供参考，实际费用以当地实际情况和具体证据材料为准！详情请咨询律师！
          </p>
        </el-dialog>
      </el-form>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      resultText: "",
      dialogVisible: false,
      ruleForm: {
        BDE: "", //标的额
        property: "是", //是否涉及财产
      },
      rules: {
        BDE: [{ required: true, message: "请输入标的额", trigger: "blur" }],
        property: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    clearInput() {
      this.ruleForm.BDE = "";
    },
    onInput(val) {
      this.ruleForm.BDE = val.replace(/\D/g, "");
    },
    submitForm(formName) {
      this.elementBtnBlur("zxf-calculator");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = this.onCalculate();
          this.resultText = data.resultText;
          this.dialogVisible = true;
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onCalculate() {
      var property = this.ruleForm.property;
      var BDE = this.ruleForm.BDE;
      var ZXF = 0;

      // console.log('具体的计算::', property, BDE)

      // 执行费计算
      if (property == "是") {
        if (BDE > 1 && BDE < 10000) ZXF = 50;
        else if (BDE >= 10000 && BDE < 500000)
          ZXF = Math.round(BDE * 0.015 - 100, 2);
        else if (BDE > 500000 && BDE <= 5000000)
          ZXF = Math.round(BDE * 0.01 + 2400, 2);
        else if (BDE > 5000000 && BDE <= 10000000)
          ZXF = Math.round(BDE * 0.005 + 27400, 2);
        else if (BDE > 10000000) ZXF = Math.round(BDE * 0.001 + 67400, 2);
        else ZXF = 0;
      } else {
        ZXF = 0;
      }

      var data = {
        zxf_fee:
          ZXF !== 0 && ZXF !== ""
            ? "每件缴纳 " + ZXF + "元"
            : "每件交纳 50 ~ 500元",
      };

      return {
        message: "success",
        code: 200,
        data: data,
        resultText: data.zxf_fee,
      };
    },
  },
};
</script>

<style>
/* .zxf {
  border: 1px solid red;
} */

.zxf .ul {
  width: 50%;
  /* border: 1px solid blue; */
  margin: 0 auto;
}

.zxf .el-radio-group {
  margin-top: 9px;
}

.el-radio__input.is-checked .el-radio__inner {
  background-color: #c4141f;
  /* 设置选中时的背景颜色 */
  border-color: #c4141f;
  /* 设置选中时的边框颜色 */
}

.el-radio__input.is-checked + .el-radio__label {
  color: #c4141f;
}
</style>
