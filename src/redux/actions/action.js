// For add item to Cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For delete item from Cart

export const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}