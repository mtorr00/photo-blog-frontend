import React from 'react'
import './track.css'
import { useEffect, useState, useCallback, useRef } from 'react';




const Track = () => {
  const [translateX, setTranslateX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (event) => {
    setDragging(true);
  };

  const handleMouseUp = (event) => {
    setDragging(false);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const { movementX, movementY } = event;
      setTranslateX(translateX + (movementX / event.target.offsetWidth) * 100);
    }
  };

  return (
    <>
    <div id="image-track" style={{
        transform: `translate(${translateX}%, -50%)`,
    }}onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      >
        <img class="image" src="https://images.unsplash.com/photo-1542614471-001ccf2b449c" alt="image 1" draggable="false"></img>
        <img class="image" src="https://images.unsplash.com/photo-1542500186-6edb30855637" alt="image 2" draggable="false"></img>
        <img class="image" src="https://images.unsplash.com/photo-1542438408-abb260104ef3" alt="image 3" draggable="false"></img>
        <img class="image" src="https://images.unsplash.com/photo-1542466500-dccb2789cbbb" alt="image 4" draggable="false"></img>
    </div>
    </>
  )
}

export default Track