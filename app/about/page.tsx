import Image from "next/image";
import Link from "next/link";
import "./index.css";

const Page = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h2>Om oss</h2>
        <h3>Vem vi är och varför vi gör det vi gör!</h3>
        <p>
          Välkommen till sovrumsinredning, där din stil och komfort förenas! Vi
          förstår glädjen och spänningen som kommer med att skapa ditt drömrum.
          Vårt uppdrag är enkelt men betydelsefullt: att samla en vacker
          kollektion av inredningsprodukter från pålitliga återförsäljare, allt
          på ett ställe. Vi tror på att göra din inredningsupplevelse lika
          smidig och njutbar som en god natts sömn.
        </p>

        <h3>Upptäck glädjen i bekymmersfri shopping</h3>

        <Image
          alt="bed image"
          src="https://images.pexels.com/photos/57686/pexels-photo-57686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
        />

        <p>
          I den stora världen av sovrumsinredning kan det ibland kännas som att
          leta efter en nål i en höstack när du försöker hitta rätt stil och
          detaljer för ditt rum. Det är här vi kommer in. Sovrumsinredning är
          din främsta destination för allt inom inredning, och vi sammanför
          noggrant en mångfald av produkter för att tillgodose behoven hos varje
          inredningsentusiast.
        </p>
        <h3>Varför vi gör det vi gör</h3>
        <Image
          alt="bed image"
          src="https://images.pexels.com/photos/7623568/pexels-photo-7623568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
        />
        <p>
          Vår kärlek till inredning sträcker sig bortom väggarna; det handlar om
          att främja en gemenskap av inredningsentusiaster som delar samma
          passion och engagemang. Vi tror att varje rum bör stödjas av
          kvalitetsprodukter som förbättrar både stil och funktionalitet.
          <br />
          <br />
          På sovrumsinredning är vi inte bara en marknadsplats; vi är din
          inredningspartner som förenklar din shoppingresa så att du kan
          fokusera på det du älskar mest – att skapa ditt drömhem. Gå med oss
          och skapa oförglömliga stunder i ditt rum, ett val i taget.
          <br />
          <br />
          Trevlig shopping, och må din inredning vara lika inspirerande som dina
          drömmar!
        </p>
        <Link href="/shop">
          <button className="primary-button">Ta mig till produkterna!</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
