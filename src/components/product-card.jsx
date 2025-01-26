
function ProductCard({ id, img, title, price, category, onViewMore }) {
    return (
        <section className="product-card">
            <div className="product-card__photo">
                <img
                    src={img}
                    alt={title}
                    className="product-card__main-photo"
                />
            </div>
            <div className="product-card__info">
                <h1 className="product-card__title"> {title} </h1>
                <p className="product-card__code">ID: {id}</p>
                <p className="product-card__price">$ {price}</p>
                <p className="product-card__category">{category}</p>
                <button className="product-card__btn"><i className="fa-solid fa-cart-shopping"></i></button>
                <button className="product-card__btn" onClick={()=>onViewMore()}>View More</button>
            </div>
        </section>
    );
}

export default ProductCard;