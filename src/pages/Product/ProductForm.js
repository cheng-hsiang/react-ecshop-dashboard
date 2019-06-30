import React from 'react';

function ProductForm(props) {


     const handleSubmit =(e)=>{
            e.preventDefault();
            props.addProduct();
        };

    return (
        <div className="productForm" onSubmit={e=>handleSubmit(e)}>
            <form action="" method="post">
                <div className="imgUpload">
                    <label id="largeFile" htmlFor="file">
                        <input type="file" id="file" />
                        <i className="fas fa-cloud-upload-alt"></i>
                    </label>
                    <div className="imgPreview">
                        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/momonoshior%2F1557025774705.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NpuQ6uXibBcQgPAG1kgQfKey96tiQc0jdCPoL17jb3UHgXNIOdawlTtVpLjZYmbeIB%2BUE5R1BSwh70oAgCqSjWyp%2B%2BI%2B%2BUEZOHPhNjtom0yKl2PAPxbt9lWONuOVUsr4XaIHxy0yJlJI82%2BC1pQpETvrmVrZR0G509%2BynImNKRopMz6Y%2FHYXa8A19vH5gks2sA8SRJtv02sBTH7fZWYlNVN5MC8HXs1yQ77YYB1D3qNby5kmG0ZmJIxzpWVLC3IqmC8PmllHwGKoQ5E2wClIzQWovUpx1vHYGZLPwQbW7GwcuGR%2Fxl3A36G5qPFs%2FoP%2Fcg1%2BhT68wWq%2F9S02a5WmRg%3D%3D" alt=""/>
                    </div>
                    <div className="editedProduct" style={{marginTop:"8px"}}>
    
                    <button >＋ 新增產品</button>
                    </div>
                   
                </div>
                
                <div className="productDetail">
                    <div className="productDiscription">
                    <div className="priceGroup-title">
                        <h3>Product Discription</h3>
                        </div>
                        <label htmlFor="">
                                <span>標題</span>
                                <input name="name" onChange={e=>props.getValue(e)} style={{borderWidth:"0px",outline:'none'}} type="text"/>
                            </label>
                            <label htmlFor="">
                                <span>分類</span>
                                <input name="category" onChange={e=>props.getValue(e)} style={{borderWidth:"0px",outline:'none'}} type="text"/>
                            </label>
                            <label htmlFor="">
                                <span>單位</span>
                                <input style={{borderWidth:"0px",outline:'none'}} type="text"/>
                            </label>
                    </div>
                    

                    <div className="priceGroup">
                        <div className="priceGroup-title">
                        <h3>Product Price</h3>
                        </div>
                        <label htmlFor="">
                            <span>原價</span>
                            <i className="fas fa-dollar-sign"></i><input style={{borderWidth:"0px"}}  type="text"/>
                            
                        </label>
                        <label htmlFor="">
                            <span>售價</span>
                            <i className="fas fa-dollar-sign"></i><input style={{borderWidth:"0px"}}  type="text"/>
                            
                        </label>
                    </div>
                    <div className="productDiscription">
                    <div className="priceGroup-title">
                        <h3>產品描述</h3>
                        </div>
                        <label htmlFor="">
                               <textarea name="" id="" cols="30" rows="10"></textarea>
                            </label>
                         
                    </div>
                   
                    {/* <label htmlFor="">產品描述
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </label> */}
               
                
                </div>
            </form>
        </div>
    )
  }

export default ProductForm;