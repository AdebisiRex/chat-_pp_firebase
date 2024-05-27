const clickSignUp = ()=> {
    document.getElementById("modalHead").innerText = "Sign Up"
    document.getElementById("signUpForm").style.display = 'block'
    document.getElementById("signInForm").style.display = 'none'
}

const clickSignIn=()=>{
    document.getElementById("modalHead").innerText = "Sign In"
    document.getElementById("signUpForm").style.display = 'none'
    document.getElementById("signInForm").style.display = 'block'

}

const popSignIn =()=>{

}
