import  { useEffect, useState } from 'react';
import ProductCard from "./product-card.jsx";
import ProductSection from "./product-section.jsx";

function Products() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(0);
    const [isFilterListOpened, setIsFilterListOpened] = useState(false);
    const [filterStates, setFilterStates] = useState({
        price: false,
        category: false
    });
    const [title, setTitle] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [category, setCategory] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleFilterToggle = (filterName) => {
        setFilterStates(prevState => ({
            ...prevState,
            [filterName]: !prevState[filterName]
        }));
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };


    const buildQueryParams = () => {
        let query = '';
        if (title) query += `&title=${title}`;
        if (priceRange.min) query += `&price_min=${priceRange.min}`;
        if (priceRange.max) query += `&price_max=${priceRange.max}`;
        if (category) query += `&categoryId=${category}`;
        return query;
    };

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
            .then((res) => res.json())
            .then((categoriesData) => {
                setCategories(categoriesData);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    useEffect(() => {
        const queryParams = buildQueryParams();
        const fetchUrl = `https://api.escuelajs.co/api/v1/products/?offset=${page}&limit=10${queryParams}`;

        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [page, title, priceRange, category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="products-section__header">

                <h1>Product List</h1>
                <form>
                    <input
                        type="text"
                        name="title"
                        placeholder="Search by Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <div className={`filter-section ${isFilterListOpened ? 'open' : ''}`}>
                    <div className={`filters ${isFilterListOpened ? 'open' : ''}`}>
                        <div className="filter price">
                            <button onClick={() => handleFilterToggle('price')}>
                                <i className="fa-solid fa-tag"></i>
                            </button>
                            {filterStates.price && (
                                <div className="popup">
                                    <p>Price Filter Options</p>
                                    <label>
                                        Min Price:
                                        <input
                                            type="number"
                                            name="min"
                                            value={priceRange.min}
                                            onChange={handlePriceChange}
                                            placeholder="Min"
                                        />
                                    </label>
                                    <label>
                                        Max Price:
                                        <input
                                            type="number"
                                            name="max"
                                            value={priceRange.max}
                                            onChange={handlePriceChange}
                                            placeholder="Max"
                                        />
                                    </label>
                                    <button onClick={() => handleFilterToggle('price')}>Close</button>
                                </div>
                            )}
                        </div>

                        <div className="filter category">
                            <button onClick={() => handleFilterToggle('category')}>
                                <i className="fa-solid fa-list"></i>
                            </button>
                            {filterStates.category && (
                                <div className="popup">
                                    <label>
                                        Select Category:
                                        <select value={category} onChange={handleCategoryChange}>
                                            <option value="">Select...</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <button onClick={() => handleFilterToggle('category')}>Close</button>
                                </div>
                            )}
                        </div>
                    </div>

                    <button className="filter-btn" onClick={() => setIsFilterListOpened((prev) => !prev)}>
                        <i className="fa-solid fa-filter"></i>
                    </button>
                </div>
            </div>

            <div className="products">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        img={product.images[0]}
                        title={product.title}
                        price={product.price}
                        category={product.category["name"]}
                        onViewMore={() => openModal(product)} // Triggering modal on click
                    />
                ))}
            </div>

            <div className="page-buttons">
                {(page > 0) && <button onClick={() => setPage(prev => prev - 10)}>Previous</button>}
                <button onClick={() => setPage(prev => prev + 10)}>Next</button>
            </div>

            {selectedProduct && (
                <ProductSection
                    product={selectedProduct}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}

export default Products;
