import CocktailComponent from "../components/CocktailComponent";
import CocktailCategoryComponent from "../components/CocktailCategoryComponent";

const MainPage = (cocktail, categories)=>{ // string

    const categoriesList = categories.map((drinkCategory)=>{
        return CocktailCategoryComponent(drinkCategory)
    }).join(' ');

    return `
        <nav>Navigation bar</nav>
        <main>
            <div>Categories: ${categoriesList}</div>
            <div>${CocktailComponent(cocktail)}</div>
        </main>
    `
}
export default MainPage;