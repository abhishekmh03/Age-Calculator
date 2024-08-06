let inputDate = document.querySelector(".input-date");
let inputMonth= document.querySelector(".input-month");
let inputYear = document.querySelector(".input-year");
let btn = document.querySelector(".line-container img");

let outputD = document.querySelector(".ans-day h1");
let outputM = document.querySelector(".ans-month h1");
let outputY = document.querySelector(".ans-year h1");

let output_year = 0 ;
let output_month = 0 ;
let output_date = 0 ;
dates = [0, 31, 28,  31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

inputYear.addEventListener("change", () =>{
    if( Number(inputYear.value) % 4 === 0){
        dates[2] = 29;
    }else{
        dates[2] = 28;
    }
});

btn.addEventListener("click", () =>{
    age();
});
const date = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
console.log(date, month, year);

function age(){
    output_year = year - Number(inputYear.value);
    output_month = month -Number(inputMonth.value);
    output_date = date - Number(inputDate.value);
    
    if(output_month < 0){
        output_year--;
        output_month = output_month + 12;
    }
    if(output_date < 0){
        output_month--;
        output_date += dates[Number(inputMonth.value)];
    }
    console.log(output_date,output_month,output_year);
    
    outputY.innerText = `${output_year} Years`;
    outputM.innerText = `${output_month} Months`;
    outputD.innerText = `${output_date} Days`;

}
