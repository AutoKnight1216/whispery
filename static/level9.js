function lvl9Check(){
    const form = document.getElementById('level9Form');
    const formData = new FormData(form);
    let input = String(formData.get('level9')).toLowerCase();

    fetch('/check-level9', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input })
    })
    .then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }else{
            console.log("FAILURE.");
        }
    });
}

// can someone explain why getting form data causes html to look for a name attribute but not a id attribute????
