let count = 0;

let countText = document.getElementById("count");
let countBtn = document.getElementById("countBtn");
let resetBtn = document.getElementById("resetBtn");
let image = document.getElementById("tasbeehImage");
let zikrText = document.getElementById("zikrText");
let sound = document.getElementById("clickSound");

countBtn.addEventListener("click", function () {

    count++;

    countText.innerText = count;

    // Play Sound
    sound.currentTime = 0;
    sound.play();

    // Image & Zikr Change
    if(count <= 33){

        image.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop";
        zikrText.innerText = "SubhanAllah";

    }
    else if(count <= 66){

        image.src = "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop";
        zikrText.innerText = "Alhamdulillah";

    }
    else{

        image.src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop";
        zikrText.innerText = "Allahu Akbar";

    }

});

resetBtn.addEventListener("click", function () {

    count = 0;

    countText.innerText = count;

    image.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop";

    zikrText.innerText = "SubhanAllah";

});