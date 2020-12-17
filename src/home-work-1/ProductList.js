import React,{Component} from 'react';
import ProductListItem from './ProductListItem';
import ProductForm from './ProductForm.js';


class ProductList extends Component {
   state = {
       products : [
           {id: '0' , name: 'Name', category: 'Category', price: 'Price in ', balance : 'Balance'},
           {id: '1' , name: 'Car hood', category: 'body', price: 100, balance : 5},
           {id: '2' , name: 'Ball-bearing', category: 'chassis', price: 10, balance : 25},
           {id: '3' , name: 'Lamp', category: 'electrical', price: 3, balance : 58},
       ],
   };
     addProduct = newProduct => {
    this.setState({
      products: [...this.state.products, newProduct]
    })
  };
  removeProduct = id => {
    this.setState({
        products: this.state.products.filter(product => product.id !== id)
    })
  };

  editProduct = updatedProduct => {
    this.setState({
      products: this.state.products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
    })
    };


   render(){
       const {products} = this.state;
       return (
        <div>
            <table className="product-table">
                <thead> 
                    {products.map(product =>
                    <ProductListItem
                    key={product.id}
                    product={product}
                    onRemoveProduct={this.removeProduct}
                    onEditProduct={this.editProduct}
                    />)}
                </thead> 
            </table>
           <ProductForm  onSubmitProduct={this.addProduct}/>
        </div>
       )
   }
}

export default ProductList;


