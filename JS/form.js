console.clear(); 

//mask phone number
  var phoneVar = document.querySelector('#phone');
  
  if (phoneVar) {
  
      phoneVar.addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      });
  
  }
//mask phone number


////show/hide///////////
var dropDownChoicesVar = document.querySelector('#dropdown-choices');

if (dropDownChoicesVar) {

  dropDownChoicesVar.addEventListener('change', checkOther);

  function checkOther() {

    var dropDownChoices = document.getElementById('dropdown-choices').value;
    var custom = document.getElementById('custom');

    if (dropDownChoices === 'CUSTOM') {   
      custom.style.display = 'block'; 
      custom.required = true;
      custom.disabled = false;
    }
    else {
      custom.style.display = 'none';
      custom.required = false;
      custom.disabled = true;
      custom.value = '';
    }

  }
  
}
////show/hide///////////



///////////////checkbox///////////////
var checkBoxVar = document.querySelector('#morning');  

if (checkBoxVar) {
  
  //just the button variable
  let submit = document.getElementById("submit");
  submit.addEventListener("click", chckcheckBox);

  function chckcheckBox() {
    
    var checkBoxFieldChecked = document.querySelectorAll(".checkBox:checked"); // get the ones checked
      var checkBoxField = document.querySelectorAll(".checkBox");
    
      /*change to checkBoxField and add .value*/
      for (var myCounter = 0; myCounter < checkBoxFieldChecked.length; myCounter++) {
        //for each checkbox that is checked, the counter is no longer zero
      }

      //check the counter
      if (myCounter < 1) {
        //alert('test');

        alert("At leat one item must be checked from the checkboxes");
        for (var checkBoxFieldCounter = 0; checkBoxFieldCounter < checkBoxField.length; checkBoxFieldCounter++) {     
          checkBoxField[checkBoxFieldCounter].required = true; //make both required  
        }

      }
      else {

        for (var checkBoxFieldCounter = 0; checkBoxFieldCounter < checkBoxField.length; checkBoxFieldCounter++) {     
          checkBoxField[checkBoxFieldCounter].required = false;  //make both not required
        }

      }
    }
  
}
//////////////////////checkbox//////////////////////////////






// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()