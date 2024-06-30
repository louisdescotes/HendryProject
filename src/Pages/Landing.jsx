import React from "react";
import Header from "../Layout/Header";
import ImgRow from "../Layout/ImgRow";
import ImgCol from "../Layout/ImgCol";
import Footer from "../Layout/Footer";

export default function Landing() {
  return (
    <body className="flex flex-col gap-40">
      <Header />
      <main className="h-[98svh] pt-[10svh] grid items-center justify-center grid-cols-12 grid-rows-1 gap-x-20 px-4">
        <div className="col-span-6 row-span-1 h-full w-full border">
          <img
            className="w-full h-full object-cover"
            src="/src/assets/Img/landing/one.jpg"
            alt=""
          />
        </div>
        <div className="col-span-5 col-start-8 flex flex-col justify-end h-full">
          <h1 className="font-satoshi font-bold text-title">Hendry</h1>
          <p className="font-neue font-regular text-p">
            Lorem ipsum dolor sit amet. Est voluptate labore qui laboriosam vero
            sed repudiandae corrupti aut obcaecati molestiae nam veritatis
            praesentium et omnis veniam. Et perferendis beatae et laborum sint
            qui nihil numquam et odio beatae et nemo dolore vel optio excepturi.
          </p>
        </div>
      </main>
      <section className="px-4">
        <h2 className="font-satoshi font-medium text-subtitle mb-1">
          Colliers
        </h2>
        <ImgRow
          img1="/src/assets/Img/celinalea/one.jpg"
          img2="/src/assets/Img/celinalea/two.jpg"
          img3="/src/assets/Img/celinalea/three.jpg"
          img4="/src/assets/Img/celinalea/four.jpg"
          author="@by_celinalea"
        />
        <ImgRow
          img1="/src/assets/Img/theloveofgold/one.jpg"
          img2="/src/assets/Img/theloveofgold/two.jpg"
          img3="/src/assets/Img/theloveofgold/three.jpg"
          author="@theloveofgold"
        />
      </section>
      <section className="px-4">
        <h2 className="font-satoshi font-medium text-subtitle mb-1">Bagues</h2>
        <ImgCol
          img1="/src/assets/Img/rayn/one.jpg"
          img2="/src/assets/Img/rayn/two.jpg"
          img3="/src/assets/Img/rayn/three.jpg"
          img4="/src/assets/Img/rayn/four.jpg"
          author="@raynjermain"
        />
      </section>
      <section className="px-4">
        <h2 className="font-satoshi font-medium text-subtitle mb-1">
          Boucles d’oreilles
        </h2>
        <ImgRow
          img1="/src/assets/Img/bunny/one.jpg"
          img2="/src/assets/Img/bunny/two.jpg"
          img3="/src/assets/Img/bunny/three.jpg"
          img4="/src/assets/Img/bunny/four.jpg"
          author="@bunnyanddust"
        />
      </section>
      <Footer />
    </body>
  );
}
