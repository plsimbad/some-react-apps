import { Login } from "./login";
import { NowPlaying } from "./now-playing";

export const Spotify = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-shrink justify-start">
        <Login />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <NowPlaying />
      </div>
    </div>
  );
};
