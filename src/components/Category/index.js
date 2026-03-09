import video from "../../Json/db.json";
import Styles from "./Category.module.css";

export const categories = [
  "Geografia", 
  "Como fazer e usar", 
  "Astronomia e Geografia", 
  "Climatologia, Meteorologia, Vegetação", 
  "Geologia e Hidrografia"      
];

export function filterCategory(Id) {
  return video.filter(video => video.category === categories[Id]);
}
function Category({ category, children }) {
    return (
        <section className={Styles.category}>
            <h2>{category}</h2>
    
            <div>
                {children}


            </div>
        </section>

    );
}

export default Category;