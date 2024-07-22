import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between lg:flex-row lg:flex-nowrap">
      <div className="flex items-center justify-center relative h-dvh w-full">
        <Image
          className="h-full w-full object-cover"          
          src="/img/skateboarding-city.jpg"
          alt="skateboarding city"
          sizes="100vw"
          priority
          fill
        />
      </div>
      <div className="p-6 lg:p-24 lg:min-w-[50%]">
        <h1>pinsb.app</h1>
        <h2 className="">
          Do NOT join the <s>everyone&rsquo;s</s> exclusive skateboarding spots app
        </h2>
        <h2>Seriously, don&rsquo;t sign up for the waitlist. These spots are way too hard for you!.
        </h2>
        <div className="launchlist-widget" data-key-id="DEM82h" data-height="180px"></div>

      

        <p>In case you decide to wait, your data is completely safe and will only be used to tease you with updates about our secret spots.</p>

        <div className="flex-col">
          <h3>Do not follow us on social media</h3>
          <a href=""></a>
        </div>
      </div>
    </main>
  );
}
