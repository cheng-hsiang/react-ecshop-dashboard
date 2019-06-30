import React, { Component } from 'react';
import './Product.css';
import Modal from '../../components/Modal/Modal.js';
import ProductForm from './ProductForm';
import ProductAPI from '../../api/API-Product';


export default class Product extends Component {
    state = {
        addProductModalOpen: false,
        name:'',
        category:'',
        productArray:[],
    };

    getProduct = (e) => {
        ProductAPI.getProduct().then((response)=>{
            this.setState({
                productArray:response.data.products
            })
        })
    }

    getValue = (stateName, e) => {
        console.log(stateName, e)
        this.setState({
                [stateName]:e,
        });
        
    }

   async  addProduct() {
        const {name,category} = this.state;
        const data = {
            name:name,
            category:category,
        }
    //   await  ajax(data);

    //   await  this.setState({ addProductModalOpen: false });
      //關閉modal
    }
   

    closeModal = () => {
        this.setState({ addProductModalOpen: false });
    };

    openModal = () => {
        this.setState({ addProductModalOpen: true });
    };

   componentDidMount(){
     this.getProduct();
       
    }

    render() {
        const { productArray } = this.state;
        return (
            <div className="container tableSetting ProductTableSetting">
                <div className="addProduct">
                    <button onClick={this.openModal}>
                        <i className="fas fa-plus-square"></i>新增產品
                </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th width="80px">分類</th>
                            <th>產品名稱</th>
                            <th width="120px">原價</th>
                            <th width="120px">售價</th>
                            <th width="80px">是否啟用</th>
                            <th width="100px">編輯</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>家具</td>
                            <td>小桌組</td>
                            <td>$12,000</td>
                            <td>9999</td>
                            <td>未啟用</td>
                            <td className="editedProduct">
                                <button type="primary" style={{ backgroundColor: '#1976d2' }}>
                                    <i className="fas fa-edit"></i>編輯
                            </button>
                                <button type="primary" style={{ backgroundColor: 'rgb(220, 0, 78)' }}>
                                    <i className="fas fa-trash-alt"></i>刪除</button>
                            </td>
                        </tr>
                       {productArray.map((item,index)=>{
                       return  (<tr key={item.id}>
                            <td>{item.category}</td>
                            <td>{item.title}</td>
                            <td>${item.origin_price}</td>
                            <td>${item.price}</td>
                            <td>未啟用</td>
                            <td className="editedProduct">
                                <button type="primary" style={{ backgroundColor: '#1976d2' }}>
                                    <i className="fas fa-edit"></i>編輯
                            </button>
                                <button type="primary" style={{ backgroundColor: 'rgb(220, 0, 78)' }}>
                                    <i className="fas fa-trash-alt"></i>刪除</button>
                            </td>
                        </tr>)
                       
                       })}
                    </tbody>
                </table>
                <Modal
                    modalClosed={this.closeModal}
                    show={this.state.addProductModalOpen}
                    modalTitle="新增產品"
                    footerBtnText="close"
                    useModalHeader={true}
                    useModalFooter={false}
                >
                    <ProductForm   addProduct={this.addProduct.bind(this)} getValue={this.getValue}/>
                </Modal>

        
            </div>
        )
    }
}
