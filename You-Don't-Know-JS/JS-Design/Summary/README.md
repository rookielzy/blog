# Learning JavaScript Design Patterns

# Summary

## The Constructor Pattern

> Inside a constructor, the keyword `this` references the new object that's being created.

```javascript
function Car( model, year, miles ) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}
// Usage:
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
```
> Disadvantage: It makes inheritance difficult and the other is that functions such as `toString()`
> are redefined for each of the new objects created using the Car constructor.

## Constructors With Prototypes

> This way can solve the problem aboves us.

```javascript
function Car( model, year, miles ) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than Object.prototype
Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles";
};
```

## IIFE

```javascript
var testModule = (function () {
    var counter = 0;

    return {
        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log( "counter value prior to reset: " + counter );
            counter = 0;
        }
    };
})();
```

## The Module Pattern

```javascript
var myNamespace = (function () {
 
    var myPrivateVar, myPrivateMethod;
    
    // A private counter variable
    myPrivateVar = 0;
    
    // A private function which logs any arguments
    myPrivateMethod = function( foo ) {
        console.log( foo );
    };
    
    return {
    
        // A public variable
        myPublicVar: "foo",
    
        // A public function utilizing privates
        myPublicFunction: function( bar ) {
    
        // Increment our private counter
        myPrivateVar++;
    
        // Call our private method using bar
        myPrivateMethod( bar );
    
        }
    };
 
})();
```

### Import mixins

```javascript
var myModule = (function ( jQ, _ ) {
    function privateMethod1() {
        jQ(".container").html("test");
    }

    function privateMethod2(){
        console.log( _.min([10, 5, 100, 2, 1000]) );
    }

    return {
        publicMethod: function(){
            privateMethod1();
        }
    };
})( jQuery, _ );
```

### Exports

```javascript
// Global module
var myModule = (function () {
    var module = {},
        privateVariable = "Hello World";

    function privateMethod() {

    }

    module.publicProperty = "Foobar";
    module.publicMethod = function () {
        console.log( privateVariable );
    };

    return module;
})();
```

## The Singleton Pattern

```javascript
var mySingleton = (function () {
    var instance;
    
    function init() {
        function privatemethod(){
            console.log( "I am private" );
        }

        var privateVariable = "I'm also private";

        var privateRandomNumber = Math.random();

        return {
            publicMethod: function () {
                console.log( "The public can see me!" );
            },

            publicProperty: "I am also public",

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        getInstance: function () {
            if ( !instance ) {
                instance = init();
            }
            return instance;
        }
    };
})();

var myBadSingleton = (function () {
    var instance;

    function init() {
        var privateRandomNumber = Math.random();

        return {
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        getInstance: function() {
            instance = init();
            return instance;
        }
    };
})();

// Usage:
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true

var badsingleA = myBadSingleton.getInstance();
var badsingleB = myBadSingleton.getInstance();
console.log( badsingleA.getRandomNumber() === badsingleB.getRandomNumber() ); // false
```