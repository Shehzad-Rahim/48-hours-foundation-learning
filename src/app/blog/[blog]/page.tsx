import BlogsNavbar from "@/components/BlogsNavbar";
import { blogPost } from "../data"

function page({params} : {params : {blog : string}}) {
    const post = blogPost.find((post) => post.slug === params.blog);
    
    if (!post) {
        return <>
        <BlogsNavbar />
         <div className="h-[60vh] flex justify-center items-center">
            <h2 className="text-4xl text-yellow-500 underline underline-offset-[15px]">Could not found {params.blog} 😑 </h2>
        </div>
        </>
    }
  return (
    <>
        <BlogsNavbar />
        <div className=" w-[400px] h-[200px] flex flex-col items-center mx-auto my-10 border py-5 px-10 hover:shadow-[0px_0px_10px_white] rounded-lg hover:scale-110">
        {post.content.map((content , id) => {
           switch(content.type){
            case 'heading' :
                return <h1 className="text-2xl" key={id}>{content.value}</h1>
            case 'paragraph' :
                return <p className="text-center">{content.value}</p>
           }
        })}
        </div>
    </>
  )
}

export default page