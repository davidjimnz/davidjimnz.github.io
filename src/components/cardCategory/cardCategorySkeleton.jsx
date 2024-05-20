import './cardCategory.css';
function CardCategorySkeleton() {
    return (
        <div className='rowScrollHorizontal'>
            <div className='skeleton-card'>
                <div className='skeleton skeleton-text skeleton-title'></div>
            </div>
            <div className='skeleton-card'>
                <div className='skeleton skeleton-text skeleton-title'></div>
            </div>
            <div className='skeleton-card'>
                <div className='skeleton skeleton-text skeleton-title'></div>
            </div>
        </div>
    );
}

export default CardCategorySkeleton;
