import BarTimeline from "./BarTimeline"

export default function Timeline() {
    const showMonth = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"]
    return (
    <>
    <div className="w-[65%] bg-gray-200 h-[350px] rounded-lg">
        <p className="text-center text-2xl mt-3 font-semibold">Timeline</p>
        <div className="mx-16 mt-4">
            <div className="flex items-center justify-between space-x-6">
                {showMonth.map((value, index) => (
                    <p className="text-xl" >{value}</p>
                ))}
            </div>
            
        </div>
        <div className="flex justify-center">
        <div className="w-[95%] h-[200px] bg-gray-100 mt-4 rounded-lg">
            <div className="w-full flex flex-col space-y-2 ml-16 mt-4">
                <BarTimeline name="navy"/>
                <BarTimeline name="navy"/>
                <BarTimeline name="navy"/>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}