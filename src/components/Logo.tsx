import { useState, useEffect } from "react";

const getRandomImage = () => {
    // Rango flexible (ajustar si se agregan más imágenes)
    const min = 2;
    const max = 18;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return `/assets/animebell_wifu_${randomNumber.toString().padStart(3, "0")}.png`;
};

const Logo = () => {
    const [logoSrc, setLogoSrc] = useState("/assets/animebell_logo.png"); // Default logo

    useEffect(() => {
        setLogoSrc(getRandomImage()); // Cambia la imagen cuando el componente se monta
    }, []);

    return (
        <img
            src={logoSrc}
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-text-top"
        />
    );
};

export default Logo;
