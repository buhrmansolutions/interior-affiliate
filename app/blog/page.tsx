import Image from "next/image";
import "./index.css";

const blogPosts = [
  {
    title: "Welcome to allyourgolf - Now Live!",
    date: "January 30, 2024",
    author: "allyourgolf team",
    image:
      "https://images.pexels.com/photos/6230538/pexels-photo-6230538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    introText:
      "After meticulous planning and passionate dedication, we are thrilled to announce that allyourgolf is now live, bringing you a digital haven for all your golfing needs. While we're currently in the exciting phase of establishing partnerships with top-notch golf companies, we couldn't wait to share our progress with you.",
    sections: [
      {
        title: "Embarking on a Journey with Dummy Data",
        text: "While our virtual shelves are currently adorned with mock data and fictitious products, rest assured that this is just the beginning. We're working tirelessly behind the scenes to forge partnerships with renowned golf companies, ensuring that the real treasures will soon grace our pages.",
      },
      {
        title: "What's Next for allyourgolf",
        image:
          "https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        text: "In the coming weeks, anticipate an exciting transformation as we unveil genuine, high-quality golf products from trusted brands. Our commitment to providing you with a seamless and enjoyable shopping experience remains unwavering. We're not just building a marketplace; we're crafting a community where your golfing journey is celebrated.\n\nStay tuned for updates, and join us in the anticipation of an extraordinary golfing adventure with allyourgolf. We appreciate your support as we tee off into this exciting new chapter together!\n\nHappy golfing!",
      },
    ],
  },
];

const BlogPost = (
  { title, date, author, image, introText, sections },
  index
) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <h5>
        by <span className="author">{author}</span> - {date}
      </h5>
      <Image layout="fill" src={image} alt="Blog post image" />
      <p>{introText}</p>
      {sections.map(
        ({ image: sectionImage, title: sectionTitle, text: sectionText }) => (
          <div className="blog-post-section">
            {sectionImage && (
              <Image
                layout="fill"
                src={sectionImage}
                alt="Section post image"
              />
            )}
            <h2>{sectionTitle}</h2>
            <p>{sectionText}</p>
          </div>
        )
      )}
      {index < blogPosts.length - 1 && <div className="divider" />}
    </div>
  );
};

const Page = () => {
  return <div className="blog-page">{blogPosts.map(BlogPost)}</div>;
};

export default Page;
