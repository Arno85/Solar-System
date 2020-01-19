document.addEventListener("DOMContentLoaded", function(){

    var baseRevolution = 20,
        mercuryOrbit = MorphSVGPlugin.pathDataToBezier("#mercury-orbit", { align:"#mercury-planet" }),
        venusOrbit = MorphSVGPlugin.pathDataToBezier("#venus-orbit", { align:"#venus-planet" }),
        earthOrbit = MorphSVGPlugin.pathDataToBezier("#earth-orbit", { align:"#earth-planet" })

    //offest the balloon by hafl width and half height to make it appear centered on path
    TweenMax.set("#mercury-planet", {xPercent:-50, yPercent:-50});
    var tweenMercury = TweenMax.to("#mercury-planet", baseRevolution, { bezier: {values:mercuryOrbit, type:"cubic"}, ease: Linear.easeNone, repeat:-1 });

    TweenMax.set("#venus-planet", {xPercent:-50, yPercent:-50});
    var tweenVenus = TweenMax.to("#venus-planet", baseRevolution + 1, { bezier: {values:venusOrbit, type:"cubic"}, ease: Linear.easeNone, repeat:-1 });

    TweenMax.set("#earth-planet", {xPercent:-50, yPercent:-50});
    var tweenEarth = TweenMax.to("#earth-planet", baseRevolution + 2, { bezier: {values:earthOrbit, type:"cubic"}, ease: Linear.easeNone, repeat:-1 });


    var modalInfo = document.querySelector('.modal-info');

    modalInfo.addEventListener('click', function() {
        toggleTween();
        modalInfo.classList.toggle('hidden');
    });

    document.querySelectorAll('.planet').forEach(function(item) {
        item.addEventListener('click', function() {
            toggleTween();
            modalInfo.classList.toggle('hidden');
        })
    });

    function toggleTween() {
        tweenMercury.paused() ? tweenMercury.play() : tweenMercury.pause();
        tweenVenus.paused() ? tweenVenus.play() : tweenVenus.pause();
        tweenEarth.paused() ? tweenEarth.play() : tweenEarth.pause();
    }
});
