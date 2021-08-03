// 刪除指定資料 splice

let colors = ['red', 'blue', 'black', 'pink', 'yellow', 'green'];
console.log('原始資料 : ',colors);

// splice(起始位置，要往後刪除幾筆資料)
colors.splice(0, 2);
console.log(colors);