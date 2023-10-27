import React,{ useState } from "react"
import { useAppDispatch } from "../store/Store"
import { updatePledge } from "../store/features/pledgeSlice"

type pledgeProps ={
    title: string,
    pledge: number,
    reward: string,
    amountLeft: number,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setShowThanks: React.Dispatch<React.SetStateAction<boolean>>
}

const PledgeCard = ({title,pledge, reward, amountLeft, setShowModal, setShowThanks}:pledgeProps) => {
    const dispatch = useAppDispatch()

    const [showInput, setShowInput ] = useState(false)
    const [pledgeAmount, setPledgeAmount] = useState<number>(pledge)

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(updatePledge(pledgeAmount))
        setShowModal(false)
        setShowThanks(true)
    }

  return (
    <button disabled = {amountLeft === 0 && true} className={`card text-left outline-none md:flex transition-all duration-300 ${showInput && "border-moderateCyan"} hover:border-moderateCyan disabled:opacity-50`}>
        <div className="flex justify-center items-center w-5 h-5 flex-shrink-0 rounded-full border border-slate-300 md:mr-5 mb-2">
            <div className={`${showInput && "w-3 h-3 rounded-full bg-moderateCyan"}`}></div>
        </div>

        <div>
            <div className="md:flex justify-between">
                <div className="md:flex">
                    <h1 onClick={() => setShowInput(!showInput)} className="transition-all mr-4 duration-300 ease-in-out font-bold text-slate-900 hover:text-moderateCyan mb-3">{title}</h1>
                    <h2 className="font-bold text-moderateCyan">"Pledge ${pledge} or more"</h2>
                </div>
                <h1 className="md:block hidden items-center"><span className="font-bold text-3xl text-slate-900 mr-1">{amountLeft}</span> left</h1>
            </div>
            <p className="py-4">{reward}</p>
            <h1 className="md:hidden flex items-center pb-6"><span className="font-bold text-3xl text-slate-900 mr-1">{amountLeft}</span> left</h1>
            <hr className={`${showInput ? "py-4" : "hidden"}`}/>
            <form className={`${showInput ? "flex" : "hidden"} items-center md:justify-between flex-col md:flex-row`}>
                <label htmlFor="pledge" className="mb-5">Enter your pledge</label>
                <div className="flex">
                    <div className="flex border font-bold border-slate-300 mr-3 rounded-full py-2 px-3">
                        <span className="mr-3 md:mb-0">$</span>
                        <input placeholder={pledge.toString()} id="pledge" type="text" className="outline-none w-[5rem] text-slate-800" value={pledgeAmount} onChange={(e)=> setPledgeAmount(Number(e.target.value))}/>
                    </div>
                    <span className="transition-all duration-200 bg-moderateCyan hover:bg-darkCyan text-white rounded-full py-2 px-4" onClick={handleSubmit}>Continue</span>
                </div>
            </form>
        </div>
  </button>
  )
}

export default PledgeCard