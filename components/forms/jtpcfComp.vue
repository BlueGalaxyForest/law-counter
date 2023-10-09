<template>
  <div class="rspcf comp variable">
    <div class="ul">
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="160px"
        class="demo-ruleForm"
      >
        <div class="normal-box">
          <div class="title">基本信息</div>

          <div class="form-container li dynamic-li">
            <el-form-item label="受害人年龄:" prop="age">
              <el-input
                @input="onInput(0, $event)"
                class="selector"
                v-model.number="ruleForm.age"
              >
                <template #suffix>
                  <i>岁</i>
                  <i
                    v-if="ruleForm.age != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(0)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <!-- 伤害程度 -->
          <div class="form-container li dynamic-li">
            <el-form-item label="伤害程度" prop="degree">
              <el-select
                @change="onSelect"
                class="selector"
                v-model="ruleForm.degree"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options1"
                  :label="item.name"
                  :value="item.id"
                  :key="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>

          <!-- 事故所在地 -->
          <div class="form-container li dynamic-li">
            <el-form-item label="事故所在地" prop="pos">
              <el-select
                @change="onSelect"
                class="selector"
                v-model="ruleForm.pos"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in areas"
                  :label="item.name"
                  :value="item.id"
                  :key="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="title">各项费用数据</div>

          <div class="form-container li dynamic-li">
            <el-form-item label="赴外地住宿天数" prop="zsts">
              <el-input
                @input="onInput(1, $event)"
                class="selector"
                v-model.number="ruleForm.zsts"
              >
                <template #suffix>
                  <i>岁</i>
                  <i
                    v-if="ruleForm.zsts != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(1)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="住院/外地就医天数" prop="jyts">
              <el-input
                @input="onInput(2, $event)"
                class="selector"
                v-model.number="ruleForm.jyts"
              >
                <template #suffix>
                  <i>岁</i>
                  <i
                    v-if="ruleForm.jyts != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(2)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="医疗费" prop="ylf">
              <el-input
                @input="onInput(3, $event)"
                class="selector"
                v-model.number="ruleForm.ylf"
              >
                <template #suffix>
                  <i>岁</i>
                  <i
                    v-if="ruleForm.ylf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(3)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="后续治疗费" prop="hxzlf">
              <el-input
                @input="onInput(4, $event)"
                class="selector"
                v-model.number="ruleForm.hxzlf"
              >
                <template #suffix>
                  <i>岁</i>
                  <i
                    v-if="ruleForm.hxzlf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(4)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="交通费" prop="jtf">
              <el-input
                @input="onInput(5, $event)"
                class="selector"
                v-model.number="ruleForm.jtf"
              >
                <template #suffix>
                  <i>岁</i>
                  <i
                    v-if="ruleForm.jtf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(5)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="月收入工资" prop="ysr">
              <el-input
                @input="onInput(6, $event)"
                class="selector"
                v-model.number="ruleForm.ysr"
              >
                <template #suffix>
                  <i>岁</i>
                  <i
                    v-if="ruleForm.ysr != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(6)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="误工天数" prop="wgts">
              <el-input
                @input="onInput(7, $event)"
                class="selector"
                v-model.number="ruleForm.wgts"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.wgts != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(7)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="残疾鉴定费" prop="jdf">
              <el-input
                @input="onInput(8, $event)"
                class="selector"
                v-model.number="ruleForm.jdf"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.jdf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(8)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="残疾器具辅助费" prop="cjqj">
              <el-input
                @input="onInput(9, $event)"
                class="selector"
                v-model.number="ruleForm.cjqj"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.cjqj != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(9)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>
        </div>

        <div class="title">护工信息</div>
        <div class="li flex add-hg">
          <el-button class="element-btn" type="primary" @click="addHG"
            >添加护工</el-button
          >
        </div>
        <!-- 护工动态input -->
        <div
          class="line hg dynamic-line"
          v-for="(item, index) in ruleForm.hg"
          :key="index"
        >
          <el-form-item label="护工日薪" label-width="80px" prop="hg">
            <el-input
              @input="onInputHG({ row: index, col: 0 }, $event)"
              class=""
              v-model.number="ruleForm.hg[index].pay"
            >
              <template #suffix>
                <i>元</i>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="护理天数" label-width="80px" prop="hg">
            <el-input
              @input="onInputHG({ row: index, col: 1 }, $event)"
              class=""
              v-model.number="ruleForm.hg[index].days"
            >
              <template #suffix>
                <i>天</i>
              </template>
            </el-input>
          </el-form-item>
          <div class="delete-btn">
            <el-button
              @click="delHg(index)"
              type="primary"
              class="element-btn"
              icon="el-icon-delete"
            ></el-button>
          </div>
        </div>

        <div class="title">被扶养人</div>
        <div class="li flex add-bfyr">
          <el-button class="element-btn" type="primary" @click="addBFYR"
            >添加被扶养人</el-button
          >
        </div>
        <!-- 被扶养人动态input -->
        <div
          class="line bfyr dynamic-line"
          v-for="(item, index) in ruleForm.bfyr"
          :key="index"
        >
          <el-form-item label="被扶养人年龄" label-width="120px" prop="bfyr">
            <el-input
              @input="onInputBFYR({ row: index, col: 0 }, $event)"
              class=""
              v-model.number="ruleForm.bfyr[index].age"
            >
              <template #suffix>
                <i>岁</i>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="扶养义务人数" label-width="120px" prop="bfyr">
            <el-input
              @input="onInputBFYR({ row: index, col: 1 }, $event)"
              class=""
              v-model.number="ruleForm.bfyr[index].ywrs"
            >
              <template #suffix>
                <i>人</i>
              </template>
            </el-input>
          </el-form-item>
          <div class="delete-btn">
            <el-button
              @click="delBFYR(index)"
              type="primary"
              class="element-btn"
              icon="el-icon-delete"
            ></el-button>
          </div>
        </div>

        <!-- ********************处理事故人员信息********************* -->
        <div class="title">处理事故人员信息</div>
        <div class="li flex add-clry">
          <el-button class="element-btn" type="primary" @click="addCLRY"
            >添加处理事故人员</el-button
          >
        </div>
        <!-- 添加处理人员的动态input -->
        <div
          class="line clry dynamic-line"
          v-for="(item, index) in ruleForm.clry"
          :key="index"
        >
          <el-form-item label="月收入" label-width="120px" prop="clry">
            <el-input
              @input="onInputCLRY({ row: index, col: 0 }, $event)"
              class=""
              v-model.number="ruleForm.clry[index].ysr"
            >
              <template #suffix>
                <i>元</i>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="处理天数" label-width="120px" prop="clry">
            <el-input
              @input="onInputCLRY({ row: index, col: 1 }, $event)"
              class=""
              v-model.number="ruleForm.clry[index].clts"
            >
              <template #suffix>
                <i>天</i>
              </template>
            </el-input>
          </el-form-item>
          <div class="delete-btn">
            <el-button
              @click="delCLRY(index)"
              type="primary"
              class="element-btn"
              icon="el-icon-delete"
            ></el-button>
          </div>
        </div>

        <!-- ********************其他项目费用********************* -->
        <div class="title">其他项目费用</div>
        <div class="normal-box">
          <div class="form-container li dynamic-li">
            <el-form-item
              label="其他项目费用:"
              prop="others"
              label-width="160px"
            >
              <el-input
                @input="onInput(10, $event)"
                class="selector input"
                v-model.number="ruleForm.others"
              >
                <template #suffix>
                  <i>元</i>
                  <i
                    v-if="ruleForm.others != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(10)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>
        </div>

        <!-- ********************提示框********************* -->
        <el-dialog title="计算结果" :visible.sync="dialogVisible" width="50%">
          <p v-if="resultData.cjpcj > 0">残疾赔偿金:{{ resultData.cjpcj }}元</p>
          <p v-if="resultData.swpcj > 0">死亡赔偿金:{{ resultData.swpcj }}元</p>
          <p v-if="resultData.fwj > 0">精神损害抚慰金:{{ resultData.fwj }}元</p>

          <div v-if="resultData.fyf">
            <p v-for="(item, index) in resultData.fyf.amount" :key="index">
              被抚养人{{ index + 1 }}生活费:{{ item }}元
            </p>
          </div>

          <p v-if="resultData.fyf && resultData.fyf.sum > 0">
            被抚养人生活费合计:{{ resultData.fyf.sum }}元
          </p>
          <p v-if="resultData.yyf > 0">营养费:{{ resultData.yyf }}元</p>
          <p v-if="resultData.ylf > 0">医疗费:{{ resultData.ylf }}元</p>
          <p v-if="resultData.hxzlf > 0">后续医疗费:{{ resultData.hxzlf }}元</p>
          <p v-if="resultData.wgf > 0">误工费:{{ resultData.wgf }}元</p>
          <p v-if="resultData.hsbz > 0">
            住院伙食补助费:{{ resultData.hsbz }}元
          </p>
          <p v-if="resultData.szf > 0">丧葬费:{{ resultData.szf }}元</p>
          <p v-if="resultData.hlf > 0">护理费:{{ resultData.hlf }}元</p>
          <p v-if="resultData.cjqj > 0">
            残疾辅助器具费:{{ resultData.cjqj }}元
          </p>
          <p v-if="resultData.jtf > 0">交通费:{{ resultData.jtf }}元</p>
          <p v-if="resultData.zsf > 0">住宿费:{{ resultData.zsf }}元</p>
          <p v-if="resultData.jdf > 0">残疾鉴定费:{{ resultData.jdf }}元</p>
          <p v-if="resultData.rywgf">
            处理事故人员误工费:{{ resultData.rywgf }}
          </p>
          <p v-if="resultData.others > 0">其他费用:{{ resultData.others }}元</p>

          <p
            style="
              color: #c4141f;
              font-weight: 600;
              font-size: 18px;
              letter-spacing: 2px;
            "
          >
            总赔偿数额:{{ resultData.sum }}元
          </p>

          <p class="tip">
            说明：该标准为最新赔偿标准：医疗费、误工费、护理费、营养费等一般性赔偿项目均可按照实际发生主张，受害人可自行加入到总赔偿金额。
          </p>
          <p class="tip">
            注意：①计算结果就不考虑是否超出了限额。
            <br />

            ②以上项目均按照无责的情况下计算，若实际有责，请另行咨询律师比例分担问题。
          </p>

          <p class="cankao" style="color: #c5c5c5">
            以上计算结果仅供参考，实际费用以当地实际情况和具体证据材料为准！详情请咨询律师！
          </p>
        </el-dialog>

        <!-- 提交按钮 -->
        <div class="form-container li">
          <el-form-item class="form-btns">
            <div class="btns flex">
              <div>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button
                  class="calculator-btn element-btn"
                  id="gspcf-calculator"
                  type="primary"
                  @click="submitForm('ruleForm')"
                  >计算</el-button
                >
              </div>
            </div>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      dialogVisible: false,
      resultData: {},
      ruleForm: {
        age: "", //受害人年龄
        degree: "", //伤害程度
        pos: "", //事故所在地
        zsts: "", //赴外地住宿天数
        jyts: "", //住院/外地就医天数
        ylf: "", //医疗费
        hxzlf: "", //后续治疗费
        jtf: "", //交通费
        ysr: "", //月收入
        wgts: "", //误工天数
        jdf: "", //残疾鉴定费
        cjqj: "", //残疾器具辅助费
        hg: [
          {
            pay: "", // 护工薪水（元/天）
            days: "", // 护理天数
          },
        ], //护工信息（用于计算护理费）
        bfyr: [
          {
            age: "", // 被扶养人年龄
            ywrs: "", // 扶养义务人数
          },
        ],
        clry: [
          {
            ysr: "", // 月收入
            clts: "", // 处理天数
          },
        ],
        others: "", //其他费用
      },
      rules: {
        age: [{ required: true, message: "请输入职工年龄", trigger: "blur" }],
        degree: [
          { required: true, message: "请选择伤害程度", trigger: "blur" },
        ],
        pos: [{ required: true, message: "请选择事故所在地", trigger: "blur" }],
      },
      options1: [
        { id: "0", name: "无伤残" },
        { id: "1", name: "一级伤残" },
        { id: "2", name: "二级伤残" },
        { id: "3", name: "三级伤残" },
        { id: "4", name: "四级伤残" },
        { id: "5", name: "五级伤残" },
        { id: "6", name: "六级伤残" },
        { id: "7", name: "七级伤残" },
        { id: "8", name: "八级伤残" },
        { id: "9", name: "九级伤残" },
        { id: "10", name: "十级伤残" },
        { id: "11", name: "死亡" },
      ],
      areas: [
        { id: "beijing", name: "北京" },
        { id: "shanghai", name: "上海" },
        { id: "guangzhou", name: "广州" },
        { id: "shenzhen", name: "深圳" },
        { id: "zhuhai", name: "珠海" },
        { id: "dongguan", name: "东莞" },
        { id: "foshan", name: "佛山" },
        { id: "huizhou", name: "惠州" },
        { id: "zhongshan", name: "中山" },
        { id: "qingyuan", name: "清远" },
        { id: "zhaoqing", name: "肇庆" },
        { id: "jiangmen", name: "江门" },
        { id: "zhanjiang", name: "湛江" },
        { id: "shantou", name: "汕头" },
        { id: "hangzhou", name: "杭州" },
        { id: "ningbo", name: "宁波" },
        { id: "tianjin", name: "天津" },
        { id: "changsha", name: "长沙" },
        { id: "guangxi", name: "广西" },
        { id: "guangdong", name: "广东省其他地区" },
      ],
    };
  },
  methods: {
    /**
     * 处理人员的动态变化的Input 监听
     */
    onInputCLRY(info, val) {
      var clry = this.ruleForm.clry; //护工动态数组
      var row = info.row;
      var col = info.col;
      // console.log("监听输入", info, val, clry);
      if (col == 0) {
        //月收入
        this.ruleForm.clry[row].ysr = val.replace(/\D/g, "");
      } else {
        //处理天数
        this.ruleForm.clry[row].clts = val.replace(/\D/g, "");
      }
    },
    /**
     * 被抚养人动态变化的Input 监听
     */
    onInputBFYR(info, val) {
      var bfyr = this.ruleForm.bfyr; //护工动态数组
      var row = info.row;
      var col = info.col;
      // console.log("监听护工输入", info, val, bfyr);
      if (col == 0) {
        //年龄
        this.ruleForm.bfyr[row].age = val.replace(/\D/g, "");
      } else {
        //人数
        this.ruleForm.bfyr[row].ywrs = val.replace(/\D/g, "");
      }
    },
    /**
     * 护工动态变化的Input 监听
     */
    onInputHG(info, val) {
      var hg = this.ruleForm.hg; //护工动态数组
      var row = info.row;
      var col = info.col;
      // console.log("监听护工输入", info, val, hg);
      if (col == 0) {
        //护工日薪
        this.ruleForm.hg[row].pay = val.replace(/\D/g, "");
      } else {
        //护理天数
        this.ruleForm.hg[row].days = val.replace(/\D/g, "");
      }
    },
    clearInput(choice) {
      if (choice == 0) {
        this.ruleForm.age = "";
        return;
      }
      if (choice == 1) {
        this.ruleForm.zsts = "";
        return;
      }
      if (choice == 2) {
        this.ruleForm.jyts = "";
        return;
      }

      if (choice == 3) {
        this.ruleForm.ylf = "";
        return;
      }

      if (choice == 4) {
        this.ruleForm.hxzlf = "";
        return;
      }

      if (choice == 5) {
        this.ruleForm.jtf = "";
        return;
      }

      if (choice == 6) {
        this.ruleForm.ysr = "";
        return;
      }

      if (choice == 7) {
        this.ruleForm.wgts = "";
        return;
      }

      if (choice == 8) {
        this.ruleForm.jdf = "";
        return;
      }

      if (choice == 9) {
        this.ruleForm.cjqj = "";
        return;
      }

      if (choice == 10) {
        this.ruleForm.others = "";
        return;
      }
    },

    /**
     * 非变化的Input 监听
     */
    onInput(choice, val) {
      // console.log(choice, val);
      if (choice == 0) {
        this.ruleForm.age = val.replace(/\D/g, "");
        return;
      }
      if (choice == 1) {
        this.ruleForm.zsts = val.replace(/\D/g, "");
        return;
      }
      if (choice == 2) {
        this.ruleForm.jyts = val.replace(/\D/g, "");
        return;
      }

      if (choice == 3) {
        this.ruleForm.ylf = val.replace(/\D/g, "");
        return;
      }

      if (choice == 4) {
        this.ruleForm.hxzlf = val.replace(/\D/g, "");
        return;
      }

      if (choice == 5) {
        this.ruleForm.jtf = val.replace(/\D/g, "");
        return;
      }

      if (choice == 6) {
        this.ruleForm.ysr = val.replace(/\D/g, "");
        return;
      }

      if (choice == 7) {
        this.ruleForm.wgts = val.replace(/\D/g, "");
        return;
      }

      if (choice == 8) {
        this.ruleForm.jdf = val.replace(/\D/g, "");
        return;
      }

      if (choice == 9) {
        this.ruleForm.cjqj = val.replace(/\D/g, "");
        return;
      }

      if (choice == 10) {
        this.ruleForm.others = val.replace(/\D/g, "");
        return;
      }
    },
    onSelect() {},
    blur() {
      this.elementBtnBlur("gspcf-calculator");
      this.elementBtnBlurByClass("element-btn");
    },
    submitForm(formName) {
      this.blur();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = this.onCalculate();
          // console.log("计算的结果==>", data.data);
          this.resultData = data.data;
          this.dialogVisible = true;
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.resetDynamicInput();
    },
    /**
     * 重置动态输入框
     */
    resetDynamicInput() {
      var hg = this.ruleForm.hg;
      var bfyr = this.ruleForm.bfyr;
      var clry = this.ruleForm.clry;
      for (var i = 0; i < hg.length; i++) {
        hg[i].pay = "";
        hg[i].days = "";
      }
      for (var j = 0; j < bfyr.length; j++) {
        bfyr[j].age = "";
        bfyr[j].ywrs = "";
      }
      for (var k = 0; k < clry.length; k++) {
        clry[k].ysr = "";
        clry[k].clts = "";
      }
    },
    /**
     * 点击添加护工
     */
    addHG() {
      this.blur();
      var hg = this.ruleForm.hg; //护工动态数组
      // console.log("点击hg数组::", this.ruleForm.hg);
      hg.push({
        pay: "", // 护工薪水（元/天）
        days: "", // 护理天数
      });
    },
    /**
     * 删除护工,row从0开始计算
     */
    delHg(row) {
      this.blur();
      var hg = this.ruleForm.hg; //护工动态数组
      // console.log("删除护工", row, hg);
      hg.splice(row, 1);
    },

    /**
     * 添加被扶养人
     */
    addBFYR() {
      this.blur();
      var bfyr = this.ruleForm.bfyr;
      // console.log("点击hg数组::", this.ruleForm.bfyr);
      bfyr.push({
        age: "", // 年龄
        ywrs: "", // 义务人数
      });
    },
    /**
     * 删除被扶养人
     */
    delBFYR(row) {
      this.blur();
      var bfyr = this.ruleForm.bfyr;
      // console.log("删除护工", row, bfyr);
      bfyr.splice(row, 1);
    },
    /**
     * 添加处理人员
     */
    addCLRY() {
      this.blur();
      var clry = this.ruleForm.clry;
      // console.log("点击clry数组::", this.ruleForm.clry);
      clry.push({
        ysr: "", // 月收入
        clts: "", // 处理天数
      });
    },
    /**
     * 删除处理人员
     */
    delCLRY(row) {
      this.blur();
      var clry = this.ruleForm.clry;
      // console.log("删除clry", row, clry);
      clry.splice(row, 1);
    },
    /**
     * 检查hg,bfyr, clry 三个动态变化的数组,是否填满了
     * 没填满的行将会被删除
     */
    checkDynamicInput() {
      var hg = this.ruleForm.hg;
      var bfyr = this.ruleForm.bfyr;
      var clry = this.ruleForm.clry;
      // console.log("hg==", hg);
      // console.log("bfyr==", bfyr);
      // console.log("clry==", clry);

      var i = 0;
      while (hg.length > 0) {
        if (i >= hg.length) {
          break;
        }

        if (hg[i].pay && hg[i].days) {
          i++;
        } else {
          hg.splice(i, 1);
          i = 0; // 切掉以后, i重新计算
        }
      }

      var j = 0;
      while (bfyr.length > 0) {
        if (j >= bfyr.length) {
          break;
        }

        if (bfyr[j].age && bfyr[j].ywrs) {
          j++;
        } else {
          bfyr.splice(j, 1);
          j = 0; // 切掉以后, j重新计算
        }
      }

      var k = 0;
      while (clry.length > 0) {
        if (k >= clry.length) {
          break;
        }

        if (clry[k].ysr && clry[k].clts) {
          k++;
        } else {
          clry.splice(k, 1);
          k = 0; // 切掉以后, k重新计算
        }
      }
    },
    /**
     * 计算费用
     */
    onCalculate() {
      this.checkDynamicInput();
      // console.log("this.ruleForm==", this.ruleForm);
      var age = Number(this.ruleForm.age); //受害人年龄
      var degree = this.ruleForm.degree; //伤害程度
      var pos = this.ruleForm.pos; //事故所在地
      var zsts = Number(this.ruleForm.zsts); //赴外地住宿天数
      var jyts = Number(this.ruleForm.jyts); //住院/外地就医天数
      var ylf = Number(this.ruleForm.ylf); //医疗费
      var hxzlf = Number(this.ruleForm.hxzlf); //后续治疗费
      var jtf = Number(this.ruleForm.jtf); //交通费
      var ysr = Number(this.ruleForm.ysr); //月收入
      var wgts = Number(this.ruleForm.wgts); //误工天数
      var jdf = Number(this.ruleForm.jdf); //残疾鉴定费
      var cjqj = Number(this.ruleForm.cjqj); //残疾器具辅助费
      var others = Number(this.ruleForm.others); //其他费用

      var hg = this.ruleForm.hg; //护工  数组
      var bfyr = this.ruleForm.bfyr; //被抚养人  数组
      var clry = this.ruleForm.clry; //处理人员  数组

      //********************** */

      ylf = parseFloat(ylf.toFixed(2)); // 1、医疗费
      hxzlf = parseFloat(hxzlf.toFixed(2)); // 2、后续治疗费
      jtf = parseFloat(jtf.toFixed(2)); // 3、交通费
      others = parseFloat(others.toFixed(2)); // 其他费用
      cjqj = parseFloat(cjqj.toFixed(2)); // 残疾辅助器具费
      jdf = parseFloat(jdf.toFixed(2)); // 鉴定费
      var wgf = this.countWgf(ysr, wgts); // 误工费
      var hsbz = this.countHsbz(pos, jyts); // 住院伙食补助费
      var zsf = this.countZsf(pos, zsts); // 住宿费
      var yyf = this.countYyf(degree); // 营养费（残疾）
      var hlf = this.countHlf(hg); // 护理费（残疾、死亡）

      var cjpcj = this.countCjpc(pos, degree, age); // 残疾赔偿金（残疾）
      var fwj = this.countJssh(pos, degree); // 精神损害抚慰金（残疾、死亡）
      var fyf = this.countFyf(pos, degree, bfyr); // 被扶养人生活费（残疾、死亡）

      var szf = this.countSzf(pos); // 丧葬费（死亡）
      var swpcj = this.countSwpc(pos, age); // 死亡赔偿金（死亡）
      var rywgf = this.countRywgf(clry); // 处理事故人员误工费（死亡）

      var data = {};
      // 无伤残
      if (degree == "0") {
        data.ylf = ylf; // 1、医疗费
        data.hxzlf = hxzlf; // 2、后续治疗费
        data.wgf = wgf; // 3、误工费
        data.hsbz = hsbz; // 4、住院伙食补助费
        data.jtf = jtf; // 5、交通费
        data.zsf = zsf; // 6、住宿费
        data.others = others; // 7、其他费用
        // 合计
        data.sum = parseFloat(
          (ylf + hxzlf + wgf + hsbz + jtf + zsf + others).toFixed(2)
        );
      }
      // 伤残
      else if (degree != "11") {
        data.ylf = ylf; // 1、医疗费
        data.hxzlf = hxzlf; // 2、后续治疗费
        data.yyf = yyf; // 3、营养费
        data.wgf = wgf; // 4、误工费
        data.hsbz = hsbz; // 5、住院伙食补助费
        data.hlf = hlf; // 6、护理费
        data.cjpcj = cjpcj; // 7、残疾赔偿金
        data.fwj = fwj; // 8、精神损害抚慰金
        data.fyf = fyf; // 9、被扶养人生活费
        data.cjqj = cjqj; // 10、残疾辅助器具费
        data.jtf = jtf; // 11、交通费
        data.zsf = zsf; // 12、住宿费
        data.jdf = jdf; // 13、鉴定费
        data.others = others; // 14、其他费用
        // 合计
        data.sum = parseFloat(
          (
            ylf +
            hxzlf +
            yyf +
            wgf +
            hsbz +
            hlf +
            cjpcj +
            fwj +
            fyf.sum +
            cjqj +
            jtf +
            zsf +
            jdf +
            others
          ).toFixed(2)
        );
      }
      // 死亡
      else if (degree == "11") {
        data.ylf = ylf; // 1、医疗费
        data.wgf = wgf; // 2、误工费
        data.hsbz = hsbz; // 3、住院伙食补助费
        data.hlf = hlf; // 4、护理费
        data.szf = szf; // 5、丧葬费
        data.swpcj = swpcj; // 6、死亡赔偿金
        data.fwj = fwj; // 7、精神损害抚慰金
        data.fyf = fyf; // 8、被扶养人生活费
        data.rywgf = rywgf; // 9、处理事故人员误工费
        data.jtf = jtf; // 10、交通费
        data.zsf = zsf; // 11、住宿费
        data.others = others; // 12、其他费用
        // 合计
        data.sum = parseFloat(
          (
            ylf +
            wgf +
            hsbz +
            hlf +
            szf +
            swpcj +
            fwj +
            fyf.sum +
            rywgf +
            jtf +
            zsf +
            others
          ).toFixed(2)
        );
      }

      return {
        message: "success",
        code: 200,
        data: data,
      };
    },
    /*
     * 计算误工费
     */
    countWgf(ysr, wgts) {
      var wgf;

      if (ysr !== "" && wgts !== "") {
        wgf = Math.round((ysr / 30) * wgts * 100) / 100;
      } else {
        wgf = 0;
      }

      return wgf;
    },
    /*
     * 计算住院伙食补助费
     */
    countHsbz(pos, jyts) {
      var hsbz;

      if (jyts !== "") {
        if (pos === "beijing") {
          hsbz = 50;
        } else if (pos === "shanghai") {
          hsbz = 20;
        } else if (
          pos === "guangzhou" ||
          pos === "foshan" ||
          pos === "dongguan" ||
          pos === "huizhou" ||
          pos === "zhongshan" ||
          pos === "qingyuan" ||
          pos === "zhaoqing" ||
          pos === "jiangmen" ||
          pos === "zhanjiang"
        ) {
          hsbz = 100;
        } else if (pos === "shenzhen" || pos === "zhuhai") {
          hsbz = 100;
        } else if (
          pos === "shantou" ||
          pos === "hangzhou" ||
          pos === "ningbo" ||
          pos === "tianjin"
        ) {
          hsbz = 50;
        } else if (
          pos === "changsha" ||
          pos === "guangxi" ||
          pos === "guangdong"
        ) {
          hsbz = 50;
        }

        var result = Math.round(hsbz * jyts * 100) / 100;

        return result;
      }

      return 0;
    },
    /*
     * 计算住宿费
     */
    countZsf(pos, zsts) {
      var zsf;

      if (zsts !== "") {
        if (pos === "beijing" || pos === "shanghai") {
          zsf = 500;
        } else if (
          pos === "guangzhou" ||
          pos === "foshan" ||
          pos === "dongguan" ||
          pos === "huizhou" ||
          pos === "zhongshan" ||
          pos === "qingyuan" ||
          pos === "zhaoqing" ||
          pos === "jiangmen" ||
          pos === "zhanjiang" ||
          pos === "shenzhen" ||
          pos === "zhuhai"
        ) {
          zsf = 450;
        } else if (pos === "shantou") {
          zsf = 20;
        } else if (pos === "hangzhou" || pos === "ningbo") {
          zsf = 400;
        } else if (pos === "tianjin") {
          zsf = 380;
        } else if (pos === "changsha") {
          zsf = 350;
        } else if (pos === "guangxi") {
          zsf = 420;
        } else if (pos === "guangdong") {
          zsf = 400;
        }

        var result = Math.round(zsf * zsts * 100) / 100;

        return result;
      }

      return 0;
    },
    /*
     * 获取营养费
     */
    countYyf(degree) {
      var yyf;

      switch (degree) {
        case "1":
          yyf = 5000;
          break;
        case "2":
          yyf = 4500;
          break;
        case "3":
          yyf = 4000;
          break;
        case "4":
          yyf = 3500;
          break;
        case "5":
          yyf = 3000;
          break;
        case "6":
          yyf = 2500;
          break;
        case "7":
          yyf = 2000;
          break;
        case "8":
          yyf = 1500;
          break;
        case "9":
          yyf = 1000;
          break;
        case "10":
          yyf = 500;
          break;
        default:
          yyf = 0;
          break;
      }

      return yyf;
    },
    /*
     * 计算护理费
     */
    countHlf(hg) {
      var sum = 0;
      // hg是数组
      if (hg.length) {
        for (var i = 0; i < hg.length; i++) {
          var val = hg[i];
          var pay = val["pay"]; // 护工薪水（元/天）
          var days = val["days"]; // 护理天数

          sum = sum + pay * days;
        }
      }

      return sum;
    },
    /*
     * 计算残疾赔偿金
     */
    countCjpc(pos, degree, age) {
      var amount = 0;
      if (degree != "11" && degree != "0") {
        // 北京
        if (pos == "beijing") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 1630360;
              else if (age >= 60 && age <= 75) amount = 81518 * (80 - age) * 1;
              else amount = 407590;
              break;
            case "2":
              if (age < 60) amount = 1467324;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.9;
              else amount = 366831;
              break;
            case "3":
              if (age < 60) amount = 1304288;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.8;
              else amount = 326072;
              break;
            case "4":
              if (age < 60) amount = 1141252;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.7;
              else amount = 285313;
              break;
            case "5":
              if (age < 60) amount = 978216;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.6;
              else amount = 244554;
              break;
            case "6":
              if (age < 60) amount = 815180;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.5;
              else amount = 203795;
              break;
            case "7":
              if (age < 60) amount = 652144;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.4;
              else amount = 163036;
              break;
            case "8":
              if (age < 60) amount = 489108;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.3;
              else amount = 122277;
              break;
            case "9":
              if (age < 60) amount = 326072;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.2;
              else amount = 81518;
              break;
            case "10":
              if (age < 60) amount = 163036;
              else if (age >= 60 && age <= 75)
                amount = 81518 * (80 - age) * 0.1;
              else amount = 40759;
              break;
          }
        }
        // 上海
        else if (pos == "shanghai") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 1648580;
              else if (age >= 60 && age <= 75) amount = 82429 * (80 - age) * 1;
              else amount = 412145;
              break;
            case "2":
              if (age < 60) amount = 1483722;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.9;
              else amount = 370930.5;
              break;
            case "3":
              if (age < 60) amount = 1318864;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.8;
              else amount = 329716;
              break;
            case "4":
              if (age < 60) amount = 1154006;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.7;
              else amount = 288501.5;
              break;
            case "5":
              if (age < 60) amount = 989148;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.6;
              else amount = 247287;
              break;
            case "6":
              if (age < 60) amount = 824290;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.5;
              else amount = 206072.5;
              break;
            case "7":
              if (age < 60) amount = 659432;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.4;
              else amount = 164858;
              break;
            case "8":
              if (age < 60) amount = 494574;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.3;
              else amount = 123643.5;
              break;
            case "9":
              if (age < 60) amount = 329716;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.2;
              else amount = 82429;
              break;
            case "10":
              if (age < 60) amount = 164858;
              else if (age >= 60 && age <= 75)
                amount = 82429 * (80 - age) * 0.1;
              else amount = 41214.5;
              break;
          }
        }
        // 广州、佛山、东莞、惠州、中山、清远、肇庆、江门、湛江、广东省其他地区
        else if (
          pos == "guangzhou" ||
          pos == "foshan" ||
          pos == "dongguan" ||
          pos == "huizhou" ||
          pos == "zhongshan" ||
          pos == "qingyuan" ||
          pos == "zhaoqing" ||
          pos == "jiangmen" ||
          pos == "zhanjiang" ||
          pos == "guangdong"
        ) {
          switch (degree) {
            case "1":
              if (age < 60) amount = 1097080;
              else if (age >= 60 && age <= 75) amount = 54854 * (80 - age) * 1;
              else amount = 274270;
              break;
            case "2":
              if (age < 60) amount = 987372;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.9;
              else amount = 246843;
              break;
            case "3":
              if (age < 60) amount = 877664;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.8;
              else amount = 219416;
              break;
            case "4":
              if (age < 60) amount = 767956;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.7;
              else amount = 191989;
              break;
            case "5":
              if (age < 60) amount = 658248;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.6;
              else amount = 164562;
              break;
            case "6":
              if (age < 60) amount = 548540;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.5;
              else amount = 137135;
              break;
            case "7":
              if (age < 60) amount = 438832;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.4;
              else amount = 109708;
              break;
            case "8":
              if (age < 60) amount = 329124;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.3;
              else amount = 82281;
              break;
            case "9":
              if (age < 60) amount = 219416;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.2;
              else amount = 54854;
              break;
            case "10":
              if (age < 60) amount = 109708;
              else if (age >= 60 && age <= 75)
                amount = 54854 * (80 - age) * 0.1;
              else amount = 27427;
              break;
          }
        }
        // 深圳
        else if (pos == "shenzhen") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 1416940;
              else if (age >= 60 && age <= 75) amount = 70847 * (80 - age) * 1;
              else amount = 354235;
              break;
            case "2":
              if (age < 60) amount = 1275246;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.9;
              else amount = 318811.5;
              break;
            case "3":
              if (age < 60) amount = 1133552;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.8;
              else amount = 283388;
              break;
            case "4":
              if (age < 60) amount = 991858;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.7;
              else amount = 247964.5;
              break;
            case "5":
              if (age < 60) amount = 850164;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.6;
              else amount = 212541;
              break;
            case "6":
              if (age < 60) amount = 708470;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.5;
              else amount = 177117.5;
              break;
            case "7":
              if (age < 60) amount = 566776;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.4;
              else amount = 141694;
              break;
            case "8":
              if (age < 60) amount = 425082;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.3;
              else amount = 106270.5;
              break;
            case "9":
              if (age < 60) amount = 283388;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.2;
              else amount = 70847;
              break;
            case "10":
              if (age < 60) amount = 141694;
              else if (age >= 60 && age <= 75)
                amount = 70847 * (80 - age) * 0.1;
              else amount = 35423.5;
              break;
          }
        }
        // 珠海
        else if (pos == "zhuhai") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 1284680;
              else if (age >= 60 && age <= 75) amount = 64234 * (80 - age) * 1;
              else amount = 321170;
              break;
            case "2":
              if (age < 60) amount = 1156212;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 289053;
              break;
            case "3":
              if (age < 60) amount = 1027744;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 256936;
              break;
            case "4":
              if (age < 60) amount = 899276;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 224819;
              break;
            case "5":
              if (age < 60) amount = 770808;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 192702;
              break;
            case "6":
              if (age < 60) amount = 642340;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 160585;
              break;
            case "7":
              if (age < 60) amount = 513872;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 128468;
              break;
            case "8":
              if (age < 60) amount = 385404;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 96351;
              break;
            case "9":
              if (age < 60) amount = 256936;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 64234;
              break;
            case "10":
              if (age < 60) amount = 128468;
              else if (age >= 60 && age <= 75)
                amount = 64234 * (80 - age) * 0.9;
              else amount = 32117;
              break;
          }
        }
        // 汕头
        else if (pos == "shantou") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 712020;
              else if (age >= 60 && age <= 75) amount = 35601 * (80 - age) * 1;
              else amount = 178005;
              break;
            case "2":
              if (age < 60) amount = 640818;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 160204.5;
              break;
            case "3":
              if (age < 60) amount = 569616;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 142404;
              break;
            case "4":
              if (age < 60) amount = 498414;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 124603.5;
              break;
            case "5":
              if (age < 60) amount = 427212;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 106803;
              break;
            case "6":
              if (age < 60) amount = 356010;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 89002.5;
              break;
            case "7":
              if (age < 60) amount = 284808;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 71202;
              break;
            case "8":
              if (age < 60) amount = 213606;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 53401.5;
              break;
            case "9":
              if (age < 60) amount = 142404;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 35601;
              break;
            case "10":
              if (age < 60) amount = 71202;
              else if (age >= 60 && age <= 75)
                amount = 35601 * (80 - age) * 0.9;
              else amount = 17800.5;
              break;
          }
        }
        // 杭州
        else if (pos == "hangzhou") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 1369740;
              else if (age >= 60 && age <= 75) amount = 68487 * (80 - age) * 1;
              else amount = 342435;
              break;
            case "2":
              if (age < 60) amount = 1232766;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 308191.5;
              break;
            case "3":
              if (age < 60) amount = 1095792;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 273948;
              break;
            case "4":
              if (age < 60) amount = 958818;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 239704.5;
              break;
            case "5":
              if (age < 60) amount = 821844;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 205461;
              break;
            case "6":
              if (age < 60) amount = 684870;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 171217.5;
              break;
            case "7":
              if (age < 60) amount = 547896;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 136974;
              break;
            case "8":
              if (age < 60) amount = 410922;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 102730.5;
              break;
            case "9":
              if (age < 60) amount = 273948;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 68487;
              break;
            case "10":
              if (age < 60) amount = 136974;
              else if (age >= 60 && age <= 75)
                amount = 68487 * (80 - age) * 0.9;
              else amount = 34243.5;
              break;
          }
        }
        // 宁波
        else if (pos == "ningbo") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 1477380;
              else if (age >= 60 && age <= 75) amount = 73869 * (80 - age) * 1;
              else amount = 369345;
              break;
            case "2":
              if (age < 60) amount = 1329642;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 332410.5;
              break;
            case "3":
              if (age < 60) amount = 1181904;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 295476;
              break;
            case "4":
              if (age < 60) amount = 1034166;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 258541.5;
              break;
            case "5":
              if (age < 60) amount = 886428;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 221607;
              break;
            case "6":
              if (age < 60) amount = 738690;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 184672.5;
              break;
            case "7":
              if (age < 60) amount = 590952;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 147738;
              break;
            case "8":
              if (age < 60) amount = 443214;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 110803.5;
              break;
            case "9":
              if (age < 60) amount = 295476;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 73869;
              break;
            case "10":
              if (age < 60) amount = 147738;
              else if (age >= 60 && age <= 75)
                amount = 73869 * (80 - age) * 0.9;
              else amount = 36934.5;
              break;
          }
        }
        // 天津
        else if (pos == "tianjin") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 922380;
              else if (age >= 60 && age <= 75) amount = 46119 * (80 - age) * 1;
              else amount = 230595;
              break;
            case "2":
              if (age < 60) amount = 830142;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 207535.5;
              break;
            case "3":
              if (age < 60) amount = 737904;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 184476;
              break;
            case "4":
              if (age < 60) amount = 645666;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 161416.5;
              break;
            case "5":
              if (age < 60) amount = 553428;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 138357;
              break;
            case "6":
              if (age < 60) amount = 461190;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 115297.5;
              break;
            case "7":
              if (age < 60) amount = 368952;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 92238;
              break;
            case "8":
              if (age < 60) amount = 276714;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 67178.5;
              break;
            case "9":
              if (age < 60) amount = 184476;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 46119;
              break;
            case "10":
              if (age < 60) amount = 92238;
              else if (age >= 60 && age <= 75)
                amount = 46119 * (80 - age) * 0.9;
              else amount = 23059.5;
              break;
          }
        }
        // 长沙
        else if (pos == "changsha") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 897320;
              else if (age >= 60 && age <= 75) amount = 44866 * (80 - age) * 1;
              else amount = 224330;
              break;
            case "2":
              if (age < 60) amount = 807588;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 201897;
              break;
            case "3":
              if (age < 60) amount = 717856;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 179464;
              break;
            case "4":
              if (age < 60) amount = 628124;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 157031;
              break;
            case "5":
              if (age < 60) amount = 538392;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 134598;
              break;
            case "6":
              if (age < 60) amount = 448660;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 112165;
              break;
            case "7":
              if (age < 60) amount = 358928;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 89732;
              break;
            case "8":
              if (age < 60) amount = 269196;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 67299;
              break;
            case "9":
              if (age < 60) amount = 179464;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 44866;
              break;
            case "10":
              if (age < 60) amount = 89732;
              else if (age >= 60 && age <= 75)
                amount = 44866 * (80 - age) * 0.9;
              else amount = 22433;
              break;
          }
        }
        // 广西
        else if (pos == "guangxi") {
          switch (degree) {
            case "1":
              if (age < 60) amount = 770600;
              else if (age >= 60 && age <= 75) amount = 31416 * (80 - age) * 1;
              else amount = 192650;
              break;
            case "2":
              if (age < 60) amount = 693540;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 173385;
              break;
            case "3":
              if (age < 60) amount = 616480;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 154120;
              break;
            case "4":
              if (age < 60) amount = 539420;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 134855;
              break;
            case "5":
              if (age < 60) amount = 462360;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 115590;
              break;
            case "6":
              if (age < 60) amount = 385300;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 96325;
              break;
            case "7":
              if (age < 60) amount = 308240;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 77060;
              break;
            case "8":
              if (age < 60) amount = 231180;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 57795;
              break;
            case "9":
              if (age < 60) amount = 154120;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 38530;
              break;
            case "10":
              if (age < 60) amount = 77060;
              else if (age >= 60 && age <= 75)
                amount = 31416 * (80 - age) * 0.9;
              else amount = 19265;
              break;
          }
        }

        return amount;
      }

      return false;
    },
    /*
     * 计算精神损害抚慰金
     */
    countJssh(pos, degree) {
      var amount = 0;
      if (degree !== "0") {
        if (
          pos === "beijing" ||
          pos === "shanghai" ||
          pos === "guangzhou" ||
          pos === "shenzhen"
        ) {
          switch (degree) {
            case "1":
              amount = 100000;
              break;
            case "2":
              amount = 90000;
              break;
            case "3":
              amount = 80000;
              break;
            case "4":
              amount = 70000;
              break;
            case "5":
              amount = 60000;
              break;
            case "6":
              amount = 50000;
              break;
            case "7":
              amount = 40000;
              break;
            case "8":
              amount = 30000;
              break;
            case "9":
              amount = 20000;
              break;
            case "10":
              amount = 10000;
              break;
            case "11":
              amount = 100000;
              break;
          }
        } else if (
          pos === "tianjin" ||
          pos === "hangzhou" ||
          pos === "ningbo" ||
          pos === "changsha" ||
          pos === "guangxi" ||
          pos === "guangdong" ||
          pos === "zhuhai" ||
          pos === "foshan" ||
          pos === "shantou" ||
          pos === "dongguan" ||
          pos === "huizhou" ||
          pos === "zhongshan" ||
          pos === "qingyuan" ||
          pos === "zhaoqing" ||
          pos === "jiangmen" ||
          pos === "zhanjiang"
        ) {
          switch (degree) {
            case "1":
              amount = 50000;
              break;
            case "2":
              amount = 45000;
              break;
            case "3":
              amount = 40000;
              break;
            case "4":
              amount = 35000;
              break;
            case "5":
              amount = 30000;
              break;
            case "6":
              amount = 25000;
              break;
            case "7":
              amount = 20000;
              break;
            case "8":
              amount = 15000;
              break;
            case "9":
              amount = 10000;
              break;
            case "10":
              amount = 5000;
              break;
            case "11":
              amount = 50000;
              break;
          }
        }

        return amount;
      }

      return false;
    },
    /*
     * 计算被扶养人生活费
     */
    countFyf(pos, degree, bfyr) {
      var sum = 0;
      var arr = [];
      //bfyr是数组类型
      if (degree != "0" && bfyr.length) {
        var i = 0;

        for (var key in bfyr) {
          var value = bfyr[key];
          var age = value["age"]; // 被扶养人年龄
          var ywrs = value["ywrs"]; // 扶养义务人数

          // 获取赔偿基数 base
          var base;
          if (pos == "beijing") {
            base = 46776;
          } else if (pos == "shanghai") {
            base = 51295;
          } else if (
            pos == "guangzhou" ||
            pos == "foshan" ||
            pos == "dongguan" ||
            pos == "huizhou" ||
            pos == "zhongshan" ||
            pos == "qingyuan" ||
            pos == "zhaoqing" ||
            pos == "jiangmen" ||
            pos == "zhanjiang" ||
            pos == "guangdong"
          ) {
            base = 36621;
          } else if (pos == "shenzhen") {
            base = 46286;
          } else if (pos == "zhuhai") {
            base = 43957;
          } else if (pos == "shantou") {
            base = 25268;
          } else if (pos == "hangzhou") {
            base = 42193;
          } else if (pos == "ningbo") {
            base = 45362;
          } else if (pos == "tianjin") {
            base = 34811;
          } else if (pos == "changsha") {
            base = 28294;
          } else if (pos == "guangxi") {
            base = 22555;
          }

          // 获取赔偿指数 factor
          var factor;
          if (pos == "shanghai") {
            if (degree == "1" || degree == "2" || degree == "3") {
              factor = 1;
            } else if (degree == "4") {
              factor = 0.8;
            } else if (degree == "5") {
              factor = 0.6;
            } else if (degree == "6") {
              factor = 0.4;
            } else if (degree == "7") {
              factor = 0.2;
            } else {
              factor = 0;
            }
          } else {
            switch (degree) {
              case "1":
                factor = 1;
                break;
              case "2":
                factor = 0.9;
                break;
              case "3":
                factor = 0.8;
                break;
              case "4":
                factor = 0.7;
                break;
              case "5":
                factor = 0.6;
                break;
              case "6":
                factor = 0.5;
                break;
              case "7":
                factor = 0.4;
                break;
              case "8":
                factor = 0.3;
                break;
              case "9":
                factor = 0.2;
                break;
              case "10":
                factor = 0.1;
                break;
              case "11":
                factor = 1;
                break;
            }
          }

          // 计算扶养年限 years
          var years;
          if (age < 18) years = 18 - age;
          else if (age >= 18 && age < 60) years = 20;
          else if (age >= 60 && age < 75) years = 80 - age;
          else years = 5;

          // 计算该被扶养人的生活费
          var amount = Math.round(((base * years) / ywrs) * factor * 100) / 100;

          sum += amount;
          arr[i] = amount;
          i++;
        }
      }

      var result = {};
      result.sum = sum;
      result.amount = arr;

      return result;
    },
    /*
     * 计算丧葬费
     */
    countSzf(pos) {
      var szf;

      if (pos == "beijing") {
        szf = 63204;
      } else if (pos == "shanghai") {
        szf = 62028;
      } else if (
        pos == "guangzhou" ||
        pos == "foshan" ||
        pos == "dongguan" ||
        pos == "huizhou" ||
        pos == "zhongshan" ||
        pos == "qingyuan" ||
        pos == "zhaoqing" ||
        pos == "jiangmen" ||
        pos == "zhanjiang" ||
        pos == "guangdong"
      ) {
        szf = 75935;
      } else if (pos == "shenzhen") {
        szf = 117634;
      } else if (pos == "zhuhai") {
        szf = 104839.2;
      } else if (pos == "shantou") {
        szf = 53477;
      } else if (pos == "hangzhou") {
        szf = 54322.5;
      } else if (pos == "ningbo") {
        szf = 55643;
      } else if (pos == "tianjin") {
        szf = 35226;
      } else if (pos == "changsha") {
        szf = 41178;
      } else if (pos == "guangxi") {
        szf = 43056;
      }

      return szf;
    },
    /*
     * 计算死亡赔偿金
     */
    countSwpc(pos, age) {
      var amount = 0;

      if (pos == "beijing") {
        if (age < 60) amount = 1630360;
        else if (age >= 60 && age <= 75) amount = 81518 * (80 - age);
        else amount = 407590;
      } else if (pos == "shanghai") {
        if (age < 60) amount = 1648580;
        else if (age >= 60 && age <= 75) amount = 82429 * (80 - age);
        else amount = 412145;
      } else if (
        pos == "guangzhou" ||
        pos == "foshan" ||
        pos == "dongguan" ||
        pos == "huizhou" ||
        pos == "zhongshan" ||
        pos == "qingyuan" ||
        pos == "zhaoqing" ||
        pos == "jiangmen" ||
        pos == "zhanjiang" ||
        pos == "guangdong"
      ) {
        if (age < 60) amount = 1097080;
        else if (age >= 60 && age <= 75) amount = 54854 * (80 - age);
        else amount = 274270;
      } else if (pos == "shenzhen") {
        if (age < 60) amount = 1416940;
        else if (age >= 60 && age <= 75) amount = 70847 * (80 - age);
        else amount = 354235;
      } else if (pos == "zhuhai") {
        if (age < 60) amount = 1284680;
        else if (age >= 60 && age <= 75) amount = 64234 * (80 - age);
        else amount = 321170;
      } else if (pos == "shantou") {
        if (age < 60) amount = 712020;
        else if (age >= 60 && age <= 75) amount = 35601 * (80 - age);
        else amount = 178005;
      } else if (pos == "hangzhou") {
        if (age < 60) amount = 1369740;
        else if (age >= 60 && age <= 75) amount = 68487 * (80 - age);
        else amount = 342435;
      } else if (pos == "ningbo") {
        if (age < 60) amount = 1477380;
        else if (age >= 60 && age <= 75) amount = 73869 * (80 - age);
        else amount = 369345;
      } else if (pos == "tianjin") {
        if (age < 60) amount = 922380;
        else if (age >= 60 && age <= 75) amount = 46119 * (80 - age);
        else amount = 230595;
      } else if (pos == "changsha") {
        if (age < 60) amount = 897320;
        else if (age >= 60 && age <= 75) amount = 39842 * (80 - age);
        else amount = 199210;
      } else if (pos == "guangxi") {
        if (age < 60) amount = 770600;
        else if (age >= 60 && age <= 75) amount = 38530 * (80 - age);
        else amount = 192650;
      }

      return amount;
    },
    /*
     * 计算处理事故人员误工费
     */
    countRywgf(clry) {
      var sum = 0;
      //clry是一个数组
      if (clry && clry.length) {
        for (var key in clry) {
          var value = clry[key];
          var ysr = value["ysr"]; // 月收入
          var clts = value["clts"]; // 处理天数

          var amount = (ysr / 30) * clts;

          sum += amount;
        }
      }

      return Math.round(sum * 100) / 100;
    },
  },
};
</script>
<style>
/* .rspcf {
  border: 1px solid red;
} */

.rspcf .ul {
  width: 95%;
  /* border: 1px solid blue; */
  margin: 0 auto;
}

.rspcf p {
  margin-block: 10px;
}
.rspcf .cankao {
  margin-top: 20px;
}

.rspcf .title {
  width: 100%;
  line-height: 2;
  font-weight: 600;
  background: #eeeeee;
  margin: 20px 0;
  margin-top: 10px;
  padding-left: 24px;
}

/* .rspcf .el-form-item__content {
  border: 1px solid red;
} */

.rspcf .input {
  width: 90% !important;
}

.rspcf .li {
  /* border: 1px solid green; */
  width: 60%;
  margin: 0 auto;
  justify-content: center;
}

.rspcf .line {
  /* border: 1px solid blue; */
  margin-top: 23px;
}
.rspcf .tip {
  margin-top: 20px;
  color: #999999;
}

.rspcf .add-hg {
}

.rspcf .el-radio-group {
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

.dynamic-line {
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
}
.rspcf .bfyr {
  width: 100%;
}
.delete-btn {
  /* border: 1px solid gray; */
}
</style>
