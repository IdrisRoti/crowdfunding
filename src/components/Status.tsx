import { useAppSelector } from "../store/Store"

const Status = () => {
    const status = useAppSelector(state=>state.pledge)
    const progressValue:number = 10
    

    return (

    <section className="px-6 py-12 md:p-10 bg-white mt-6 rounded-xl">
        <div className="md:flex md:space-x-20 text-center md:text-left">
            <article className="md:flex items-center">
                <div>
                    <h1 className="font-bold text-4xl">${status.backed.toLocaleString()}</h1>
                    <p className="my-3 text-slate-400 font-bold">of ${status.toBeBacked.toLocaleString()} backed</p>
                </div>
                <div className="hidden md:block h-12 w-[2px] ml-10 bg-slate-300"></div>
                <hr className="md:hidden my-8 w-2/5 mx-auto"/>
            </article>
            <article className="md:flex items-center">
                <div>
                    <h1 className="font-bold text-4xl mt-3">{status.backers.toLocaleString()}</h1>
                    <p className="my-3 text-slate-400 font-bold">total backers</p>
                </div>
                <div className="hidden md:block h-12 w-[2px] ml-10 bg-slate-300"></div>
                <hr className="md:hidden my-8 w-2/5 mx-auto"/>
            </article>
            <article>
                <h1 className="font-bold text-4xl mt-3">{status.daysLeft}</h1>
                <p className="mt-3 text-slate-400 font-bold">days left</p>
            </article>
        </div>
        {/* PROGRESS BAR */}
        <div className="mt-5 w-[100%] rounded-full bg-slate-200 h-4">
            <div className="w-[80%] rounded-full bg-darkCyan h-4"></div>
        </div>
    </section>
  )
}

export default Status