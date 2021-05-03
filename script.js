function validate(){
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
   var password=document.body.querySelector(".password").value;
  
  if(username==="cool"&&password==="password"){
     window.location.replace("https://cynsulli.github.io/Final_Grade_View/")
  }else{
    if (username==="cool"){
      messEle.innerHTML="Incorrect Password"
    }
    else{messEle.innerHTML="Incorrect Username"}
  }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})