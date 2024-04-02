const pipeButton = document.getElementById("pipe");
let titleText = document.getElementById("title");
const titleAlts = ["Yes it will", "Yes it will", "Yes it will", "Yes it will", "YES IT WILL!", "YES IT WILL!", "YES IT WILL!", "YES IT WILL!", "YES IT WILL!", "okay, now you're just doing too much..."];

let i = 0
function playPipe(){
    let pipeAudio = new Audio("pipe.mp3");
    pipeAudio.volume = 0.5;
    pipeAudio.play();
    console.debug("PIPE!");
    if(i<titleAlts.length - 1){
        titleText.innerHTML = titleAlts[i];
    } else titleText.innerHTML = titleAlts[titleAlts.length - 1];
    if(i >= 100){
        titleText.innerHTML = "WHY ARE YOU STILL CLICKING!?!?!";
    }
    if(i >= 125){
        titleText.innerHTML = "im leaving...";
    }
    if(i >= 150){
        titleText.innerHTML = "no, seriously, i am...";
    }
    if(i === 175){
        titleText.innerHTML = "if you press that 1 more time!";
    }
    if(i >= 176){
        titleText.innerHTML = "...";
    }
    if(i === 200){
        close()
    }
    i++;
}
pipeButton.addEventListener("click", playPipe);

// pipeButton.onclick(playPipe)