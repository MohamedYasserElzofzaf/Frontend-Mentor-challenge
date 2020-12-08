const form = document.getElementById('form');
// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname'); 
// const email = document.getElementById('email');
// const password = document.getElementById('password');

form.addEventListener('submit' , ev=>{
    ev.preventDefault();
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value; 
    const email = form['email'].value;
    const password = form['password'].value;
    
    if(firstname === ''){
        addErrorTo('firstname' , 'First Name is required');
    }
    if(lastname === ''){
        addErrorTo('lastname' , 'Last Name is required');
    }
    if(email === ''){
        addErrorTo('email' , 'Email is required');
    }
    if(isValid(email)){
        addErrorTo('email' , 'Email is not valid');
    }
    if(password === ''){
        addErrorTo('password' , 'Password is required');
    }        
})
function addErrorTo(field , message){
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;    
}
function removeErrorFrom(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}
function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}