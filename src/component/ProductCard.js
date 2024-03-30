import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div>

      <div className="card" onClick={showDetail}>
        <div className="image-container">
          <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
          <img src={item?.img} alt={item?.title} />
        </div>
        <div className="product-detail">
          <div className="product-detail-title">{item?.title}</div>
          <div>₩{item?.price}</div>
          <div className="new-product">{item?.new ? "신제품" : ""}</div>
        </div>
      </div>
    </div>

  )
}

export default ProductCard
