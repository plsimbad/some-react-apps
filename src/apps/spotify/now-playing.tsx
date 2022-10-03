import axios from "axios";
import { useEffect, useState } from "react";

interface INowPlaying {
  item: {
    album: {
      images: { url: string }[];
    };
    name: string;
    artists: { name: string }[];
  };
}

export const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<INowPlaying>(undefined);

  const getCurrentlyPlaying = () => {
    const token = window.localStorage.getItem("token");

    axios
      .get(`https://api.spotify.com/v1/me/player/currently-playing`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res: any) => {
        setNowPlaying(res.data);
      });
  };

  useEffect(() => {
    getCurrentlyPlaying();
  }, []);

  return (
    <>
      {nowPlaying && (
        <>
          <div className="flex flex-col">
            <div className="mb-5 text-xl">Now Playing</div>
            <div className="flex flex-row items-center justify-center space-x-5">
              <div className="">
                <img src={nowPlaying.item.album.images[1].url} />
              </div>
              <div className="text-5xl">
                <div>{nowPlaying.item.name}</div>
                <div>{nowPlaying.item.artists[0].name}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
