# I Don't Fxxking Know About JavaScript

`sort`:
```javascript
arr.sort((a, b) => {
    return a - b;
});
// then return the sorted array
```

`concat`:
```javascript
newArr = arr1.concat(arr2);


newArr.filter(item => {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
        return item;
    }
})
```