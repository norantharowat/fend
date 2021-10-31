function checkForURL(inputText) {
   
    console.log("::: Running checkForURL :::", inputText);
    
    const url_pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    
    let isURL = inputText.match(url_pattern) ? true : false;

    return isURL
}

export { checkForURL }
