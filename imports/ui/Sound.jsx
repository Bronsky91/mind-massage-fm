import React, { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

export const Sound = () => {
  const [playerId, setPlayerId] = useState();
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [z, setZ] = useState(0);

  const player = useRef(new Howl({ src: ["test_audio.mp3"], html5: false }));

  useEffect(() => {
    console.log(`setting pos: x:${x} y:${y} z:${z}`);
    // Can't get this position to change while the sound is playing, only on start...
    player.current.pos(x, y, z);
  }, [x, y, z]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
      <button
        onClick={() => {
          setPlayerId(player.current.play());
        }}
      >
        Play Song
      </button>
      <p>Z</p>
      <input
        type="range"
        value={z}
        min="-100"
        max="100"
        step="1"
        onChange={(e) => {
          setZ(e.target.value);
        }}
      />
      <p>Y</p>
      <input
        type="range"
        value={y}
        min="-100"
        max="100"
        step="1"
        onChange={(e) => {
          setY(e.target.value);
        }}
      />
      <p>X</p>
      <input
        type="range"
        value={x}
        min="-100"
        max="100"
        step="1"
        onChange={(e) => {
          setX(e.target.value);
        }}
      />
    </div>
  );
};
