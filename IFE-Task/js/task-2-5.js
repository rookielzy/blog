/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};
// console.log(aqiSourceData['北京']);
// for (var i in aqiSourceData['北京']) {
//   console.log(i);
// }
// 用于渲染图表的数据
var chartData = {};

var graTime = document.querySelector('input[checked]');
// console.log(graTime)
var citySelect = document.getElementById('city-select').value;
// console.log(citySelect);

var bgColor = ['red', 'green', 'blue', 'black'];

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
// column: how many column should be rendered
// metaData: is a Object, to send data
// bgColor: column background-color
function renderChart(column, metaData) {
  var divCol = ""; 
  for (var i = 0; i < column; i++) {
    var data = chartData[metaData[i]];
    divCol += '<div style="width:5px;display:inline-block;height:' + data + ';background-color:' + bgColor[parseInt(Math.random() * 4)] + '"></div>';
  }
  var aqiChartWrap = document.getElementsByClassName('aqi-chart-wrap')[0];
  aqiChartWrap.innerHTML = divCol;
  
}
// renderChart(10, [30,40,50,60,70,80,90,10,20,60], bgColor); 

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(city) {
  // 确定是否选项发生了变化 
  if (graTime !== pageState.nowGraTime) {
    pageState.nowGraTime = graTime;
  }
  // 设置对应数据
  // day: 1st to end of month console.log(parseInt(x.substring(8)));
  // week: every 7 days
  // month: every months
  // console.log(pageState.nowGraTime);
  if (pageState.nowGraTime.value === 'day') {
    // need city data
    // need a count to stop loop
    // odd < 8 31days, even < 8 31days, Feb
    chartData = aqiSourceData[city];
    var keys = Object.keys(chartData);
    // console.log(keys);
    renderChart(keys.length, keys);
  } else if (pageState.nowGraTime.value === 'week') {
    
  }
  // 调用图表渲染函数
}
graTimeChange('北京');
/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();
