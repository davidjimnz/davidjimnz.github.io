// We're gonna use Axios to call the service.
import axios from 'axios';
// Getting the endpoint from the .env file
const endpoint = process.env.REACT_APP_ENDPOINT;

//Service to get the restaurants
export function getRestaurantsCall(token, location, term, categories, offset, limit) {
    // We use the get method, as the services needs, the params gets all the required information
    return axios({
        method: 'get',
        url: endpoint + 'businesses/search?' + location + term + categories + offset + limit,
        headers: { 'Content-Type': 'application/json', Authorization: token },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

//Service to get the all categories
export function getAllCategoriesCall(token, locale) {
    // We use the get method, as the services needs, the params gets all the required information
    return axios({
        method: 'get',
        url: endpoint + 'categories?locale=' + locale,
        headers: { 'Content-Type': 'application/json', Authorization: token, 'X-Requested-With': 'XMLHttpRequest' },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}
