import { useState, useEffect } from "react"

function Banner() {
    const [isDedktop, setIsDesktop] = useState(window.innerWidth > 900)

    useEffect(() => {

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 900)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [isDedktop])


    return (
        <div className={`flex ${isDedktop ? 'flex-row' : 'flex-col'} w-full isolate overflow-hidden bg-white py-24 sm:py-32`}>
            <img
                alt=""
                src="https://www.motofichas.com/images/articulos/aprilia/rsv4-rr/aprilia-rsv4-2021-estudio-gris.jpg"
                className="inset-0 z-10 h-full w-auto object-fill object-right md:object-cente"
            />
            {
                isDedktop ? (
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-xl font-bold tracking-tight text-black sm:text-6xl">The best option on the market</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-800">
                                Feel free with your new motorcycle
                            </p>
                            <h3 className="flex mt-10 text-3xl font-extralight items-center text-gray-500">
                                After: <p className="text-red-500 font-extralight text-2xl ml-3"> $100.000 Us</p>
                            </h3>
                        </div>


                        <a className="inline-block px-8 py-3 mt-10 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
                            href="#footer">More Information</a>

                    </div>
                ) : (
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                        <a className="inline-block px-8 py-3 mt-10 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
                            href="#footer">More Information</a>
                    </div>
                )
            }
        </div>
    )
}

export default Banner