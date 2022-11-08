
/*function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    const nameValue = formData.get('name');
    const lastNameValue = formData.get('lastname');

    console.log({ nameValue } ,{lastNameValue});
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  */


/*
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log({ formValues });
    
    const formValuesToJson = JSON.stringify(formValues);
    console.log(formValuesToJson);

    return formValuesToJson;
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);

  form.appendChild(formValuesToJson);



  //document.getElementById("userForm").appendChild("formValuesToJson");
*/




//class code-

const formElemnt = document.querySelector("form");
formElemnt.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {};
  data["name"] = formElemnt.name.value;
  data["lastname"] = formElemnt.lastname.value;
  const json = JSON.stringify(data);
  console.log(json);
  document.querySelector("form").textContent = json;
})





