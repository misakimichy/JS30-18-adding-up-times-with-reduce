(function(){
    const timeNodes = [...document.querySelectorAll('[data-time]')];
    let seconds = timeNodes.reduce((total, current, index) => {
        let [minutes, seconds] =  current.dataset.time.split(':').map(parseFloat);
        return total += minutes * 60 + seconds;
    }, 0);

    // Convert this into hh:mm:ss format
    const hour = seconds / 3600 <= 1 ? 0 : Math.floor(seconds / 3600);
    const min = Math.floor((seconds % 3600) / 60);
    const sec = (seconds % 3600) % 60;
    
    const showTotal = `<span>${hour}:${min}:${sec}</span>`;
    document.querySelector('#total').innerHTML = `Total length of those videos: ${showTotal}`;
}());