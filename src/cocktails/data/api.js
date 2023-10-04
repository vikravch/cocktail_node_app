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