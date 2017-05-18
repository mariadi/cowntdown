let countdown;

let id;

const timerDisplay = document.querySelector('.display__time-left');

const endTime = document.querySelector('.display__end-time');

const buttons = document.querySelectorAll('[data-time]');// select all data-time tags from HTML

function timer(secs){
     clearInterval(id)
// clear existing timers
    clearInterval(countdown);
    const now= Date.now(); //new method current time in milliseconds
    const then = now + secs * 1000;
    showTimeLeft(secs);
    displayEnd(then);
    countdown = setInterval( () => {
    const secsLeft = Math.round((then - Date.now()) / 1000);
        
        if(secsLeft < 0){ //events of END of timer
            document.querySelector('.pop_up').style.display="flex";
            clearInterval(countdown);
            clearInterval(id);
             
        return; 
        }
      showTimeLeft(secsLeft);
    }, 1000); //display remaining seconds, rounded 
 }

//setInterval does not run right away, thats why we need a new function

function showTimeLeft(secs){
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    const display =`${mins} :  ${remainderSecs < 10 ? '0' : ''} ${remainderSecs}`; //add 0 to lower then 10 secs, displays 
    document.title = display; // shows timer on title bar
   timerDisplay.textContent = display;
}

function displayEnd(timestamp){
    const end = new Date(timestamp); //
    const hours= end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `${hours} : ${minutes < 10 ? '0' : ''} ${minutes}`;
}


function startTimer(){
    const seconds = parseInt(this.dataset.time);
   timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins= this.minutes.value;
    timer(mins * 60);
    this.reset();
    loading_bar();
   
});



 function collapse(){
  document.querySelector('.container').style.display="none";
   document.querySelector('.pop_up').style.display="none";
     document.querySelector('.goodbye').style.display="flex";
};


function loading_bar() {
    var elem = document.getElementById("myBar"); 
    var width = 0.1;
    id = setInterval(frame, 1000);
    function frame() {
       if (width === 1) {
            clearInterval(id);
                } 
          else{
            width+=0.2; 
            elem.style.width = width + '%'; 
                   }
        };
    }



function set_new(){
   document.querySelector('.pop_up').style.display="none";
     document.querySelector('.container').style.display="block";
}


   

 buttons.forEach(button => button.addEventListener('click', loading_bar));





