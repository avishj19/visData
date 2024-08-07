console.log(data);

let dataArr = data.results;
console.log(dataArr);

randomButn = document.getElementById("random_btn");

function changePeople() {
    let random_index = Math.floor(Math.random() * dataArr.length )
    let selcetedperson = dataArr[random_index]
    console.log(selcetedperson)

    let name = document.getElementById("name")
    name.innerText = `Name: ${selcetedperson.name.first}`;

    let peopleImg = document.getElementById("person_img")
    peopleImg.src = selcetedperson.picture.large

    let peopleAge = document.getElementById("age")
    peopleAge.innerText = `Age: ${selcetedperson.dob.age}`

    let peopleNumber = document.getElementById("number")
    peopleNumber.innerText = `Phone Number: ${selcetedperson.phone}`

    let peopleEmail = document.getElementById("email")
    peopleEmail.innerText = `Email: ${selcetedperson.email}`

    let peopleCountry = document.getElementById("country")
    peopleCountry.innerText = `Country: ${selcetedperson.location.country}`

    let peopleAdress = document.getElementById("Adress")
    peopleAdress.innerText = `Adress: ${selcetedperson.location.street.number} ${selcetedperson.location.street.name}`
}





randomButn.addEventListener("click", changePeople)