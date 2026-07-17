"use client";

import { BottomMenu } from "@/components/BottomMenu";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface Track {
  title: string;
  artist: string;
  src: string;
  cover: string;
  alt: string;
}

const tracks: Track[] = [
  {
    title: "Amoeba",
    artist: "Clairo",
    src: "/amoeba.mp3",
    cover: "/amoeba.jpg",
    alt: "",
  },
  {
    title: "Champagne Supernova",
    artist: "Oasis",
    src: "/oasis.mp3",
    cover: "/oasis.jpeg",
    alt: "",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "/audio/song-three.mp3",
    cover: "/playlist/song-three.jpg",
    alt: "Song Three cover",
  },
];

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export default function Playlist() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const shouldPlayAfterChangeRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const currentTrack = tracks[activeIndex];

  const playAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const handlePlayPause = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      shouldPlayAfterChangeRef.current = true;
      await playAudio();
      return;
    }

    shouldPlayAfterChangeRef.current = false;
    audio.pause();
  };

  const selectTrack = async (index: number) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    shouldPlayAfterChangeRef.current = true;

    if (index === activeIndex) {
      audio.currentTime = 0;
      await playAudio();
      return;
    }

    setActiveIndex(index);
  };

  const changeTrack = (index: number) => {
    shouldPlayAfterChangeRef.current = true;
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    const audio = audioRef.current;

    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }

    changeTrack(activeIndex === 0 ? tracks.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    changeTrack(activeIndex === tracks.length - 1 ? 0 : activeIndex + 1);
  };

  const handleLoadedMetadata = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);

    if (shouldPlayAfterChangeRef.current) {
      await playAudio();
    }
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newTime = Number(event.target.value);

    if (!audio) {
      return;
    }

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audio) {
      audio.volume = newVolume;
    }
  };

  return (
    <main className="relative min-h-dvh overflow-hidden font-quicksand text-base">
      <section className="mx-auto flex h-[calc(100dvh-120px)] max-h-[720px] w-full max-w-[650px] flex-col px-6 pt-24">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="font-plinko text-[30px]">playlist</h1>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden border-2 border-black bg-[#c0c0c0] p-1">
          <div className="grid shrink-0 gap-3 p-3 sm:grid-cols-[120px_1fr]">
            <div className="aspect-square p-1">
              <Image
                src={currentTrack.cover}
                alt={currentTrack.alt}
                width={120}
                height={120}
                className="aspect-square size-full object-cover [image-rendering:pixelated]"
                priority
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <div className="border-2 border-black bg-black p-3 font-mono text-[#00ff00]">
                <p className="mb-1 text-[10px] uppercase text-[#aaffaa]">
                  now playing:
                </p>
                <p className="truncate text-sm font-bold">
                  {currentTrack.title}
                </p>
                <p className="truncate text-xs">{currentTrack.artist}</p>
                <div className="mt-3 flex justify-between text-[10px]">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={handleProgressChange}
                aria-label="Song progress"
                className="mt-3 w-full cursor-pointer accent-black"
              />
              <div className="mt-3 flex items-center gap-2">
                <PlayerButton label="Previous song" onClick={handlePrevious}>
                  |◀
                </PlayerButton>
                <PlayerButton
                  label={isPlaying ? "Pause" : "Play"}
                  onClick={handlePlayPause}
                  wide
                >
                  {isPlaying ? "Ⅱ" : "▶"}
                </PlayerButton>
                <PlayerButton label="Next song" onClick={handleNext}>
                  ▶|
                </PlayerButton>
                <div className="ml-auto flex items-center gap-2 font-mono text-[10px]">
                  <span>VOL</span>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume"
                    className="w-16 cursor-pointer accent-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="m-3 mt-0 flex min-h-0 flex-1 flex-col overflow-hidden border-2 border-black bg-white">
            <div className="grid shrink-0 grid-cols-[35px_1fr_auto] border-b-2 border-black bg-[#ffff00] px-2 py-1 font-mono text-[10px] font-bold uppercase">
              <span>#</span>
              <span>file name</span>
            </div>
            <ol className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              {tracks.map((track, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={track.src}
                    className="border-b border-dotted border-black last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => selectTrack(index)}
                      className={`grid w-full cursor-pointer grid-cols-[35px_1fr_auto] items-center px-2 py-2 text-left font-mono text-xs ${
                        isActive
                          ? "bg-[#000080] text-white"
                          : "bg-white text-[#0000ee] hover:bg-[#ffffcc]"
                      }`}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span className="min-w-0">
                        <span className="block truncate underline">
                          {track.title}
                        </span>
                        <span
                          className={`block truncate text-[10px] no-underline ${
                            isActive ? "text-white/70" : "text-black/60"
                          }`}
                        >
                          {track.artist}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={currentTrack.src}
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onDurationChange={(event) => {
            const newDuration = event.currentTarget.duration;
            setDuration(Number.isFinite(newDuration) ? newDuration : 0);
          }}
          onTimeUpdate={(event) => {
            setCurrentTime(event.currentTarget.currentTime);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleNext}
          onError={() => {
            setIsPlaying(false);
          }}
          className="hidden"
        />
        <Link href="/menu" className="mt-10 inline-block text-sm underline">
          [ back ]
        </Link>
      </section>
      <BottomMenu />
    </main>
  );
}

interface PlayerButtonProps {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  wide?: boolean;
}

function PlayerButton({
  children,
  label,
  onClick,
  wide = false,
}: PlayerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`cursor-pointer border-2 border-b-black border-l-white border-r-black border-t-white bg-[#c0c0c0] px-2 py-1 font-mono text-xs font-bold active:border-b-white active:border-l-black active:border-r-white active:border-t-black ${
        wide ? "min-w-12" : ""
      }`}
    >
      {children}
    </button>
  );
}
