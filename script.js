let genBtn = document.getElementById('genBtn');

function randomNum() {
    let low = document.getElementById('low');
    let high = document.getElementById('high');
    let lowValue = Number(low.value);
    let highValue = Number(high.value);

    if (lowValue < 0 || highValue < 0) {
        window.alert("We are all about positive vibes here.  No negative numbers allowed.");
    } else if (lowValue === 0 || highValue === 0) {
        window.alert("Forgetting something? *cough* put in your numbers *cough*");
    } else if (lowValue > highValue) {
        window.alert("Your low number is larger than your high number #SillyGoose");
    } else {
        let num = Math.floor(Math.random() * (highValue - lowValue + 1)) + lowValue;
        document.getElementById('genNum').innerHTML = num;
    }
}

genBtn.addEventListener("click", randomNum);

//my blob animation below:

const tween = KUTE.fromTo(
    '#blob2',
    {path: '#blob2'},
    {path: '#blob1'},
    {repeat: 999, duration: 3000, yoyo: true}
)

tween.start()

/* Tried to add a middle path, but could not figure it out.  Below was my last attempt to fix it.
const tween = 
KUTE.from('#blob2', {path: '#blob2'});
    CUTE.to('#blob1', {path: '#blob1'});
        QUTE.to('#blob3', {path: '#blob3'}); 
    ({repeat: 999, duration: 3000, yoyo: true});


tween.start()

*/