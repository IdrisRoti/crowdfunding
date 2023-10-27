import React from "react";

type prop = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const About = ({setShowModal}:prop) => {
  const openModal = () => {
    setShowModal(true)

  }

  return (
    <section className="bg-white px-6 py-12 md:p-10 rounded-xl mt-6">
      <h1 className="text-3xl font-bold mb-5">About this project</h1>
      <p className="text-slate-500 mb-8">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-slate-500">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {/* PLEDGE CARD 1 */}
      <article className="card">
        <div className="md:flex justify-between">
            <h1 className="text-xl font-bold  text-slate-800 mb-2">Bamboo Stand</h1>
            <h3 className="text-moderateCyan font-bold">Pledge $25 or more</h3>
        </div>
        <p className="py-7">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <div className="md:flex justify-between items-center">
            <h1>
            <span className="text-4xl font-bold text-slate-800">101</span> left
            </h1>
            <button onClick={openModal} className="bg-moderateCyan hover:bg-darkCyan text-white font-semibold rounded-full px-6 md:px-12 py-3 mt-5 md:mt-0">Select Reward</button>
        </div>
      </article>
      {/* PLEDGE CARD 2 */}
      <article className="card">
        <div className="md:flex justify-between">
            <h1 className="text-xl font-bold  text-slate-800 mb-2">Black Edition Stand</h1>
            <h3 className="text-moderateCyan font-bold">Pledge $75 or more</h3>
        </div>
        <p className="py-7">
        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.
        </p>
        <div className="md:flex justify-between items-center">
            <h1>
            <span className="text-4xl font-bold text-slate-800">64</span> left
            </h1>
            <button onClick={openModal} className="bg-moderateCyan hover:bg-darkCyan text-white font-semibold rounded-full px-6 md:px-12 py-3 mt-5 md:mt-0">Select Reward</button>
        </div>
      </article>
      {/* PLEDGE CARD 3 */}
      <article className="card opacity-30">
        <div className="md:flex justify-between">
            <h1 className="text-xl font-bold  text-slate-800 mb-2">Mahogany Special Edition</h1>
            <h3 className="text-moderateCyan font-bold">Pledge $200 or more</h3>
        </div>
        <p className="py-7">
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.
        </p>
        <div className="md:flex justify-between items-center">
            <h1>
            <span className="text-4xl font-bold text-slate-800">0</span> left
            </h1>
            <button disabled className="bg-darkGray text-white font-semibold rounded-full px-6 md:px-12 py-3 mt-5 md:mt-0">Select Reward</button>
        </div>
      </article>
    </section>
  );
};

export default About;
