/* visible password feature */
var span = document.querySelector('.span'); 
span.addEventListener('click', ()=>{
    let password = document.querySelector('.password'); 
    let visible = document.querySelector('.fa-eye'); 
    let invisible = document.querySelector('.fa-eye-slash'); 

    if(password.type === 'password'){
        password.type = 'text'
        visible.style.display = 'block'; 
        invisible.style.display = 'none'
    }else{
        password.type = 'password'
        visible.style.display = 'none'; 
        invisible.style.display = 'block'
    }
})

/* language switch */
let english = document.querySelector('.english'); 
english.addEventListener('click', ()=>{
    const passsword = document.querySelector('.password');
    passsword.placeholder = 'Enter your password'

    const email = document.querySelector('.email'); 
    email.placeholder = 'Enter your email';

    const confirm = document.querySelector('.confirm');
    confirm.placeholder = 'Confirm your password'

    const userName = document.querySelector('.username'); 
    userName.placeholder = `Enter your user name`

    const newAccount = document.querySelector('#newAccount'); 
    newAccount.value = 'Create a new account'; 

    
})


let français = document.querySelector('.français'); 
français.addEventListener('click', ()=>{
    const passsword = document.querySelector('.password');
    passsword.placeholder = 'Mot de passe'

    const email = document.querySelector('.email'); 
    email.placeholder = 'Adresse mail';

    const confirm = document.querySelector('.confirm');
    confirm.placeholder = 'Confirmer le mot de passe';

    const userName = document.querySelector('.username'); 
    userName.placeholder = `Nom d'utilisateur`

    const newAccount = document.querySelector('#newAccount'); 
    newAccount.value = 'Créer un compte'; 

})

/* check list feature */
const email = document.querySelector('.email');
email.addEventListener('input', ()=>{
    const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value === ''){
        let check1 = document.querySelector('.check-1'); 
        check1.style.display = 'none'
        email.style.border = '1px solid black'
    }
    else if(email.value.match(regexMail)){
        let check1 = document.querySelector('.check-1'); 
        check1.style.display = 'inline'
        check1.style.color = 'green'
        email.style.border = '1px solid green'
    }else{
        let check1 = document.querySelector('.check-1'); 
        check1.style.display = 'inline'
        check1.style.color = 'red'
        email.style.border = '1px solid red'
    }
})

const userName = document.querySelector('.username');
userName.addEventListener('input', ()=>{
    let regexUserName = /^[a-zA-Z0-9]+$/; 
    if(userName.value === ''){
        let check4 = document.querySelector('.check-4');
        check4.style.display = 'none'
        userName.style.border = '1px solid black'
    }
    else if(userName.value.match(regexUserName)){
        let check4 = document.querySelector('.check-4');
        check4.style.display = 'inline'
        check4.style.color = 'green'
        userName.style.border = '1px solid green'
    }else{
        let check4 = document.querySelector('.check-4');
        check4.style.display = 'inline'
        check4.style.color = 'red'
        userName.style.border = '1px solid red'
    }
})



const passsword = document.querySelector('.password');
passsword.addEventListener('input', ()=>{
    const regexPass =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if(passsword.value === ''){
        let check2 = document.querySelector('.check-2'); 
        check2.style.display = 'none'
        passsword.style.border = '1px solid black'
    }
    else if(passsword.value.match(regexPass)){
        let check2 = document.querySelector('.check-2'); 
        check2.style.display = 'inline'
        check2.style.color = 'green'
        passsword.style.border = '1px solid green'
    }else{
        let check2 = document.querySelector('.check-2'); 
        check2.style.display = 'inline'
        check2.style.color = 'red'
        passsword.style.border = '1px solid red'
    }
})

const confirmPass = document.querySelector('.confirm'); 
confirmPass.addEventListener('input', ()=>{
    const passsword = document.querySelector('.password');
    const regexPass =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

    if(confirmPass.value === ''){
        let check3 = document.querySelector('.check-3'); 
        check3.style.display = 'none'
        confirmPass.style.border = '1px solid black'
    }
    else if(confirmPass.value === passsword.value && passsword.value.match(regexPass)){
        let check3 = document.querySelector('.check-3'); 
        check3.style.display = 'inline'
        check3.style.color = 'green'
        confirmPass.style.border = '1px solid green'
    }else{
        let check3 = document.querySelector('.check-3'); 
        check3.style.display = 'inline'
        check3.style.color = 'red'
        confirmPass.style.border = '1px solid red'
    }
})


/*
let newAccountBtn = document.querySelector('.newAccount'); 
newAccountBtn.addEventListener('submit', (event)=>{
   if(
        confirmPass.value === passsword.value && passsword.value.match(regexPass) &&
        passsword.value.match(regexPass)&&
        userName.value.match(regexUserName)&&
        email.value.match(regexMail)
   ){
        send to the server
   }else{
       event.preventDefault() = do not send it to the server
   }
})
*/

function checkEmail(){
    const email = document.querySelector('.email');
    const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(regexMail)){
        let check1 = document.querySelector('.check-1'); 
        check1.style.display = 'inline'
        check1.style.color = 'green'
        email.style.border = '1px solid green'
    }else{
        let check1 = document.querySelector('.check-1'); 
        check1.style.display = 'inline'
        check1.style.color = 'red'
        email.style.border = '1px solid red'
    }

}

function checkUserName(){
    const userName = document.querySelector('.username');
    let regexUserName = /^[a-zA-Z0-9]+$/; 
    if(userName.value.match(regexUserName)){
        let check4 = document.querySelector('.check-4');
        check4.style.display = 'inline'
        check4.style.color = 'green'
        userName.style.border = '1px solid green'
    }else{
        let check4 = document.querySelector('.check-4');
        check4.style.display = 'inline'
        check4.style.color = 'red'
        userName.style.border = '1px solid red'
    }

}

function checkPassWord(){
    const passsword = document.querySelector('.password');
    const regexPass =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    if(passsword.value.match(regexPass)){
        let check2 = document.querySelector('.check-2'); 
        check2.style.display = 'inline'
        check2.style.color = 'green'
        passsword.style.border = '1px solid green'
    }else{
        let check2 = document.querySelector('.check-2'); 
        check2.style.display = 'inline'
        check2.style.color = 'red'
        passsword.style.border = '1px solid red'
    }

}

function confirmPassword(){
    const passsword = document.querySelector('.password');
    const confirm = document.querySelector('.confirm'); 
    const regexPass =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

    if(confirm.value === passsword.value && passsword.value.match(regexPass)){
        let check3 = document.querySelector('.check-3'); 
        check3.style.display = 'inline'
        check3.style.color = 'green'
        confirm.style.border = '1px solid green'
    }else{
        let check3 = document.querySelector('.check-3'); 
        check3.style.display = 'inline'
        check3.style.color = 'red'
        confirm.style.border = '1px solid red'
    }
}