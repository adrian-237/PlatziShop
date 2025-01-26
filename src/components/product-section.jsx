import { useState } from 'react';
import '../styles/product-section.css';

function ProductSection({ product, closeModal }) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="product-section-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={closeModal}>X</button>

                <h2>{product.title}</h2>
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt={`${product.title}`}
                        className="selected"
                    />
                )}


                <div className="product-images">
                    {product.images &&
                        product.images.slice(0, 3).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.title}  ${index + 1}`}
                                onClick={() => setSelectedImage(image)}
                                className={selectedImage === image ? 'active' : ''}
                            />
                        ))}
                </div>


                <div className="product-info">
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Category:</strong> {product.category.name}</p>
                    <p><strong>Description:</strong> {product.description || "No description available."}</p>
                    <p><strong>ID:</strong> {product.id}</p>
                </div>


                <button className="add-to-cart" onClick={() => console.log(`${product.title} added to cart`)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductSection;
