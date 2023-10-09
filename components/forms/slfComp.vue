<template>
    <div class="slf comp">
        <div class="ul form-container">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                <el-form-item label="案件类型" prop="caseType">
                    <el-select @change="onSelect" class="selector" v-model="ruleForm.caseType" placeholder="请选择案件类型">
                        <el-option v-for="item in ruleForm.options" :label="item.name" :value="item.id"
                            :key="item.id"></el-option>
                    </el-select>
                </el-form-item>



                <el-form-item label="标的额" prop="involveMoney">
                    <el-input @input="onInput" class="selector" v-model.number="ruleForm.involveMoney">
                        <template #suffix>
                            <i>元</i>
                            <i v-if="ruleForm.involveMoney!=''" class='el-icon-circle-close' @click='clearInput'></i>
                        </template>
                    </el-input>
                </el-form-item>




                <el-form-item class="form-btns">
                    <div class="btns flex">
                        <div>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                            <el-button class="calculator-btn" id="slf-calculator" type="primary"
                                @click="submitForm('ruleForm')">计算</el-button>
                        </div>
                    </div>

                </el-form-item>

            </el-form>

            <!-- 提示框 -->
            <el-dialog title="计算结果" :visible.sync="dialogVisible" width="50%">
                <p>受理费:{{ resultText }}</p>
                <p style="color: #c5c5c5;">以上计算结果仅供参考，实际费用以当地实际情况和具体证据材料为准！详情请咨询律师！</p>
            </el-dialog>

        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            resultText: '',//计算结果文本
            dialogVisible: false, //控制dialog的显示隐藏
            ruleForm: {
                involveMoney: '', //标的额
                caseType: '',   //案件类型
                options: [
                    { id: 1, name: '财产案件' },
                    { id: 2, name: '离婚案件' },
                    { id: 3, name: '人格权案件' },
                    { id: 4, name: '其他非财产案件' },
                    { id: 5, name: '知识产权案件' },
                    { id: 6, name: '劳动争议案件' },
                    { id: 7, name: '商标、专利、海事行政案件' },
                    { id: 8, name: '其他行政案件' },
                    { id: 9, name: '管辖权异议案件' },

                ]

            },
            rules: { //验证规则
                involveMoney: [

                ],
                caseType: [
                    { required: true, message: '请选择案件类型', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.elementBtnBlur('slf-calculator')
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var data = this.onCalculate()
                    this.resultText = data.resultText
                    // console.log('result==', data.resultText)
                    this.dialogVisible = true
                } else {
                    // console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        clearInput(){
            this.ruleForm.involveMoney = ''
        },
        /**
         * 监听输入
         * @param {*} e 
         */
        onInput(val) {
            this.ruleForm.involveMoney = val.replace(/\D/g, '');
        },
        /**
         * 下拉框选择
         * @param {*} id 选择的id
         */
        onSelect(id) {
            // console.log('监听下拉框选择....', id)
        },
        /**
         * 具体计算
         */
        onCalculate() {
            var type = this.ruleForm.caseType;   // 案件类型
            var BDE = this.ruleForm.involveMoney !== '' ? (Number)(this.ruleForm.involveMoney) : 0;
            var SLF = 0;

            // console.log('type', type)
            // console.log('BDE', BDE)
            // console.log('SLF', SLF)
            // 受理费计算
            switch (type) {
                // 财产案件
                case 1:
                    if (BDE >= 0 && BDE < 10000)
                        SLF = 50;
                    else if (BDE >= 10000 && BDE <= 100000)
                        SLF = BDE * 0.025 - 200;
                    else if (BDE >= 100000 && BDE <= 200000)
                        SLF = BDE * 0.020 + 300;
                    else if (BDE >= 200000 && BDE <= 500000)
                        SLF = BDE * 0.015 + 1300;
                    else if (BDE >= 500000 && BDE <= 1000000)
                        SLF = BDE * 0.01 + 3800;
                    else if (BDE >= 1000000 && BDE <= 2000000)
                        SLF = BDE * 0.009 + 4800;
                    else if (BDE >= 2000000 && BDE <= 5000000)
                        SLF = BDE * 0.008 + 6800;
                    else if (BDE >= 5000000 && BDE <= 10000000)
                        SLF = BDE * 0.007 + 11800;
                    else if (BDE >= 10000000 && BDE <= 20000000)
                        SLF = BDE * 0.006 + 21800;
                    else if (BDE >= 20000000)
                        SLF = BDE * 0.005 + 41800;
                    else
                        SLF = 50;

                    SLF = "每件缴纳 " + SLF.toFixed(2);

                    break;

                // 离婚案件
                case 2:
                    if (BDE > 200000) {
                        var LH_Start = ((BDE - 200000) * 0.005).toFixed(2) + 50;
                        var LH_Finish = ((BDE - 200000) * 0.005).toFixed(2) + 300;
                        SLF = LH_Start + " ~ " + LH_Finish;
                    } else {
                        SLF = "50 ~ 300";
                    }

                    SLF = "每件缴纳 " + SLF;

                    break;

                // 人格权案件
                case 3:
                    if (BDE >= 50000 && BDE < 100000) {
                        var RG_Start = (BDE * 0.01).toFixed(2) + 100;
                        var RG_Finish = (BDE * 0.01).toFixed(2) + 500;
                        SLF = RG_Start + " ~ " + RG_Finish;
                    } else if (BDE >= 100000) {
                        var RG_Start = (BDE * 0.005).toFixed(2) + 100;
                        var RG_Finish = (BDE * 0.005).toFixed(2) + 500;
                        SLF = RG_Start + " ~ " + RG_Finish;
                    } else {
                        SLF = "100 ~ 500";
                    }

                    SLF = "每件缴纳" + SLF;

                    break;

                // 其他非财产案件
                case 4:
                    SLF = "每件缴纳 50 ~ 100";
                    break;

                // 知识产权案件
                case 5:
                    if (BDE > 0 && BDE < 10000)
                        SLF = 50;
                    else if (BDE >= 10000 && BDE <= 100000)
                        SLF = BDE * 0.025 - 200;
                    else if (BDE >= 100000 && BDE <= 200000)
                        SLF = BDE * 0.020 + 300;
                    else if (BDE >= 200000 && BDE <= 500000)
                        SLF = BDE * 0.015 + 1300;
                    else if (BDE >= 500000 && BDE <= 1000000)
                        SLF = BDE * 0.01 + 3800;
                    else if (BDE >= 1000000 && BDE <= 2000000)
                        SLF = BDE * 0.009 + 4800;
                    else if (BDE >= 2000000 && BDE <= 5000000)
                        SLF = BDE * 0.008 + 6800;
                    else if (BDE >= 5000000 && BDE <= 10000000)
                        SLF = BDE * 0.007 + 11800;
                    else if (BDE >= 10000000 && BDE <= 20000000)
                        SLF = BDE * 0.006 + 21800;
                    else if (BDE >= 20000000)
                        SLF = BDE * 0.005 + 41800;
                    else
                        SLF = "500 ~ 1000";

                    SLF = "每件缴纳 " + SLF.toFixed(2);

                    break;

                // 劳动争议案件
                case 6:
                    SLF = "每件缴纳 10";
                    break;

                // 商标、专利、海事行政案件
                case 7:
                    SLF = "每件缴纳 100";
                    break;

                // 其他行政案件
                case 8:
                    SLF = "每件缴纳 50";
                    break;

                // 管辖权异议案件
                case 9:
                    SLF = "异议不成立每件缴纳 50 ~ 100";
                    break;

                default:
                    // code...
                    break;
            }

            var data = {};
            data.slf_fee = SLF + ' 元';


            return {
                message: 'success',
                code: 200,
                data: data,
                resultText: data.slf_fee
            };
        }
    }
}
</script>

<style>
/* .slf {
    border: 1px solid red;
} */

.slf .ul {
    width: 50%;
    /* border: 1px solid blue; */
    margin: 0 auto;
}

h1 {
    border: 1px solid blue;
}
</style>