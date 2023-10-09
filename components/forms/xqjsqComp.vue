<template>
  <div class="xqjsq comp">
    <div class="ul form-container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="罪名" prop="zm">
          <el-cascader
            @expand-change="onExpandChange"
            @change="onChange"
            v-model="ruleForm.zm"
            :show-all-levels="false"
            :options="options"
          ></el-cascader>
        </el-form-item>

        <!-- 提示框 -->
        <el-dialog title="计算结果" :visible.sync="dialogVisible" width="50%">
          <p v-if="resultData.goucheng">
            <span style="font-weight: 600">构成:</span>
            {{ resultData.goucheng.constitute }}
          </p>
          <div v-if="resultData.xingqi">
            <p v-for="(value, key) in resultData.xingqi" :key="key">
              {{ value }}
            </p>
          </div>

          <p style="color: #c5c5c5">
            以上计算结果仅供参考，详情请咨询律师！
          </p>
        </el-dialog>

        <!-- 提交按钮 -->
        <el-form-item class="form-btns">
          <div class="btns flex">
            <div>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <el-button
                class="calculator-btn"
                id="xqjsq-calculator"
                type="primary"
                @click="submitForm('ruleForm')"
                >计算</el-button
              >
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      chargeClass: "", //一级罪名
      chargeSpecific: "", //二级罪名
      specific: "", //三级罪名(不一定存在)
      resultData: {}, //计算结果

      dialogVisible: false, //控制dialog的显示隐藏
      ruleForm: {
        zm: "", //展示二级罪名或三级罪名
      },
      rules: {
        zm: [{ required: true, message: "请选择罪名", trigger: "blur" }],
      },
      options: [],
    };
  },
  created() {
    this.readXqXml();
  },

  methods: {
    /**
     * 读取刑期xml文件
     */
    readXqXml() {
      // console.log("读取刑期文件....");
      var file = "data/xq.xml";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", file, false);
      xhr.send();
      var xmlDoc = xhr.responseXML;

      // console.log("xmlDoc==", xmlDoc);
      var chargeClasses = xmlDoc.getElementsByTagName("chargeClass");
      var options = [];

      for (var i = 0; i < chargeClasses.length; i++) {
        var chargeClass = chargeClasses[i].getAttribute("name");
        var chargeClassObj = {
          value: chargeClass,
          label: chargeClass,
          children: [],
        };

        var chargeSpecifics =
          chargeClasses[i].getElementsByTagName("chargeSpecific");
        for (var j = 0; j < chargeSpecifics.length; j++) {
          var chargeSpecific = chargeSpecifics[j].getAttribute("name");
          var chargeSpecificObj = {
            value: chargeSpecific,
            label: chargeSpecific,
          };

          var specificTags =
            chargeSpecifics[j].getElementsByTagName("specific");
          if (specificTags.length > 0) {
            chargeSpecificObj.children = Array.from(specificTags).map(function (
              specificTag
            ) {
              return {
                value: specificTag.getAttribute("name"),
                label: specificTag.getAttribute("name"),
              };
            });
          }

          chargeClassObj.children.push(chargeSpecificObj);
        }

        options.push(chargeClassObj);
      }

      // console.log(options); // 输出生成的树形数据结构
      this.options = options;
    },
    onExpandChange(arr) {},
    onChange(arr) {
      // console.log("onChange::", arr);
      if (arr.length == 2) {
        //到二级罪名
        this.chargeClass = arr[0];
        this.chargeSpecific = arr[1];

        this.ruleForm.zm = arr[1];
      } else {
        //到三级罪名
        this.chargeClass = arr[0];
        this.chargeSpecific = arr[1];
        this.specific = arr[2];

        this.ruleForm.zm = arr[2];
      }
      // console.log(this.chargeClass, this.chargeSpecific, this.specific);
      // console.log("zm==", this.ruleForm.zm);
    },
    submitForm(formName) {
      this.elementBtnBlur("xqjsq-calculator");

      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log("成功提交...", this.ruleForm.zm);
          var data = this.onCalculate();
          // console.log("计算的结果==>", data.data);
          this.resultData = data.data;
          this.dialogVisible = true;
        } else {
          // console.log("error submit!!", this.ruleForm.zm);
          return false;
        }
      });
    },
    resetForm(formName) {
      this.ruleForm.zm = "";
      this.$refs[formName].resetFields();
    },
    /**
     * 计算
     */
    onCalculate() {
      var text = {};
      var chargeClass = this.chargeClass;
      var chargeSpecific = this.chargeSpecific;
      var specific = this.specific;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "data/xq.xml", false);
      xhr.send();
      var xml = xhr.responseXML;

      var chargeClasses = xml.getElementsByTagName("chargeClass");

      for (var i = 0; i < chargeClasses.length; i++) {
        var chargeClassElement = chargeClasses[i];
        if (chargeClassElement.getAttribute("name") === chargeClass) {
          var chargeSpecifics =
            chargeClassElement.getElementsByTagName("chargeSpecific");

          for (var j = 0; j < chargeSpecifics.length; j++) {
            var chargeSpecificElement = chargeSpecifics[j];
            if (chargeSpecificElement.getAttribute("name") === chargeSpecific) {
              var termElement;
              if (specific) {
                var specifics =
                  chargeSpecificElement.getElementsByTagName("specific");
                for (var k = 0; k < specifics.length; k++) {
                  if (specifics[k].getAttribute("name") === specific) {
                    termElement = specifics[k].getElementsByTagName("term")[0];
                    break;
                  }
                }
              } else {
                termElement =
                  chargeSpecificElement.getElementsByTagName("term")[0];
              }

              if (termElement) {
                var constitute = termElement.getAttribute("constitute");
                var term1 = termElement.getAttribute("term1");
                var term2 = termElement.getAttribute("term2");
                var term3 = termElement.getAttribute("term3");
                var term4 = termElement.getAttribute("term4");
                var term5 = termElement.getAttribute("term5");
                var term6 = termElement.getAttribute("term6");
                var term7 = termElement.getAttribute("term7");
                var term8 = termElement.getAttribute("term8");

                text = {
                  goucheng: {
                    constitute: constitute,
                  },
                  xingqi: {
                    term1: term1,
                    term2: term2,
                    term3: term3,
                    term4: term4,
                    term5: term5,
                    term6: term6,
                    term7: term7,
                    term8: term8,
                  },
                };
              } else {
                return { message: "不存在此罪名", code: 422 };
              }
              break;
            }
          }
          break;
        }
      }

      return { message: "success", code: 200, data: text };
    },
  },
};
</script>
<style>
/* .xqjsq {
  border: 1px solid red;
} */

.xqjsq .ul {
  width: 50%;
  /* border: 1px solid blue; */
  margin: 0 auto;
}

.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  color: #c4141f;
}

.el-cascader-menu__list {
  width: 180px !important;
}
</style>