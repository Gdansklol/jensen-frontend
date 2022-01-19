const cookieStorage = {
    getItem: (item) =>{
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc,[key,value]) =>({...acc,[key.trim()]: value}));
            return cookies[item]
    },
    setItem:(key, value)=>{
        document.cookie = `${key}=${value}`;
    },
};

const storageType = localStorage;
const consentPropertyName = 'jdc_consent';

const shouldShowPopup = () => ! storageType.getItem(consentPropertyName);
const saveToStorage =()=> storageType.setItem(consentPropertyName,true);

window.onload = ()=>{
    if(shouldShowPopup()){
        const consent = confirm('Agree to the terms and conditions of the site?');
        if(consent){
            saveToStorage();
        }
    }
}

document.addEventListener("submit" , (event)=>{
    console.log("Validating")
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/authorize");
    //request.send(new FormData(formElement));
    console.log("Validated")

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(`user=${user}&password=${password}`);

    event.preventDefault()
})