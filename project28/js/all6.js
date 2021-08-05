let home = {
    motherName: "mary",
    fatherName: "Tom",
    dogs: 3,
    isWakeUp: false,
    // JSON 有時會有的屬性寫法
    "001": "Hello"
};

// 兩種讀取物件的方式
console.log(home.motherName);
console.log(home['001']);