import Image from "next/image"
import Link from "next/link";
export type cardType = {
    image : string;
    title : string;
    liveLink : string ;
    details : string;
}
function ProjectsCard({title , liveLink , details , image} : cardType) {
  return (
    <div className="w-[500px] shadow-[0px_0px_5px_white]">
        <div className="w-full h-[250px] bg-blue-500 mb-3">
        <Image className="w-full h-full" width={1000} height={1000} src={image} alt="title" />
        </div>
        <div className="flex flex-col gap-2 px-3 pb-3 text-white">
            <h2 className="text-2xl">{title}</h2>
            <Link href={liveLink}>{liveLink}</Link>
            <p>{details}</p>
        </div>
    </div>
  )
}

export default ProjectsCard