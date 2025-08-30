import mapData from "./seedData.js";

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

    mapSelect.addEventListener('change', function() {
        const selectedMap = this.value;
        if( selectedMap && mapData[selectedMap]) {
            startGame(selectedMap);
        };
    });

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
    
    mapImage.src = randomCallout.image;
    mapImage.style.display = 'block';
    
    mapImage.onerror = function() {
        console.error('FAILED TO LOAD:', randomCallout.name, '|', randomCallout.image);
    };
    
    mapImage.onload = function() {
        console.log('SUCCESS:', randomCallout.name);
    };

    document.getElementById('answerSection').style.display = 'block';
    document.getElementById('mapContainer').style.display = 'flex';
    window.currentCallout = randomCallout;
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
