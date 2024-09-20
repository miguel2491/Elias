import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Animacion.css'; 
import { gsap } from 'gsap';
import Cuadro1 from '../images/Inicio/Cuadro1.jpeg';
import Cuadro2 from '../images/Inicio/Cuadro2.jpeg';
import Cuadro3 from '../images/Inicio/Cuadro3.JPG';
import Cuadro4 from '../images/Inicio/Cuadro4.JPG';
import Cuadro5 from '../images/Inicio/Cuadro5.jpeg';
import Cuadro6 from '../images/Inicio/Cuadro6.JPG';

const data = [
    { place: "Puebla - Pue", description: "Bienvenido a CATSA Concretos.", image: Cuadro1 },
    { place: "Puebla - Pue. Tiendas Innovasport, e Innvictus Puebla", description: "Estas en el sitio donde la calidad y la excelencia en el servicio, se encuentran con la Alta Tecnología.", image: Cuadro2 },
    { place: "Perote - Ver. Planta Fotovoltaica, Perote", description: "Te ofrecemos la mejor gama de productos en concreto premezclado, cumpliendo exactamente con los requerimientos que necesitas para tus proyectos.", image: Cuadro3 },
    { place: "Puebla - Pue. C. Comercial, Explanada Puebla", description: "Más de 20 años de experiencia, nuestra amplia cobertura y los más altos estándares de calidad son en los que los expertos confían.", image: Cuadro4 },
    { place: "Veracruz - Ver. Ampliación Puerto de Veracruz", description: "Contamos con el mejor equipo de profesionales, que te acompañan en todo momento.", image: Cuadro5 },
    { place: "Puebla - Pue. Plaza kentro", description: "Continúa hacia abajo y comprueba porque somos Alta Tecnología.", image: Cuadro6 }
];

