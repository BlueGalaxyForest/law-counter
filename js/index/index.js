
Vue.use(httpVueLoader);

/**
 * 全局函数:主要是解决elementUI按钮点击后,颜色无法变为原来的颜色
 * @param {string} id 
 */
Vue.prototype.elementBtnBlur = (id) => {
    // console.log('elementBtnBlur function invoked!!', id)
    document.getElementById(id).blur();
}
Vue.prototype.elementBtnBlurByClass = (className) => {
    // console.log('elementBtnBlurByClass function invoked!!', className);
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].blur();
    }
}

var app = new Vue({
    el: '#app',
    data: {
        blankHeight: '94px',
        activeComp: 'slf-comp',
        feeId: '', //费用id
        feeName: '', //费用名称
    },
    components: {
        'choose-comp': "url:./components/chooseComp.vue",
        'slf-comp': "url:./components/forms/slfComp.vue",
        'zxf-comp': "url:./components/forms/zxfComp.vue",
        'bqf-comp': "url:./components/forms/bqfComp.vue",
        'lsf-comp': "url:./components/forms/lsfComp.vue",
        'gspcf-comp': "url:./components/forms/gspcfComp.vue",
        'rspcf-comp': "url:./components/forms/rspcfComp.vue",
        'jtpcf-comp': "url:./components/forms/jtpcfComp.vue",
        'xqjsq-comp': "url:./components/forms/xqjsqComp.vue",

    },
    methods: {
        /**
         * 监听左侧点击的是什么费用类型
         * @param {*} data 
         */
        onListenFeeType(data) {
            // console.log('总线通知的数据', data)
            this.feeId = data.id
            this.feeName = data.name

            switch (data.id) {
                case 0:
                    this.activeComp = 'slf-comp';
                    break;
                case 1:
                    this.activeComp = 'zxf-comp';
                    break;
                case 2:
                    this.activeComp = 'bqf-comp';
                    break;
                case 3:
                    this.activeComp = 'lsf-comp';
                    break;
                case 4:
                    this.activeComp = 'gspcf-comp';
                    break;
                case 5:
                    this.activeComp = 'rspcf-comp';
                    break;
                case 6:
                    this.activeComp = 'jtpcf-comp';
                    break;
                case 7:
                    this.activeComp = 'xqjsq-comp';
                    break;
            }

            // if ([4, 5, 6].includes(data.id)) {
            //     this.blankHeight = '20px'
            // } else {
            //     this.blankHeight = '94px'
            // }

        }
    }
})