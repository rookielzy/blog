# JS Design Pattern

## Ch 01

```javascript
    // 函数添加方法
    // 1
    Function.prototype.checkEmail = function() {
        // code
    };
    // 这种方法会污染原生对象 Function 别人创建的函数也会被污染

    // 2
    Function.prototype.addMethod = function(name, fn) {
        this[name] = fn;
        return this; // 这样就可以进行链式添加
    }

    // Summary
    // 同理其他对象
```


## Ch 02

```javascript
// 构造函数继承
function SuperClass(id) {
    this.books = ['a', 'b', 'c'];
    this.id = id;
}
SuperClass.prototype.showBooks = function() {
    alert(this.books);
}

function SubClass(id) {
    SuperClass.call(this, id);
}

var test1 = new SuperClass(10);
var test2 = new SubClass(11);
test2.showBooks();

function SuperClass(id) {
    this.books = ['a', 'b', 'c'];
    this.id = id;
}
SuperClass.prototype.showBooks = function() {
    alert(this.books);
}

function SubClass(id) {
    // 构造函数继承
    SuperClass.call(this, id);
}
// 类式继承
SubClass.prototype = new SuperClass();
var test1 = new SuperClass(10);
var test2 = new SubClass(11);
test2.showBooks();

// 原型式继承
function inheritObject(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

// 寄生式继承
var book = {
    name: 'js book',
    alikeBook: ['a', 'b', 'c']
};
function createBook(obj) {
    var o = new inheritObject(obj);
    o.getName = function() {
        alert(this.name);
    };
    return o;
}

var test1 = createBook(book);
test1.name = 'test1';
test1.getName();
test1.alikeBook.push('d');
alert(test1.alikeBook);
alert(book.alikeBook);

// 寄生组合式继承
function inheritPrototype(SubClass, SuperClass) {
    var p = inheritObject(SuperClass.prototype);
    alert(p.constructor);
    console.log(p);
    p.constructor = SubClass;
    alert(p.constructor);    
    SubClass.prototype = p;
}
function SuperClass(name) {
    this.name = name;
    this.colors = ['a', 'b', 'c'];
}

SuperClass.prototype.getName = function() {
    alert(this.name);
}

function SubClass(name) {
    SuperClass.call(this, name);
    console.log(this);
}
inheritPrototype(SubClass, SuperClass);
var test1 = new SubClass('test1');
test1.getName();
test1.colors.push('d');
alert(test1.colors);
alert(SuperClass.prototype);

```

```javascript
    var extend = function(target, source) {
        for (var property in source) {
            target[property] = source[property];
        }
        return target;
    }

    var mix = function() {
        var i = 1,
        len = arguments.length,
        target = arguments[0],
        arg;
        for (; i < len; i++) {
            arg = arguments[i];
            for (var property in arg) {
                target[property] = arg[property];
            }
        }
        return target;
    }
```