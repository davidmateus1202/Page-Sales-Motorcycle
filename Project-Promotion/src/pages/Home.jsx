import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Banner from "../components/Banner"
import Footer from "../components/Footer"


function Home() {
    const motos = [
        {
          "nombre": "Superbike 300",
          "precio_antes": "$120,000 Us",
          "precio_despues": "$100,000 Us",
          "imagen": "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/11/mejores-motos-deportivas-2022-2882765.jpg?tf=3840x",
          "descripcion": "Scooter para la ciudad"
        },
        {
          "nombre": "City Scooter",
          "precio_antes": "$10,000 Us",
          "precio_despues": "$8,500 Us",
          "imagen": "https://www.mundomotero.com/wp-content/uploads/2023/01/ducati-panigale-v4-r-2023-640x0.jpg",
          "descripcion": "Scooter para la ciudad"
        },
        {
          "nombre": "Off-Road Beast",
          "precio_antes": "$25,000 Us",
          "precio_despues": "$22,000 Us",
          "imagen": "data:image/jpeg;base64,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",
          "descripcion": "Scooter para la ciudad"
        },
      ]
      

    return (
        <div className="flex flex-col w-full h-full bg-white overflow-hidden">
            <Navbar />
            <Banner/>
            
                <div id="details" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 px-5 md:px-60">
                {
                    motos.map((moto, index) =>(
                        <Card  
                        key={index} imagen={moto.imagen} nombre={moto.nombre} precio={moto.precio_antes} precio_despues={moto.precio_despues} description={moto.descripcion}/>
                    ))
                }


            </div>
            
            <Footer/>

            

        </div>
    )
}

export default Home
