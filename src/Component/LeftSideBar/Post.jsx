import React from "react";
import { Image, Link, User } from "@nextui-org/react";


function Post() {
  return (
    <div className="p-6 rounded-lg w-[70%] border rounded-lg">
      <div className="flex gap-2">
        <div>
          <Image
            width={30}
            height={30}
            radius="full"
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </div>

        <div className="flex justify-center flex-col">
          <span className="font-bold leading-none mb-1 text-sm">
            Qitmeer Raza
          </span>
          <span className="font-normal leading-none text-[12px]">
            @jrgarciadev . 17h
          </span>
        </div>
      </div>

      <p className="mt-4 text-[12px]">
        NEW VIDEO: Build and Deploy a Fully Responsive Modern Landing Page in
        #ReactJS!
        <br />
        <br />
        🔥 What if I told you that in the next few hours, you could learn to
        develop a jaw-dropping SaaS landing page that will have clients fighting
        to hire you?
        <br />
        <br />
        Welcome to a new course where you’ll create Xora, the best modern
        business landing page on YouTube!
      </p>
      <Image
        className="w-full h-full mt-4"
        alt="NextUI hero Image with delay"
        src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
    </div>
  );
}

export default Post;
