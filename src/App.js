import React from 'react';
import { usePosition } from 'use-position';
import './style.css';

export default function App() {
  const { latitude, longitude, speed, timestamp, accuracy, heading, error } =
    usePosition();
  return (
    <div>
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
    </div>
  );
}
