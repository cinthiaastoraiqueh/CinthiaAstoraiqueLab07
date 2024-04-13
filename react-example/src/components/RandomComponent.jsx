import React, { useState } from "react";

export const RandomComponent = () => {
  const [message, setMessage] = useState("");

  const randomMessages = [
    "¡Hola Mundo!",
    "¡Bienvenido!",
    "¡Qué tengas un buen día!",
    "¡Feliz día!",
    "¡Hasta luego!",
  ];

  const generateRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * randomMessages.length); // Genera un índice aleatorio
    const randomMessage = randomMessages[randomIndex]; 
    setMessage(randomMessage); 
  };

  return (
    <div>
      <h2>Mensaje Aleatorio</h2>
      <p>{message}</p>
      <button onClick={generateRandomMessage}>Generar Mensaje Aleatorio</button>
    </div>
  );
};
