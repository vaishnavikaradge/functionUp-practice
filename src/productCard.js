


const ProductCard=({productId,
    productPic,
    productName,
    brand,
    productDescription,
    price,
    rating})=>{

    const productClick=()=>{
        alert("Product of"+brand+ "is  1 , which is"+  productName+ "has of price"+ price+ "is added in the cart , please proceed to pay !!!");
    };

    return(
        <div className='product-design'>

            <img
            
                src={productPic}
                height = '100px'
                weight = '100px'
            
            />

            <p>{productId}</p>
            <h4>{productName}</h4>
            <h4>{brand}</h4>
            <p>{productDescription}</p>
            <h4>{price}</h4>
            <p>{rating}</p>

            <div className='button'>
                <button onClick = {productClick}
                style = {{backgroundColor:"plum",color:"white"}}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCard;