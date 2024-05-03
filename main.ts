#! /usr/bin/env node
import inquirer from "inquirer"

const randomNumber: number = Math.floor (20000 + Math.random() * 90000)

let myBalance: number = 0
let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter your full student name",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "Please enter a non-empty value";
            }

        },
        {
            name: "courses",
            type: "list",
            message: "Select the programming course you would like to get enrolled in!",
            choices: ["Web Development", "Artificial Intelligence", "Data Science and Analytics", "Cloud Computing", "Networking and Cybersecurity"]
        }
    ]
);

const tutionCharges: {[key: string]: number} = {
    "Web Development": 20000,
    "Artificial Intelligence": 55000,
    "Data Science & Analytics": 45000,
    "Cloud Computing": 30000,
    "Networking & Cybersecurity": 40000
};

console.log(`\nTution Charges: ${tutionCharges[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt ([
    {
        name: "payment",
        type: "list",
        message: "Select your desired payment method",
        choices: ["Scholarship Based", "Lump Sum", "Online Payment", "Bank Transfer", "Credit/Debit Card", "Financial Aid", "Downpayment+Installments"]
    },
    {
        name: "amount",
        type: "input",
        message: "Quick Remit:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a valid initialized value!";
        },
    }
]);

console.log(`\nYour desired selected payment method is ${paymentType.payment}`);

const courseExpenses = tutionCharges[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if(courseExpenses === paymentAmount) {
    console.log(`Congratulations! You are successfully enrolled in your desired programming course ${answer.courses}.\n`);

let ans = await inquirer.prompt ([
    {
        name: "select",
        type: "list",
        message: "How can I assist you further?",
        choices: ["See Progress", "Terminte"]
    }
])

if (ans.select === "See Progress"){
    console.log("\n***********Status***********");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Courses: ${answer.courses}`);
    console.log(`Course Expenses: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
} else {
    console.log("\nExit Student Management System\n");
}

} else {
    console.log("Invalid transaction!\n");
}