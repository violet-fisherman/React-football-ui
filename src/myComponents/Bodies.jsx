import foot from './foot.png';
import olympic from './olympic.png';
import React, { useState, useEffect } from "react";

const images = [foot, olympic]

const Bodies = () => {
    const [image, setImage] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setImage(!image);
        }, 5);
        return () => {
            clearInterval(interval);
        };
    }, [images, 5]);
    return (
        <p><img src={images[image]} height="900" width="1200" alt=""/></p>
    );
};

export default Bodies;