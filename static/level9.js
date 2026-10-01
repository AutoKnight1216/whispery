function lvl9Check(){
    const name = "autoknight"
    const form = document.getElementById('level9Form');
    let formData = new FormData(form);
    let input = String((formData.get('level9')));
    input = input.toLowerCase();
    input = input.replaceAll(' ', '');
    if (input === name){
        window.location.href = "/jdkdjkd/3";
    }else{
        console.log("FAILURE.")
        return;
    }
}

// can someone explain why getting form data causes html to look for a name attribute but not a id attribute????
