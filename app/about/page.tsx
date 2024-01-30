import Image from "next/image";
import "./index.css";

const Page = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About</h1>
        <h4>Who we are and why we do what we do!</h4>
        <p>
          Welcome to allyourgolf, where your passion for golf meets convenience!
          We understand the joy and excitement that comes with gearing up for
          your next golf season or round. Our mission is simple yet impactful:
          to curate a delightful collection of golf merchandise from various
          trusted merchants, all in one place. We believe in making your golf
          shopping experience as seamless and enjoyable as the perfect swing.
        </p>

        <h2>Discover the Joy of Hassle-Free Golf Shopping</h2>

        <Image
          alt="golf image"
          src="https://images.pexels.com/photos/5885314/pexels-photo-5885314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          layout="fill"
        />

        <p>
          In the vast landscape of golf gear, finding the right equipment and
          accessories can sometimes feel like searching for a needle in a
          haystack. That's where we come in. allyourgolf is your go-to
          destination for everything golf, carefully bringing together a diverse
          array of products to cater to the needs of every hobby golfer.
        </p>
        <h2>Why We Do What We Do</h2>
        <Image
          alt="golf image"
          src="https://images.pexels.com/photos/1175015/pexels-photo-1175015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          layout="fill"
        />
        <p>
          Our love for golf goes beyond the greens; it's about fostering a
          community of golf enthusiasts who share the same excitement and
          dedication. We believe that every swing should be backed by quality
          gear that enhances your performance and enjoyment on the course.
          <br />
          <br />
          At allyourgolf, we're not just a marketplace; we're your golfing
          companion, simplifying your shopping journey so you can focus on what
          you love most – playing golf. Join us in creating unforgettable
          moments on the course, one swing at a time.
          <br />
          <br />
          Happy shopping, and may your drives be straight and your putts be
          true!
        </p>
      </div>
    </div>
  );
};

export default Page;
