document.getElementById("reservation-form").addEventListener("submit",function (event) {
event.preventDefault();
let name = document.getElementById("name").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let people = document.getElementById("people").value;
if (name && date&& time && people ) {
alert(`Thank you ${name}! your Table for ${people} has been reserved for${date} at ${time}`)
document.getElementById("reservation-form").reset();
} 
else {
alert(`Please fill the form`)  
}
});
document.getElementById("Place-button").addEventListener("click",function () {
alert(`Redirecting you to where you will place Your Order`)
})


