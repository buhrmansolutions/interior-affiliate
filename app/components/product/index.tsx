import Link from "next/link"
import Image from "next/image"
import "./index.css"

const DiscountBadge = ({ discount }: { discount: string }) => {
  if (!discount) return null
  return <div className="discount-badge">- {discount}</div>
}

export type Product = {
  aw_deep_link: string
  product_name: string
  aw_product_id: string
  merchant_product_id: string
  merchant_image_url: string
  description: string
  merchant_category: string
  search_price: string
  category_name: string
  aw_image_url: string
  store_price: string
  display_price: string
  currency: string
  dateAdded: string
}

const Product = (product: Product, index: number) => {
  if (!product)
    return <div className="empty-product" key={`empty-product-${index}`} />
  return (
    <div className="product" key={product.product_name}>
      <div className="image-container">
        <Link href={product.aw_deep_link} target="_blank">
          <Image
            alt={product.product_name}
            src={product.merchant_image_url}
            width={0}
            height={0}
            sizes="100vw"
            style={
              false
                ? { width: "80%", height: "auto" }
                : { width: "auto", height: "80%" }
            }
          />
        </Link>
      </div>
      <h4>{product.product_name}</h4>
      <p>
        {new Intl.NumberFormat("sv-SE", {
          style: "currency",
          currency: "SEK",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(parseInt(product.search_price, 10))}
      </p>
      {/* <DiscountBadge discount={product.discount} /> */}
    </div>
  )
}

export default Product
