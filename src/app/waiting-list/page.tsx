import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import instagramIcon from "../../assets/instagram-logo-svgrepo-com.svg"
import FormWaitList from "@/components/formWaitList";


export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col lg:flex-row lg:flex-nowrap">
      <div className="flex items-center justify-center relative h-dvh w-full lg:min-w-[50%]">
        <Image
          className="h-full w-full object-cover"          
          src="/img/skateboarding-city.jpg"
          alt="skateboarding city"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          fill
        />
      </div>

      <div className="flex flex-col justify-center p-6 lg:p-16 lg:min-w-[50%] xl:p-20 2xl:px-36">
        <h1 className="font-extrabold mb-24">pinsb.app</h1>
        
        <h2 className="text-4xl font-bold mb-8">
          Do NOT join the <s>everyone&rsquo;s</s> exclusive skateboarding spots app
        </h2>
        
        <h2 className="text-xl mb-24">Seriously, don&rsquo;t sign up for the waitlist. These spots are way too hard for you!.
        </h2>
      
        <FormWaitList />
        
        <div className="w-full flex items-center mt-auto justify-end">
          <h3>Do not follow us on social media</h3>
          <Button variant="link" size="icon" asChild>
            <Link href="https://www.instagram.com/pinsb.app/" target="_blank">
              <Image src={instagramIcon} alt="instagram icon" className="mr-2 size-5 dark:invert" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
