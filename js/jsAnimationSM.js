// init controller
var controller = new ScrollMagic.Controller();

// Scene Top
var sceneTop = new ScrollMagic.Scene({
        triggerElement: "#triggerTop",
        duration: 600,
        offset: -72
    })
    .addIndicators()
    .setTween(tween)
    .addTo(controller);
console.log(controller);
// build Business
var sceneBussines = new ScrollMagic.Scene({
        triggerElement: "#triggerBusiness",
        duration: 40,
        offset: 300
    })
    .setTween(tweenBussiness)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build Transformacion
var sceneTrans = new ScrollMagic.Scene({
        triggerElement: "#triggerTrans",
        duration: 300,
        offset: 40
    })
    .setTween(tweenTrans)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
var sceneDiamond = new ScrollMagic.Scene({
        triggerElement: "#triggerDiamond",
        duration: 80,
        offset: 150 //180
    })
    .setTween(tweenDiamond)
    //  .addIndicators() // add indicators (requires plugin)
    .addTo(controller);