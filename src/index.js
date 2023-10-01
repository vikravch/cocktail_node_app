import {getRandomCocktail} from "./cocktails/data/api";
import CocktailRepository from "./cocktails/domain/repository/CocktailRepository";

console.log("Hello");

(
    async ()=>{
        const repository = new CocktailRepository();
        const cocktail = await repository.getRandomCocktail();


        const cocktailsTable = document.getElementById('cocktails');

            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = cocktail._name;
            row.appendChild(nameCell);

            const categoryCell = document.createElement('td');
            categoryCell.textContent = cocktail._category;
            row.appendChild(categoryCell);

            const alcoholicCell = document.createElement('td');
            alcoholicCell.textContent = cocktail._alcoholic;
            row.appendChild(alcoholicCell);

            const glassTypeCell = document.createElement('td');
            glassTypeCell.textContent = cocktail._glassType;
            row.appendChild(glassTypeCell);

            const imageCell = document.createElement('td');
            const image = document.createElement('img');
            image.src = cocktail._imageURL;
            image.style.width = '80px';
            image.style.height = '80px';
            imageCell.appendChild(image);
            row.appendChild(imageCell);

            cocktailsTable.tBodies[0].appendChild(row);

    }
)();