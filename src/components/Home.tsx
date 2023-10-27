import { useState } from "react";
import About from "./About";
import Hero from "./Hero";
import MasterCraft from "./MasterCraft";
import PledgesModal from "./PledgesModal";
import Status from "./Status";
import ThankYouPage from "./ThankYouPage";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  

  return (
    <div className="min-h-screen bg-slate-100 pb-10 relative">
      <Hero />
      <main className="max-w-[768px] mx-auto p-5 md:p-4">
        <MasterCraft setShowModal={setShowModal}/>
        <Status/>
        <About setShowModal={setShowModal}/>
        {showModal && <PledgesModal setShowModal={setShowModal} setShowThanks={setShowThanks}/>}
        {showThanks && <ThankYouPage setShowThanks={setShowThanks}/>}
      </main>
    </div>
  );
};

export default Home;
