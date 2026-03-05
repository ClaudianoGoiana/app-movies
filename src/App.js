import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import videos from "./Json/db.json";
import Category from "./components/Category";

const categories = [
  "Geografia", 
  "Como fazer e usar", 
  "Astronomia e Geografia", 
  "Climatologia, Meteorologia, Vegetação", 
  "Geologia e Hidrografia"      
];

function filterCategory(Id) {
  return videos.filter(video => video.category === categories[Id]);
}

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
       
      <Category category={categories[0]}>
        {filterCategory(0).map((video) => <Card key={video.id} id={video.id} />)}
      </Category>

      <Category category={categories[1]}>
        {filterCategory(1).map((video) => <Card key={video.id} id={video.id} />)}
        </Category>

        <Category category={categories[2]}>
        {filterCategory(2).map((video) => <Card key={video.id} id={video.id} />)}
      </Category>

      <Category category={categories[3]}>
        {filterCategory(3).map((video) => <Card key={video.id} id={video.id} />)}
      </Category>

      <Category category={categories[4]}>
        {filterCategory(4).map((video) => <Card key={video.id} id={video.id} />)}
      </Category>

      </Container>
      <Footer />
    </>
  );
}

export default App;
