/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect } from 'react';


type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
}


function VideoPlayer({src, poster, isPlaying}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef === null) {
      return;
    }

    videoRef.current?.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isPlaying) {
      setTimeout(() => {
        videoRef.current?.play();
      }, 1000);

      return;
    }

    videoRef.current?.pause();
    videoRef.current?.load();

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <video className='player__video' ref={videoRef} src={src} poster={poster}></video>
  );
}

export default VideoPlayer;
