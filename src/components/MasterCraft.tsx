import Logo from "../images/logo-mastercraft.svg"
import Bookmark from "../images/icon-bookmark.svg"

type prop = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MasterCraft = ({setShowModal}:prop) => {

  const openModal = () => {
    setShowModal(true)

  }

  return (
    <section className='bg-white px-6 py-12 md:p-10 rounded-xl md:-mt-30 -mt-24'>
        <div className='relative flex flex-col items-center text-center'>
            <img src={Logo} alt="Logo" className="absolute -top-[5rem] md:-top-[4.2rem]"/>
            <h1 className='font-bold my-6 text-xl'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-slate-500 font-semibold'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            {/* CTA BUTTONS */}
            <div className='flex gap-4 mt-8 justify-between w-full'>
                <button onClick={openModal} className='bg-moderateCyan hover:bg-darkCyan text-white font-semibold rounded-full px-6 md:px-12 py-2'>Back this project</button>
                <div className='flex cursor-pointer md:bg-slate-300 rounded-full pr-4 hover:opacity-80'>
                    <button ><img src={Bookmark} alt={Bookmark} /></button>
                    <button className='hidden md:block ml-2 font-semibold text-slate-800'>Bookmark</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MasterCraft