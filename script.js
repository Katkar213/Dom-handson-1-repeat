
// Q.4
let d=document.querySelectorAll("h1");

d[0].addEventListener("click",()=>{
    d[0].textContent="Hello World";
})

// Q.5

function replace(){
    console.log("hii");
    d[1].textContent="Welcome to elevation academy";
}

// Q.6
d[2].addEventListener("click",()=>{
    d[2].style.color="red";
    d[2].setAttribute("id","heading");
})

// Q.7
let flex=document.getElementsByClassName("div");
let switchOn=false;
function directionChange(){
  if(switchOn===false){
    flex[0].style.flexDirection="column";
    switchOn=true;
  }
  else{
    flex[0].style.flexDirection="row";
    switchOn=false;
  }

}



// Q.9
function clock(){
let time=new Date().toLocaleTimeString();
d[3].innerText=`${time}`;
}

setInterval(()=>{
    clock();
},1000)
// let min=time.getHours();
// let sec=time.getSeconds();

