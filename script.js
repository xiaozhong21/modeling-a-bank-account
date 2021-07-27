function Account(name) {
  this.name = name;
  this.balance = 0;
  this.deposit = (depositAmount) => {
    this.balance += depositAmount
    return `You just made a deposit of $${depositAmount}. Your current account balance is $${this.balance}`;
  };
  this.transfer = (receiverName, transferAmount) => {
    this.balance -= transferAmount;
    receiverName.balance += transferAmount;
    };
  this.describe = () => `Welcome, ${this.name}! Your account has a total balance of $${this.balance}`;
}


////////////////////////////////////////////////////
// Using DOM to dynamically show account balance, deposit statement, and transfer
// Create a nodelist of three "Get started" buttons
let balanceButton = document.querySelector(".balance-link");
let depositButton = document.querySelector(".deposit-link");
let transnferButton = document.querySelector(".transfer-link");
// let serviceButtons = document.querySelectorAll(".service-link");


// Select username & password input boxes, and placeholder where account info will be displayed 
let formInput = document.querySelector(".form-hidden");
let placeholder = document.querySelector(".placeholder")
let para = document.querySelector(".placeholder-info")

// ////////////////////////////////////////////////////
// // DOM 1: Show account balance
let isLoggedin = false;
let balanceButtonClicked = false;
let depositButtonClicked = false;
let transferButtonClicked = false;
let newUser;

balanceButton.addEventListener("click", function() {
  balanceButtonClicked = true;
  if (!isLoggedin) {
    formInput.className = "form-show";
  } 
  else {
    // let userName = document.querySelector("#username").value;
    // let newUser = new Account(userName);
    para.textContent = "";
    para.textContent = newUser.describe();
    placeholder.appendChild(para);
    placeholder.className = "placeholder";
    formInput.className = "form-hidden";
    isLoggedin === true;
  }
})
 
document.querySelector(".userinfo-submit").addEventListener("click", function() {
  let userName = document.querySelector("#username").value;
  newUser = new Account(userName);
  if (balanceButtonClicked) {
    para.textContent = "";
    para.textContent = newUser.describe();
    placeholder.appendChild(para);
    placeholder.className = "placeholder";
    formInput.className = "form-hidden";
    isLoggedin = true;
  } else if (depositButtonClicked) {
    let balance = newUser.deposit(parseInt(window.prompt("Please choose your deposit amount")));
    para.textContent = "";
    para.textContent = balance;
    placeholder.appendChild(para);
    placeholder.className = "placeholder-show";
    formInput.className = "form-hidden";
    isLoggedin = true;
  }
})




// ////////////////////////////////////////////////////
// // DOM 2: show deposit statement
depositButton.addEventListener("click", function() {
  depositButtonClicked = true;
  if (!isLoggedin) {
    formInput.className = "form-show";
  } else {
    // let userName = document.querySelector("#username").value;
    // let newUser = new Account(userName);
    let balance = newUser.deposit(parseInt(window.prompt("Please choose your deposit amount")));
    para.textContent = "";
    para.textContent = balance;
    placeholder.appendChild(para);
    placeholder.className = "placeholder";
    formInput.className = "form-hidden";
    isLoggedin = true;
  }
})

// document.querySelector(".userinfo-submit").addEventListener("click", function() {
//   if (depositButtonClicked) {
//     let userName = document.querySelector("#username").value;
//     let newUser = new Account(userName);
//     let balance = newUser.deposit(parseInt(window.prompt("Please choose your deposit amount")));
//     para.textContent = "";
//     para.textContent = balance;
//     placeholder.appendChild(para);
//     placeholder.className = "placeholder-show";
//     formInput.className = "form-hidden";
//     isLoggedin = true;
//   }
//   return newUser;
// })


// for (let button of buttons) {
//   button.addEventListener("click", function() {
//     let enteredPassword = window.prompt("Please enter your password");
    
