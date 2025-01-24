
let userDob = document.querySelector('#date');
let calculate = document.querySelector('#calculate');
let final = document.querySelector(".final");


function refresh() {
    if (final.firstChild) {
        final.firstChild.remove();
    }
}

function calcDob(){
    refresh();
    let usser = new Date(userDob.value);
    let userYear = usser.getFullYear();
    let  userMonth= usser.getMonth()+1;
    let userDate = usser.getDate();
    console.log(userYear,userDate,userMonth);

    let today = new Date();
    console.log(today);
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();
    console.log(currentDate,currentMonth,currentYear);

    let years;let date;let months;
    
    years = currentYear-userYear;
    

    
    if(currentMonth>=userMonth){
        months = currentMonth-userMonth;
    }
    else{
        years--;
        months = 12+currentMonth-userMonth;
    }
    
    if(currentDate>=userDate){
        date = currentDate-userDate;
    }
    else{
        months--;
        date = new Date(userYear,userMonth,0).getDate()+currentDate-userDate;
    }
   if(months<0){
    months = 11;
    y3--;
   }
    const p = document.createElement('p');
    p.className='danny';
    p.innerHTML = `You Current age is <span>${years} years ${months} months ${date} day</span>`;
    final.appendChild(p);

}

calculate.addEventListener('click',()=>{
    calcDob();
})