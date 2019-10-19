(function(){
    const timeNodes = [...document.querySelectorAll('[data-time]')];
    const seconds = timeNodes
        .map(node => node.dataset.time)
        .map(timeCode => {
            const [minutes, seconds] = timeCode.split(':').map(parseFloat);
            return (minutes * 60) + seconds;
        }).reduce((total, videoSeconds) => total + videoSeconds);
    console.log(seconds);
}());