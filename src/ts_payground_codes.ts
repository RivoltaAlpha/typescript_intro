// const drive = (): void => {
// let message: string = "Tiffany is a smart girl"
// console.log(`The lec said, ${message}`)
// }

// drive()

// let car = ["item1", "item2", "item3", "item20"];
// console.log(car.length); // This will output 20


// Object with inferred types
// let person = {
//   name: "John",
//   age: 30,
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };

// // Object with explicit types
// let employee: { name: string; age: number; jobTitle: string } = {
//   name: "Jane",
//   age: 35,
//   jobTitle: "Developer"

// };


// const person: { fname:string, lname: string} = {
//     fname: "Tiffany", lname: "Mwaniki"
// };

// let text: string = "";
// for (let x in person) {
//     console.log(`${x}: ${person [x as keyof typeof person]}`);
// }

// interface MyNumber {
//     a: number;
//     b?: number; // `b` is optional
// }

// const number: MyNumber = { a: 5 };

// function myFunction({ a, b }: MyNumber): void {
//     console.log(`a: ${a}, b: ${b}`);
// }

// myFunction(number);

// Attempt 1
//  const TheFunction = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json()
//     console.log("Data", data)
// }

// (async () => {
//     await TheFunction();
// })()


// Attempt 2
//  const TheFunction = async () => {
//     try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     if(!res.ok){
//      throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const data = await res.json()
//     console.log("Data", data)
//     }catch(error){
//         console.error("Error fetching data:", error);
//     }
// }

// (async () => {
//     await TheFunction();
// })()


// Attempt 3
// const TheFunction = (): void => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then(data => {
//             console.log("Data", data);
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });
// };

// TheFunction();


// interface Data {
//     id: number;
//     name: string;
// }

// // Sample data
// const data: Data[] = [
//     { id: 1, name: "John Doe" },
//     { id: 2, name: "Jane Smith" },
//     { id: 3, name: "Alice Johnson" },
// ];

// // Simulates fetching data from a server
// function fetchData(shouldFail: boolean): Promise<Data[]> {
//     return new Promise((resolve, reject) => {
//         console.log("Starting fetch...");

//         setTimeout(() => {
//             if (shouldFail) {
//                 reject(new Error("❌ Failed to fetch data"));  // Simulate error
//             } else {
//                 resolve(data);  // Return data successfully
//             }
//         }, 2000);  // Simulate network delay (2 seconds)
//     });
// }

// // Call fetchData with true or false to simulate success/failure
// fetchData(false)  // Change to `true` to simulate an error
//     .then((result: Data[]) => {
//         console.log("✅ Data fetched successfully:");
//         result.forEach(item => {
//             console.log(`- ID: ${item.id}, Name: ${item.name}`);
//         });
//     })
//     .catch((error: Error) => {
//         console.error(`🚫 Error occurred: ${error.message}`);
//     })
//     .finally(() => {
//         console.log("🔚 Fetch operation completed.");
//     });

// OOP
    // class Person{
    //     // PROPERTIES 
    //     name:string;
    //     age: number;
    //     gender:string;

    //     // CONSTRUCTOR 
    //     constructor(_name:string, _age:number,_gender:string){
    //         this.name = _name;
    //         this.age = _age;
    //         this.gender = _gender
    //     }

    //     // METHODS
    //     greet(): void{
    //         console.log(`Hello ${this.name}, what are you doing at the age of ${this.age}?`)
    //     }
    // }

    // //objects 
    // const tiff = new Person("Tiffany", 22, "female");
    // tiff.greet();



// Polymorphism 
interface Payment {
    processPayment(amount: number): void;
}

class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class PayPalPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of ${amount}`);
    }
}

class BankTransferPayment implements Payment {
    processPayment(amount: number): void {
        console.log(`Processing bank transfer payment of ${amount}`);
    }
}


// Use polymorphism to handle payments
function makePayment(payment: Payment, amount: number): void {
    payment.processPayment(amount);
}

// Example usage
const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const bankTransferPayment = new BankTransferPayment();

makePayment(creditCardPayment, 100);
makePayment(payPalPayment, 200);
makePayment(bankTransferPayment, 300);
