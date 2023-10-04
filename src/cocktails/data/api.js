const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
export const getRandomCocktail = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/random.php", requestOptions);
    const result = await response.json();
    console.log(result);
    return result;
};
// https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
export const getCategories = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/list.php?c=list", requestOptions);
    const result = await response.json();
    console.log(result);
    return result; //JSON
}