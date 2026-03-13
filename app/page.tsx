import Image from "next/image";
import Link from "next/link";

function LandingPage() {
  return (
    <>
      <div className="layout-container flex-between flex-col-reverse md:flex-row gap-10 my-5 md:my-10">
        <div className="text-content text-lg">
          <p className="hidden text-sm uppercase md:block">
            your go-to platform for 3d printing files
          </p>
          <h1 className="text-4xl font-bold my-5 md:text-5xl">
            Discover what&apos;s possible with 3D printing
          </h1>
          <p className="text-2xl">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <Link href="/3d-models">
            <button
              type="button"
              className="text-lg font-bold uppercase p-2 mt-6 border-2 border-main-br hover:text-light hover:bg-primary"
            >
              browse models
            </button>
          </Link>
        </div>
        <div className="img-container relative w-80 h-80 md:h-120 md:w-120">
          <Image
            src="/landing.png"
            alt="Landing Image"
            className="object-contain"
            fill
            priority
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
