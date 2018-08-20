
const config = { 
    entry :{
        'canlender':'./src/js/canlender.js',
        'excel':'./src/js/excel.js',
        'echarts':'./src/js/echarts.js',
        'homework':'./src/js/homework.js', 
        'login':'./src/js/login.js', 
        'register':'./src/js/register.js', 
        'chart':'./src/js/chart.js', 
        'bundle':'./src/js/bundle.js',
        'biaodan':'./src/js/biaodan.js',
        'wenzi':'./src/js/wenzi.js',
        'tuwen':'./src/js/tuwen.js',
        'index':'./src/js/index.js',
        'bundle1':'./src/js/bundle1.js'
       
    },
    output :{
        filename:'[name].js',
        path: __dirname +'/dist/'

    },
    //导出css模块
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(png|jpe?g|gif|svg|ttf|eot|woff)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            echarts$: "echarts/src/echarts.js",
            echarts: "echarts/src",
            zrender$: "zrender/src/zrender.js",
            zrender: "zrender/src"
        }
    }
};

module.exports = config;
