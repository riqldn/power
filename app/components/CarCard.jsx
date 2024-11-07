import Image from "next/image";


export default function CarCard({ paragraph, header, image }) {
    return (<>
        <div className="card-container shadow-sm rounded-[25px] p-10 grow-0 shrink-0 flex flex-col">
            <div className="card-image  relative  max-w-full">
                <Image className="object-contain md:object-cover"alt="limousine" fill src={image} sizes="(min-width: 768px) 33vw, 90vw" quality={80} />
            </div>
            <div className=" flex flex-col justify-self-start card-text">
                <h3 className="text-xl pb-3">{header}</h3>
                <p className="text-sm max-w-[32ch] leading-snug font-semibold">{paragraph}</p>
            </div>
        </div>
    </>
    )
}
