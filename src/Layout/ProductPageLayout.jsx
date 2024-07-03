import React, { useState } from "react";
import NumberItemsButton from "../Components/NumberItemsButton";

export default function ProductPageLayout(props) {
  const [active, setActive] = useState(`/src/assets/Img/${props.name}/one.jpg`);

  const mainImage = (url) => {
    setActive(url);
  };
  return (
    <main className=" h-screen grid items-center justify-center grid-cols-12 grid-rows-1 gap-x-20 px-4 cursor-default">
      <aside className="h-[80svh] items-center grid gap-x-2 gap-y-2 grid-cols-4 grid-rows-3 col-span-5 ">
        <img
          className="w-full object-bottom object-cover h-full col-span-4 row-span-2 row-start-1 cursor-pointer"
          src={`${active}`}
          alt=""
        />
        <img
          className="w-full object-bottom object-cover h-full col-span-1 row-span-1 row-start-3 cursor-pointer"
          src={`/src/assets/Img/${props.name}/one.jpg`}
          onClick={() => mainImage(`/src/assets/Img/${props.name}/one.jpg`)}
          alt=""
        />
        <img
          className="w-full object-bottom object-cover h-full col-span-1 row-span-1 row-start-3 cursor-pointer"
          src={`/src/assets/Img/${props.name}/two.jpg`}
          onClick={() => mainImage(`/src/assets/Img/${props.name}/two.jpg`)}
          alt=""
        />
        <img
          className="w-full object-bottom object-cover h-full col-span-1 row-span-1 row-start-3 cursor-pointer"
          src={`/src/assets/Img/${props.name}/three.jpg`}
          onClick={() => mainImage(`/src/assets/Img/${props.name}/three.jpg`)}
          alt=""
        />
        <img
          className="w-full object-bottom object-cover h-full col-span-1 row-span-1 row-start-3 cursor-pointer"
          src={`/src/assets/Img/${props.name}/four.jpg`}
          onClick={() => mainImage(`/src/assets/Img/${props.name}/four.jpg`)}
          alt=""
        />
      </aside>
      <div className="w-full col-span-4 col-start-6 z-10">
        <p className=" font-satoshi text-title font-bold">{props.name}</p>
        <p className="w-full font-neue font-p font-regular text-justify">
          {props.description}
        </p>
      </div>
      <div className="flex flex-col col-span-2 col-start-11 gap-11">
        <div className="flex flex-col gap-[5px]">
          <span className="font-satoshi font-bold text-link">Prix</span>
          <p className="font-neue font-regular text-4xl">{props.prix}</p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="font-satoshi font-bold text-link">Quantité</span>
          <NumberItemsButton />
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="font-satoshi font-bold text-link">Information</span>
          <p className="font-neue font-regular text-author text-justify">
            {props.information}
          </p>
        </div>
        <div>
          <a
            href=""
            className="flex justify-start font-satoshi text-link underline font-medium "
          >
            Acheter
          </a>
        </div>
      </div>
    </main>
  );
}
