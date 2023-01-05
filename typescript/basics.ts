let age: number;

age = 15;

let userName: string;

userName = "Maciej";

let isStudent: boolean;

isStudent = true;

// let hobbies: null; // allowed

// hobbies = 21  throwing error cause null

let hobbies: string[];

hobbies = ["football", "basketball"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Maciej",
  age: 21,
};

let people: { name: string; age: number }[];

//type inference

let course: string | number = "react- complete guide";

course = 123;

function add(a: number, b: number) {
  // ts inffers : number
  return a + b;
}

function print(value: any) {
  console.log(value);
}
