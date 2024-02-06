import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-image-container">
          <Image
            src="https://images.pexels.com/photos/15877158/pexels-photo-15877158/free-photo-of-man-falt-spelar-gras.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="in the bunker"
            fill
          />
        </div>
        <h2>Oops!</h2>
        <p>
          Det verkar som att du har hamnat i internetbunkern. Oroa dig inte,
          även de bästa golfspelarna stöter på oväntade hinder ibland. Slå
          tillbaka till vår <Link href="/shop">startsida</Link> så hjälper vi
          dig att komma tillbaka på fairway!
        </p>
      </div>
    </main>
  )
}
