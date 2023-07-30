const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const address = document.getElementById("address");
const select = document.getElementById("select");

form.addEventListener('submit',(e)=>{
   
   if(!validateInputs()){
    e.preventDefault();
   }else{
      window.location.href='/index.html';
   }

})

function validateInputs(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval = cpassword.value.trim();
    const addressval = address.value.trim();
    const selectval = select.value

    console.log(selectval)
    let success=true;

    if(usernameval===''){
        success = false;
        setError(username,'*username is required')
    }
    else
        setSuccess(username)

        if(addressval===''){
            success = false;
            setError(address,'*username is required')
        }
        else
            setSuccess(address)

            if(selectval==='select'){
                success = false;
                setError(select,'*required')
            }
            else
                setSuccess(select)
        
        if(passwordval.length<8){
            success = false;
            setError(password,'*password should be 8 Character')
        }
        else if(passwordval===''){
           success = false;    
             setError(password,'*passwordv is required') }
        else
            setSuccess(password)


           
            if(cpasswordval===''){
                success = false;
                setError(cpassword,'*type password')
            }
            else if(cpasswordval!==passwordval){
                success = false;
                setError(cpassword,'*password is not match')
            }
            else
                setSuccess(cpassword)


                if(emailval===''){
                    success = false;
                    setError(email,'*email is required')
                }
                else if(!validateEmail(emailval)){
                    success = false;
                    setError(email,'*required')
                }
                else
                    setSuccess(email)

                return success
        }

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
    
}

function setSuccess(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')    
}

const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    
}