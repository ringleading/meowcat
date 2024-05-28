import Image from "next/image";
import { images } from "@/imageImports";
import banner1 from "@/public/assets/images/meow_banner_1.webp";
import banner2 from "@/public/assets/images/meow_banner_2.jpg";
import banner3 from "@/public/assets/images/meow_banner_3.webp";
import meow_head from "@/public/assets/images/meow_head.webp";

export default function Assets() {
  return (
    <div className="">
      <a
        className="absolute top-0 left-4 hover:scale-110 w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
        href="/"
      >
        <Image
          src={meow_head}
          alt="meow_home"
          layout="fill"
          objectFit="contain"
        ></Image>
      </a>
      <main className="container mx-auto text-white">
        <div
          id="content"
          className="mt-4 mb-4 grid gap-10 px-5 lg:px-0 grid-cols-2 lg:grid-cols-4"
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                priority
                width={300}
                height={300}
                decoding="async"
              />
            </div>
          ))}

          <div className="flex justify-center relative h-[100px]">
            <Image
              src={banner1}
              alt="banner1"
              priority
              width={300}
              height={100}
              decoding="async"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={banner2}
              alt="banner2"
              priority
              width={300}
              height={100}
              decoding="async"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={banner3}
              alt="banner3"
              priority
              width={300}
              height={100}
              decoding="async"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
