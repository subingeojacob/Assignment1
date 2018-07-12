let nameArray=[];
let ageArray=[];
let nameInput;
let ageInput;
const nI=document.getElementById("name-input");
const nA=document.getElementById("age-input");
// on click of submit,save to local storage
function submitFunction()
{
    nameInput=nI.value
    ageInput=nA.value
    nameArray.push(nameInput);
    ageArray.push(ageInput);                    
    localStorage.setItem("nameArray",JSON.stringify(nameArray));   
    localStorage.setItem("ageArray",JSON.stringify(ageArray));
    document.getElementById("name-input").value="";  
    document.getElementById("age-input").value="";
}
// on click of insert ,insert to table
 function insertFunction() 
 {
    let name = nameInput;
    let age = ageInput;                  
    let table = document.getElementsByTagName('table')[0];
    let newRow = table.insertRow(table.rows.length/2+1);
    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    cel1.innerHTML = name;
    cel2.innerHTML = age;
    cel3.innerHTML = '<input type="button" value = "check" onClick="Javacsript:checkme(nameInput)">';
  }
//  count number of vowels and check age
function checkme(str)
{
    var alertMessage;
    var countVowel=0;
    var ageTag;
    if(ageInput>18)
    {
        ageTag="adult"
    }
    else 
    {
        ageTag="child";
    }
    for(i=0;i<str.length;i++)
    {
        if(str[i]=="a"||str[i]=="A"||str[i]=="e"||str[i]=="E"||str[i]=="i"||str[i]=="I"||str[i]=="o"||str[i]=="O"||str[i]=="u"||str[i]=="U")
        countVowel++;
    }
    //  give alert
    var alertMessage="The no of vowels is "+countVowel+ " and  is " + ageTag;
    alert(alertMessage);
    // pop up message
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
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
document.getElementById("txt").innerHTML=alertMessage;
}
// on click of next page
window.onload=function createTable()
   {
    let storedNames = JSON.parse(localStorage.getItem("nameArray"));
    let storedAges = JSON.parse(localStorage.getItem("ageArray"));
    console.log(storedNames);
    let i=0;
    let table=document.getElementById("table2");
    // display data stored in local storage
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