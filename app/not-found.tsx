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
          It seems like you&apos;ve landed in the bunker of the internet.
          Don&apos;t worry; even the best golfers hit a few unexpected hazards.
          Swing back to our
          <Link href="/shop"> homepage </Link>and let&apos;s get you back on the
          fairway!
        </p>
      </div>
    </main>
  )
}
