import Projects from "../Components/Projects"

export default function ProjectsPage(){
    return(
        <>
            <div className="min-h-max lg:min-h-[865px] max-w-screen-lg mx-auto mt-[50px] transform duration-[.3s] pb-[50px] lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Projects/>
                </div>
            </div>
        </>
    )
}