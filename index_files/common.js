// 以下代码是配置layui扩展模块的目录，以及加载主题
layui.config({
    base: ctx + 'js/modules/'
}).extend({
    formSelects: 'formSelects/formSelects-v4',
    treeTable: 'newtreetable/treeTable',
    treetable: 'treetable/treetable',
    dtree: 'dtree/dtree',
    citypicker: 'city-picker/city-picker',
    autocomplete: 'layui_complete/autocomplete',
    autocompleteOriginal: 'layui_complete/autocomplete_o',
    IconFonts: 'iconFonts/iconFonts',
    step: 'step-lay/step',
    admin: 'admin',
    bodyTab: 'bodyTab',
    echarts: 'echarts/echarts', // echarts图表扩展
    echartsTheme: 'echarts/echartsTheme', // echarts图表主题扩展
    dropdown: 'dropdown/dropdown', // 下拉菜单
    selectInput:'selectInput/selectInput'  //selectInput 可输入选择框组件
}).use(['layer'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;

    // 加载设置的主题
    var theme = layui.data('easyweb').theme;
    if (theme) {
        layui.link('/assets/css/theme/' + theme + '.css');
    }

    // 移除loading动画
    setTimeout(function () {
        $('.page-loading').remove();
    }, window == top ? 500 : 300);



});

// 移除主题
function removeTheme() {
    layui.jquery('link[id^=layuicss-assetscsstheme]').remove();
}

var syncPost = function (url, type, data, success) {
    $.ajax({
        url: url,
        type: type,
        data: data,
        async: false,
        success: success,
        error: function () {
            top.layer.msg(data.msg, {icon: 2});
        }
    });
};
//测试环境
//var fastdfsurl = "http://124.117.223.46:8099/";
var fastdfsurl = "http://120.71.3.220:8085/";

function currentYear() {
    var nowDate = new Date();
    var year = nowDate.getFullYear().toString().substr(2, 2);
    return year;
}


/**
 * 字符串是否为空
 * @param str
 * @returns
 */
function isEmpty(str) {
    if (str == null || str == undefined || str == '') {
        return true;
    } else {
        return false;
    }
}

function Layui_SetDataTableRowColor(DivId, RowIndex, Color) {
    try {
        var div = document.getElementById(DivId);
        if (div != null) //找到对象了
        {
            var table_main = div.getElementsByClassName('layui-table-main');   //通过class获取table_main
            if (table_main != null && table_main.length > 0) {
                var table = table_main[0].getElementsByClassName('layui-table');   //通过class获取table
                if (table != null && table.length > 0) {
                    var trs = table[0].querySelectorAll("tr");
                    if (trs != null && trs.length > 0) {
                        trs[RowIndex].style.color = Color;//字体颜色 
                        // trs[RowIndex].style.backgroundColor= Color;//背景颜色
                    }
                }
            }

        }
    } catch (e) {
        console.log(e.message);
    }
}

var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;

    return y + '-' + m + '-' + d;
};

/*获取系统当前日期*/
var getCurrentDate = function () {
    let currentDate;
    $.ajax({
        url: ctx + 'common/getNowDate',
        type: 'post',
        async: false,

        success: function (data) {
            currentDate = data;
        },
        error: function () {
            top.layer.msg("系统日期异常，请联系管理员", {icon: 2});
        }
    });
return currentDate;

}



var intervalDay = function (startTime,endTime){
    var atime = Date.parse(startTime.replace(/-/ig, '/'));;    //返回1970到现在指定日期的秒数
    var btime =Date.parse(endTime.replace(/-/ig, '/'));;    //返回1970到现在指定日期的秒数
    if(atime==btime)
    {
        return 0;
    }
    if(atime>btime)
    {
        var c=atime-btime;
        var miao=c/1000;
        var fen=miao/60;
        var shi=fen/60;
        var day=Math.round((shi/24)* 100) / 100;
        return day ;
    }
    if(btime>atime)
    {
        var c=btime-atime;
        var miao=c/1000;
        var fen=miao/60;
        var shi=fen/60;
        var day=Math.round((shi/24)* 100) / 100;
        return day ;
    }
}

