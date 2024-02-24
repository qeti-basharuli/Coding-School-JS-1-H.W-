'use strict'

// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
for (let i = 5; i < 100; i++) {
  console.log(i);
}

// 2. მოცემულია მასივი
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
//ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე
for (let number of array1) {
  if (number > 0 && number < 100) console.log(number);
}

// 3. მოცემულია მასივი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
for (let number of array2) {
  if (number == 5) {
    console.log("არის");
    break;
  }
}

// 4. მოცემულია მასივი
let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
let sum = 0;
for (let i = 0; i < array3.length; i++) {
    sum += array3[i];
}
console.log(sum);

// 5. მოცემულია მასივი
let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემენტების რაოდენობაზე)
let a = 0;
let b = array4.length;


for (let i = 0; i < array4.length; i++) {
    a += array4[i];
}
let c = a / b;
console.log(c);

// 6. მოცემულია მასივი
let array5 = [1, 2, 3, 7, 6, 9];
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა (continue)
for (let number of array5) {
    if (number == 7) {
        continue;
    }
    console.log(number);
}

// 7. მოცემულია ობიექტი
let user = {
    firstName: "Giorgi",
    lastName: "Smith",
    age: 25,
    studentStatus: "active"
};
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი
console.log(user.studentStatus);


// 8. მოცემულია ობიექტი
let user2 = {
  name: "anna",
  age: 20,
  studentStatus: "active",
};
// თუ იუზერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ იუზერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ იუზერის სტუდენტის სტატუსი აქტიურია ან იუზერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

if (user2.age < 18 && user2.studentStatus == "active") {
  console.log("hello user");
}
if (user2.name == "levani") {
  console.log("hello levani");
}
if (user2.studentStatus == "active" || user2.age < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}

// // // // //
let user3 = {
    name: "anna",
    age: 20,
    studentStatus: "active",
  }; 

let resultStatement =
  user3.age < 18 && user3.studentStatus == "active"
    ? "hello user"
    : user3.name == "levani"
    ? "hello levani"
    : user3.studentStatus == "active" || user3.age < 25
    ? "hello anna"
    : "error";
console.log(resultStatement);


// 9. მოცემულია მასივი
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// ამოიღეთ მხოლოდ ლუწი რიცხვები
for (let items of array6) {
  if (items % 2 == 0) {
    console.log(items);
  }
}

// 10. მოცემულია მასივი
let users2 = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true
for (let check of users2){
    if(check.status){
      console.log(check.username);
    }
  }

// 11. მოცემული მასივიდან ამოიღეთ მხოლოდ ის ციფრები, რომლებიც 5-ის ჯერადია,
let array7 = [32, 14, 10, "hello", null, "40", 50];
for (let item of array7) {
    if (item % 5 == 0) {
        console.log(item);
    }
}

// 12. მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (items2 = 0; items2 < array8.length; items2++) {
    let nestedItems2 = array8[items2];
    for (let i = 0; i < nestedItems2.length; i++) {
        let items2 = nestedItems2[i]
        if (items2 > 0) {
            console.log(items2);
        }
    }
}

