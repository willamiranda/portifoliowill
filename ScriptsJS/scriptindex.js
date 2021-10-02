const root = document.getElementById('root')
const intro = document.getElementById('intro')
const video = document.getElementById('video')
const title = document.getElementById('title')
const subTitle = document.getElementById('title2')

const controller = new ScrollMagic.Controller()

const scene1 = new ScrollMagic.Scene({
        triggerElement: intro,
        triggerHook: 0,
        duration: 7500,
    })
    .setPin(intro)
    .addTo(controller)
scene1.on('update', (obj) => {
    const position = obj.scrollPos;
    video.currentTime = (position / 1000) - 2;
})
const introVideoAnimation = TweenMax.fromTo(video, 2, { opacity: 0 }, { opacity: 1 });
const scene2 = new ScrollMagic.Scene({
        triggerElement: intro,
        triggerHook: 0,
        duration: 2000,
        offset: 2000,
    })
    .setTween(introVideoAnimation)
    .addTo(controller)
const introTxtAnimation = TweenMax.fromTo(title, 2, { opacity: 1 }, { opacity: 0 });
const scene3 = new ScrollMagic.Scene({
        triggerElement: intro,
        triggerHook: 0,
        duration: 2000,

    })
    .setTween(introTxtAnimation)
    .addTo(controller)
const introSubTxtAnimation = TweenMax.fromTo(subTitle, 2, { opacity: 1 }, { opacity: 0 });
const scene4 = new ScrollMagic.Scene({
        triggerElement: intro,
        triggerHook: 0,
        duration: 2000,

    })
    .setTween(introSubTxtAnimation)
    .addTo(controller)