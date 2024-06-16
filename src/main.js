// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// 捕获并修改h1的内容，JS支持单行注释

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");  // 获取src，作为标识
  if (mySrc === "src/images/firefox-icon.png") {
    myImage.setAttribute("src", "src/images/facai.jpg");
    myImage.setAttribute("alt", "一只肥猫");
  } else {
    myImage.setAttribute("src", "src/images/firefox-icon.png");
    myImage.setAttribute("alt", "Firefox 标志：一只盘旋在地球上的火狐");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  // let myName = prompt("请输入你的名字。");  // 对话框
  // localStorage.setItem("name", myName);  // 在浏览器存储数据，name是一个index
  // myHeading.textContent = "Mozilla 酷毙了，" + myName;
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();  // 递归强制
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}

if (!localStorage.getItem("name")) {  // 初始化时没有name
  setUserName();  // 获取
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};


