var echarts = require("echarts");
require('echarts/chart/pie');
require('echarts/chart/bar');
require('echarts/chart/line');
require('echarts/chart/map');
require('echarts/chart/scatter');
require('echarts/chart/effectScatter');
require('echarts/chart/custom');

// require('echarts/chart/wordCloud');

// require('echarts/chart/Radar');
var myChart1 = echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));
var myChart5 = echarts.init(document.getElementById('main5'));
// var myChart3 = echarts.init(document.getElementById('main3'));
// 指定图表的配置项和数据
var option1 = {
title: {//标题组件
    text: '故障',
    left:'50px',//标题的位置 默认是left，其余还有center、right属性
    textStyle: {    
    color: "#436EEE",    
    fontSize: 17,   
    }
},
graphic:{
    type:'text',
    left:'center',
    top:'center',
    style:{
        text:'dsfdsg',
        font: '2em "STHeiti", sans-serif',
        textAlign:'center',
        fill:'#000',
        width:10,
        height:10
    }
},
tooltip : { //提示框组件
    trigger: 'item', //触发类型(饼状图片就是用这个)
    formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
},
color:['#48cda6','#fd87fb','#11abff','#ffdf6f','#968ade'],  //手动设置每个图例的颜色
legend: {  //图例组件
    //right:100,  //图例组件离右边的距离
    orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
    width:40,      //图行例组件的宽度,默认自适应
    x : 'right',   //图例显示在右边
    y: 'center',   //图例在垂直方向上面显示居中
    itemWidth:10,  //图例标记的图形宽度
    itemHeight:10,
    //图例标记的图形高度
    data:['正常','一般','提示','较急','特急'],
    textStyle:{    //图例文字的样式
        color:'#333',  //文字颜色
        fontSize:12    //文字大小
    }
},
series : [ //系列列表
    {
        name:'设备状态',  //系列名称
        type:'pie',   //类型 pie表示饼图
        center:['40%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
        radius : ['50%', '70%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
        itemStyle : {  //图形样式
            normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                label : {  //饼图图形上的文本标签
                    show : false  //平常不显示
                },
                labelLine : {     //标签的视觉引导线样式
                    show : false  //平常不显示
                },
                borderColor:'#fff',
                borderWidth:2
            },
            emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                label : {  //饼图图形上的文本标签
                    show : true,
                    position : 'center',
                    textStyle : {
                        fontSize : '10',
                        fontWeight : 'bold'
                    }
                }
            }
        },
        data:[
            {value:34.6, name:'果类'},
            {value:54.12, name:'粮食作物'},
            {value:10.90, name:'经济作物'},
        ]
    }
]
};
var option2 = {
    title: {//标题组件
        text: '故障',
        left:'50px',//标题的位置 默认是left，其余还有center、right属性
        textStyle: {    
        color: "#436EEE",    
        fontSize: 17,   
        }
    },
    tooltip : { //提示框组件
        trigger: 'item', //触发类型(饼状图片就是用这个)
        formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
    },
    color:['#48cda6','#fd87fb','#11abff','#ffdf6f','#968ade'],  //手动设置每个图例的颜色
    legend: {  //图例组件
        //right:100,  //图例组件离右边的距离
        orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
        width:40,      //图行例组件的宽度,默认自适应
        x : 'right',   //图例显示在右边
        y: 'center',   //图例在垂直方向上面显示居中
        itemWidth:10,  //图例标记的图形宽度
        itemHeight:10, //图例标记的图形高度
        data:['小麦','次粉','玉米','石粉','红枣','花生','苹果','萝卜','豆粕'],
        textStyle:{    //图例文字的样式
            color:'#333',  //文字颜色
            fontSize:12    //文字大小
        }
    },
    graphic:{
        type:'text',
        left:'center',
        top:'center',
        z:2,
        zlevel:100,
        style:{
            text:'你好',
            x:100,
            y:100,
            textAlign:'center',
            fill:'red',
            width:30,
            height:30
        }
    },
    series : [ //系列列表
        {
            name:'设备状态',  //系列名称
            type:'pie',   //类型 pie表示饼图
            center:['40%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
            radius : ['50%', '70%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
            itemStyle : {  //图形样式
                normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                    label : {  //饼图图形上的文本标签
                        show : false  //平常不显示
                    },
                    labelLine : {     //标签的视觉引导线样式
                        show : false  //平常不显示
                    },
                    borderColor:'#fff',
                    borderWidth:2
                },
                emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                    label : {  //饼图图形上的文本标签
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '10',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:50.34, name:'小麦\n50.34%'},
                {value:1.95, name:'次粉\n1.95%'},
                {value:6.65, name:'玉米\n6.65%'},
                {value:3.76, name:'石粉v\n3.76%'},
                {value:17.61, name:'红枣\n17.61%'},
                {value:6.64, name:'花生\n6.64%'},
                {value:1.75, name:'苹果\n1.75%'},
                {value:9.70, name:'萝卜\n55555555555555555$%$9.70%'},
            ]
        },
    ]
};

var  option3 = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量','最低气温','最高气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'category',
            position: 'bottom',
            boundaryGap: true,
            axisLine : {    // 轴线
                show: true,
                lineStyle: {
                    color: 'green',
                    type: 'solid',
                    width: 2
                }
            },
            axisTick : {    // 轴标记
                show:true,
                length: 10,
                lineStyle: {
                    color: 'red',
                    type: 'solid',
                    width: 2
                }
            },
            axisLabel : {
                show:true,
                interval: 'auto',    // {number}
                rotate: 45,
                margin: 8,
                formatter: '{value}月',
                textStyle: {
                    color: 'blue',
                    fontFamily: 'sans-serif',
                    fontSize: 15,
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }
            },
            splitLine : {
                show:true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dashed',
                    width: 1
                }
            },
            splitArea : {
                show: true,
                areaStyle:{
                    color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
                }
            },
            data : [
                '1','2','3','4','5',
                {
                    value:'6',
                    textStyle: {
                        color: '#fff',
                        fontSize: 30,
                        fontStyle: 'normal',
                        fontWeight: 'bold'
                    }
                },
                '7','8','9','10','11','12'
            ]
        },
        {
            type : 'category',
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left',
            //min: 0,
            //max: 300,
            //splitNumber: 5,
            boundaryGap: [0,0.1],
            axisLine : {    // 轴线
                show: true,
                lineStyle: {
                    color: '#fff',
                    type: 'dashed',
                    width: 2
                }
            },
            axisTick : {    // 轴标记
                show:true,
                length: 10,
                lineStyle: {
                    color: 'green',
                    type: 'solid',
                    width: 2
                }
            },
            axisLabel : {
                show:true,
                interval: 'auto',    // {number}
                rotate: -45,
                margin: 18,
                formatter: '{value} ml',    // Template formatter!
                textStyle: {
                    color: '#fff',
                    fontFamily: 'verdana',
                    fontSize: 10,
                    fontStyle: 'normal',
                    fontWeight: 'bold'
                }
            },
            splitLine : {
                show:true,
                lineStyle: {
                    color: '#483d8b',
                    type: 'dotted',
                    width: 2
                }
            },
            splitArea : {
                show: true,
                areaStyle:{
                    color:['rgba(205,92,92,0.3)','rgba(255,215,0,0.3)']
                }
            }
        },
        {
            type : 'value',
            splitNumber: 10,
            axisLabel : {
                formatter: function (value) {
                    // Function formatter
                    return value + ' °C'
                }
            },
            splitLine : {
                show: false
            }
        }
    ],
    series : [
        {
            name: '蒸发量',
            type: 'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'最低气温',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
            name:'最高气温',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [12.0, 12.2, 13.3, 14.5, 16.3, 18.2, 28.3, 33.4, 31.0, 24.5, 18.0, 16.2]
        }
    ]
};
$.getJSON('data-gl/asset/data/flights.json', function(data) {

    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.map(function(airline) {
        return [
            getAirportCoord(airline[1]),
            getAirportCoord(airline[2])
        ];
    });

    myChart5.setOption({
        backgroundColor: '#000',
        globe: {
            baseTexture: 'data-gl/asset/world.topo.bathy.200401.jpg',
            heightTexture: 'data-gl/asset/bathymetry_bw_composite_4k.jpg',

            shading: 'lambert',

            light: {
                ambient: {
                    intensity: 0.4
                },
                main: {
                    intensity: 0.4
                }
            },

            viewControl: {
                autoRotate: false
            }
        },
        series: {

            type: 'lines3D',

            coordinateSystem: 'globe',

            blendMode: 'lighter',

            lineStyle: {
                width: 1,
                color: 'rgb(50, 50, 150)',
                opacity: 0.1
            },

            data: routes
        }
    });
});
// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1); 
myChart2.setOption(option2);
myChart3.setOption(option3);
// myChart5.setOption(option5)
// myChart3.setOption(option3);