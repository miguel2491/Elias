import React, { useEffect, useState } from 'react';

const normal_playback_rate = 200;
const reduced_playback_rate = 1000;

const TextReplace = ({ words, targetElementId }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const rate = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? reduced_playback_rate
    : normal_playback_rate;

    useEffect(() => {
        const changeWordWithAnimation = () => {
            setOpacity(0);
            setTimeout(() => {
                setWordIndex((prevIndex) => (prevIndex + 1) %words.length);
                setOpacity(1);
            }, 50);
        };

        const interval = setInterval(changeWordWithAnimation, rate);
        
        return () => clearInterval(interval);
    }, [rate, words]);

    return (
        <div id={targetElementId} style={{ opacity, transition: 'opacity 0.5s' }}> {words[wordIndex]}</div>
    );
};

const App = () => {
    const words = [
        "fundamento",
        "fortaleza",
        "construccion",
        "durabilidad",
        "innovacion",
        "solidez",
        "sostenibilidad"
    ];

    return (
        <div><TextReplace words={words} targetElementId="target-word"/></div>
    );
};

export default App;