const Animacion = () => {
    useEffect(() => {
        const _ = (id) => document.getElementById(id);

        const cards = data.map((i, index) => `<div class="card bg-dark text-white" id="card${index}" style="background-image:url(${i.image})"></div>`).join('');
        const cardContents = data.map((i, index) => `<div class="card-content" id="card-content-${index}">
        <div class="content-start"></div>
        <div class="content-place">${i.place}</div>
        </div>`).join('');
        const slideNumbers = data.map((_, index) => `<div class="item" id="slide-item-${index}">${index + 1}</div>`).join('');

        _('demo').innerHTML = cards + cardContents;

        const range = (n) => Array(n).fill(0).map((_, j) => j);
        const set = gsap.set;

        function getCard(index) {
            return `#card${index}`;
        }
        function getCardContent(index) {
            return `#card-content-${index}`;
        }
        function getSliderItem(index) {
            return `#slide-item-${index}`;
        }

        function animate(target, duration, properties) {
            return new Promise((resolve) => {
                gsap.to(target, {
                    ...properties,
                    duration: duration,
                    onComplete: resolve,
                });
            });
        }

        let order = [0, 1, 2, 3, 4, 5];
        let detailsEven = true;
        let clicks = 0;

        let offsetTop = 200;
        let offsetLeft = 700;
        let cardWidth = 175;
        let cardHeight = 225;
        let gap = 40;
        let numberSize = 50;
        const ease = "sine.inOut";

        function updateLayout() {
            const { innerHeight: height, innerWidth: width } = window;
            if (width <= 480) {
                cardWidth = 150;
                cardHeight = 200;
                gap = 15;
                numberSize = 20;
                offsetTop = height - cardHeight - 20;
                offsetLeft = (width - cardWidth) / 2;
            } else if (width <= 768) {
                cardWidth = 160;
                cardHeight = 220;
                gap = 20;
                numberSize = 25;
                offsetTop = height - cardHeight - 40;
                offsetLeft = (width - cardWidth) / 2;
            } else if (width <= 1024) {
                cardWidth = 175;
                cardHeight = 225;
                gap = 30;
                numberSize = 35;
                offsetTop = height - cardHeight - 60;
                offsetLeft = (width - cardWidth) / 2;
            } else {
                cardWidth = 175;
                cardHeight = 225;
                gap = 40;
                numberSize = 50;
                offsetTop = height - cardHeight - 100;
                offsetLeft = (width - cardWidth) / 2;
            }
        }

        function init() {
            const [active, ...rest] = order;
            const detailsActive = detailsEven ? "#details-even" : "#details-odd";
            const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

            updateLayout();

            window.addEventListener('resize', updateLayout);

            gsap.set("#pagination", {
                top: offsetTop + 230,
                left: offsetLeft,
                y: 200,
                opacity: 0,
                zIndex: 60,
            });

            gsap.set(getCard(active), {
                x: 0,
                y: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            });
            gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
            gsap.set(detailsActive, { opacity: 0, zIndex: 222, x: -200 });
            gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
            gsap.set(`${detailsInactive} .text`, { y: 100 });
            gsap.set(`${detailsInactive} .desc`, { y: 50 });
            gsap.set(`${detailsInactive} .cta`, { y: 60 });

            gsap.set(".progress-sub-foreground", {
                width: 500 * (1 / order.length) * (active + 1),
            });

            rest.forEach((i, index) => {
                gsap.set(getCard(i), {
                    x: offsetLeft + index * (cardWidth + gap),
                    y: offsetTop,
                    width: cardWidth,
                    height: cardHeight,
                    zIndex: 30,
                    borderRadius: 10,
                });
                gsap.set(getCardContent(i), {
                    x: offsetLeft + index * (cardWidth + gap),
                    zIndex: 40,
                    y: offsetTop + cardHeight - 100,
                });
                gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
            });

            gsap.set(".indicator", { x: -window.innerWidth });

            const startDelay = 0.6;

            gsap.to(".cover", {
                x: window.innerWidth + 400,
                delay: 0.5,
                ease,
                onComplete: () => {
                    setTimeout(() => {
                        loop();
                    }, 500);
                },
            });
            rest.forEach((i, index) => {
                gsap.to(getCard(i), {
                    x: offsetLeft + index * (cardWidth + gap),
                    zIndex: 30,
                    delay: 0.05 * index,
                    ease,
                    delay: startDelay,
                });
                gsap.to(getCardContent(i), {
                    x: offsetLeft + index * (cardWidth + gap),
                    zIndex: 40,
                    delay: 0.05 * index,
                    ease,
                    delay: startDelay,
                });
            });
            gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
            gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
        }

        async function step() {
            return new Promise((resolve) => {
                order.push(order.shift());
                detailsEven = !detailsEven;

                const detailsActive = detailsEven ? "#details-even" : "#details-odd";
                const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

                document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place;
                document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description;

                gsap.set(detailsActive, { zIndex: 222 });
                gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
                gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease });
                gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
                gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, ease, onComplete: resolve });
                gsap.set(detailsInactive, { zIndex: 12 });

                const [active, ...rest] = order;
                const prv = rest[rest.length - 1];

                gsap.set(getCard(prv), { zIndex: 10 });
                gsap.set(getCard(active), { zIndex: 20 });
                gsap.to(getCard(prv), { scale: 1, ease });

                gsap.to(getCardContent(active), {
                    y: offsetTop + cardHeight - 10,
                    opacity: 0,
                    duration: 0.3,
                    ease,
                });
                gsap.to(getSliderItem(active), { x: 0, ease });
                gsap.to(getSliderItem(prv), { x: -numberSize, ease });
                gsap.to(".progress-sub-foreground", {
                    width: 500 * (1 / order.length) * (active + 1),
                    ease,
                });

                gsap.to(getCard(active), {
                    x: 0,
                    y: 0,
                    ease,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    borderRadius: 0,
                    onComplete: () => {
                        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                        gsap.set(getCard(prv), {
                            x: xNew,
                            y: offsetTop,
                            width: cardWidth,
                            height: cardHeight,
                            zIndex: 30,
                            borderRadius: 10,
                            scale: 1,
                        });

                        gsap.set(getCardContent(prv), {
                            x: xNew,
                            y: offsetTop + cardHeight - 100,
                            opacity: 1,
                            zIndex: 40,
                        });
                        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

                        gsap.set(detailsInactive, { opacity: 0 });
                        gsap.set(`${detailsInactive} .text`, { y: 100 });
                        gsap.set(`${detailsInactive} .desc`, { y: 50 });
                        gsap.set(`${detailsInactive} .cta`, { y: 60 });
                        clicks -= 1;
                        if (clicks > 0) {
                            step();
                        }
                    },
                });

                rest.forEach((i, index) => {
                    if (i !== prv) {
                        const xNew = offsetLeft + index * (cardWidth + gap);
                        gsap.set(getCard(i), { zIndex: 30 });
                        gsap.to(getCard(i), {
                            x: xNew,
                            y: offsetTop,
                            width: cardWidth,
                            height: cardHeight,
                            ease,
                            delay: 0.1 * (index + 1),
                        });

                        gsap.to(getCardContent(i), {
                            x: xNew,
                            y: offsetTop + cardHeight - 100,
                            opacity: 1,
                            zIndex: 40,
                            ease,
                            delay: 0.1 * (index + 1),
                        });
                        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
                    }
                });
            });
        }

        async function loop() {
            await animate(".indicator", 2, { x: 0 });
            await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
            set(".indicator", { x: -window.innerWidth });
            await step();
            loop();
        }

        async function loadImage(src) {
            return new Promise((resolve, reject) => {
                let img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        }

        async function loadImages() {
            const promises = data.map(({ image }) => loadImage(image));
            return Promise.all(promises);
        }

        async function start() {
            try {
                await loadImages();
                init();
            } catch (error) {
                console.error("One or more images failed to load", error);
            }
        }

        start();

    }, []);

    return (
        <div className="App">
            <div className="indicator"></div>
            <div id="demo"></div>
            <div className="details" id="details-even">
                <div className="place-box">
                    <div className="text">Puebla - MX</div>
                </div>
                <div className="desc">Bienvenido a CATSA Concretos.</div>
            </div>
            <div className="details" id="details-odd">
                <div className="place-box">
                    <div className="text">Puebla - MX</div>
                </div>
                <div className="desc">Bienvenido a CATSA Concretos.</div>
            </div>
        </div>
    );
};

export default Animacion;
