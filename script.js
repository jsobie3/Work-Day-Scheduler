console.log("hello")


// -- DayJS Time -- //
function currentTime(){
  let currentDay = dayjs().format('MMM DD, YYYY:   h:mm a');
  $('#currentDay').text(currentDay);
}

setInterval(currentTime,1000)

var hour = dayjs().hour()



function colorTime(){

$('.hourblock').each(function ()  {
  console.log('test')
    var currentHour = dayjs().format('h')
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
  console.log(currentHour)
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
//
$(".saveBtn").on("click", function saveInput(event)
{
event.preventDefault
console.log("hello");
event.preventDefault();
let tasks = $(this).siblings(".description").val();
let time = $(this).parents().attr("id").split("-")[1];
localStorage.setItem(time, tasks)
})






// -- Color Change Based On Time -- //
//
// function timeQuery (){
//   console.log("test")

//   var currentHour = dayjs().format('h')
//   var hourBlock = $(this).attr("id").split("-")[1];

  
// console.log(currentHour)

//   if (currentHour === hourBlock) {
//   $(this).addClass("present")    
//   }
//   else if(currentHour >= hourBlock) {
//     $(this).addClass ("future")
//   }
//   else {
//     $(this).addClass("past")
//   }
// }
// timeQuery();