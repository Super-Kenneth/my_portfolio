"use client";
import { useState, useEffect } from "react";

interface Certificate {
  image: string;
  view_img: string;
  title: string;
  description: string;
}

export default function Certificates() {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  const certificates: Certificate[] = [
    {
      image: "outstanding_intern.jpg",
      view_img: "test.jpg",
      title: "Outstanding Intern",
      description:
        "Intelliseven Technology Solutions Inc.",
    },
  ];

  const handleViewClick = (viewImg: string) => {
    setSelectedImage(viewImg);
    setModal(true);
  };

  return (
    <div className="w-full mt-6 md:mt-16 text-center">
      <h1 className="text-[1.5em] md:text-[3em] font-bold">Certificates & Achievements</h1>
      <div className="mt-2 w-full gap-4 grid grid-cols-2 md:grid-cols-4 justify-items-center">
        {certificates.map((item, index) => (
          <div
            key={index}
            className=" max-h-96  w-full border rounded-xl p-4 md:p-6 flex flex-col gap-y-4 justify-center items-center"
          >
            <img
              src={`/certificates/${item.image}`}
              alt="certificates"
              className=" max-h-[60%]"
            />
            <div className="h-[40%] flex flex-col justify-end">
              <h1 className="font-bold text-[1em] md:text-2xl">{item.title}</h1>
              <p className="text-xs md:text-sm">{item.description}</p>
              <button
                onClick={() => handleViewClick(item.view_img)}
                className="mt-2 font-bold w-full bg-white text-black rounded-xl p-2 md:hover:bg-opacity-80"
              >
                View
              </button>
            </div>

            {modal && selectedImage === item.view_img && (
              <div
                onClick={() => setModal(false)}
                className="z-50 bg-black fixed inset-0 w-screen h-screen"
              >
                <div className="relative h-full w-full flex justify-center items-center">
                  <button
                    onClick={() => setModal(false)}
                    className="absolute z-50 top-6 right-4 md:top-8 md:right-8"
                  >
                    <img src="/icons/close.svg" className="h-8" />
                  </button>
                  <img
                    src={`/certificates/${selectedImage}`}
                    alt="img"
                    className="h-[70%] md:h-[80%]"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
