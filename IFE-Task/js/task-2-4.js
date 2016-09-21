/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
  var cityInput = document.getElementById("aqi-city-input");
      airInput = document.getElementById("aqi-value-input");

function addAqiData() {
  var city = city.value.trim(),
      airValue = airInput.value.trim();

  // 最好加上输入处理
  aqiData[city] = airvalue;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var table = document.getElementById("aqi-table");
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  var key = Object.keys(aqiData),
      value = Object.value(aqiData);
  // create lines
  for (var i = 0; i < aqiData.length; i++){
    var row = document.createElement("tr");
    tbody.appendChild(row);
    var cell1 = document.createElement("td");
    cell1.innerText = (key[i]);
    row.appendChild(cell1);
    var cell2 = document.createElement("td");
    cell2.innerText = (value[i]);
    row.appendChild(cell2);
    var cell3 = document.createElement("td");
    cell3.innerHTML = ("<button>Delete</button>");
    row.appendChild(cell3);    
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").addEventListener("click", addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();