 let num1 = document.getElementById("num1");
 let num2 = document.getElementById("num2");

function add() {
    let result = parseInt(num1.value) + parseInt(num2.value);
    document.getElementById("result").innerHTML = + result;
}

// Array
let car = ["Honda", "Toyota", "Kubota"];
console.log(car[1]);

//object
let person = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: function() {
        return this.name + " " + this.age;
    }
};
console.log(person.name);
console.log(person.fullName());

// jQuery
$(document).ready(function() {
    $("#addBtn").click(()=>{
       let num1=$("#num1").val();
       let num2=$("#num2").val();
       let result=parseInt(num1)+parseInt(num2);
       $("#result").html(result);
    }) 
});

