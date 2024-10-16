import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-image-container">
          <Image
            src="https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="snooze"
            fill
          />
        </div>
        <h2>Oops!</h2>
        <p>
          Det verkar som att du har hamnat i en inredningsfälla! Oroa dig inte,
          även de mest erfarna inredarna kan stöta på oväntade hinder ibland.
          Slå tillbaka till vår <Link href="/shop">startsida</Link> så hjälper
          vi dig att hitta rätt väg till ditt drömrum!
        </p>
      </div>
    </main>
  );
}
