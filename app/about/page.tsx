import Image from "next/image"
import Link from "next/link"
import "./index.css"

const Page = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2>Om oss</h2>
        <h3>Vem vi är och varför vi gör det vi gör!</h3>
        <p>
          Välkommen till allyourgolf, där din passion för golf möter
          bekvämlighet! Vi förstår glädjen och spänningen som kommer med att
          förbereda sig för din nästa golfsäsong eller runda. Vårt uppdrag är
          enkel men betydelsefull: att samla en härlig samling av golfprodukter
          från olika pålitliga återförsäljare, allt på ett ställe. Vi tror på
          att göra din golfshoppingupplevelse lika sömlös och njutbar som den
          perfekta svingen.
        </p>

        <h3>Upptäck glädjen i bekymmersfri golfshopping</h3>

        <Image
          alt="golf image"
          src="https://images.pexels.com/photos/5885314/pexels-photo-5885314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
        />

        <p>
          I den vidsträckta världen av golfutrustning kan det ibland kännas som
          att leta efter en nål i en höstack när du försöker hitta rätt
          utrustning och tillbehör. Det är här vi kommer in. allyourgolf är din
          främsta destination för allt inom golf och vi sammanför noggrant en
          mångfald av produkter för att tillgodose behoven hos varje
          hobbygolfare.
        </p>
        <h3>Varför vi gör det vi gör</h3>
        <Image
          alt="golf image"
          src="https://images.pexels.com/photos/1175015/pexels-photo-1175015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
        />
        <p>
          Vår kärlek till golf sträcker sig bortom fairways; det handlar om att
          främja en gemenskap av golfentusiaster som delar samma spänning och
          engagemang. Vi tror att varje sving bör stödjas av kvalitetsutrustning
          som förbättrar din prestation och njutning på banan.
          <br />
          <br />
          På allyourgolf är vi inte bara en marknadsplats; vi är din golfkamrat
          som förenklar din shoppingresa så att du kan fokusera på det du älskar
          mest – att spela golf. Gå med oss och skapa oförglömliga ögonblick på
          banan, en sving åt gången.
          <br />
          <br />
          Trevlig shopping, och må dina drives vara raka och dina puttar
          magiska!
        </p>
        <Link href="/shop">
          <button className="primary-button">Ta mig till produkterna!</button>
        </Link>
      </div>
    </div>
  )
}

export default Page
