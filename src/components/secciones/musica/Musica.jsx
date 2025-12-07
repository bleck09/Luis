import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { toast } from "react-hot-toast";
import "./Musica.css";

function Musica() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
            // Colores para PAUSA (Azul Zafiro y Plata)
            toast.error("⏸ Música pausada", {
                style: {
                    border: '2px solid #084C9F', /* Borde: Azul Zafiro */
                    color: '#084C9F',             /* Texto: Azul Zafiro */
                    background: '#E0E0E0',        /* Fondo: Plata Brillante */
                    fontWeight: 'bold'
                },
            });
        } else {
            audioRef.current.play();
            // Colores para PLAY (Oro y Plata)
            toast.success("Reproduciendo música...", {
                style: {
                    border: '2px solid #FFC72C',  /* Borde: Oro */
                    color: '#084C9F',             /* Texto: Azul Zafiro */
                    background: '#E0E0E0',        /* Fondo: Plata Brillante */
                    fontWeight: 'bold'
                },
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="musica-container">
            <h2 className="titulo-musica">Presiona Play para escuchar mi cancion</h2>
            {/* Audio */}
            <audio ref={audioRef} src="/Luis/musica/Adas.mp3" preload="auto"></audio>

            {/* Controles */}
            <div className="controles-musica">
                <button className="boton-musica inactivo">
                    <FaStepBackward />
                </button>

                <button
                    className={`boton-musica principal ${isPlaying ? "activo" : ""}`}
                    onClick={handlePlayPause}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <button className="boton-musica inactivo">
                    <FaStepForward />
                </button>
            </div>
        </div>
    );
}

export default Musica;