//     if (button.id === "billy-balance") {
//       let count = 1;
//       while (enteredPassword !== "1111" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "1111") {
//         let para = document.createElement("p");
//         let balance = Billy.describe();
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     } else if (button.id === "rosie-balance") {
//       let count = 1;
//       while (enteredPassword !== "2222" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "2222") {
//         let para = document.createElement("p");
//         let balance = Rosie.describe();
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     } else if (button.id === "jack-balance") {
//       let count = 1;
//       while (enteredPassword !== "3333" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "3333") {
//         let para = document.createElement("p");
//         let balance = Jack.describe();
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     } else if (button.id === "jill-balance") {
//      let count = 1;
//       while (enteredPassword !== "4444" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "4444") {
//         let para = document.createElement("p");
//         let balance = Jill.describe();
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     }
//   });
// }
////////////////////////////////////////////////////
// DOM: Make a deposit
// let depositButton = document.querySelector(".deposit-service");
// console.log(depositButton);
// let buttons2 = document.querySelectorAll(".deposit");
// let list2 = document.querySelector(".deposit-list-hidden");

// depositButton.addEventListener("click", function() {
//   // for (button of buttons2) {
//   //   button.style.visibility = "visible";
//   // }
//   list2.className = "deposit-list-show"
// });

// for (let button of buttons2) {
//   button.addEventListener("click", function() {
//     let enteredPassword = window.prompt("Please enter your password");
    
//     if (button.id === "billy-deposit") {
//       let count = 1;
//       while (enteredPassword !== "1111" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "1111") {
//         let para = document.createElement("p");
//         let balance = Billy.deposit(parseInt(window.prompt("Please choose your deposit amount")));
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     } else if (button.id === "rosie-deposit") {
//       let count = 1;
//       while (enteredPassword !== "2222" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "2222") {
//         let para = document.createElement("p");
//         let balance = Rosie.deposit(parseInt(window.prompt("Please choose your deposit amount")));
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     } else if (button.id === "jack-deposit") {
//       let count = 1;
//       while (enteredPassword !== "3333" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "3333") {
//         let para = document.createElement("p");
//         let balance = Jack.deposit(parseInt(window.prompt("Please choose your deposit amount")));
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     } else if (button.id === "jill-deposit") {
//      let count = 1;
//       while (enteredPassword !== "4444" && count < 3 && enteredPassword !== null) {
//         enteredPassword = window.prompt("The password you entered is incorrect");
//         count += 1;
//       }
//       if (enteredPassword === "4444") {
//         let para = document.createElement("p");
//         let balance = Jill.deposit(parseInt(window.prompt("Please choose your deposit amount")));
//         para.textContent = balance; 
//         document.getElementById("body").appendChild(para);
//       } else if (count >= 3) {
//         window.alert("Sorry, you’ve reached the maximum login attempts. Please try again later.")
//       }
//     }
//   });
// }

////////////////////////////////////////////////////
// DOM: Form


// console.log(buttons)
// Print a string describing the current amount of money on each account
// console.log("==================");
// Billy.describe();
// Rosie.describe();
// Jack.describe();
// Jill.describe();

// // Transfer positive values between Billy and Jack and negative values between Rosie and Jack
// console.log("==================");
// Billy.transfer(Jack, 100); // Billy transfers $100 to Jack
// Billy.describe();
// Jack.describe();

// Rosie.transfer(Jack, -200); // Rosie transfers -$200 to Jack
// Rosie.describe();
// Jack.describe();

// // A credit method: bank credit does not reduce the balance at the time of transaction but requires payment at a later date
// console.log("==================");
// // Add a credit method to Billy's account

// Billy.credit = (creditAmount, creditLimit) => console.log(`Hi ${Billy.name}! You have a balance of $${Billy.balance} and a credit of $${creditAmount} that requires payment after one month of transaction. You have a running credit limit of $${creditLimit - creditAmount}`);

// console.log(Billy.credit(50, 1000));

