// form validation

const form = document.getElementById('form');
const formCtrl_Name = document.getElementById('form-control-1');
const formCtrl_Email = document.getElementById('form-control-2');
const formCtrl_Message = document.getElementById('form-control-3');


form.addEventListener('submit', e => {
	e.preventDefault();
	console.log('pressed');
	validate();
});


function validate() {
 if (form.Name.value.trim() == "" || form.Name.value.length <= 3) {
     formCtrl_Name.classList.add('error')
     form.Name.focus();
     return false;
 }
    if (form.Email.value.trim() == "" ||
    form.Email.value.length < 15 ||
    !form.Email.value.includes("com") ||
    !form.Email.value.includes("@") ||
    !form.Email.value.includes("gmail") ){
        formCtrl_Email.classList.add('error')
        form.Email.focus();
     return false;
 }
    if (form.Msg.value.trim() == "") {
        formCtrl_Message.classList.add('error')
     form.Msg.focus();
     return false;
 }

formCtrl_Name.classList.remove('error')
formCtrl_Email.classList.remove('error')
formCtrl_Message.classList.remove('error')
form.Name.blur();
form.Email.blur();
form.Msg.blur();

alert('your mesage is sent successfuly , we will replay ASAP ✅')
    return true;

}