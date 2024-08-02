
let nums = '';
let operator = '';
function buttonClick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val; 
}

function screenClear(){
    document.getElementById("screen").value=""
}
function operatorClick(op){
   var nums=document.getElementById("screen").value
   var operator=op
   document.getElementById("screen").value=""
}
function equalBtn(){
    var inp=document.getElementById("screen").value
    var res=nums+operator+inp
    var ans=eval(res)
    document.getElementById("screen").value=ans
}