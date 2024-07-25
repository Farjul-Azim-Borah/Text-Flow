import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-sky-900 to-blue-950 h-screen flex flex-col items-center pt-40">
      <h1 className="text-4xl font-serif pb-5 text-white">Welcome to TEXT-FLOW</h1>
      <p className="text-white pl-10 pr-10">This platform is an AI-based content generation tool that offers the ability to produce customized text content.</p>
      <br/>
      <p className="text-white md:pl-10 pr-10"> It facilitates grammar checking, provides code explanations, and offers support for blog idea generation and content creation.</p>
      <br/>
        {/* <Image src={'/logo.svg'} alt='logo' width={70} height={70}/> */}
      {/* <Link href={'/dashboard'}> */}
      <Link href={'/dashboard'}>
          <Button className="bg-green-700 hover:bg-green-900">Get Started For Free</Button>
      </Link>
      {/* </Link> */}
    </div>
  );
}
