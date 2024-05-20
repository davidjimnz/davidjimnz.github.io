/* eslint-disable import/no-anonymous-default-export */
import * as dashboardActions from '../actions/dashboardActions';

const initialState = {
    //Initial states for get list restaurants
    fetchingListRestaurants: false,
    listRestaurants: [],
    listRestaurantsQuantity: 0,
    offset: '1',

    //Initial states for get all categories
    fetchingAllCategories: false,
    listAllCategories: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        // If the redux saga action is calling one of this, the states will change.
        case dashboardActions.GET_RESTAURANTS_REQUEST:
            return { ...state, fetchingListRestaurants: true };
        case dashboardActions.GET_RESTAURANTS_SUCCESS:
            return { ...state, fetchingListRestaurants: false, listRestaurants: action.listRestaurants, listRestaurantsQuantity: action.listRestaurantsQuantity, offset: action.offset };
        case dashboardActions.GET_RESTAURANTS_FAILURE:
            return { ...state, fetchingListRestaurants: false };

        case dashboardActions.GET_ALL_CATEGORIES_REQUEST:
            return { ...state, fetchingAllCategories: true };
        case dashboardActions.GET_ALL_CATEGORIES_SUCCESS:
            return { ...state, fetchingAllCategories: false, listAllCategories: action.listAllCategories };
        case dashboardActions.GET_ALL_CATEGORIES_FAILURE:
            return { ...state, fetchingAllCategories: false };

        default:
            return state;
    }
};
