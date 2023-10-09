<template>
    <div class="chooseComp">
        <div class="ul bg flex">
            法律计算器
        </div>
        <div class="ul">
            <div :class="['li', 'flex', { 'active': activeIndex == index }]" v-for="(item, index) in types" :key="index" @click="onChoose(index)">{{ item }}</div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            activeIndex:0,
            types: [
                '受理费', '执行费', '保全费', '律师费', '工伤赔偿费', '人损赔偿费', '交通赔偿费', '刑期计算器'
            ]
          
        }
    },
    methods: {
        onChoose(index){
            this.activeIndex = index
            this.$root.onListenFeeType({ //总线通知
                id:index,
                name:this.types[index]
            })
        }
    }
}
</script>

<style>
.chooseComp {}
.active{
    background-color: #7c7c7c;
    color: #fff;
}
.chooseComp .bg {
    background-image: url('../images/agency_other_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 84px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 10px;
}

.chooseComp .ul .li {
    /* border: 1px solid red; */
    height: 56px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.chooseComp .ul .li:hover {
    background-color: #c7c7c7;
    color: #ffffff
}
</style>