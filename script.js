
// Interactive fish movement with mouse hover
document.querySelectorAll('.fish').forEach(fish => {
    fish.addEventListener('mouseover', function() {
        fish.style.animationPlayState = 'paused';
    });
    fish.addEventListener('mouseout', function() {
        fish.style.animationPlayState = 'running';
    });
});
