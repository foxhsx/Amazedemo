var echarts = require("echarts");
require('echarts/chart/line');
require('echarts/chart/bar');
require('echarts/component/tooltip');
function chart(data){
    var echartsA = echarts.init(document.getElementById('main'));
        option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '15%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五']
            }],
            yAxis: [{
                type: 'value'
            }],
            textStyle: {
                color: '#838FA1'
            },
            series: [{
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: data[0],
                itemStyle: {
                    normal: {
                        color: '#1cabdb',
                        borderColor: '#1cabdb',
                        borderWidth: '2',
                        borderType: 'solid',
                        opacity: '1'
                    },
                    emphasis: {

                    }
                }
            }]
        };
        // resizeWorldMapContainer();
        echartsA.setOption(option);
     if (option && typeof option === "object") {
         echartsA.setOption(option, true);
            window.onresize = echartsA.resize;
        }
        // var resizeWorldMapContainer = function () {
        //     echartsA.style.width = window.innerWidth+'px';
        //     echartsA.style.height = window.innerHeight+'px';
        //     };
        //   resizeWorldMapContainer();
        //      window.onresize = function () {
        //            resizeWorldMapContainer();
        //            echartsA.resize();
        //        };
        
}

        $.ajax({
            url:'http://127.0.0.1:3000/xchart/',
            beforeSend:() => {
                // setInterval(() => {
                //     console.log('loading');
                // },1000);
            },
            success:function(data) { 
                console.log(data); 
                     chart(data.echartsD);
         
            }
        });
