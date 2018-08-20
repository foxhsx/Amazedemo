var echarts = require("echarts");
require('echarts/chart/line');
require('echarts/chart/bar');
require('echarts/chart/radar');
// require('echarts/lib/echarts');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');

function chart(data){
    var mychart = echarts.init(document.getElementById('main'));
    option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['邮件', '媒体', '资源']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],

        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '邮件',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: data[0],
                itemStyle: {
                    normal: {
                        color: '#59aea2'
                    },
                    emphasis: {

                    }
                }
            },
            {
                name: '媒体',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: data[1],
                itemStyle: {
                    normal: {
                        color: '#e7505a'
                    }
                }
            },
            {
                name: '资源',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: data[2],
                itemStyle: {
                    normal: {
                        color: '#32c5d2'
                    }
                }
            }
        ]
    };
    mychart.setOption(option);

}

// 第二个雷达
function chart1(data){
    var mychart = echarts.init(document.getElementById('co'));
    var  option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'center',
            data: ['某软件', '某主食手机', '某水果手机', '降水量', '蒸发量']
        },
        radar: [{
                indicator: [
                    { text: '品牌', max: 100 },
                    { text: '内容', max: 100 },
                    { text: '可用性', max: 100 },
                    { text: '功能', max: 100 }
                ],
                center: ['25%', '40%'],
                radius: 80
            },
            {
                indicator: [
                    { text: '外观', max: 100 },
                    { text: '拍照', max: 100 },
                    { text: '系统', max: 100 },
                    { text: '性能', max: 100 },
                    { text: '屏幕', max: 100 }
                ],
                radius: 80,
                center: ['50%', '60%'],
            },
            {
                indicator: (function() {
                    var res = [];
                    for (var i = 1; i <= 12; i++) {
                        res.push({ text: i + '月', max: 100 });
                    }
                    return res;
                })(),
                center: ['75%', '40%'],
                radius: 80
            }
        ],
        series: [{
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [{
                    value:data[0],
                    name: '某软件'
                }]
            },
            {
                type: 'radar',
                radarIndex: 1,
                data: [{
                        value: data[1],
                        name: '某主食手机'
                    },
                    {
                        value: data[2],
                        name: '某水果手机'
                    }
                ]
            },
            {
                type: 'radar',
                radarIndex: 2,
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [{
                        name: '降水量',
                        value: data[3],
                    },
                    {
                        name: '蒸发量',
                        value: data[4],
                    }
                ]
            }
        ]
    };
    mychart.setOption(option);
}
function chart2(data){
    var mychart = echarts.init(document.getElementById('io'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['蒸发量','降水量','平均温度']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '水量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '温度',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name:'蒸发量',
                type:'bar',
                data:data[0]
            },
            {
                name:'降水量',
                type:'bar',
                data:data[1]
            },
            {
                name:'平均温度',
                type:'line',
                yAxisIndex: 1,
                data:data[2]
            }
        ]
    };
    mychart.setOption(option);
}
// var myChart = echarts.init(document.getElementById('co'));
// myChart.setOption(option);

$.ajax({
    url:'http://127.0.0.1:3000/xchart/',
    // beforeSend:() => {
    //     // setInterval(() => {
    //     //     console.log('loading');
    //     // },1000);
    // },
    success:function(data) { 
        console.log(data); 
             chart(data.echartsA);
             chart1(data.echartsB);
             chart2(data.echartsC);
 
    }
});