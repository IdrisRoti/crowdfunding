import { pledgeData } from "../data"
import Close from "../images/icon-close-modal.svg"
import PledgeCard from "./PledgeCard"

type prop = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setShowThanks: React.Dispatch<React.SetStateAction<boolean>>
}

const PledgesModal = ({setShowModal, setShowThanks}:prop) => {  
  return (
    <section className="overlay">
      <div className="card h-[95%] md:h-[90%] overflow-auto py-8 px-5 w-[80%] md:w-[70vw] lg:w-[50vw] shadow-lg scrollbar">
        {/* MODAL HEADING */}
        <div className="flex justify-between gap-3">
          <div>
            <h1 className="font-bold mb-3 text-xl text-slate-800">Back this project</h1>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          </div>
          <span onClick={()=> setShowModal(false)}  className="cursor-pointer"><img className="hover:opacity-60" width={25} src={Close} alt="" /></span>
        </div>

        {/* PLEDGES */}
        <button className="card text-left md:flex transition-all duration-300 hover:border-moderateCyan">
          <div className="w-5 h-5 flex-shrink-0 rounded-full border border-slate-300 md:mr-5 mb-2">
            <div></div>
          </div>
          <div>
            <h1 className="font-bold text-slate-900 mb-3 hover:text-moderateCyan duration-300 ease-in-out transition-all" onClick={()=> setShowThanks(true)}>Pledge with no reward</h1>
            <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
          </div>
        </button>

        {
          pledgeData.map((pledge) => (
            <PledgeCard key={pledge.id} cursor-pointer {...pledge} setShowModal={setShowModal} setShowThanks={setShowThanks}/>
          ))
        }
      </div>
    </section>
  )
}

export default PledgesModal