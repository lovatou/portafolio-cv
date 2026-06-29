import { Card, CardText, CardTitle } from "react-bootstrap"
import logoportada from "../../../../assets/pngtree-circuit-technology-background-futuristic-technology-hardware-vector-png-image_32651702.jpg"
import "./DashboarPage.css"
import logo from "../../../../assets/FOTO_DCL.jpeg"
export const DashboardPage = () => {
    return (

        <div className="background-container d-flex justify-content-center"
            style={{ backgroundImage: `url(${logoportada})` }}
        >
             <div className="container shadow mt-4 col-1">
                    <img
                        className="logo"
                        src={logo}
                        width={"290"}
                        alt="Cyclops IX" />

                </div>
            <div className="container shadow mt-4 col-6">
               


                <Card className="opacity-50" border="success" style={{ width: '18rem' }}>
                    <CardTitle>
                        Ingeniero En Computación
                    </CardTitle>
                    <CardText style={{ color: "black" }}>
                        Soy un arquitecto de software que le apasiona brindar soluciones de arquitectura asi mismo como el analisis de requerimientos de negocio,
                        cabe mencionar que me eh desenvuelto en varios roles dentro de las empresas, como lider tecnico, analista funcional, y desarrollador de software que siempre esta en constante aprendizaje.
                    </CardText>

                </Card>
            </div>


        </div>


    )
}