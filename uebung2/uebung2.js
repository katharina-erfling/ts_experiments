"use strict";
const user = {
    name: "John Doe",
    age: 30,
};
if (user.email) {
    console.log(user.email.toLocaleLowerCase());
}
else {
    console.log("E-Mail is missing");
}
