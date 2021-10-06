const root = document.getElementById('root')
const intro = document.getElementById('intro')
const video = document.getElementById('video')
const title = document.getElementById('title')
const subTitle = document.getElementById('title2')

const aboutS = document.getElementById('about')
const aboutTitle = aboutS.querySelector('h1')

const project = document.getElementById('project')

const contact = document.getElementById('contact')
const controller = new ScrollMagic.Controller()

const scene1 = new ScrollMagic.Scene({
        triggerElement: intro,
        triggerHook: 0,
        duration: 4500,
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

const scene5 = new ScrollMagic.Scene({
        triggerElement: aboutS,
        triggerHook: 0,
        duration: 1500,
    })
    .setPin(aboutS)
    .addTo(controller)

const aboutTxtAnimation = TweenMax.fromTo(aboutTitle, 2.5, { transform: 'scale(1)' }, { transform: 'scale(440)' });
const scene6 = new ScrollMagic.Scene({
        triggerElement: aboutS,
        triggerHook: 0,
        offset: 200,
        duration: 1000,

    })
    .setTween(aboutTxtAnimation)
    .addTo(controller)

const scene7 = new ScrollMagic.Scene({
        triggerElement: project,
        triggerHook: 0,
        duration: 5500,
    })
    .setPin(project)
    .addTo(controller)

const projectAnimation = TweenMax.fromTo(project, 2, { transform: 'scale(0)' }, { transform: 'scale(1)' });
const scene8 = new ScrollMagic.Scene({
        triggerElement: project,
        triggerHook: 0,
        offset: 0,
        duration: 2500,

    })
    .setTween(projectAnimation)
    .addTo(controller)
const scene9 = new ScrollMagic.Scene({
        triggerElement: contact,
        triggerHook: 0,
        duration: 500,
    })
    .setPin(project)
    .addTo(controller)