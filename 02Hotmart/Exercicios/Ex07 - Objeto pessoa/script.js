function GetFormData(){

document.getElementById('form').addEventListener('submit'), function(event){
    event.preventDefault()
}
let Name = document.getElementById('Name').value;
let Age = document.getElementById('Age').value;
let BirthDate = document.getElementById('BirthDate').value;

var Person = {Name: Name, 
    Age:Age, 
    BirthDate: BirthDate}

console.log(Person);
}