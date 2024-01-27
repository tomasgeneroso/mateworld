import React from "react";
import { Container, Row } from "react-bootstrap";

const dataArticleHome = [
  {
    id:1,
    title:"Nuestra filosofía y objetivos",
    text:"Nos encanta compartir nuestra pasión por la marihuana con cultivadores entusiastas. Nuestro objetivo es proporcionar la mejor genética. \n"+ 
   "Queremos ayudar a todos los cultivadores. Nuestro lema es simple: si sientes pasión por el cannabis, ¡puedes cultivar genética de calidad! \n"+
   "Creemos en la marihuana y su potencial, y queremos ayudar a los cultivadores y consumidores a aprender más sobre esta maravillosa planta."
  },
  {
    id:2,
    title:'Consejos para cultivar marihuana autofloreciente en interior',
    text:"Las cepas autoflorecientes son un tipo de cannabis que no había triunfado en el mercado comercial hasta los últimos años. A día de hoy, están arrasando gracias a su facilidad de cultivo y sus buenos resultados. \n"+ 
   "Con estos consejos para cultivar autos en interior, ¡podrás sacar el máximo provecho de tus plantas autoflorecientes!"
  },
    
]
const Article = ()=>{
  return(
  <div>
    <Container 
      style={{
        width:"100%",
        maxWidth:"100%",
        
    }}
    >
    {dataArticleHome.map((article,id)=>{
      return(
        <Row  key={id}  style={{
          height: "300px",
          justifyContent:"center",
          padding: "20px 20px 10px 20px",
          
        }}>
        <div 
          style={{
            height: "300px",
            maxWidth:"1143px",
            padding: "20px 20px 10px 20px",
            justifyContent:"center"
          }}
        >
          <h3 className="display:block,font-size:20px">
            {article.title}
          </h3>
          <p>
            {article.text}
          </p> 
          <br />
        </div>
      </Row>
      )    
    })}  
    </Container>
  </div>
  )
}

export default Article