//Import the libraries
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

//Import the components
import CardCategory from '../components/cardCategory/cardCategory';
import CardRestaurant from '../components/cardRestaurant/cardRestaurant';
import CardRestaurantSkeleton from '../components/cardRestaurant/cardRestaurantSkeleton';
import CardCategorySkeleton from '../components/cardCategory/cardCategorySkeleton';

//Import the styles
import './dashboardContainer.css';

function DashboardContainer() {
    const dispatch = useDispatch();
    const [categorySelected, setCategorySelected] = useState(null);
    const [form, setForm] = useState({ location: 'San Jose, CA 95127', term: 'restaurants' });
    // Reducers filled
    const fetchingListRestaurants = useSelector((state) => state.DashboardReducer.fetchingListRestaurants);
    const listRestaurants = useSelector((state) => state.DashboardReducer.listRestaurants);
    const listRestaurantsQuantity = useSelector((state) => state.DashboardReducer.listRestaurantsQuantity);
    const offset = useSelector((state) => state.DashboardReducer.offset);

    const fetchingAllCategories = useSelector((state) => state.DashboardReducer.fetchingAllCategories);
    const listAllCategories = useSelector((state) => state.DashboardReducer.listAllCategories);

    // First load all the categories and restaurants without filtering
    useEffect(() => {
        dispatch({ type: 'GET_RESTAURANTS_REQUEST', form, offset, listRestaurants: [] });
        dispatch({ type: 'GET_ALL_CATEGORIES_REQUEST' });
    }, []);

    const onChangeRestaurants = (value) => {
        // This is the function to change the listRestaurants with the param 'categories', the offset and the listRestaurants were reset
        dispatch({ type: 'GET_RESTAURANTS_SUCCESS', listRestaurants: [], listRestaurantsQuantity }); //Reset listRestaurants
        let newForm = form;
        newForm.categories = value.alias;
        setForm(newForm);
        setCategorySelected(value);
        dispatch({ type: 'GET_RESTAURANTS_REQUEST', form: newForm, offset: 1, listRestaurants: [] }); // Get the new data with reset offset
    };

    // Listener to infinite scrolling
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '0px 0px',
    });
    // if inView is true and fetchingListRestaurants is false, then we call the service again and
    //change the offset to get the next 15 elements

    if (inView && !fetchingListRestaurants) {
        if (listRestaurantsQuantity === listRestaurants.length) {
            alert("There's no more restaurants to show in the list");
            if (offset * 15 - 15 === listRestaurants.length) {
                dispatch({ type: 'GET_RESTAURANTS_REQUEST', form, offset: offset, listRestaurants });
            }
        }
    }

    return (
        <div className='container' id='listenerScroll'>
            <h1>Restaurants</h1>
            {/* Chek if the service is loading, shows skeleton when is true, shows the data if is false */}
            {!fetchingAllCategories ? (
                <div className='rowScrollHorizontal'>
                    {/* The list is maped, to make it dinamyc, we pass our params at the component, where is going to be displayed */}
                    {listAllCategories.map((category, i) => (
                        <div key={i}>
                            <CardCategory categorySelected={categorySelected} category={category} onCategorySelect={onChangeRestaurants} />
                        </div>
                    ))}
                </div>
            ) : (
                <CardCategorySkeleton />
            )}
            <br />
            <div className='webView'>
                <div className='row'>
                    {listRestaurants.map((restaurant, i) => (
                        <div key={i} ref={i === parseInt(listRestaurants.length) - 3 ? ref : null}>
                            <CardRestaurant restaurant={restaurant} />
                            <br />
                        </div>
                    ))}
                </div>
                {fetchingListRestaurants ? (
                    <div className='fetching'>
                        <div className='loader'></div>
                        <div className='row'>
                            <CardRestaurantSkeleton />
                            <CardRestaurantSkeleton />
                            <CardRestaurantSkeleton />
                        </div>
                    </div>
                ) : (
                    false
                )}
            </div>
            <div className='mobileView'>
                {listRestaurants.map((restaurant, i) => (
                    <div key={i} ref={i === parseInt(listRestaurants.length) - 6 ? ref : null}>
                        <CardRestaurant restaurant={restaurant} />
                        <br />
                    </div>
                ))}
                {fetchingListRestaurants ? (
                    <div className='fetching'>
                        <div className='loader'></div>
                        <div className='row'>
                            <CardRestaurantSkeleton />
                            <CardRestaurantSkeleton />
                            <CardRestaurantSkeleton />
                        </div>
                    </div>
                ) : (
                    false
                )}
            </div>
        </div>
    );
}

export default DashboardContainer;
