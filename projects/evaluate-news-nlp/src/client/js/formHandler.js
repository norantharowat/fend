function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('URL').value
    let isURL = Client.checkForURL(formText)

    if(isURL){

        console.log("::: Form Submitted :::")
    
    
        fetch('http://localhost:8081/analyze' , 
        {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({URL : formText})
        })
        .then(res => res.json())
        .then(function(res) {
            
            // document.getElementById('results').innerHTML = res.message
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
            document.getElementById('model').innerHTML = 'Model: '+ res.model ;
            document.getElementById('score-tag').innerHTML = 'Score_tag: '+ res.score_tag ;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        }).catch(e => console.log(e))
    }else{
        alert("Please Enter a Valid URL")
    }

   


}


export { handleSubmit }
