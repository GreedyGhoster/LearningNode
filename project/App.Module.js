const fs = require("fs");

const pathToUser = "./jsons/user.json";
const pathToUser2 = "./jsons/user2.json";

// Reading the json file
const data = fs.readFileSync(pathToUser, "utf-8");
const dataToObj = JSON.parse(data);
console.log(dataToObj);

// Writing the json file
const obj = {
  name: "John Smith",
  age: 25,
  email: "john.smith@example.com",
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  interests: ["hiking", "photography", "reading"],
  education: [
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      university: "ABC University",
    },
    {
      degree: "Master of Business Administration",
      major: "Finance",
      university: "XYZ University",
    },
  ],
};
fs.writeFileSync(pathToUser2, JSON.stringify(obj), "utf-8");
