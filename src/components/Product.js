import React, { useState, useEffect } from 'react'
import '../App.css'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions/action';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoadig] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoadig(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json());
            setLoadig(false)

        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                <h1 className="loading">Loading ....</h1>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead"> Rating {product.rating && product.rating.rate}</p>
                    <i className="fa fa-star"></i>
                    <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py2" onClick={() => addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product