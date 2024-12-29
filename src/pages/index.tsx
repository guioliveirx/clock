import { Card } from "@/components/card";
import { Cards } from "@/components/cards";
import { Greeting } from "@/components/greeting";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 to-teal-600 w-screen h-screen ">
      <div className="flex justify-center items-center gap-4">
        <Cards />
      </div>
      <Greeting hours={Number(new Date().getHours())}/>
      a
    </div>

  );
}