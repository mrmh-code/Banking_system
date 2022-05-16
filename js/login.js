document.getElementById('login-submit').addEventListener('click',function(){
     const inputFiled=document.getElementById('user-email');
     const userEmail=inputFiled.value;

     const inputFiledPass=document.getElementById('user-pass');
     const userPass=inputFiledPass.value;

     if(userPass=='123456' && userEmail=='mehasan.swe@gmail.com'){
         window.location.href='banking.html';
     } 

})

//handel deposit button


