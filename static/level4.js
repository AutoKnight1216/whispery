const id = "6597877862";
const form = document.getElementById('level4Form');

function lvl4Check(){
    let formData = new FormData(form);
    let input = String((formData.get('level4')));
    input = input.replaceAll(' ', '');
    if (input === id){
        window.location.href = "/jdkdjkd/nig";
    }else{
        console.log("FAILURE.")
        return;
    }
}

// can someone explain why getting form data causes html to look for a name attribute but not a id attribute????
