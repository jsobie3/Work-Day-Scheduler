// -- DayJS Time -- //
var currentDate = dayjs().format("dddd, MMM Do YYYY: h:mm a");
var todayDate = document.getElementById("currentDay");
var currentHour = dayjs().format("HH")

var saveButtons = document.querySelectorAll(".saveBtn")


function colorTime(){

$('.hourblock').each(function ()  {
  
    var currentHour = dayjs().format('h')
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
  
    if (currentHour === hourBlock) {
    $(this).addClass('present')
    }
    else if(currentHour <= hourBlock) {
      $(this).addClass ('future')
    }
    else if (currentHour >= hourBlock) 
      {
      $(this).addClass('past')
    }
  })
}

colorTime();

// -- Save Button -- //
$(".saveBtn").on("click", function saveInput(event)
{

event.preventDefault();
let tasks = $(this).siblings(".description").val();
let time = $(this).parents().attr("id").split("-")[1];
localStorage.setItem(time, tasks)
})


setInterval(timeUpdate, 1000)