import Projects from "../Components/Projects"

export default function ProjectsPage(){
    return(
        <>
            <div className="min-h-[865px] max-w-screen-lg mx-auto mt-[50px] px-[15px] md:p-0 transform duration-[.3s]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Projects></Projects>
                </div>
            </div>
        </>
    )
}