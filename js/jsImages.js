   // define images
   var images = [
       "images/B1TTuIdeaInicialBase01.svg",
       "images/B1TTuIdeaInicialBase02.svg",
       "images/B1TTuIdeaInicialBase03.svg",
       "images/B1TTuIdeaInicialBase04.svg",
       "images/B1TTuIdeaInicialBase05.svg",
       "images/B1TTuIdeaInicialBase06.svg",
       "images/B1TTuIdeaInicialBase07.svg",
       "images/B1TTuIdeaInicialBase08.svg",
       "images/B1TTuIdeaInicialBase09.svg",
       "images/B1TTuIdeaInicialBase10.svg",
       "images/B1TTuIdeaInicialBase11.svg",
       "images/B1TTuIdeaInicialBase12.svg",
       "images/B1TTuIdeaInicialBase13.svg"
   ];
   // TweenMax can tween any property of any object. We use this object to cycle through the array
   var obj = {
       curImg: 0
   };
   // create tween
   var tween = TweenMax.to(obj, 0.5, {
       curImg: images.length - 1, // animate propery curImg to number of images
       roundProps: "curImg", // only integers so it can be used as an array index
       repeat: 1, // repeat 3 times
       immediateRender: true, // load first image automatically
       ease: Linear.easeNone, // show every image the same ammount of time
       onUpdate: function() {
           $("#myimg").attr("src", images[obj.curImg]); // set the image source
       }
   });

   // define images
   var imagesBusiness = [
       "images/B1tLevitador01.svg",
       "images/B1tLevitador02.svg",
       "images/B1tLevitador03.svg",
       "images/B1tLevitador04.svg",
       "images/B1tLevitador05.svg",
       "images/B1tLevitador06.svg",
       "images/B1tLevitador07.svg",
       "images/B1tLevitador08.svg",
       "images/B1tLevitador09.svg",
       "images/B1tLevitador10.svg"
   ];
   // TweenMax can tween any property of any object. We use this object to cycle through the array
   var objBusiness = {
       curImg: 0
   };
   // create tween
   var tweenBussiness = TweenMax.to(objBusiness, 0.5, {
       curImg: imagesBusiness.length - 1, // animate propery curImg to number of images
       roundProps: "curImg", // only integers so it can be used as an array index
       repeat: 1, // repeat 3 times
       immediateRender: true, // load first image automatically
       ease: Linear.easeNone, // show every image the same ammount of time
       onUpdate: function() {
           $("#imgServicios").attr("src", imagesBusiness[objBusiness.curImg]); // set the image source
       }
   });

   // define images
   var imagesTrans = [
       "images/B1tTranformadorluts00.svg",
       "images/B1tTranformadorluts01.svg",
       "images/B1tTranformadorluts02.svg",
       "images/B1tTranformadorluts03.svg",
       "images/B1tTranformadorluts04.svg",
       "images/B1tTranformadorluts05.svg",
       "images/B1tTranformadorluts06.svg",
       "images/B1tTranformadorluts07.svg",
       "images/B1tTranformadorluts08.svg",
       "images/B1tTranformadorluts09.svg",
       "images/B1tTranformadorluts10.svg",
       "images/B1tTranformadorluts11.svg",
       "images/B1tTranformadorluts12.svg",
       "images/B1tTranformadorluts13.svg",
       "images/B1tTranformadorluts14.svg",
       "images/B1tTranformadorluts15.svg"
   ];
   // TweenMax can tween any property of any object. We use this object to cycle through the array
   var objTrans = {
       curImg: 0
   };
   // create tween
   var tweenTrans = TweenMax.to(objTrans, 0.5, {
       curImg: imagesTrans.length - 1, // animate propery curImg to number of images
       roundProps: "curImg", // only integers so it can be used as an array index
       repeat: 1, // repeat 3 times
       immediateRender: true, // load first image automatically
       ease: Linear.easeNone, // show every image the same ammount of time
       onUpdate: function() {
           $("#imgTransformador").attr("src", imagesTrans[objTrans.curImg]); // set the image source
       }
   });

   // define images
   var imagesDiamond = [
       "images/B1tDiamante00.svg",
       "images/B1tDiamante01.svg",
       "images/B1tDiamante02.svg",
       "images/B1tDiamante03.svg",
       "images/B1tDiamante04.svg",
       "images/B1tDiamante05.svg",
       "images/B1tDiamante06.svg",
       "images/B1tDiamante07.svg",
       "images/B1tDiamante08.svg",
       "images/B1tDiamante09.svg",
       "images/B1tDiamante10.svg",
       "images/B1tDiamante11.svg",
       "images/B1tDiamante12.svg"
   ];
   // TweenMax can tween any property of any object. We use this object to cycle through the array
   var objDiamond = {
       curImg: 0
   };
   // create tween
   var tweenDiamond = TweenMax.to(objDiamond, 0.5, {
       curImg: imagesDiamond.length - 1, // animate propery curImg to number of images
       roundProps: "curImg", // only integers so it can be used as an array index
       repeat: 1, // repeat 3 times
       immediateRender: true, // load first image automatically
       ease: Linear.easeNone, // show every image the same ammount of time
       onUpdate: function() {
           $("#imgDiamond").attr("src", imagesDiamond[objDiamond.curImg]); // set the image source
       }
   });


   //    // define images
   //    var imagesTubo = [
   //     "images/B1tDiamante00.svg",
   //     "images/B1tDiamante01.svg",
   //     "images/B1tDiamante02.svg",
   //     "images/B1tDiamante03.svg",
   //     "images/B1tDiamante04.svg",
   //     "images/B1tDiamante05.svg",
   //     "images/B1tDiamante06.svg",
   //     "images/B1tDiamante07.svg",
   //     "images/B1tDiamante08.svg",
   //     "images/B1tDiamante09.svg",
   //     "images/B1tDiamante10.svg",
   //     "images/B1tDiamante11.svg",
   //     "images/B1tDiamante12.svg"
   // ];
   // // TweenMax can tween any property of any object. We use this object to cycle through the array
   // var objDiamond = {
   //     curImg: 0
   // };
   // // create tween
   // var tweenDiamond = TweenMax.to(objDiamond, 0.5, {
   //     curImg: imagesDiamond.length - 1, // animate propery curImg to number of images
   //     roundProps: "curImg", // only integers so it can be used as an array index
   //     repeat: 1, // repeat 3 times
   //     immediateRender: true, // load first image automatically
   //     ease: Linear.easeNone, // show every image the same ammount of time
   //     onUpdate: function() {
   //         $("#imgDiamond").attr("src", imagesDiamond[objDiamond.curImg]); // set the image source
   //     }
   // });