//Alle class pakken om in JS te bewerken

const checkName = document.querySelector('.name');
const checkNumber = document.querySelector('.number');
const checkEmail = document.querySelector('.email');
const checkDicription = document.querySelector('.discription');
const danger1 = document.querySelector('.danger1')
const danger2 = document.querySelector('.danger2')
const danger3 = document.querySelector('.danger3')
const danger4 = document.querySelector('.danger4')
const done = document.querySelector('.Done')
const done2 = document.querySelector('.Done2')
const done3 = document.querySelector('.Done3')
const btn = document.querySelector('.send-button');
done3.style.visibility = 'hidden';



btn.addEventListener("click", function () {
console.log('asdsf');


    //nameAlert bewerken

    let name = checkName.value;
    if (name.length < 3) {
        danger1.style.display = "block";
        done.style.display = "block";
        done2.style.display = "block";
        checkName.classList.add("error");

    } else {
        danger1.style.display = "none";
        done.style.display = "none";
        done2.style.display = "none";
        checkName.classList.remove("error");
        done3.style.visibility = 'visible';

    }

    //numberAlert bewerken

    let number = checkNumber.value;
    if (number.length < 10) {
        danger2.style.display = "block";
        done.style.display = "block";
        done2.style.display = "block";
        checkNumber.classList.add("error");

    } else {
        danger2.style.display = "none";
        done.style.display = "none";
        done2.style.display = "none";
        checkNumber.classList.remove("error");
        done3.style.visibility = 'visible';
    }

    //emailAlert bewerken

    let pattern = '@' + '.'
    let email = checkEmail.value;
    if (email.match(pattern)) {

        danger3.style.display = "none";
        done.style.display = "none";
        done2.style.display = "none";
        checkEmail.classList.remove("error")


    } else {
        danger3.style.display = "block";
        done.style.display = "block";
        done2.style.display = "block";
        checkEmail.classList.add("error");
        done3.style.visibility = 'visible';
    }

    //beschrijvingAlert bewerken

    let dicription = checkDicription.value;
    if (dicription.length == 0) {
        danger4.style.display = "block";
        done.style.display = "block";
        done2.style.display = "block";
        checkDicription.classList.add("error");

    } else {
        danger4.style.display = "none";
        done.style.display = "none";
        done2.style.display = "none";
        checkDicription.classList.remove("error");
        done3.style.visibility = 'visible';
    }


})


// console.log('asf');