import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import leftarrow from "../leftarrow.svg";
import { useContextData } from "../context/ContextProvider";
const ProductSlider = ({keyword}) => {
  const [sliderData, setSliderData] = useState(null);
  const [sliding, setSliding] = useState(false);
  const {roundedPrice,getProdData} = useContextData()
  const navigate = useNavigate()
  useEffect(() => {
    getProdData(keyword,setSliderData)
  }, []);

  const slidereRef = useRef(null)
  const slideItem = useRef(null)

  function scrollDiv(direction){
    if(slidereRef.current.scrollLeft < 1){
      setSliding(false)
    }else{setSliding(true)}
    if(direction === "right"){
      slidereRef.current.scrollLeft += 280
    }
    else if(direction === "left"){
      slidereRef.current.scrollLeft -= 280
    }
  }

  useEffect(()=>{
    console.log(sliderData)
  },[sliderData])

return(
    <div className="products-slider">
        <div className="slider-title-bar">
            <h3>Best <span style={{textTransform:"capitalize"}}>{keyword}</span></h3>
            <Link to={`search/${keyword}`}>View All</Link>
        </div>
        <div ref={slidereRef} className="products-container hide-scrollbar">
            {sliderData?.products.map((item)=>{
            return <div ref={slideItem} key={item.title} className="slider-product">
                <img src={item.thumbnail} alt="" />
                <h3>{item.title}</h3>
                <p style={{color:"green",fontSize:"1.2rem"}}>${item.price - roundedPrice(item.price,item.discountPercentage).toFixed(2)}</p>
                <p style={{textDecoration:"line-through"}}>${item.price}</p>
                <button onClick={()=>navigate(`/products/${item.id}`)} >View Product</button>
            </div>
            })}
        </div>
        <button onClick={()=>scrollDiv("right")} className="slider-arrow-btn right"><img src={leftarrow} alt="" /></button>
        <button style={sliding?{display:"block"}:{display:"none"}} onClick={()=>scrollDiv("left")} className="slider-arrow-btn left"><img src={leftarrow} alt="" /></button>
    </div>
)
};

export default ProductSlider;
