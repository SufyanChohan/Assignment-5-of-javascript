function divide(){
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    let result = (inp1/inp2);
    if(result=== Infinity){
        console.log("Math Error");
        document.getElementById("para").innerText="Math Error";
    }
    else{
        console.log(result);
        document.getElementById("para").innerHTML=result;
    }
    
}