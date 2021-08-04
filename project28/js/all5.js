let home = {
    motherName: "Jane",
    fatherName: "Tom",
    dogs: 3,
    isWakeUp: false
};

console.log('原本資料 : ',home);

// 刪除屬性資料
delete home.motherName;
delete home.dogs;

console.log(home);