import React, { useState }from "react"
import styled from "styled-components"
import slider1 from "../../assets/images/slider/slider3.jpg"
import slider2 from "../../assets/images/slider/slider4.jpg"
import slider3 from "../../assets/images/slider/slider5.jpg"

const Img = styled.img`
@media(max-width: 999px) {
    object-fit: cover;
    width: 100vw;
    height: 60vw;
}
@media(min-width: 1000px) {
    object-fit: cover;
    width: 100vw;
    height: 80vh;
}
`
const Wrapper = styled.div`
    width: 100vw;
    .animation {
        animation-name: appear;
        animation-delay: 4s;
        animation-duration: 1s;
    }
    .photos {
        display: flex;
        width: 200vw;
        transform: translateX(-100vw);
    }
    @keyframes appear {
        from {
            transform: translateX(0);
        }
        to {
            
            transform: translateX(+100vw);
        }
    }
`

function Slider() {
    const [number, setNumber] = useState(1);
    const timer = setTimeout(() => {
        if(number === 3) {
            setNumber(1)
        }
        if(number < 3) {
            setNumber(number + 1)
        }
        
      }, 5000);
    return (
    <Wrapper>
        {
            number === 1 
            ? <div className="photos"><Img src={slider2} className="animation"/><Img src={slider1} className="animation"/></div> : null
        }
         {
            number === 2 
            ? <div className="photos"><Img src={slider3} className="animation"/><Img src={slider2} className="animation"/></div> : null
        }
         {
            number === 3 
            ? <div className="photos"><Img src={slider1} className="animation"/><Img src={slider3} className="animation"/></div> : null
        }
        
        
       
    </Wrapper>
    )
}
  
  export default Slider


  /* 
  <button
            onClick={
                number === 1 
                ? () => setNumber(number + 2) : () => setNumber(number - 1)
            }
            
            
        >
            -
        </button>
        <button
            onClick={
                number === 3  ? () => setNumber(number - 2) : () => setNumber(number + 1)
            }
            
        >
            +
        </button>
*/