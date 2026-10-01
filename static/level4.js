function lvl4Check(){
    const id = "6597877862"
    const form = document.getElementById('level4Form');
    let formData = new FormData(form);
    let input = String((formData.get('level4')));
    console.log(input)
    input = input.replaceAll(' ', '');
    if (input === id){
        window.location.href = "/jdkdjkd/2";
    }else{
        console.log("FAILURE.")
        return;
    }
}

// can someone explain why getting form data causes html to look for a name attribute but not a id attribute????
