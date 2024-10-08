function getFormvalue() {
   
    let form = document.getElementById("form1");
    
    let firstName = form.elements["fname"].value;
    let lastName = form.elements["lname"].value;

    console.log("First name: " + firstName);
    console.log("Last name:" + lastName);
}

