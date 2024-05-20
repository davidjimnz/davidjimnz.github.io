import { takeLatest, call, put } from 'redux-saga/effects';
// We import the actions, so when a action is called, the saga enters.
import * as dashboardActions from '../actions/dashboardActions';

// Import the services in the file to use in the saga, where we have our logic.
import { getRestaurantsCall, getAllCategoriesCall } from '../services/dashboardServices';

//********************** Get the restaurants, update the reducers, adapt the call with the filters *****************************
function* getRestaurants(action) {
    try {
        // Getting the token from the .env file
        const token = process.env.REACT_APP_API_KEY;
        // Verifying if the param is in the form, fill the params and then past them in the call
        const location = action.form.location ? 'location=' + action.form.location + '&' : '';
        const term = action.form.term ? 'term=' + action.form.term + '&' : '';
        const categories = action.form.categories ? 'categories=' + action.form.categories + '&' : '';
        const offset = action.offset ? 'offset=' + (parseInt(action.offset) - 1) * 10 + '&' : '';
        const limit = 'limit=15';

        //Make the call to the funtion in the dashboardServices file, with the params and the token.
        const response = yield call(getRestaurantsCall, token, location, term, categories, offset, limit);
        // If the response status is 200, we get the data and save it in our dashboardReducer file, now we
        //can use it in our components
        if (response.status === 200) {
            const listRestaurants = action.listRestaurants.concat(response.data.businesses);
            const listRestaurantsQuantity = response.data.total;
            yield put({ type: dashboardActions.GET_RESTAURANTS_SUCCESS, listRestaurants, listRestaurantsQuantity, offset: parseInt(action.offset) + 1 });
        } else {
            alert("There's a problem, please try again");
            yield put({ type: dashboardActions.GET_RESTAURANTS_FAILURE });
        }
    } catch (error) {
        console.log(error);
        yield put({ type: dashboardActions.GET_RESTAURANTS_FAILURE });
    }
}
export function* getRestaurantsSaga() {
    yield takeLatest(dashboardActions.GET_RESTAURANTS_REQUEST, getRestaurants);
}

//********************** Get all categories, update the reducers *****************************
function* getAllCategories(action) {
    try {
        // Getting the token from the .env file
        const token = process.env.REACT_APP_API_KEY;
        const locale = 'en_US';

        //Make the call to the funtion in the dashboardServices file, with the params and the token.
        const response = yield call(getAllCategoriesCall, token, locale);
        // If the response status is 200, we get the data and save it in our dashboardReducer file, now we
        //can use it in our components
        if (response.status === 200) {
            // This is the list of categories we can filter our restaurants, this is a service from Yelp, I didn't find
            // a similar service but only categories related to restaurants, in the else are some categories from restaurants,
            // can be static data, changing the "const listAllCategories = response.data.categories"
            const listAllCategories = response.data.categories;
            yield put({ type: dashboardActions.GET_ALL_CATEGORIES_SUCCESS, listAllCategories });
        } else {
            //Static data when the service fail
            const listAllCategories = [
                {
                    alias: 'foodtrucks',
                    title: 'Food Trucks',
                },
                {
                    alias: 'vegetarian',
                    title: 'Vegetarian',
                },
                {
                    alias: 'steak',
                    title: 'Steakhouses',
                },
                {
                    alias: 'burgers',
                    title: 'Burgers',
                },
                {
                    alias: 'steak',
                    title: 'Steakhouses',
                },
                {
                    alias: 'newamerican',
                    title: 'New American',
                },
                {
                    alias: 'indpak',
                    title: 'Indian',
                },
                {
                    alias: 'noodles',
                    title: 'Noodles',
                },
                {
                    alias: 'seafood',
                    title: 'Seafood',
                },
            ];
            yield put({ type: dashboardActions.GET_ALL_CATEGORIES_SUCCESS, listAllCategories });
            // If the service is working, comment static data and GET_ALL_CATEGORIES_SUCCESS then uncomment GET_ALL_CATEGORIES_FAILURE
            //yield put({ type: dashboardActions.GET_ALL_CATEGORIES_FAILURE });
        }
    } catch (error) {
        console.log(error);
        yield put({ type: dashboardActions.GET_ALL_CATEGORIES_FAILURE });
    }
}
export function* getAllCategoriesSaga() {
    yield takeLatest(dashboardActions.GET_ALL_CATEGORIES_REQUEST, getAllCategories);
}
