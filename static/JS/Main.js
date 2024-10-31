const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volume = document.querySelector(".volume-slider input")
const keyCheck = document.querySelector(".keys-check input")

let audio = new Audio("./static/audio/a.wav")
let mapedKeys = []

const playTune = (key) => {
    audio.src = `static/audio/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
});

document.addEventListener("keydown", (e) =>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key)
    }
})

const handleVolume = (e) =>{
    audio.volume = e.target.value
}
const showKeys = (e) =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volume.addEventListener("input", handleVolume)
keyCheck.addEventListener("click", showKeys)
