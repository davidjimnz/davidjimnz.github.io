import './cardCategory.css';
function CardCategory(props) {
    return (
        <div className={props.categorySelected?.alias === props.category.alias ? 'cardCategoryDivSelected' : 'cardCategoryDiv'} onClick={() => props.onCategorySelect(props.category)}>
            <p className='titleCardCategory'>{props.category.title}</p>
        </div>
    );
}

export default CardCategory;
