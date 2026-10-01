const text = document.getElementById('fate')

text.innerHTML = "thinking..."

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function FATE(){
    let fatetext = ""
    console.log("thinking")
    await sleep(5000);
    if (window.FirstCheck && window.SecondCheck && window.ThirdCheck){
        console.log("WORTHY")
        fatetext = "i trust you."
    }else{
        console.log("NOT WORTHY")
        fatetext = "i dont trust you."
    }
    return fatetext;
}

const result = await FATE();

text.innerHTML = result

await sleep(3000);

if (text.innerHTML == "i trust you."){
    window.location.href = '/husehfisuhfisf/wdjwiadiaudhuawdhuiahduid/adhadhiudhwuidhuf/GG';
}else if (text.innerHTML == "i dont trust you."){
    window.location.replace('/')
}