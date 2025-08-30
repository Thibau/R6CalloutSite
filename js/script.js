import mapData from "./seedData.js";

let currentCallout = null;
let currentMap = null;


console.log('available maps:', Object.keys(mapData));
console.log('Bank callouts:', mapData.bank.callouts.length);

//#region DOMContentLoaded function
document.addEventListener('DOMContentLoaded', function() {
    const mapSelect = document.getElementById('mapSelect');
    const mapImage = document.getElementById('mapImage');

    for( const mapName in mapData) {
        const option = document.createElement('option');
        option.value = mapName;
        option.textContent = mapData[mapName].name;
        mapSelect.appendChild(option);
    };

 

});
//#endregion

//#region StartGame Function

function startGame(mapName) {
    console.log('Starting game with: ', mapName);
    showRandomCallout(mapName);
};

//#endregion


//#region showRandomCallout Function

function showRandomCallout(mapName) {
    const callouts = mapData[mapName].callouts;
    const randomCallout = callouts[Math.floor(Math.random() * callouts.length)];

    const mapImage = document.getElementById('mapImage');
    
    console.log('Loading callout:', randomCallout.name);
    console.log('Image path:', randomCallout.image);
    
    let imagePathUpdated = randomCallout.image;
    mapImage.src = imagePathUpdated.substring(3);
    mapImage.style.display = 'block';
    
    mapImage.onerror = function() {
        console.error('FAILED TO LOAD:', randomCallout.name, '|', randomCallout.image);
    };
    
    mapImage.onload = function() {
        console.log('SUCCESS:', randomCallout.name);
    };

    document.getElementById('answerSection').style.display = 'block';
    document.getElementById('mapContainer').style.display = 'flex';
    currentCallout = randomCallout;
}

//#endregion

//#region Test if all the images are loaded correctly or not
function testAllImages() {
    const failedImages = [];
    let totalImages = 0;
    
    // Loop through all maps
    for (const mapName in mapData) {
        const map = mapData[mapName];
        console.log(`Testing ${map.name} (${map.callouts.length} callouts)...`);
        
        map.callouts.forEach((callout) => {
            totalImages++;
            const img = new Image();
            img.onload = () => console.log(`✓ ${callout.name} (${mapName})`);
            img.onerror = () => {
                console.error(`✗ ${callout.name} (${mapName}): ${callout.image}`);
                failedImages.push({
                    map: mapName,
                    callout: callout
                });
            };
            img.src = callout.image;
        });
    }
    
    setTimeout(() => {
        console.log(`Tested ${totalImages} total images across ${Object.keys(mapData).length} maps`);
        if (failedImages.length > 0) {
            console.log(`Found ${failedImages.length} failed images:`, failedImages);
        } else {
            console.log('All images loaded successfully!');
        }
    }, 3000);
}
window.testAllImages = testAllImages;
//#endregion

//#region Startbutton
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', function() {
    const selectedMap = mapSelect.value
    if( selectedMap && mapData[selectedMap]){
        currentMap = selectedMap;
        startGame(selectedMap);
    };
})
//#endregion


//#region Submit button

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
    let callout = document.getElementById('calloutInput').value;
    console.log('Testing', callout);
    var score = parseInt(document.getElementById('correctScore').innerHTML);
    console.log(score)
    console.log(callout, "+", currentCallout.name)

    if(checkAnswer(callout, currentCallout.name)){
        score++;
        console.log(score)
        document.getElementById('correctScore').innerHTML = score;
        ShowCorrectOverlay("Correct!");
        setTimeout(() => {
            showRandomCallout(currentMap);
        }, 500)
        document.getElementById('calloutInput').value = "";
        
    }
    else{
        console.log("Else")
        ShowCorrectOverlay("Incorrect noob!");
    }

    var total = parseInt(document.getElementById('totalScore').innerHTML);
    total++;
    document.getElementById('totalScore').innerHTML = total;
    
})

//#endregion

//#region Skip button

const skipBtn = document.getElementById('skipBtn');
skipBtn.addEventListener('click', function() {
    document.getElementById('calloutInput').value = "";

    var total = parseInt(document.getElementById('totalScore').innerHTML);
    total++;
    document.getElementById('totalScore').innerHTML = total;


    ShowCorrectOverlay("The correct callout was: " + currentCallout.name);

    setTimeout(() => {
        showRandomCallout(currentMap);
    }, 1500)


})

//#endregion

//#region checkAnswer

function checkAnswer(userInput, correctAnswer) {
    const answer = userInput.toLowerCase().trim();
    const correct = correctAnswer.toLowerCase().trim();
    
    // Exact match
    if (answer === correct) return true;
    
    // Remove common words/characters that might vary
    const cleanAnswer = answer.replace(/[-\s]/g, '');
    const cleanCorrect = correct.replace(/[-\s]/g, '');
    
    return cleanAnswer === cleanCorrect;
}

//#endregion

//#region ShowCorrectOverlay
function ShowCorrectOverlay(message){
    const overlay = document.createElement('div');
    overlay.innerText = message;
    overlay.style.position = 'fixed';
    overlay.style.top = '50%';
    overlay.style.left = '50%';
    overlay.style.transform = 'translate(-50%, -50%)';
    overlay.style.background = 'rgba(0, 0, 0, 0.7)';
    overlay.style.color = 'white';
    overlay.style.fontSize = '2rem';
    overlay.style.padding = '20px 40px';
    overlay.style.borderRadius = '10px';
    overlay.style.zIndex = '9999';
    overlay.style.textAlign = 'center';

    document.body.appendChild(overlay);

    if( message.length < 20){
        setTimeout(() => {
            overlay.remove();
        }, 500);
    }
    else {
        setTimeout(() => {
            overlay.remove();
        }, 1500);
    }

}
//#endregion


