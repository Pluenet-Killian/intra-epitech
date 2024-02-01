export default function BarTimeline({name}: {name: string}) {
    return (
        <>
            <div className="w-[500px] bg-[#E7B586] h-[35px] rounded-lg">
                <div className="flex w-full h-full items-center ml-4">
                    <p className="">{name}</p>
                </div>
            </div>
        </>
    )
}