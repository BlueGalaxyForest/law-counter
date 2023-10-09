<template>
  <div class="bqf comp">
    <div class="ul form-container">
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="110px"
        class="demo-ruleForm"
      >
        <!-- 标的额 -->
        <el-form-item label="标的额" prop="BDE">
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
                id="bqf-calculator"
                type="primary"
                @click="submitForm('ruleForm')"
                >计算</el-button
              >
            </div>
          </div>
        </el-form-item>

        <!-- 计算结果 -->
        <el-dialog title="计算结果" :visible.sync="dialogVisible" width="50%">
          <p>保全费: {{ resultText }}</p>
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
      },
      rules: {
        BDE: [{ required: true, message: "请输入标的额", trigger: "blur" }],
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
      this.elementBtnBlur("bqf-calculator");
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
      var BDE = this.ruleForm.BDE;
      var BQF = 0;

      // console.log("具体的计算::", BDE);

      if (BDE >= 0 && BDE < 1000) {
        BQF = 30;
      } else if (BDE >= 1000 && BDE <= 100000) {
        BQF = (BDE * 0.01 + 30).toFixed(2);
      } else if (BDE > 100000) {
        BQF = (BDE * 0.005 + 30).toFixed(2);
        if (BQF > 5000) BQF = 5000;
      } else {
        BQF = 30;
      }

      var data = {
        bqf_fee: BQF !== "" ? "每件缴纳 " + BQF + "元" : "每件缴纳 30元",
      };

      return {
        message: "success",
        code: 200,
        data: data,
        resultText: data.bqf_fee,
      };
    },
  },
};
</script>

<style>
/* .bqf {
  border: 1px solid red;
} */

.bqf .ul {
  width: 50%;
  /* border: 1px solid blue; */
  margin: 0 auto;
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
