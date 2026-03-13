import Image from "next/image";
import { TbBoxModel2 } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";
import AboutCard from "./aboutCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};

const aboutData = [
  {
    title: "100K+ Models",
    body: "Access our vast library of community-created 3D models, from practical tools to artistic creations.",
    Icon: TbBoxModel2,
  },
  {
    title: "Active Community",
    body: "Join thousands of makers who share tips, provide feedback, and collaborate on projects.",
    Icon: AiOutlineGlobal,
  },
  {
    title: "Free to Use",
    body: "Most models are free to download, with optional premium features for power users.",
    Icon: CiFlag1,
  },
];

function AboutPage() {
  return (
    <>
      <section className="intro layout-container grid gap-5 md:grid-cols-2">
        <div className="img-container relative flex justify-center items-start rounded-lg">
          <Image
            src="/model.png"
            width={400}
            height={400}
            alt="About Image"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="intro-content flex flex-col gap-5">
          <p className="text-lg uppercase">About printforge</p>
          <h2 className="text-3xl font-semibold">
            Empowering makers worldwide
          </h2>
          <p className="text-lg">
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p className="text-lg">
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </section>
      <hr className="border-gray-200 my-5" aria-hidden="true" />
      <section className="layout-container grid grid-auto-fit-md gap-2 justify-center md:gap-2 py-5">
        {aboutData.map((ele, idx) => (
          <AboutCard key={idx} cardData={ele} />
        ))}
      </section>
      <section className="layout-container">
        <div className="prose max-w-none">
          <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
          <p className="mb-4 text-primary">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what&apos;s
            possible with 3D printing.
          </p>
          <p className="text-secondary">
            Whether you&apos;re a hobbyist looking for your next weekend
            project, an educator seeking teaching materials, or a professional
            designer wanting to share your creations, PrintForge provides the
            tools and community to support your journey in 3D printing.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
