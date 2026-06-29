import Footer from "./content/components/Footer"
import { AppRouter } from "./router/AppRouter"

function LovatouApp() {

  return (
    <>
      <AppRouter />
      <Footer companyName="Lovatou"
        whatsappUrl="https://wa.me/525644430843"
        linkedinUrl="https://www.linkedin.com/in/daniel-coello-lobato-25b7b7202"
        instagramUrl="https://www.instagram.com/lovatou1"
      />
    </>


  )
}

export default LovatouApp
