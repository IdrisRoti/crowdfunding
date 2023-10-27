import Check from "../images/icon-check.svg";

type prop = {
    setShowThanks: React.Dispatch<React.SetStateAction<boolean>>
  }

const ThankYouPage = ({setShowThanks}:prop) => {
const closeModal = () => {
    setShowThanks(false)
}

  return (
    <section className="overlay">
      <div className="card overflow-auto py-8 px-6 w-[80%] md:w-[70vw] lg:w-[30vw] shadow-lg text-center flex flex-col items-center">
        <img src={Check} alt="check" />
        <h3 className="text-slate-800 font-bold text-xl mt-5">Thanks for your support!</h3>
        <p className="my-5">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={closeModal} className="bg-moderateCyan py-3 px-5 rounded-full text-white font-bold hover:opacity-80">Got it!</button>
      </div>
    </section>
  );
};

export default ThankYouPage;
