import Image from 'next/image';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { useState, useEffect } from 'react';

export default function ImageGrid(props) {
  const { pictureData } = props;
  const [likedItems, setLikedItems] = useState([]);
  const [showModal, setModal] = useState(false);
  const localStorageLikes = JSON.parse(localStorage.getItem('likes'));

  useEffect(() => {
    async function getData() {
      const localStorageLikes = await JSON.parse(localStorage.getItem('likes'));
      setLikedItems(localStorageLikes);
    }
    getData();
  }, []);

  if (localStorageLikes === null) {
    window.localStorage.setItem('likes', JSON.stringify([]));
  }

  return (
    <div className="flex md:flex-row flex-row flex-wrap justify-center w-screen items-start font-ubuntu font-bold text-gray-100">
      {pictureData
        .sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
        .map((pictureData) => {
          if (pictureData.media_type === 'video') {
            return (
              <div
                key={pictureData.date}
                className="flex flex-col w-[600px] h-min-[1000px] h-[1100px] p-10 md:my-5 my-10 mx-5 rounded-lg bg-backgroundSecondary border-lightBlue border-2 hover:border-lightPurple"
              >
                <iframe
                  alt={pictureData.title}
                  className="flex flex-1 min-w-[100%] h-[90%] mb-4"
                  src={pictureData.url}
                ></iframe>
                <h1 className="text-2xl mb-4">
                  {pictureData.title} - {pictureData.date}
                </h1>
                <p className="flex flex-shrink mb-8 font-light">
                  {pictureData.explanation}
                </p>
                {likedItems.includes(pictureData.date) ? (
                  <button
                    onClick={() => {
                      const copy = [...likedItems];
                      const filtered = copy.filter((pictureDate) => {
                        if (pictureDate !== pictureData.date) {
                          return pictureDate;
                        }
                      });
                      setLikedItems(filtered);
                      window.localStorage.setItem(
                        'likes',
                        JSON.stringify(filtered)
                      );
                    }}
                    className="bg-blue-500 w-[33%] h-[40px] rounded-lg border-blue-500 border-2 hover:bg-red-500   text-black"
                  >
                    Like!
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setLikedItems([...likedItems, pictureData.date]);
                      confetti();
                      window.localStorage.setItem(
                        'likes',
                        JSON.stringify([...likedItems, pictureData.date])
                      );
                    }}
                    className="bg-white w-[33%] h-[40px] rounded-lg border-blue-500 border-2 hover:bg-blue-500 text-black"
                  >
                    Like!
                  </button>
                )}
              </div>
            );
          } else
            return (
              <div
                key={pictureData.date}
                className="flex flex-col w-[600px] h-min-[725px] p-10 md:my-5 my-10 mx-5 rounded-lg bg-backgroundSecondary border-lightBlue border-2 hover:border-lightPurple"
              >
                <Link href={pictureData.hdurl} passHref>
                  <a target="_blank">
                    <Image
                      width="675px"
                      height="675px"
                      id="myImg"
                      src={pictureData.url}
                      alt={pictureData.title}
                    />
                  </a>
                </Link>

                <h1 className="text-2xl mb-4 mt-4">
                  {pictureData.title} - {pictureData.date}
                </h1>
                <p className="mb-8 font-light">{pictureData.explanation}</p>
                {likedItems.includes(pictureData.date) ? (
                  <button
                    onClick={() => {
                      const copy = [...likedItems];
                      const filtered = copy.filter((pictureDate) => {
                        if (pictureDate !== pictureData.date) {
                          return pictureDate;
                        }
                      });
                      setLikedItems(filtered);
                      window.localStorage.setItem(
                        'likes',
                        JSON.stringify(filtered)
                      );
                    }}
                    className="bg-blue-500 w-[33%] h-[40px] rounded-lg border-blue-500 border-2 hover:bg-red-500   text-black"
                  >
                    Like!
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setLikedItems([...likedItems, pictureData.date]);
                      window.localStorage.setItem(
                        'likes',
                        JSON.stringify([...likedItems, pictureData.date])
                      );
                      confetti();
                    }}
                    className="bg-white w-[33%] h-[40px] rounded-lg border-blue-500 border-2 hover:bg-blue-500 text-black"
                  >
                    Like!
                  </button>
                )}
              </div>
            );
        })}
    </div>
  );
}
