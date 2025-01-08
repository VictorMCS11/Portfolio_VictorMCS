import useCarrouselLinks from "../Hooks/useCarrouselLinks"

export default function CarrouselLinks(){

    const { links, currentDirection, moveRight, moveLeft } = useCarrouselLinks();

    return (
      <>
        <div className="absolute h-[88%] w-[17%] right-[80%] top-1/2 -translate-x-0 -translate-y-1/2 bg-primary dark:bg-tertiary opacity-90 rounded-l-[20px] transform duration-[.1s] md:hover:scale-105 hover:cursor-pointer hover:opacity-100 z-10 flex">
          <button onClick={moveLeft}>
            <img src={currentDirection} alt="Mover a la izquierda" className="rotate-180 h-full" />
          </button>
        </div>
        <div className="h-full w-full rounded-[20px]">
          <div className="relative h-[88%] w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden">
            {links.length > 0 ? (
              links.map((link, index) => (
                <a
                  href={link.link}
                  className={`absolute h-full w-full rounded-[20px] flex items-center justify-center transform duration-200 ${link.translate}`}
                  key={index}
                  target='_blank'
                >
                  <img src={link.url} alt={`Link ${index + 1}`} className="h-full" />
                </a>
              ))
            ) : (
              <h1>No links</h1>
            )}
          </div>
        </div>
        <div className="absolute h-[88%] w-[17%] left-[80%] top-1/2 -translate-x-0 -translate-y-1/2 bg-primary dark:bg-tertiary opacity-90 rounded-r-[20px] transform duration-[.1s] md:hover:scale-105 hover:cursor-pointer hover:opacity-100 z-10 flex">
          <button onClick={moveRight}>
            <img src={currentDirection} alt="Mover a la derecha" className="h-full" />
          </button>
        </div>
      </>
    );
  }