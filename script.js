function btnpress(x){
    document.getElementById("t1").value+=x;
   
}
function cleardata(){
    document.getElementById("t1").value=" ";
}
function backrow(){
    var a=document.getElementById("t1").value;
    var len=a.length;
    var b=a.substr(0,len-1)
    document.getElementById("t1").value=b;
}
function Result(){
    var a=document.getElementById("t1").value;
    var b=eval(a);
    document.getElementById("t1").value=b;
}