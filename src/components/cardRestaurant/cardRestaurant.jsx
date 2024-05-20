import './cardRestaurant.css';

function CardRestaurant(props) {
    return (
        <div>
            <a href={props.restaurant.url} target='_blank' rel='noreferrer' className='linkUrl' role='banner' title='linkRestaurant'>
                {/* We check if the view is web or mobile, to get the correct display */}
                <div className='webView'>
                    <div className='cardRestaurantDiv' role='banner' title='cardRestaurant'>
                        {/* Font Awesome Icon Library */}
                        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>

                        <img className='imageCardRestaurant' src={props.restaurant.image_url} alt={props.restaurant.name} />
                        <div className='titleContainer'>
                            <p className='titleCardRestaurant'>{props.restaurant.name}</p>
                        </div>
                        <hr className='divider' />
                        <div className='rowRestaurant'>
                            <div className='tooltip'>
                                <p className='tooltiptext'>{'Rating: ' + props.restaurant.rating}</p>
                                <p className={props.restaurant.rating >= 0 ? (props.restaurant.rating > 0 && props.restaurant.rating < 1 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 1 ? (props.restaurant.rating > 1 && props.restaurant.rating < 2 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 2 ? (props.restaurant.rating > 2 && props.restaurant.rating < 3 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 3 ? (props.restaurant.rating > 3 && props.restaurant.rating < 4 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 4 ? (props.restaurant.rating > 4 && props.restaurant.rating < 5 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                            </div>
                            <div>
                                <p className='priceRestaurant'>{props.restaurant.price ? props.restaurant.price : '$'}</p>
                            </div>
                        </div>
                        <div className='button-container' >
                            <button className='buttonView' role='banner' title='button'>VIEW</button>
                        </div>
                    </div>
                </div>
                <div className='mobileView'>
                    <div className='cardRestaurantDiv'>
                        {/* Font Awesome Icon Library */}
                        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>

                        <img className='imageCardRestaurant col-1' src={props.restaurant.image_url} alt={props.restaurant.name} />
                        <div className='col-2'>
                            <div className='titleContainer'>
                                <p className='titleCardRestaurant'>{props.restaurant.name}</p>
                            </div>
                            <div className='starsContainer'>
                                <p className={props.restaurant.rating >= 0 ? (props.restaurant.rating > 0 && props.restaurant.rating < 1 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 1 ? (props.restaurant.rating > 1 && props.restaurant.rating < 2 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 2 ? (props.restaurant.rating > 2 && props.restaurant.rating < 3 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 3 ? (props.restaurant.rating > 3 && props.restaurant.rating < 4 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                                <p className={props.restaurant.rating >= 4 ? (props.restaurant.rating > 4 && props.restaurant.rating < 5 ? 'fa fa-star starHalfChecked' : 'fa fa-star starChecked') : 'fa fa-star starBasic'}></p>
                            </div>
                            <div className='starsContainer'>
                                <p className='priceRestaurant'>{props.restaurant.price ? props.restaurant.price : '$'}</p>
                            </div>
                            <div className='button-container'>
                                <button className='buttonView'>VIEW</button>
                            </div>
                        </div>
                        <div className='col-3'>
                            <hr className='divider' />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CardRestaurant;
