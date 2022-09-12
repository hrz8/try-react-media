import React, {useState} from 'react';
import {sources} from '../media/videos';
import {ControlBar, Player} from 'video-react';

export default function PlayerControl() {
  const [player, setPlayer] = useState(null);
  const [source, setSource] = useState(sources.sintelTrailer);

  return (
    <>
      <Player ref={(player) => setPlayer(player)}>
        <source src={source} />
        <ControlBar />
      </Player>

      <button onClick={() => player.play()}>Play</button>
      <button onClick={() => player.pause()}>Pause</button>
      <button onClick={() => (player.muted = true)}>Mute</button>
      <button onClick={() => (player.muted = false)}>Unmute</button>

      <br />

      <button
        onClick={() => {
          setSource(sources.bunnyTrailer);
          player.load();
        }}
      >
        Change to bunnyTrailer
      </button>

      <button
        onClick={() => {
          setSource(sources.sintelTrailer);
          player.load();
        }}
      >
        Change to sintelTrailer
      </button>
    </>
  );
}
