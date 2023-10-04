import CocktailComponent from "../components/CocktailComponent";

const MainPage = (cocktail)=>{
    return `
        <nav>Navigation bar</nav>
        <main>
            <div>Categories</div>
            <div>${CocktailComponent(cocktail)}</div>
        </main>
    `
}
export default MainPage;