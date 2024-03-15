import React from "react";

export const ProfilePicture = () => {
  return (
    <article class="w-full h-[600px] overflow-hidden flex flex-col items-center justify-center  md:px-20 xs:px-0 pt-10">
      <header class="text-center  top-0 z-10">
        <span class="block font-bold sm:text-[40px] sm:leading-[35px] text-white">
          FULL STACK DEVELOPER
        </span>
      </header>

      <div class="flex h-[500px] justify-center align-bottom relative flex-1 transition-opacity  w-[500px]">
        <img
          src="../../public/img/Carlos.png"
          class="rounded-[500px]  w-[100%] h-[100%]   
        object-contain z-10  pb-1"
        />
        <div class="bg-white  absolute rounded-full flex justify-center h-[84%]  z-0 w-[90%]   top-20  "></div>
      </div>
    </article>
  );
};
