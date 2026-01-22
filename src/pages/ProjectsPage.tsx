import Projects from "../components/Projects"

export default function ProjectsPage(){
    return(
        <>
            <div className="min-h-max lg:min-h-[865px] max-w-screen-lg mx-auto mt-[50px] transform duration-[.3s] pb-[50px]">
                <div className="grid grid-cols-1 gap-4">
                    <Projects/>
                </div>
            </div>
        </>
    )
}