let inputDate = document.querySelector(".input-date");
let inputMonth= document.querySelector(".input-month");
let inputYear = document.querySelector(".input-year");
let btn = document.querySelector(".line-container img");

let outputD = document.querySelector(".ans-day h1");
let outputM = document.querySelector(".ans-month h1");
let outputY = document.querySelector(".ans-year h1");

var check_month = true;
var check_year = true;
var check_date = true;

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
    if(Number(inputMonth.value) > 12|| Number(inputMonth.value) <= 0){
        check_month = false;
        document.querySelector(".i_month p").classList.remove('hidden');
        document.querySelector(".i_month p").classList.add('valid_month');
    }else{
        check_month = true;
        document.querySelector(".i_month p").classList.remove('valid_month');
        document.querySelector(".i_month p").classList.add('hidden');
    }
    if(Number(inputYear.value) > year || Number(inputYear.value) <= 0){
        check_year = false;
        document.querySelector(".i_year p").classList.remove('hidden');
        document.querySelector(".i_year p").classList.add("valid_year");
    }else{
        check_year = true;
        document.querySelector(".i_year p").classList.remove('valid_year');
        document.querySelector(".i_year p").classList.add("hidden");
    }
    if(Number(inputDate.value) > dates[Number(inputMonth.value)]||Number(inputDate.value) === 0|| Number(inputMonth.value) > 12){
        check_date = false;
        document.querySelector(".i_date p").classList.remove("hidden");
        document.querySelector(".i_date p").classList.add("valid_date");
    }else{
        check_date = true;
        document.querySelector(".i_date p").classList.remove('valid_date');
        document.querySelector(".i_date p").classList.add("hidden");   
    }


    if(check_date&&check_month&&check_year){
        age();
    }
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
    
    outputY.innerHTML = `<span class="highlight">${output_year}</span> <span class="highlight_t">Years</span>`;
    outputM.innerHTML = `<span class ="highlight">${output_month}</span> <span class="highlight_t">Months</span>`;
    outputD.innerHTML = `<span class="highlight">${output_date}</span> <span class="highlight_t">Days</span>`;

};
