import './cardRestaurant.css';
function CardRestaurantSkeleton() {
    return (
        <div>
            {/* We check if the view is web or mobile, to get the correct display */}
            <div className='webView'>
                <div className='skeleton-container'>
                    <div className='skeleton skeleton-img' />
                    <div className='skeleton skeleton-text'></div>
                    <hr className='divider' />
                    <div className='skeleton skeleton-text skeleton-text__body'></div>
                    <div className='button-container'>
                        <button className='skeleton skeleton-button' />
                    </div>
                </div>
            </div>
            <div className='mobileView'>
                <div className='skeleton-container'>
                    <div className='skeleton skeleton-img col-1' />
                    <div className='col-2'>
                        <div className='skeleton skeleton-text'></div>
                        <div className='skeleton skeleton-text skeleton-text__body'></div>
                        <div className='skeleton skeleton-text skeleton-footer'></div>
                        <div className='button-container'>
                            <button className='skeleton skeleton-button' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <hr className='divider' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardRestaurantSkeleton;
