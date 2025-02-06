export default function ProductRow({ product }) {
    // if the product is not in stock the name will appear red to the user to signal it being out of stock
    const name = product.stocked ? product.name : 
                <span style={{color: 'red'}}>
                    {product.name}
                </span>

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}