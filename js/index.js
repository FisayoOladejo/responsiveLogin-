
// Adding the js styles 

const form =document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault(); // to automatically prevent page refreshing 

    checkInput(); // this is a user define fuction 
})

function checkInput(){
    //get the Values from the input

    const usernameValue = username.value.trim();  // trim fuction is to remove empty gap or spaces from user input 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim(); 
    const password2Value = password2.value.trim(); 

    //Username Validation
    if(usernameValue === ''){

        setErrorFor(username, 'User name can not be blank!');
    }
    else if(usernameValue.length < 4){
          setErrorFor(username, 'User name must be at least 4 character long!');

    }
    else{
        setSuccessFor(username);
    }

  //Email Validation
    if(emailValue === ''){

      setErrorFor(email, 'Email can not be blank!');
    }
    else{
        setSuccessFor(email);  
    }

    //Password Validation
     if(passwordValue === ''){

      setErrorFor(password, 'Password can not be blank');
    }

    else if(passwordValue.length < 6){
      setErrorFor(password, 'password must be at least  6 character long');
    }

    else{
        setSuccessFor(password);  
    }

   //confrim Password  Validation
   if(password2Value === ''){

    setErrorFor(password2, 'confirm Password can not be blank');
  }

  else if(password2Value !== passwordValue){
    setErrorFor(password2, 'password not the same');
  }
  else{
      setSuccessFor(password2);  
  }
} 
 

function setErrorFor(input, message){ //the input is the username and the message is the string beside it
      const formControl = input.parentElement; // .form-control
      const small = formControl.querySelector('small');
      
      //Add error message inside small
      small.innerText = message;

      //Adding the error class
      formControl.className = 'form-control error';
} 

function setSuccessFor(input){ //the input is the username and the message is the string beside it
  const formControl = input.parentElement; // .form-control
  
  //Adding the Error class
  formControl.className = 'form-control success';
} 






