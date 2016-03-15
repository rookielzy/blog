# 零基础HTML编码 学习笔记

------


## 关于 `lang` 的理解
### [在HTML 4.01标准中的详细介绍如下](https://www.w3.org/TR/html401/struct/dirlang.html#langcodes) ：
```html
<html lang="en">
    
</html>
 ```
> 8.1.1 Language codes

> The lang attribute's value is a language code that identifies a natural language spoken, written, or otherwise used for the communication of information among people. Computer languages are explicitly excluded from language codes.

> [RFC1766] defines and explains the language codes that must be used in HTML documents.

> Briefly, language codes consist of a primary code and a possibly empty series of subcodes:

>        language-code = primary-code ( "-" subcode )*

> Here are some sample language codes:

> * "en": English
> * "en-US": the U.S. version of English.
> * "en-cockney": the Cockney version of English.
> * "i-navajo": the Navajo language spoken by some Native Americans.
> * "x-klingon": The primary tag "x" indicates an experimental language tag

粗译的意思：`lang` 属性就是一种语言代码，定义了人们用于交谈，书写，或其他与他人之间交流的方式的语言。
`RFC1766` 定义和解释了HTML文档中必须使用语言代码。
简而言之，语言代码必须要有主代码，也可伴随一些子代码。

------

## 表格单元横跨

![table-cross](https://github.com/rookielzy/blog/blob/gh-pages/ife-task/task-1/img/table-cross.PNG)

一开始`1000`这个单元格没有横跨，造成`操作`单元格下方有多余空间。
在查阅了W3C后才知道自己遗漏了关于 `colspan' 和 'rowspan' 的学习。

[W3C td 属性详解]（http://www.w3school.com.cn/tags/tag_td.asp）

------

作者：罗志尧 [@rookielzy](https://github.com/rookielzy)
2016.03.15