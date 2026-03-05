import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Styles from "./watch.module.css";


function Watch() {
  return (
    <>
        <Header  />
      
        <Container>
          <section className={Styles.watch}>
            <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=OVCd0CHPH_RMoMBE" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </section>
          
        </Container> 
        <Footer />
    
    </>
    
  );
}

export default Watch;