function makePostRequest() {

    const dataToSend = {
        name: "Esther",  
        email: "akinfetolulope@gmail.com"
    };

    fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dataToSend) 
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("status").textContent = "POST request was successful!";
            document.body.style.backgroundColor = "green";
        } else {
            document.getElementById("status").textContent = "POST request failed! Please try again.";
            document.body.style.backgroundColor = "red";
        }
    })
    .catch(error => {
        document.getElementById("status").textContent = "POST request failed due to network issues!";
        document.body.style.backgroundColor = "red";
    });
}

makePostRequest();