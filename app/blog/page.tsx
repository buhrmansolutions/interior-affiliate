import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "./blogPosts"
import "./index.css"

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
        av <span className="author">{author}</span> - {date}
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
      <Link href="/shop">
        <button className="primary-button">Ta mig till produkterna!</button>
      </Link>
      {index < blogPosts.length - 1 && <div className="divider" />}
    </div>
  )
}

const Page = () => {
  return <div className="blog-page">{blogPosts.map(BlogPost)}</div>
}

export default Page
