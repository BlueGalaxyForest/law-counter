<template>
  <div class="gspcf comp variable">
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
            <el-form-item label="职工年龄" prop="age">
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

          <div class="form-container li dynamic-li">
            <el-form-item label="月工资收入" prop="gzsr">
              <el-input
                @input="onInput(1, $event)"
                class="selector"
                v-model.number="ruleForm.gzsr"
              >
                <template #suffix>
                  <i>元</i>
                  <i
                    v-if="ruleForm.gzsr != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(1)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <!-- 事故所在省份 -->
          <div class="form-container li dynamic-li">
            <el-form-item label="事故所在省份" prop="pos">
              <el-select
                @change="onSelect"
                class="selector"
                v-model="ruleForm.pos"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in provinces"
                  :label="item.name"
                  :value="item.id"
                  :key="item.id"
                ></el-option>
              </el-select>
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

          <div class="title">各项费用数据</div>

          <div class="form-container li dynamic-li">
            <el-form-item label="医疗费" prop="ylf">
              <el-input
                @input="onInput(2, $event)"
                class="selector"
                v-model.number="ruleForm.ylf"
              >
                <template #suffix>
                  <i>元</i>
                  <i
                    v-if="ruleForm.ylf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(2)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="住院天数" prop="zyts">
              <el-input
                @input="onInput(3, $event)"
                class="selector"
                v-model.number="ruleForm.zyts"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.zyts != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(3)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="交通费" prop="jtf">
              <el-input
                @input="onInput(4, $event)"
                class="selector"
                v-model.number="ruleForm.jtf"
              >
                <template #suffix>
                  <i>元</i>
                  <i
                    v-if="ruleForm.jtf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(4)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="外地就医天数" prop="jyts">
              <el-input
                @input="onInput(5, $event)"
                class="selector"
                v-model.number="ruleForm.jyts"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.jyts != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(5)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="外地住宿费" prop="zsf">
              <el-input
                @input="onInput(6, $event)"
                class="selector"
                v-model.number="ruleForm.zsf"
              >
                <template #suffix>
                  <i>(元/天)</i>
                  <i
                    v-if="ruleForm.zsf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(6)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="外地伙食费" prop="hsf">
              <el-input
                @input="onInput(7, $event)"
                class="selector"
                v-model.number="ruleForm.hsf"
              >
                <template #suffix>
                  <i>(元/天)</i>
                  <i
                    v-if="ruleForm.hsf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(7)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item label="停工留薪期" prop="tglx">
              <el-input
                @input="onInput(8, $event)"
                class="selector"
                v-model.number="ruleForm.tglx"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.tglx != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(8)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="title">停工留薪期护理费用</div>

          <div class="form-container li dynamic-li">
            <el-form-item
              label="停工留薪期护理天数:"
              prop="hlts"
              label-width="160px"
            >
              <el-input
                style="width: 200px"
                @input="onInput(9, $event)"
                class="selector input"
                v-model.number="ruleForm.hlts"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.hlts != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(9)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item
              label="停工留薪期护理费用:"
              prop="hlf"
              label-width="160px"
            >
              <el-input
                @input="onInput(10, $event)"
                class="selector input"
                v-model.number="ruleForm.hlf"
              >
                <template #suffix>
                  <i>(元/天)</i>
                  <i
                    v-if="ruleForm.hlf != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(10)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item
              label="定残后护理天数:"
              prop="dchlts"
              label-width="160px"
            >
              <el-input
                @input="onInput(11, $event)"
                class="selector input"
                v-model.number="ruleForm.dchlts"
              >
                <template #suffix>
                  <i>天</i>
                  <i
                    v-if="ruleForm.dchlts != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(11)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>

          <div class="form-container li dynamic-li">
            <el-form-item
              label="定残后的护理程度"
              prop="hlcd"
              label-width="160px"
            >
              <el-select
                @change="onSelect"
                class="selector input"
                v-model="ruleForm.hlcd"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options2"
                  :label="item.name"
                  :value="item.id"
                  :key="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>

          <div class="title">其他项目费用</div>
          <div class="form-container li dynamic-li">
            <el-form-item
              label="其他项目费用:"
              prop="others"
              label-width="160px"
            >
              <el-input
                @input="onInput(12, $event)"
                class="selector input"
                v-model.number="ruleForm.others"
              >
                <template #suffix>
                  <i>元</i>
                  <i
                    v-if="ruleForm.others != ''"
                    class="el-icon-circle-close"
                    @click="clearInput(12)"
                  ></i>
                </template>
              </el-input>
            </el-form-item>
          </div>
        </div>

        <!-- 提示框 -->
        <el-dialog title="计算结果" :visible.sync="dialogVisible" width="50%">
          <p>伤残津贴:{{ resultData.scjt }}元</p>
          <p>一次性伤残补助金:{{ resultData.scbz }}元</p>
          <p>一次性工伤医疗补助金:{{ resultData.ylbz }}元</p>
          <p>一次性伤残就业补助金:{{ resultData.jybz }}元</p>
          <p>一次性工亡补助金:{{ resultData.gwbz }}元</p>
          <p>定残后护理费:{{ resultData.dchlf }}元</p>
          <p v-if="resultData.szf">丧葬补助金:{{ resultData.szbz }}元</p>
          <p>医疗费:{{ resultData.ylf }}元</p>
          <p>住院伙食补助费:{{ resultData.hsbz }}元</p>
          <p>交通费:{{ resultData.jtf }}元</p>
          <p>外地住宿费:{{ resultData.zsf }}元</p>
          <p>外地伙食费:{{ resultData.hsf }}元</p>
          <p>误工费:{{ resultData.wgf }}元</p>
          <p>停工留薪期护理费:{{ resultData.hlf }} 元</p>
          <!-- 丧葬补助金 -->
          <!-- <p v-if="resultData.szf">丧葬补助金:{{ resultData.szbz }}</p> -->
          <p>其他费用:{{ resultData.others }}元</p>
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

          <p style="color: #c5c5c5">
            以上计算结果仅供参考，实际费用以当地实际情况和具体证据材料为准！详情请咨询律师！
          </p>
        </el-dialog>

        <!-- 提交按钮 -->

        <el-form-item class="form-btns">
          <div class="btns flex">
            <div>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <el-button
                class="calculator-btn"
                id="gspcf-calculator"
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
      resultData: "",
      dialogVisible: false,
      ruleForm: {
        age: "",
        gzsr: "", //月工资收入
        pos: "", //事故所在地
        degree: "", //伤害程度
        ylf: "", //医疗费
        zyts: "", //住院天数
        jtf: "", //交通费
        jyts: "", //外地就医天数
        zsf: "", //外地住宿费（元/天）
        hsf: "", //外地伙食费（元/天）
        tglx: "", //停工留薪期
        hlts: "", //停工留薪期护理天数
        hlf: "", //停工留薪期护理费用（元/天)
        dchlts: "", //定残后护理天数
        hlcd: "", //定残后的护理程度
        others: "", //其他项目费用
      },
      rules: {
        age: [{ required: true, message: "请输入职工年龄", trigger: "blur" }],
        gzsr: [
          { required: true, message: "请输入月工资收入", trigger: "blur" },
        ],
        pos: [
          { required: true, message: "请选择事故所在地省份", trigger: "blur" },
        ],
        degree: [
          { required: true, message: "请选择伤害程度", trigger: "blur" },
        ],
      },
      provinces: [
        //省份列表
        { id: "11", name: "北京市" },
        { id: "31", name: "上海市" },
        { id: "12", name: "天津市" },
        { id: "50", name: "重庆市" },
        { id: "13", name: "河北省" },
        { id: "14", name: "山西省" },
        { id: "21", name: "辽宁省" },
        { id: "22", name: "吉林省" },
        { id: "23", name: "黑龙江省" },
        { id: "32", name: "江苏省" },
        { id: "33", name: "浙江省" },
        { id: "34", name: "安徽省" },
        { id: "35", name: "福建省" },
        { id: "36", name: "江西省" },
        { id: "37", name: "山东省" },
        { id: "41", name: "河南省" },
        { id: "42", name: "湖北省" },
        { id: "43", name: "湖南省" },
        { id: "44", name: "广东省" },
        { id: "46", name: "海南省" },
        { id: "51", name: "四川省" },
        { id: "52", name: "贵州省" },
        { id: "53", name: "云南省" },
        { id: "61", name: "陕西省" },
        { id: "62", name: "甘肃省" },
        { id: "63", name: "青海省" },
        { id: "15", name: "内蒙古自治区" },
        { id: "45", name: "广西壮族自治区" },
        { id: "54", name: "西藏自治区" },
        { id: "64", name: "宁夏回族自治区" },
        { id: "65", name: "新疆维吾尔族自治区" },
      ],
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
      options2: [
        { id: "1", name: "生活完全不能自理" },
        { id: "2", name: "生活大部分不能自理" },
        { id: "3", name: "生活部分不能自理" },
      ],
    };
  },
  methods: {
    clearInput(choice) {
      if (choice == 0) {
        this.ruleForm.age = "";
        return;
      }
      if (choice == 1) {
        this.ruleForm.gzsr = "";
        return;
      }
      if (choice == 2) {
        this.ruleForm.ylf = "";
        return;
      }
      if (choice == 3) {
        this.ruleForm.zyts = "";
        return;
      }
      if (choice == 4) {
        this.ruleForm.jtf = "";
        return;
      }
      if (choice == 5) {
        this.ruleForm.jyts = "";
        return;
      }
      if (choice == 6) {
        this.ruleForm.zsf = "";
        return;
      }
      if (choice == 7) {
        this.ruleForm.hsf = "";
        return;
      }
      if (choice == 8) {
        this.ruleForm.tglx = "";
        return;
      }
      if (choice == 9) {
        this.ruleForm.hlts = "";
        return;
      }
      if (choice == 10) {
        this.ruleForm.hlf = "";
        return;
      }
      if (choice == 11) {
        this.ruleForm.dchlts = "";
        return;
      }
      if (choice == 12) {
        this.ruleForm.others = "";
        return;
      }
    },

    onInput(choice, val) {
      // console.log(choice, val)
      if (choice == 0) {
        this.ruleForm.age = val.replace(/\D/g, "");
        return;
      }
      if (choice == 1) {
        this.ruleForm.gzsr = val.replace(/\D/g, "");
        return;
      }
      if (choice == 2) {
        this.ruleForm.ylf = val.replace(/\D/g, "");
        return;
      }
      if (choice == 3) {
        this.ruleForm.zyts = val.replace(/\D/g, "");
        return;
      }
      if (choice == 4) {
        this.ruleForm.jtf = val.replace(/\D/g, "");
        return;
      }
      if (choice == 5) {
        this.ruleForm.jyts = val.replace(/\D/g, "");
        return;
      }
      if (choice == 6) {
        this.ruleForm.zsf = val.replace(/\D/g, "");
        return;
      }
      if (choice == 7) {
        this.ruleForm.hsf = val.replace(/\D/g, "");
        return;
      }
      if (choice == 8) {
        this.ruleForm.tglx = val.replace(/\D/g, "");
        return;
      }
      if (choice == 9) {
        this.ruleForm.hlts = val.replace(/\D/g, "");
        return;
      }
      if (choice == 10) {
        this.ruleForm.hlf = val.replace(/\D/g, "");
        return;
      }
      if (choice == 11) {
        this.ruleForm.dchlts = val.replace(/\D/g, "");
        return;
      }
      if (choice == 12) {
        this.ruleForm.others = val.replace(/\D/g, "");
        return;
      }
    },
    onSelect() {},
    submitForm(formName) {
      this.elementBtnBlur("gspcf-calculator");
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
    },
    onCalculate() {
      var age = this.ruleForm.age;
      var gzsr = this.ruleForm.gzsr;
      var pos = this.ruleForm.pos;
      var degree = this.ruleForm.degree;

      var ylf = this.ruleForm.ylf ? this.ruleForm.ylf : 0;
      var zyts = this.ruleForm.zyts ? this.ruleForm.zyts : 0;
      var jtf = this.ruleForm.jtf ? this.ruleForm.jtf : 0;
      var jyts = this.ruleForm.jyts ? this.ruleForm.jyts : 0;
      var zsf = this.ruleForm.zsf ? this.ruleForm.zsf : 0;
      var hsf = this.ruleForm.hsf ? this.ruleForm.hsf : 0;
      var tglx = this.ruleForm.tglx ? this.ruleForm.tglx : 0;
      var hlts = this.ruleForm.hlts ? this.ruleForm.hlts : 0;
      var hlf = this.ruleForm.hlf ? this.ruleForm.hlf : 0;
      var dchlts = this.ruleForm.dchlts ? this.ruleForm.dchlts : 0;
      var hlcd = this.ruleForm.hlcd ? this.ruleForm.hlcd : 0;
      var others = this.ruleForm.others ? this.ruleForm.others : 0;

      ylf = parseFloat(Number(ylf).toFixed(2)); // 1、医疗费
      var hsbz = this.countZyhsbz(pos, zyts); // 2、住院伙食补助费
      jtf = parseFloat(Number(jtf).toFixed(2)); // 3、交通费
      zsf = this.countZsf(pos, zsf, jyts); // 4、外地住宿费
      hsf = this.countHsf(pos, hsf, jyts); // 5、外地伙食费
      var wgf = this.countWgf(tglx, gzsr); // 6、误工费
      hlf = this.countHlf(hlts, hlf); // 7、停工留薪期护理费
      var scjt = this.countScjt(degree, gzsr); // 8、伤残津贴
      var scbz = this.countScbz(degree, gzsr); // 9、一次性伤残补助金
      var ylbz = this.countYlbz(pos, degree, age, gzsr); // 10、一次性工伤医疗补助金
      var jybz = this.countJybz(pos, degree, age, gzsr); // 11、一次性伤残就业补助金
      var dchlf = this.countDchlf(degree, pos, hlcd, dchlts); // 12、定残后护理费
      var szbz = this.countSzbz(pos, degree); // 13、丧葬补助金
      var gwbz = this.countGwbz(degree); // 14、一次性工亡补助金
      others = parseFloat(Number(others).toFixed(2)); // 16、其他费用

      // 合计
      var sum =
        ylf +
        hsbz +
        jtf +
        zsf +
        hsf +
        wgf +
        hlf +
        scjt +
        scbz +
        ylbz +
        jybz +
        dchlf +
        szbz +
        gwbz +
        others;

      var data = {
        ylf: ylf,
        hsbz: hsbz,
        jtf: jtf,
        zsf: zsf,
        hsf: hsf,
        wgf: wgf,
        hlf: hlf,
        scjt: scjt,
        scbz: scbz,
        ylbz: ylbz,
        jybz: jybz,
        dchlf: dchlf,
        szbz: szbz,
        szf: szbz > 0,
        gwbz: gwbz,
        others: others,
        sum: sum,
      };

      return {
        message: "success",
        code: 200,
        data: data,
      };
    },
    /**
     * 四舍五入
     * @param {*} number
     * @param {*} decimalPlaces
     */
    round(number, decimalPlaces) {
      var factor = Math.pow(10, decimalPlaces);
      return Math.round(number * factor) / factor;
    },

    /*
     * 解除或者终止劳动关系时省/直辖市/自治区上年度职工月平均工资（元）
     */
    pjgz(pos) {
      var szf = this.szf(pos);
      var pjgz = szf / 6;
      return pjgz;
    },

    /*
     * 2020年度各地工伤丧葬补助金标准
     */
    szf(pos) {
      result = 0;
      switch (pos) {
        case "11": //北京
          result = 47129;
          break;
        case "31": //上海
          result = 46992;
          break;
        case "12": //天津
          result = 35226;
          break;
        case "50": //重庆
          result = 40882;
          break;
        case "13": //河北
          result = 35816.5;
          break;
        case "14": //山西
          result = 36103.5;
          break;
        case "21": //辽宁
          result = 34546.5;
          break;
        case "22": //吉林
          result = 37562.5;
          break;
        case "23": //黑龙江
          result = 28033.5;
          break;
        case "32": //江苏
          result = 43295;
          break;
        case "33": //浙江
          result = 33216;
          break;
        case "34": //安徽
          result = 39518.5;
          break;
        case "35": //福建
          result = 42583;
          break;
        case "36": //江西
          result = 38065.5;
          break;
        case "37": //山东
          result = 44754;
          break;
        case "41": //河南
          result = 34152.5;
          break;
        case "42": //湖北
          result = 32331.5;
          break;
        case "43": //湖南
          result = 38781.5;
          break;
        case "44": //广东
          result = 63800;
          break;
        case "46": //海南
          result = 37544.5;
          break;
        case "51": //四川
          result = 34633.5;
          break;
        case "52": //贵州
          result = 36134;
          break;
        case "53": //云南
          result = 52038.5;
          break;
        case "61": //陕西
          result = 39707.8;
          break;
        case "62": //甘肃
          result = 36852;
          break;
        case "63": //青海
          result = 33725.5;
          break;
        case "15": //内蒙古
          result = 31542;
          break;
        case "45": //广西
          result = 36774;
          break;
        case "54": //西藏
          result = 38354.5;
          break;
        case "64": //宁夏
          result = 40972.5;
          break;
        case "65": //新疆
          result = 38855;
          break;
      }
      return result;
    },

    /*
     * 2、住院伙食补助费
     */
    countZyhsbz(pos, zyts) {
      if (zyts !== "") {
        var amount;

        switch (pos) {
          case "11": //北京
            amount = 30;
            break;
          case "31": //上海
            amount = 20;
            break;
          case "12": //天津
            amount = 30;
            break;
          case "50": //重庆
            amount = 8;
            break;
          case "13": //河北
            amount = 20;
            break;
          case "14": //山西
            amount = 30;
            break;
          case "21": //辽宁
            amount = 30;
            break;
          case "22": //吉林
            amount = 15.5;
            break;
          case "23": //黑龙江
            amount = 30;
            break;
          case "32": //江苏
            amount = 20;
            break;
          case "33": //浙江
            amount = 30;
            break;
          case "34": //安徽
            amount = 20;
            break;
          case "35": //福建
            amount = 20;
            break;
          case "36": //江西
            amount = 20;
            break;
          case "37": //山东
            amount = 30;
            break;
          case "41": //河南
            amount = 30;
            break;
          case "42": //湖北
            amount = 15;
            break;
          case "43": //湖南
            amount = 10;
            break;
          case "44": //广东
            amount = 70;
            break;
          case "46": //海南
            amount = 100;
            break;
          case "51": //四川
            amount = 20;
            break;
          case "52": //贵州
            amount = 10;
            break;
          case "53": //云南
            amount = 20;
            break;
          case "61": //陕西
            amount = 20;
            break;
          case "62": //甘肃
            amount = 20;
            break;
          case "63": //青海
            amount = 15;
            break;
          case "15": //内蒙古
            amount = 15;
            break;
          case "45": //广西
            amount = 15;
            break;
          case "54": //西藏
            amount = 15;
            break;
          case "64": //宁夏
            amount = 15;
            break;
          case "65": //新疆
            amount = 15;
            break;
        }

        const result = (amount * zyts).toFixed(2);
        return Number(result);
      }

      return 0;
    },
    /*
     * 4、外地住宿费
     */
    countZsf(pos, zsf, jyts) {
      if (jyts !== "" && zsf !== "") {
        if (["11", "12", "13", "21", "34", "42"].includes(pos) && zsf > 150) {
          zsf = 150;
        } else if (["50", "51"].includes(pos) && zsf > 100) {
          zsf = 100;
        } else if (pos === "45" && zsf > 110) {
          zsf = 110;
        } else if (pos === "22") {
          var max = (this.pjgz(pos) / 30) * 0.6;
          if (zsf > max) {
            zsf = max;
          }
        }

        var sum = this.round(zsf * jyts, 2);

        if (pos === "46" && sum > 400) {
          sum = 400;
        }
        if (pos === "53" && sum > 450) {
          sum = 450;
        }
        if (pos === "64" && sum > 600) {
          sum = 600;
        }

        return sum;
      }

      return 0;
    },
    /*
     * 5、外地伙食费
     */
    countHsf(pos, hsf, jyts) {
      if (jyts !== "" && hsf !== "") {
        if (["11", "12", "50", "21", "41", "53"].includes(pos) && hsf > 50) {
          hsf = 50;
        } else if (["13", "35"].includes(pos) && hsf > 35) {
          hsf = 35;
        } else if (["42", "64"].includes(pos) && hsf > 30) {
          hsf = 30;
        } else if (pos === "45" && hsf > 40) {
          hsf = 40;
        } else if (pos === "22") {
          var max = (this.pjgz(pos) / 30) * 0.2;
          if (hsf > max) {
            hsf = max;
          }
        }

        var sum = this.round(hsf * jyts, 2);

        return sum;
      }

      return 0;
    },
    /*
     * 6、误工费
     */
    countWgf(tglx, gzsr) {
      var wgf;
      if (tglx !== "" && gzsr !== "") {
        wgf = this.round((tglx * gzsr) / 30, 2);
      } else {
        wgf = 0;
      }

      return wgf;
    },
    /*
     * 7、停工留薪期护理费
     */
    countHlf(hlts, hlf) {
      var hlf;
      if (hlts !== "" && hlf !== "") {
        hlf = this.round(hlts * hlf, 2);
      } else {
        hlf = 0;
      }

      return hlf;
    },
    /*
     * 8、伤残津贴
     */
    countScjt(degree, gzsr) {
      var result;
      switch (degree) {
        case "1":
          result = gzsr * 0.9;
          break;
        case "2":
          result = gzsr * 0.85;
          break;
        case "3":
          result = gzsr * 0.8;
          break;
        case "4":
          result = gzsr * 0.75;
          break;
        case "5":
          result = gzsr * 0.7;
          break;
        case "6":
          result = gzsr * 0.6;
          break;
        default:
          result = 0;
          break;
      }

      result = this.round(result, 2);

      return result;
    },
    /*
     * 9、一次性伤残补助金
     */
    countScbz(degree, gzsr) {
      var result;
      switch (degree) {
        case "1":
          result = gzsr * 27;
          break;
        case "2":
          result = gzsr * 25;
          break;
        case "3":
          result = gzsr * 23;
          break;
        case "4":
          result = gzsr * 21;
          break;
        case "5":
          result = gzsr * 18;
          break;
        case "6":
          result = gzsr * 16;
          break;
        case "7":
          result = gzsr * 13;
          break;
        case "8":
          result = gzsr * 11;
          break;
        case "9":
          result = gzsr * 9;
          break;
        case "10":
          result = gzsr * 7;
          break;
        default:
          result = 0;
          break;
      }

      result = this.round(result, 2);

      return result;
    },
    /*
     * 10、一次性工伤医疗补助金
     */
    countYlbz(pos, degree, age, gzsr) {
      var result = 0;
      var pjgz = this.pjgz(pos);

      switch (pos) {
        case "11": //北京
          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 15;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 9;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 3;
              break;
          }
          break;
        case "31": //上海
          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 15;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 9;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 3;
              break;
          }
          break;
        case "12": //天津
          switch (degree) {
            case "5":
              result = pjgz * 12;
              break;
            case "6":
              result = pjgz * 10;
              break;
            case "7":
              result = pjgz * 8;
              break;
            case "8":
              result = pjgz * 6;
              break;
            case "9":
              result = pjgz * 4;
              break;
            case "10":
              result = pjgz * 2;
              break;
          }
          break;
        case "50": //重庆
          switch (degree) {
            case "5":
              result = pjgz * 12;
              break;
            case "6":
              result = pjgz * 10;
              break;
            case "7":
              result = pjgz * 8;
              break;
            case "8":
              result = pjgz * 6;
              break;
            case "9":
              result = pjgz * 4;
              break;
            case "10":
              result = pjgz * 2;
              break;
          }
          break;
        case "13": //河北
          switch (degree) {
            case "5":
              result = pjgz * 44;
              break;
            case "6":
              result = pjgz * 38;
              break;
            case "7":
              result = pjgz * 26;
              break;
            case "8":
              result = pjgz * 20;
              break;
            case "9":
              result = pjgz * 14;
              break;
            case "10":
              result = pjgz * 8;
              break;
          }
          break;
        case "14": //山西
          switch (degree) {
            case "5":
              result = pjgz * 36;
              break;
            case "6":
              result = pjgz * 33;
              break;
            case "7":
              result = pjgz * 24;
              break;
            case "8":
              result = pjgz * 21;
              break;
            case "9":
              result = pjgz * 18;
              break;
            case "10":
              result = pjgz * 15;
              break;
          }
          break;
        case "21": //辽宁
          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 16;
              break;
            case "7":
              result = pjgz * 13;
              break;
            case "8":
              result = pjgz * 11;
              break;
            case "9":
              result = pjgz * 9;
              break;
            case "10":
              result = pjgz * 7;
              break;
          }
          break;
        case "22": //吉林
          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 16;
              break;
            case "7":
              result = pjgz * 13;
              break;
            case "8":
              result = pjgz * 11;
              break;
            case "9":
              result = pjgz * 9;
              break;
            case "10":
              result = pjgz * 7;
              break;
          }
          break;
        case "23": //黑龙江
          switch (degree) {
            case "5":
              result = gzsr * 30;
              break;
            case "6":
              result = gzsr * 25;
              break;
            case "7":
              result = gzsr * 20;
              break;
            case "8":
              result = gzsr * 15;
              break;
            case "9":
              result = gzsr * 10;
              break;
            case "10":
              result = gzsr * 5;
              break;
          }
          break;
        case "32": //江苏
          switch (degree) {
            case "5":
              result = 200000;
              break;
            case "6":
              result = 160000;
              break;
            case "7":
              result = 120000;
              break;
            case "8":
              result = 80000;
              break;
            case "9":
              result = 50000;
              break;
            case "10":
              result = 30000;
              break;
          }
          break;
        case "33": //浙江
          switch (degree) {
            case "5":
              result = pjgz * 30;
              break;
            case "6":
              result = pjgz * 25;
              break;
            case "7":
              result = pjgz * 10;
              break;
            case "8":
              result = pjgz * 7;
              break;
            case "9":
              result = pjgz * 4;
              break;
            case "10":
              result = pjgz * 2;
              break;
          }
          break;
        case "34": //安徽
          switch (degree) {
            case "5":
              result = pjgz * 24;
              break;
            case "6":
              result = pjgz * 18;
              break;
            case "7":
              result = pjgz * 10;
              break;
            case "8":
              result = pjgz * 8;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 4;
              break;
          }
          break;
        case "35": //福建
          switch (degree) {
            case "5":
              result = pjgz * (76 - age) * 0.7;
              break;
            case "6":
              result = pjgz * (76 - age) * 0.6;
              break;
            case "7":
              result = pjgz * (76 - age) * 0.4;
              break;
            case "8":
              result = pjgz * (76 - age) * 0.3;
              break;
            case "9":
              result = pjgz * (76 - age) * 0.2;
              break;
            case "10":
              result = pjgz * (76 - age) * 0.1;
              break;
          }
          break;
        case "36": //江西
          switch (degree) {
            case "5":
              result = gzsr * 20;
              break;
            case "6":
              result = gzsr * 17;
              break;
            case "7":
              result = gzsr * 13;
              break;
            case "8":
              result = gzsr * 10;
              break;
            case "9":
              result = gzsr * 7;
              break;
            case "10":
              result = gzsr * 4;
              break;
          }
          break;
        case "37": //山东
          switch (degree) {
            case "5":
              result = pjgz * 22;
              break;
            case "6":
              result = pjgz * 18;
              break;
            case "7":
              result = pjgz * 13;
              break;
            case "8":
              result = pjgz * 10;
              break;
            case "9":
              result = pjgz * 7;
              break;
            case "10":
              result = pjgz * 4;
              break;
          }
          break;
        case "41": //河南
          switch (degree) {
            case "5":
              result = pjgz * 16;
              break;
            case "6":
              result = pjgz * 14;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 10;
              break;
            case "9":
              result = pjgz * 8;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
        case "42": //湖北
          switch (degree) {
            case "5":
              result = pjgz * 22;
              break;
            case "6":
              result = pjgz * 18;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 10;
              break;
            case "9":
              result = pjgz * 8;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
        case "43": //湖南
          switch (degree) {
            case "5":
              result = gzsr * 24;
              break;
            case "6":
              result = gzsr * 18;
              break;
            case "7":
              result = gzsr * 15;
              break;
            case "8":
              result = gzsr * 10;
              break;
            case "9":
              result = gzsr * 8;
              break;
            case "10":
              result = gzsr * 6;
              break;
          }
          break;
        case "44": //广东
          switch (degree) {
            case "5":
              result = gzsr * 10;
              break;
            case "6":
              result = gzsr * 8;
              break;
            case "7":
              result = gzsr * 6;
              break;
            case "8":
              result = gzsr * 4;
              break;
            case "9":
              result = gzsr * 2;
              break;
            case "10":
              result = gzsr * 1;
              break;
          }
          break;
        case "46": //海南
          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 16;
              break;
            case "7":
              result = pjgz * 14;
              break;
            case "8":
              result = pjgz * 12;
              break;
            case "9":
              result = pjgz * 10;
              break;
            case "10":
              result = pjgz * 8;
              break;
          }
          break;
        case "51": //四川
          switch (degree) {
            case "5":
              result = pjgz * 14;
              break;
            case "6":
              result = pjgz * 12;
              break;
            case "7":
              result = pjgz * 10;
              break;
            case "8":
              result = pjgz * 8;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 4;
              break;
          }
          break;
        case "52": //贵州
          switch (degree) {
            case "5":
              result = pjgz * 36;
              break;
            case "6":
              result = pjgz * 26;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 9;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 3;
              break;
          }
          break;
        case "53": //云南
          switch (degree) {
            case "5":
              result = pjgz * 15;
              break;
            case "6":
              result = pjgz * 13;
              break;
            case "7":
              result = pjgz * 8;
              break;
            case "8":
              result = pjgz * 6;
              break;
            case "9":
              result = pjgz * 3;
              break;
            case "10":
              result = pjgz * 2;
              break;
          }
          break;
        case "61": //陕西
          switch (degree) {
            case "5":
              result = pjgz * 24;
              break;
            case "6":
              result = pjgz * 21;
              break;
            case "7":
              result = pjgz * 15;
              break;
            case "8":
              result = pjgz * 12;
              break;
            case "9":
              result = pjgz * 9;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
        case "62": //甘肃
          switch (degree) {
            case "5":
              result = gzsr * 18;
              break;
            case "6":
              result = gzsr * 16;
              break;
            case "7":
              result = gzsr * 13;
              break;
            case "8":
              result = gzsr * 11;
              break;
            case "9":
              result = gzsr * 9;
              break;
            case "10":
              result = gzsr * 7;
              break;
          }
          break;
        case "63": //青海
          switch (degree) {
            case "5":
              result = gzsr * 15;
              break;
            case "6":
              result = gzsr * 13.5;
              5;
              break;
            case "7":
              result = gzsr * 12;
              break;
            case "8":
              result = gzsr * 10.5;
              5;
              break;
            case "9":
              result = gzsr * 9;
              break;
            case "10":
              result = gzsr * 7.5;
              break;
          }
          break;
        case "15": //内蒙古
          switch (degree) {
            case "5":
              result = pjgz * 26;
              break;
            case "6":
              result = pjgz * 23;
              break;
            case "7":
              result = pjgz * 16;
              break;
            case "8":
              result = pjgz * 13;
              break;
            case "9":
              result = pjgz * 10;
              break;
            case "10":
              result = pjgz * 7;
              break;
          }
          break;
        case "45": //广西
          switch (degree) {
            case "5":
              result = gzsr * 20;
              break;
            case "6":
              result = gzsr * 18;
              break;
            case "7":
              result = gzsr * 15;
              break;
            case "8":
              result = gzsr * 13;
              break;
            case "9":
              result = gzsr * 11;
              break;
            case "10":
              result = gzsr * 9;
              break;
          }
          break;
        case "54": //西藏
          switch (degree) {
            case "5":
              result = pjgz * 23;
              break;
            case "6":
              result = pjgz * 19;
              break;
            case "7":
              result = pjgz * 14;
              break;
            case "8":
              result = pjgz * 12;
              break;
            case "9":
              result = pjgz * 9;
              break;
            case "10":
              result = pjgz * 9;
              break;
          }
          break;
        case "64": //宁夏
          switch (degree) {
            case "5":
              result = gzsr * 22;
              break;
            case "6":
              result = gzsr * 19;
              break;
            case "7":
              result = gzsr * 15;
              break;
            case "8":
              result = gzsr * 12;
              break;
            case "9":
              result = gzsr * 9;
              break;
            case "10":
              result = gzsr * 6;
              break;
          }
          break;
        case "65": //新疆
          switch (degree) {
            case "5":
              result = pjgz * 11;
              break;
            case "6":
              result = pjgz * 10;
              break;
            case "7":
              result = pjgz * 9;
              break;
            case "8":
              result = pjgz * 8;
              break;
            case "9":
              result = pjgz * 7;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
      }

      result = this.round(result, 2);

      return result;
    },
    /*
     * 11、一次性伤残就业补助金
     */
    countJybz(pos, degree, age, gzsr) {
      var result = 0;
      pjgz = this.pjgz(pos);

      switch (pos) {
        case "11": //北京
          // console.log('进入北京分支-->>>',result)
          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 15;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 19;
              break;
            case "9":
              // console.log('进入case==9的分支-->>>',result)
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 3;
              break;
          }
          break;
        case "31": //上海
          // console.log('进入上海分支--->',result)
          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 15;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 9;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 3;
              break;
          }
          break;
        case "12": //天津
          // console.log('进入天津分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 18;
              break;
            case "6":
              result = pjgz * 15;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 9;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 3;
              break;
          }
          break;
        case "50": //重庆
          // console.log('进入重庆分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 60;
              break;
            case "6":
              result = pjgz * 48;
              break;
            case "7":
              result = pjgz * 15;
              break;
            case "8":
              result = pjgz * 12;
              break;
            case "9":
              result = pjgz * 9;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
        case "13": //河北
          // console.log('进入河北分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 22;
              break;
            case "6":
              result = pjgz * 16;
              break;
            case "7":
              result = pjgz * 10;
              break;
            case "8":
              result = pjgz * 8;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 4;
              break;
          }
          break;
        case "14": //山西
          // console.log('进入山西分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 24;
              break;
            case "6":
              result = pjgz * 21;
              break;
            case "7":
              result = pjgz * 15;
              break;
            case "8":
              result = pjgz * 12;
              break;
            case "9":
              result = pjgz * 9;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
        case "21": //辽宁
          // console.log('进入辽宁分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 28;
              break;
            case "6":
              result = gzsr * 24;
              break;
            case "7":
              result = gzsr * 20;
              break;
            case "8":
              result = gzsr * 16;
              break;
            case "9":
              result = gzsr * 12;
              break;
            case "10":
              result = gzsr * 8;
              break;
          }
          break;
        case "22": //吉林
          // console.log('进入吉林分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 16;
              break;
            case "6":
              result = pjgz * 14;
              break;
            case "7":
              result = pjgz * 11;
              break;
            case "8":
              result = pjgz * 9;
              break;
            case "9":
              result = pjgz * 7;
              break;
            case "10":
              result = pjgz * 5;
              break;
          }
          break;
        case "23": //黑龙江
          // console.log('进入黑龙江分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 16;
              break;
            case "6":
              result = gzsr * 14;
              break;
            case "7":
              result = gzsr * 12;
              break;
            case "8":
              result = gzsr * 10;
              break;
            case "9":
              result = gzsr * 8;
              break;
            case "10":
              result = gzsr * 6;
              break;
          }
          break;
        case "32": //江苏
          // console.log('进入江苏分支--->',result)

          switch (degree) {
            case "5":
              result = 95000;
              break;
            case "6":
              result = 85000;
              break;
            case "7":
              result = 45000;
              break;
            case "8":
              result = 35000;
              break;
            case "9":
              result = 25000;
              break;
            case "10":
              result = 15000;
              break;
          }
          break;
        case "33": //浙江
          // console.log('进入浙江分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 30;
              break;
            case "6":
              result = pjgz * 25;
              break;
            case "7":
              result = pjgz * 10;
              break;
            case "8":
              result = pjgz * 7;
              break;
            case "9":
              result = pjgz * 4;
              break;
            case "10":
              result = pjgz * 2;
              break;
          }
          break;
        case "34": //安徽
          // console.log('进入安徽分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 40;
              break;
            case "6":
              result = pjgz * 34;
              break;
            case "7":
              result = pjgz * 20;
              break;
            case "8":
              result = pjgz * 15;
              break;
            case "9":
              result = pjgz * 10;
              break;
            case "10":
              result = pjgz * 5;
              break;
          }
          break;
        case "35": //福建
          // console.log('进入福建分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * (76 - age) * 0.7;
              break;
            case "6":
              result = pjgz * (76 - age) * 0.6;
              break;
            case "7":
              result = pjgz * (76 - age) * 0.4;
              break;
            case "8":
              result = pjgz * (76 - age) * 0.3;
              break;
            case "9":
              result = pjgz * (76 - age) * 0.2;
              break;
            case "10":
              result = pjgz * (76 - age) * 0.1;
              break;
          }
          break;
        case "36": //江西
          // console.log('进入江西分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 32;
              break;
            case "6":
              result = gzsr * 28;
              break;
            case "7":
              result = gzsr * 25;
              break;
            case "8":
              result = gzsr * 21;
              break;
            case "9":
              result = gzsr * 17;
              break;
            case "10":
              result = gzsr * 13;
              break;
          }
          break;
        case "37": //山东
          // console.log('进入山东分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 36;
              break;
            case "6":
              result = pjgz * 30;
              break;
            case "7":
              result = pjgz * 20;
              break;
            case "8":
              result = pjgz * 16;
              break;
            case "9":
              result = pjgz * 12;
              break;
            case "10":
              result = pjgz * 8;
              break;
          }
          break;
        case "41": //河南
          // console.log('进入河南分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 56;
              break;
            case "6":
              result = pjgz * 46;
              break;
            case "7":
              result = pjgz * 36;
              break;
            case "8":
              result = pjgz * 26;
              break;
            case "9":
              result = pjgz * 16;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
        case "42": //湖北
          // console.log('进入湖北分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 34;
              break;
            case "6":
              result = pjgz * 28;
              break;
            case "7":
              result = pjgz * 20;
              break;
            case "8":
              result = pjgz * 16;
              break;
            case "9":
              result = pjgz * 12;
              break;
            case "10":
              result = pjgz * 8;
              break;
          }
          break;
        case "43": //湖南
          // console.log('进入湖南分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 36;
              break;
            case "6":
              result = gzsr * 30;
              break;
            case "7":
              result = gzsr * 15;
              break;
            case "8":
              result = gzsr * 10;
              break;
            case "9":
              result = gzsr * 8;
              break;
            case "10":
              result = gzsr * 6;
              break;
          }
          break;
        case "44": //广东
          // console.log('进入广东分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 50;
              break;
            case "6":
              result = gzsr * 40;
              break;
            case "7":
              result = gzsr * 25;
              break;
            case "8":
              result = gzsr * 15;
              break;
            case "9":
              result = gzsr * 8;
              break;
            case "10":
              result = gzsr * 4;
              break;
          }
          break;
        case "46": //海南
          // console.log('进入海南分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 40;
              break;
            case "6":
              result = gzsr * 30;
              break;
            case "7":
              result = gzsr * 20;
              break;
            case "8":
              result = gzsr * 16;
              break;
            case "9":
              result = gzsr * 14;
              break;
            case "10":
              result = gzsr * 9;
              break;
          }
          break;
        case "51": //四川
          // console.log('进入四川分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 60;
              break;
            case "6":
              result = pjgz * 48;
              break;
            case "7":
              result = pjgz * 36;
              break;
            case "8":
              result = pjgz * 26;
              break;
            case "9":
              result = pjgz * 16;
              break;
            case "10":
              result = pjgz * 10;
              break;
          }
          break;
        case "52": //贵州
          // console.log('进入贵州分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 36;
              break;
            case "6":
              result = pjgz * 26;
              break;
            case "7":
              result = pjgz * 12;
              break;
            case "8":
              result = pjgz * 9;
              break;
            case "9":
              result = pjgz * 6;
              break;
            case "10":
              result = pjgz * 3;
              break;
          }
          break;
        case "53": //云南
          // console.log('进入云南分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 33;
              break;
            case "6":
              result = pjgz * 29;
              break;
            case "7":
              result = pjgz * 22;
              break;
            case "8":
              result = pjgz * 18;
              break;
            case "9":
              result = pjgz * 13;
              break;
            case "10":
              result = pjgz * 7;
              break;
          }
          break;
        case "61": //陕西
          // console.log('进入陕西分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 24;
              break;
            case "6":
              result = pjgz * 21;
              break;
            case "7":
              result = pjgz * 15;
              break;
            case "8":
              result = pjgz * 12;
              break;
            case "9":
              result = pjgz * 9;
              break;
            case "10":
              result = pjgz * 6;
              break;
          }
          break;
        case "62": //甘肃
          // console.log('进入甘肃分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 18;
              break;
            case "6":
              result = gzsr * 16;
              break;
            case "7":
              result = gzsr * 13;
              break;
            case "8":
              result = gzsr * 11;
              break;
            case "9":
              result = gzsr * 9;
              break;
            case "10":
              result = gzsr * 7;
              break;
          }
          break;
        case "63": //青海
          // console.log('进入青海分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 15;
              break;
            case "6":
              result = gzsr * 13.5;
              break;
            case "7":
              result = gzsr * 12;
              break;
            case "8":
              result = gzsr * 10.5;
              break;
            case "9":
              result = gzsr * 9;
              break;
            case "10":
              result = gzsr * 7.5;
              break;
          }
          break;
        case "15": //内蒙古
          // console.log('进入内蒙古分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 26;
              break;
            case "6":
              result = pjgz * 23;
              break;
            case "7":
              result = pjgz * 16;
              break;
            case "8":
              result = pjgz * 13;
              break;
            case "9":
              result = pjgz * 10;
              break;
            case "10":
              result = pjgz * 7;
              break;
          }
          break;
        case "45": //广西
          // console.log('进入广西分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 18;
              break;
            case "6":
              result = gzsr * 16;
              break;
            case "7":
              result = gzsr * 13;
              break;
            case "8":
              result = gzsr * 11;
              break;
            case "9":
              result = gzsr * 9;
              break;
            case "10":
              result = gzsr * 7;
              break;
          }
          break;
        case "54": //西藏
          // console.log('进入西藏分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 25;
              break;
            case "6":
              result = pjgz * 21;
              break;
            case "7":
              result = pjgz * 16;
              break;
            case "8":
              result = pjgz * 13;
              break;
            case "9":
              result = pjgz * 11;
              break;
            case "10":
              result = pjgz * 7;
              break;
          }
          break;
        case "64": //宁夏
          // console.log('进入宁夏分支--->',result)

          switch (degree) {
            case "5":
              result = gzsr * 22;
              break;
            case "6":
              result = gzsr * 19;
              break;
            case "7":
              result = gzsr * 15;
              break;
            case "8":
              result = gzsr * 12;
              break;
            case "9":
              result = gzsr * 9;
              break;
            case "10":
              result = gzsr * 6;
              break;
          }
          break;
        case "65": //新疆
          // console.log('进入新疆分支--->',result)

          switch (degree) {
            case "5":
              result = pjgz * 27;
              break;
            case "6":
              result = pjgz * 24;
              break;
            case "7":
              result = pjgz * 21;
              break;
            case "8":
              result = pjgz * 18;
              break;
            case "9":
              result = pjgz * 15;
              break;
            case "10":
              result = pjgz * 12;
              break;
          }
          break;
      }

      result = this.round(result, 2);
      return result;
    },
    /*
     * 12、定残后护理费
     */
    countDchlf(degree, pos, hlcd, dchlts) {
      var result = 0;

      if (degree != "0" && degree != "11") {
        var factor = 0;

        if (hlcd == "1") factor = 0.5;
        else if (hlcd == "2") factor = 0.4;
        else if (hlcd == "3") factor = 0.3;

        var pjgz = this.pjgz(pos);

        result = pjgz * factor * dchlts;
      }

      result = Math.round(result * 100) / 100;

      return result;
    },

    /*
     * 13、丧葬补助金
     */
    countSzbz(pos, degree) {
      var result = 0;

      if (degree == "11") {
        result = this.szf(pos);
      }

      return result;
    },

    /*
     * 14、一次性工亡补助金
     */
    countGwbz(degree) {
      var result = 0;

      if (degree == "11") {
        // 一次性工亡补助金2020年已经更改，全国统一为847180元
        result = 948240;
      }

      return result;
    },
  },
};
</script>
<style>
/* .gspcf {
  border: 1px solid red;
} */

.gspcf .ul {
  width: 95%;
  /* border: 1px solid blue; */
  margin: 0 auto;
}

.gspcf p {
  margin-block: 10px;
}
.gspcf .btns {
  justify-content: center;
}

.gspcf .title {
  width: 100%;
  line-height: 2;
  font-weight: 600;
  background: #eeeeee;
  margin: 20px 0;
  margin-top: 10px;
  padding-left: 24px;
}

/* .gspcf .el-form-item__content {
  border: 1px solid red;
} */

.gspcf .input {
  width: 90% !important;
}

.gspcf .el-radio-group {
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

.dynamic-li {
  /* border: 1px solid green; */
  width: 60%;
  margin: 0 auto;
}
</style>
