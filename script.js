let nameArray=[];
let ageArray=[];
let nameInput;
let ageInput;
let nameList=[];
let ageList=[];

const nI=document.getElementById("name-input");
const nD=document.getElementById("name-display");
const nQ=document.getElementById("age-input");
const nW=document.getElementById("age-display");


function testFunction()
{
    nameInput=nI.value
    console.log(nameInput);
    ageInput=nQ.value
    console.log(ageInput);
    nameList.push(nameInput);
    ageList.push(ageInput);

    nameArray.push(nameInput);
    ageArray.push(ageInput);                   
   
    localStorage.setItem("nameArray",JSON.stringify(nameArray));   
    localStorage.setItem("ageArray",JSON.stringify(ageArray));   

 }

 function myFunction() 
 {

 var name = nameInput;
 var age = ageInput;
                   

                  
var table = document.getElementsByTagName('table')[0];
var newRow = table.insertRow(table.rows.length/2+1);

var cel1 = newRow.insertCell(0);
var cel2 = newRow.insertCell(1);
var cel3 = newRow.insertCell(2);

cel1.innerHTML = name;
cel2.innerHTML = age;
cel3.innerHTML = '<input type="button" value = "check" onClick="Javacsript:checkme(nameInput)">';


  }
 
function checkme(str)
{

    var vowa;
    var count=0;
    var ag;
    var vO;

    if(ageInput>18)
    {
        ag="adult"

    }
    else 
    {
        ag="child";
    }
    for(i=0;i<str.length;i++)
    {
        if(str[i]=="a"||str[i]=="A"||str[i]=="e"||str[i]=="E"||str[i]=="i"||str[i]=="I"||str[i]=="o"||str[i]=="O"||str[i]=="u"||str[i]=="U")
        count++;

    }
    var vowa="The no of vowels is "+count+ " and  is " + ag;
    alert(vowa);
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    
    btn.onclick = function()
     {
        modal.style.display = "block";
    }
    span.onclick = function()
     {
        modal.style.display = "none";
    }
    window.onclick = function(event)
     {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }



document.getElementById("txt").innerHTML=vowa;

}
window.onload=function createTable()
   {
    let storedNames = JSON.parse(localStorage.getItem("nameArray"));
    let storedAges = JSON.parse(localStorage.getItem("ageArray"));
    console.log(storedNames);
    let i=0;
    let table=document.getElementById("table2");
    for(i=0;i<storedNames.length;i++)
    {
        console.log("Hello")
        let nextRow=table.insertRow(-1);
         let cel1= nextRow.insertCell(0);
         let cel2= nextRow.insertCell(1);


        cel1.innerHTML=storedNames[i];
        cel2.innerHTML=storedAges[i];
     }
    }