import React,{Component} from 'react';
import ProductForm from './ProductForm';


class ProductListItem extends Component {
  state = {
    isEdit : false
  };
  onEditProduct = updatedProduct => {
    this.setState({ isEdit: false });
    this.props.onEditProduct(updatedProduct);
  };

    render(){
        const {product,onRemoveProduct} = this.props;
        const { isEdit } = this.state;
        if (isEdit) {
          return (
            <tr className='user-list-item'>
              <td>
              <ProductForm onSubmitProduct={this.onEditProduct} product={product} />
              <button className = "cancel-button" onClick={() => this.setState({ isEdit: false })}>cancel</button>
              </td>
            </tr>
          )
        }

        return(
      <tr key = {product.id}>
        <td className = "product-table__td">
        {product.name}
        </td>
        <td className = "product-table__td">
        {product.category}
        </td>
        <td className = "product-table__td">
        {`${product.price} $`}
        </td>
        <td className = "product-table__td">
        {product.balance}
        </td>
        <td>
        {product.id !== '0' && <button className = "cancel-button" onClick={() => onRemoveProduct(product.id)}>x</button>}
        {product.id !== '0' && <button className = "add-button" onClick={() => this.setState({ isEdit: true })}>edit</button>}
        </td>
      </tr>
        )
    }
}



export default ProductListItem;
