import * as CocktailAPI from '../../data/api'
import {Cocktail} from "../model/Cocktail";

export default class CocktailRepository{

    async getRandomCocktail(){
        const res = await CocktailAPI.getRandomCocktail();
        const cocktail = new Cocktail(res.drinks[0]);
        return cocktail;
    }
}