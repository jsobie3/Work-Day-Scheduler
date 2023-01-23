dayjs().format('LL') 
var dayDisplay = $("#currentDay");
var textAreas = $("textarea")
var currentHour = dayjs().hour();
var saveButtons = document.querySelectorAll(".saveBtn")
console.log(saveButtons)

function timeUpdate(){
    dayDisplay.text(dayjs())
}

for (let i = 0; i < textAreas.length; i++){
    if (localStorage.getItem(i) != undefined){
        textAreas[i].value = localStorage.getItem(i);
    }
    if (i + 9 < currentHour){
        textAreas[i].classList.remove('present');
        textAreas[i].classList.remove('future');
        textAreas[i].classList.add('past');
        
    } else if (i + 9 === currentHour){
        textAreas[i].classList.remove('past');
        textAreas[i].classList.remove('future');
        textAreas[i].classList.add('present');
    } else {
        textAreas[i].classList.remove('present');
        textAreas[i].classList.remove('past');
        textAreas[i].classList.add('future');
    }
}

function testFunction () {
    console.log("Clicked!")
}

for (let i = 0; i < saveButtons.length; i++){
    saveButtons[i].addEventListener('click', function() {
        localStorage.setItem(i, textAreas[i].value)
    })
}

setInterval(timeUpdate, 1000)