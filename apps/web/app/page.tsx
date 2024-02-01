import Image from "next/image";
import Timeline from '../components/accueil/Timeline/Timeline';

export default function Home() {

  return (
    <div className="w-full h-screen">
      <div className="w-full mt-16 flex justify-center">
          <Timeline/>
      </div>
      </div>
  );
}
