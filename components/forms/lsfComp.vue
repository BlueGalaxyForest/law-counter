<template>
    <div class="lsf comp">
        <div class="ul form-container">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                <el-form-item label="所在省份" prop="province">
                    <el-select @change="onSelect(0, $event)" class="selector" v-model="ruleForm.province" placeholder="请选择">
                        <el-option v-for="item in provinces" :label="item.name" :value="item.id" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="案件类型" prop="type">
                    <el-select @change="onSelect(1, $event)" class="selector" v-model="ruleForm.type" placeholder="请选择">
                        <el-option v-for="item in types" :label="item.name" :value="item.id" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>

                <!-- 提示框 -->
                <el-dialog title="计算结果" :visible.sync="dialogVisible" width="50%">
                    <p v-html="resultText"></p>
                    <p style="color: #c5c5c5;">以上计算结果仅供参考，实际费用以当地实际情况和具体证据材料为准！详情请咨询律师！</p>
                </el-dialog>

                <!-- 提交按钮 -->
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
                province: '',//所在省份
                type: '' //案件类型
            },
            rules: { //验证规则

                province: [
                    { required: true, message: '请选择省份', trigger: 'change' }
                ],
                type: [
                    { required: true, message: '请选择案件类型', trigger: 'change' }
                ],
            },
            types: [
                { id: '1', name: '民事案件' },
                { id: '2', name: '刑事案件' },
                { id: '3', name: '行政案件' },
            ],
            provinces: [//省份列表
                { id: '11', name: '北京市' },
                { id: '31', name: '上海市' },
                { id: '12', name: '天津市' },
                { id: '50', name: '重庆市' },
                { id: '13', name: '河北省' },
                { id: '14', name: '山西省' },
                { id: '21', name: '辽宁省' },
                { id: '22', name: '吉林省' },
                { id: '23', name: '黑龙江省' },
                { id: '32', name: '江苏省' },
                { id: '33', name: '浙江省' },
                { id: '34', name: '安徽省' },
                { id: '35', name: '福建省' },
                { id: '36', name: '江西省' },
                { id: '37', name: '山东省' },
                { id: '41', name: '河南省' },
                { id: '42', name: '湖北省' },
                { id: '43', name: '湖南省' },
                { id: '44', name: '广东省' },
                { id: '46', name: '海南省' },
                { id: '51', name: '四川省' },
                { id: '52', name: '贵州省' },
                { id: '53', name: '云南省' },
                { id: '61', name: '陕西省' },
                { id: '62', name: '甘肃省' },
                { id: '63', name: '青海省' },
                { id: '15', name: '内蒙古自治区' },
                { id: '45', name: '广西壮族自治区' },
                { id: '54', name: '西藏自治区' },
                { id: '64', name: '宁夏回族自治区' },
                { id: '65', name: '新疆维吾尔族自治区' },

            ],
        }
    },
    methods: {
        submitForm(formName) {
            this.elementBtnBlur('slf-calculator')
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var data = this.onCalculate()
 
                    this.resultText = data.resultText
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
        onSelect(choice, id) {
            // console.log('监听下拉框选择....', typeof choice, typeof id)//输出number,string
            if (choice == 0) {
                this.ruleForm.province = id
            } else {
                this.ruleForm.type = id
            }
        },
        /**
         * 计算费用
         */
        onCalculate() {
            var province = this.ruleForm.province   //string
            var type = this.ruleForm.type   //string
 

            var text = {};

            if (type === '1') {
                type = '民事案件';
            } else if (type === '2') {
                type = '刑事案件';
            } else if (type === '3') {
                type = '行政案件';
            }

            let file = 'data/lsf.xml';

            // 使用适当的方法加载XML文件，这里假设使用XMLHttpRequest
            let xhr = new XMLHttpRequest();
            xhr.open('GET', file, false);
            xhr.send();
            let xmlDoc = xhr.responseXML;

            let xmlNodes = xmlDoc.getElementsByTagName('province');
            for (let i = 0; i < xmlNodes.length; i++) {
                let val = xmlNodes[i];
                if (val.getAttribute('id') === province) {
                    if (type === '民事案件') {
                        text.lsf = val.getElementsByTagName('criminal')[0].textContent;
                    } else if (type === '刑事案件') {
                        text.lsf = val.getElementsByTagName('civil')[0].textContent;
                    } else {
                        text.lsf = val.getElementsByTagName('administrative')[0].textContent;
                    }
                    break;
                }
            }

            return { message: 'success', code: 200, data: text, resultText: text.lsf };
        }
    }
}
</script>
<style>
/* .lsf {
    border: 1px solid red;
} */

.lsf .ul {
    width: 50%;
    /* border: 1px solid blue; */
    margin: 0 auto;
}
</style>