

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
    setInterval(function() { app.autoChangePosition(); }, 2000);
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}

App.prototype.autoChangePosition = function() {
    const slickList = document.querySelector('.slick-list');
    const track = slickList.querySelector('#track');
    const slick = track.querySelectorAll('.slick');
    const slickWidth = slick[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;
    let leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    if(leftPosition < (trackWidth - listWidth - slickWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else {
        track.style.left = 0;
    }
}