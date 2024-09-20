import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import Hamster from 'hamsterjs';
import '../styles/carrousel.css';

import ProyectosImg from '../images/Proyectos/Proyectos.jpg';
import PalafitosImg from '../images/Proyectos/Palafitos_Mesadetrabajo1.jpg';
import BuapImg from '../images/Proyectos/Buap_Mesadetrabajo1.jpg';
import AverandaImg from '../images/Proyectos/Averanda_Mesadetrabajo1.jpg';
import DoradoImg from '../images/Proyectos/Dorado_Mesadetrabajo1.jpg';
import ArtemaImg from '../images/Proyectos/Artema_Mesadetrabajo1.jpg';
import HospitalImg from '../images/Proyectos/Hospital_Mesadetrabajo1.jpg';
import EstadioImg from '../images/Proyectos/Estadio_Mesadetrabajo1.jpg';
import LagunasImg from '../images/Proyectos/Lagunas_Mesadetrabajo1.jpg';
import SadroImg from '../images/Proyectos/Sadro_Mesadetrabajo1.jpg';
import PuertoImg from '../images/Proyectos/Puerto.png';
import TrenMayaImg from '../images/Proyectos/TrenMaya.jpg';
import InxigniaImg from '../images/Proyectos/Inxignia.jpg';
import Proyectos2Img from '../images/Proyectos/Proyectos2_Mesadetrabajo1.jpg';

gsap.registerPlugin(Draggable);

const Carrousel = () => {
  const slidesContainerRef = useRef(null);
  const proxyRef = useRef(document.createElement('div'));
  const slidesRef = useRef([]);
  let animation = useRef(null);
  let timer = useRef(null);
  let slideWidth = useRef(0);
  let wrapWidth = useRef(0);
  const slideDelay = 1.5;
  const slideDuration = 1;

  useEffect(() => {
    const slides = slidesContainerRef.current.querySelectorAll('.slide');
    slidesRef.current = slides;

    gsap.set(slides, { xPercent: (i) => i * 100 });

    const numSlides = slides.length;
    const wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
    const wrapProgress = gsap.utils.wrap(0, 1);
    timer.current = gsap.delayedCall(slideDelay, autoPlay).pause();

    animation.current = gsap.timeline({ repeat: -1 });
    resize();

    Draggable.create(proxyRef.current, {
      trigger: slidesContainerRef.current,
      type: 'x',
      inertia: true,
      onPressInit: () => {
        animation.current.pause();
        timer.current.pause();
        updateProgress();
      },
      snap: {
        x: (value) => gsap.utils.snap(slideWidth.current, value)
      },
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      onThrowComplete: () => {
        timer.current.restart(true);
      }
    });

    window.addEventListener('resize', resize);

    Hamster(slidesContainerRef.current).wheel((event, delta) => {
      event.preventDefault();
      animateSlides(delta / 30);
    });

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const animateSlides = (direction) => {
    const progress = animation.current.progress() + direction / slidesRef.current.length;
    timer.current.pause();
    animation.current.pause();
    gsap.to(animation.current, {
      duration: slideDuration,
      progress: gsap.utils.snap(1 / slidesRef.current.length, progress),
      overwrite: true,
      modifiers: {
        progress: gsap.utils.wrap(0, 1)
      },
      onComplete: () => timer.current.restart(true)
    });
  };

  const autoPlay = () => {
    animation.current.play();
    gsap.fromTo(
      animation.current,
      { timeScale: 0 },
      { timeScale: 1, duration: 1, overwrite: true, ease: 'power1.in' }
    );
  };

  const updateProgress = () => {
    animation.current.progress(gsap.utils.wrap(0, 1)(gsap.getProperty(proxyRef.current, 'x') / wrapWidth.current));
  };

  const resize = () => {
    const progress = animation.current.progress();
    slideWidth.current = slidesRef.current[0].offsetWidth;
    wrapWidth.current = slideWidth.current * slidesRef.current.length;

    animation.current
      .progress(0)
      .clear()
      .to(slidesRef.current, {
        duration: 100,
        xPercent: `+=${slidesRef.current.length * 100}`,
        ease: 'none',
        modifiers: {
          xPercent: gsap.utils.wrap(-100, (slidesRef.current.length - 1) * 100)
        }
      })
      .to(proxyRef.current, { x: wrapWidth.current, duration: 100, ease: 'none' }, 0)
      .progress(progress);
  };

  const images = [
    { src: ProyectosImg, alt: "Imagen 1" },
    { src: PalafitosImg, alt: "Imagen 2" },
    { src: BuapImg, alt: "Imagen 3" },
    { src: AverandaImg, alt: "Imagen 4" },
    { src: DoradoImg, alt: "Imagen 5" },
    { src: ArtemaImg, alt: "Imagen 6" },
    { src: HospitalImg, alt: "Imagen 7" },
    { src: EstadioImg, alt: "Imagen 8" },
    { src: LagunasImg, alt: "Imagen 9" },
    { src: SadroImg, alt: "Imagen 10" },
    { src: PuertoImg, alt: "Imagen 11" },
    { src: TrenMayaImg, alt: "Imagen 12" },
    { src: InxigniaImg, alt: "Imagen 13" },
    { src: Proyectos2Img, alt: "Imagen 14" },
  ];

  return (
    <div className="proyectos">
      <div className="slides-container" ref={slidesContainerRef}>
        <div className="slides-inner">
          {images.map((images, index) => (
            <div className={`slide ${index % 2 === 0 ? 'a' : 'b'}`} key={index}>
              <img src={images.src} alt={images.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
