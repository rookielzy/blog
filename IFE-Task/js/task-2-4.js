// /**
//  * aqiData，存储用户输入的空气指数数据
//  * 示例格式：
//  * aqiData = {
//  *    "北京": 90,
//  *    "上海": 40
//  * };
//  */
// var aqiData = {};

// /**
//  * 从用户输入中获取数据，向aqiData中增加一条数据
//  * 然后渲染aqi-list列表，增加新增的数据
//  */
//   var cityInput = document.getElementById("aqi-city-input");
//       airInput = document.getElementById("aqi-value-input");

// function addAqiData() {
//   var city = city.value.trim(),
//       airValue = airInput.value.trim();

//   // 最好加上输入处理
//   aqiData[city] = airvalue;
// }

// /**
//  * 渲染aqi-table表格
//  */
// function renderAqiList() {
//   var table = document.getElementById("aqi-table");
//   var tbody = document.createElement("tbody");
//   table.appendChild(tbody);
//   var key = Object.keys(aqiData),
//       value = Object.value(aqiData);
//   // create lines
//   for (var i = 0; i < aqiData.length; i++){
//     var row = document.createElement("tr");
//     tbody.appendChild(row);
//     var cell1 = document.createElement("td");
//     cell1.innerText = (key[i]);
//     row.appendChild(cell1);
//     var cell2 = document.createElement("td");
//     cell2.innerText = (value[i]);
//     row.appendChild(cell2);
//     var cell3 = document.createElement("td");
//     cell3.innerHTML = ("<button>Delete</button>");
//     row.appendChild(cell3);    
//   }
// }

// /**
//  * 点击add-btn时的处理逻辑
//  * 获取用户输入，更新数据，并进行页面呈现的更新
//  */
// function addBtnHandle() {
//   addAqiData();
//   renderAqiList();
// }

// /**
//  * 点击各个删除按钮的时候的处理逻辑
//  * 获取哪个城市数据被删，删除数据，更新表格显示
//  */
// function delBtnHandle() {
//   // do sth.

//   renderAqiList();
// }

// function init() {

//   // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
//   document.getElementById("add-btn").addEventListener("click", addBtnHandle)
//   // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

// }

// init();

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var aqiInput = document.getElementById("aqi-value-input");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = cityInput.value.trim();
    var aqi = aqiInput.value.trim();

    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return;
    }
    if(!aqi.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
    }
    aqiData[city] = aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"
    }
    document.getElementById("aqi-table").innerHTML = city ? items : "";
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
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").addEventListener("click", addBtnHandle)
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.city);
    })
}

init();