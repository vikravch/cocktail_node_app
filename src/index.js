import CocktailRepository from "./cocktails/domain/repository/CocktailRepository";
import MainPage from "./cocktails/presentation/pages/main";

const rootNode = document.getElementById('root');

console.log("Hello");

let currentPage = 'main';

(
    async ()=>{
        const repository = new CocktailRepository();
        const cocktail = await repository.getRandomCocktail();
        rootNode.innerHTML = MainPage(cocktail);
    }
)();