(function(){
    const timeNodes = [...document.querySelectorAll('[data-time]')];
    const seconds = timeNodes
        .map(node => node.dataset.time)
        .map(timeCode => {
            const [minutes, seconds] = timeCode.split(':').map(parseFloat);
            return (minutes * 60) + seconds;
        }).reduce((total, videoSeconds) => total + videoSeconds);
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
    console.log(hours, minutes, secondsLeft);
}());