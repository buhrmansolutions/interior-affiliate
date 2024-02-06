import Image from "next/image"
import "./index.css"

const Nike = () => (
  <a
    rel="sponsored"
    href="https://www.awin1.com/cread.php?s=3003483&v=16339&q=424590&r=1556248"
    target="_blank"
  >
    <img src="https://www.awin1.com/cshow.php?s=3003483&v=16339&q=424590&r=1556248" />
  </a>
)

const blogPosts = [
  {
    title:
      "Nya Höjdpunkter på allyourgolf - Äkta Nike-produkter nu tillgängliga!",
    date: "6 februari 2024",
    author: "allyourgolf-teamet",
    Component: Nike,
    introText:
      "Vi är glada att meddela att allyourgolf nu har äkta produkter från Nike tillgängliga! Efter noggrann utvärdering och hårt jobb har vi lyckats inkludera Nike i vårt utvalda sortiment av högkvalitativa golfprodukter. Detta markerar en spännande utveckling i vårt engagemang att erbjuda dig det allra bästa för din golfupplevelse.",
    sections: [
      {
        title: "Nike på allyourgolf",
        text: "Nu kan du utforska Nike-golfkläder, skor och tillbehör direkt på allyourgolf. Vi är stolta över att kunna erbjuda dessa kvalitetsprodukter som kompletterar din golfutrustning och förhöjer din prestation på banan.",
      },
      {
        title: "Fortsatt Tillväxt",

        text: "Vi fortsätter att växa och strävar efter att inkludera fler erkända varumärken för att diversifiera vårt sortiment. Håll dig uppdaterad för kommande nyheter och spännande tillägg till allyourgolf. Tack för ditt fortsatta stöd och följ med oss på resan mot att skapa en ännu bättre golfgemenskap!\n\nGlad golfning!",
      },
    ],
  },
  {
    title: "Välkommen till allyourgolf - Nu live!",
    date: "30 januari 2024",
    author: "allyourgolf-teamet",
    image:
      "https://images.pexels.com/photos/6230538/pexels-photo-6230538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    introText:
      "Efter noggrann planering och passionerat engagemang är vi glada att meddela att allyourgolf nu är live och erbjuder dig en digital fristad för alla dina golfbehov. Medan vi för närvarande befinner oss i den spännande fasen av att etablera partnerskap med toppklassiga golfbolag kunde vi inte vänta med att dela vår framsteg med dig.",
    sections: [
      {
        title: "Påbörjar en resa med Dummy Data",
        text: "Även om våra virtuella hyllor för närvarande är prydda med dummy-data och fiktiva produkter så vill ni att ni ska veta om att detta bara är början. Vi arbetar outtröttligt bakom kulisserna för att smida partnerskap med erkända golfbolag, vilket säkerställer att de verkliga skatterna snart kommer att pryda våra sidor.",
      },
      {
        title: "Vad som väntar för allyourgolf",
        image:
          "https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "Under de kommande veckorna kan du förvänta dig en spännande förvandling när vi avslöjar äkta, högkvalitativa golfprodukter från betrodda varumärken. Vårt åtagande att ge dig en sömlös och njutbar shoppingupplevelse förblir orubbligt. Vi bygger inte bara en marknadsplats; vi skapar en gemenskap där din golfresa firas.\n\nHåll dig uppdaterad för nyheter och var med oss i förväntan av ett extraordinärt golfäventyr med allyourgolf. Vi uppskattar ditt stöd när vi sätter igång den här spännande nya kapitlet tillsammans!\n\nGlad golfning!",
      },
    ],
  },
]
type Props = {
  title: string
  date: string
  author: string
  image?: string
  introText: string
  sections: Array<{ title: string; text: string; image?: string }>
  Component?: any
}
const BlogPost = (
  { title, date, author, image, Component, introText, sections }: Props,
  index: number
) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <h4>
        by <span className="author">{author}</span> - {date}
      </h4>
      {image && <Image fill src={image} alt="Blog post image" />}
      {Component && <Component />}
      <p>{introText}</p>
      {sections.map(
        ({ image: sectionImage, title: sectionTitle, text: sectionText }) => (
          <div className="blog-post-section" key={sectionTitle}>
            {sectionImage && (
              <Image fill src={sectionImage} alt="Section post image" />
            )}
            <h3>{sectionTitle}</h3>
            <p>{sectionText}</p>
          </div>
        )
      )}
      {index < blogPosts.length - 1 && <div className="divider" />}
    </div>
  )
}

const Page = () => {
  return <div className="blog-page">{blogPosts.map(BlogPost)}</div>
}

export default Page
