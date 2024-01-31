import Image from "next/image";

export default function authentificationLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="w-full">
            <div className="mx-auto mt-48">
                <div className="w-full flex items-center justify-center">
                    <div className="w-[35%]">
                     <Image className="mx-auto" src={"/logoEpitech.svg"} alt="logo Epitech" width={250} height={250}/>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}