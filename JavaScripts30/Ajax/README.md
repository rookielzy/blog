# Ajax

## Ajax 是什么
> AJAX = 异步 JavaScript 和 XML。

> AJAX 是一种用于创建快速动态网页的技术。

> 通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

> 传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

## 工作原理
![ajax](ajax.gif)

> AJAX是基于现有的Internet标准，并且联合使用它们：
1. XMLHttpRequest 对象 (异步的与服务器交换数据)
2. JavaScript/DOM (信息显示/交互)
3. CSS (给数据定义样式)
4. XML (作为转换数据的格式)
5. AJAX应用程序与浏览器和平台无关的！


## HTTP 请求
1. XMLHttpRequest

## XMLHttpRequest 对象
1. `request = new XMLHttpRequest()` 所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。
2. `variable = new ActiveXObject("Microsoft.XMLHTTP")` 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：

## 向服务器发送请求

> `open(method, url, async)` 	规定请求的类型、URL 以及是否异步处理请求。
1. method：请求的类型；GET 或 POST
2. url：文件在服务器上的位置。 该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php （在传回响应之前，能够在服务器上执行任务）。
3. async：true（异步）或 false（同步）

> `send(string)` 将请求发送到服务器。
1. string：仅用于 POST 请求

> `setRequestHeader(header, value)` 向请求添加 HTTP 头。
1. header: 规定头的名称
2. value: 规定头的值


### GET OR POST ?
> 与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

> 然而，在以下情况中，请使用 POST 请求：
1. 无法使用缓存文件（更新服务器上的文件或数据库）
2. 向服务器发送大量数据（POST 没有数据量限制）
3. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

#### GET 请求
```javascript
function loadXMLDoc() {
    var request = null;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 请求准备好了
    request.onreadystatechange = function() {
        // 请求状态是否为成功状态
        if (request.readyState == 4 && request.status == 200) {
            // do something
        }
    }
    request.open('GET', 'something.txt | something.php', true); //可能得到的是缓存的结果。
    request.open('GET', 'something.txt | something.php?t=' + Math.random(), true);  //为了避免上面的情况，向 URL 添加一个唯一的 ID：
    request.open('GET', 'something.txt | something.php？fname=Herry&lname=Ford', true); //如果希望通过 GET 方法发送信息，可向 URL 添加信息：
    request.sned();
}
```

#### POST 请求
```javascript
function loadXMLDoc() {
    var request = null;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 请求准备好了
    request.onreadystatechange = function() {
        // 请求状态是否为成功状态
        if (request.readyState == 4 && request.status == 200) {
            // do something
        }
    }
    request.open('POST', 'something.txt | something.php', true);
    // 如果需要像 HTML 表单那样 POST 数据，使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")； // 2
    request.sned();
}
```

## 服务器响应

> `responseText` 获得字符串形式的响应数据。
```javascript
function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
	xmlhttp.send();
}
```

> `responseXML` 获得 XML 形式的响应数据。
```javascript
function loadXMLDoc()
{
  var xmlhttp;
  var txt,x,i;
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      xmlDoc=xmlhttp.responseXML;
      txt="";
      x=xmlDoc.getElementsByTagName("ARTIST");
      for (i=0;i<x.length;i++)
      {
        txt=txt + x[i].childNodes[0].nodeValue + "<br>";
      }
      document.getElementById("myDiv").innerHTML=txt;
    }
  }
  xmlhttp.open("GET","cd_catalog.xml",true);
  xmlhttp.send();
}
```

### onreadystatechange 事件
> 当请求被发送到服务器时，我们需要执行一些基于响应的任务。

> 每当 readyState 改变时，就会触发 onreadystatechange 事件。

> readyState 属性存有 XMLHttpRequest 的状态信息。

> onreadystatechange	存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。

> readyState 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
1. 0: 请求未初始化
2. 1: 服务器连接已建立
3. 2: 请求已接收
4. 3: 请求处理中
5. 4: 请求已完成，且响应已就绪

> status	
1. 200: "OK"
2. 404: 未找到页面