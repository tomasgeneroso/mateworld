import React, {useState} from "react"; 
import {Carousel,Image} from 'react-bootstrap';
import Article from "./Article.jsx";
const data = [
  {
   image: require('./images/ImageProductsCarousel/SlideElement1.jpg'), 
   caption:"Winter Season is coming!",
   description:"Description Here"
  },
  {
    image:require('./images/ImageProductsCarousel/SlideElement2.jpg'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('./images/ImageProductsCarousel/SlideElement3.jpg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

const css = `

width={100%} height={500}

`
function HomeBody() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  <style>
    {css}
  </style>

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>         
            <Image src={slide.image}width={'100%'} height={500} alt={slide.description}/>
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>

    {/*ARTICLES*/}
    
      <Article />

    </div>

  );
}
export default HomeBody;