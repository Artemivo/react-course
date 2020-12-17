import React,{Component} from'react';

class ProductForm extends Component{
    constructor (props){
        super (props);
        this.state = {
        newProductName: props.product?.name,
        newProductCategory: props.product?.category,
        newProductPrice: props.product?.price,
        newProductBalance: props.product?.balance
            
        }
    }
      onChangeName = e => {
    this.setState({
      newProductName: e.target.value
    })
  };

  onChangeCategory = e => {
    this.setState({
      newProductCategory: e.target.value
    })
  };

      onChangePrice = e => {
    this.setState({
      newProductPrice: +e.target.value
    })
  };

  onChangeBalance = e => {
    this.setState({
      newProductBalance: +e.target.value
    })
  };
  resetForm = () => {
    this.setState({
        newProductName: '',
        newProductCategory: '',
        newProductPrice: '',
        newProductBalance: ''
    })
  };
    submitProduct = () => {
    const { product } = this.props;
    const { newProductName: name, newProductCategory: category, newProductPrice: price, newProductBalance: balance } = this.state;
    const newProduct = { name, category,price,balance, id: product ? product.id : Date.now() };
    if (!newProduct.name || !newProduct.category ||!newProduct.price ||!newProduct.balance ) return alert('Fill in all the fields');
    this.props.onSubmitProduct(newProduct);
    this.resetForm();
  };

  render() {
    const { newProductName, newProductCategory,newProductPrice,newProductBalance } = this.state;
    return (
      <div className="input-list">
        <input className="input-list__value" value={newProductName} onChange={this.onChangeName} placeholder='Name' name='name' type="text"/>
        <input className="input-list__value" value={newProductCategory} onChange={this.onChangeCategory} placeholder='Category' name='category' type="text"/>
        <input className="input-list__value" value={newProductPrice} onChange={this.onChangePrice} placeholder='Price' name='price' type="number"/>
        <input className="input-list__value" value={newProductBalance} onChange={this.onChangeBalance} placeholder='Balance' name='balance' type="number"/>
        <button className="add-button" onClick={this.submitProduct}>Add product</button>
      </div>
    );
  }
}

export default ProductForm;