import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import "./Basket.css";
import Product from "../Product/Product";
export  default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;


const gstQtyPrice=(price,qty)=>{

console.log( (price* qty)+price* 0.12);
return  (price* qty)+price* 0.12;


}

  
  return (
    <>
      <div>
        <h3 className="cart">Cart Items</h3>
        <hr/>
        {cartItems.length === 0 ? (
          <h3 className="emptycart">Cart is Empty</h3>
        ) : (
          <>
            <table>
              <tr>
                <th>Item Id</th>
                <th>Image</th>
                <th>Product</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>12% GST </th>
                <th>total</th>
                <th>Add </th>
                <th> Remove</th>
              </tr>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img src={item.img} alt="Image" width='100px' height='100px'/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    <td>{(item.price*0.12)*(item.qty)}</td>
                    {/* <td>{(item.price* item.qty)+ item.price* 0.12 }</td> */}


                    <td>{gstQtyPrice(item.price ,item.qty)}</td>


                    <td>
                      <Button onClick={() => onAdd(item)} className="add">
                        <AddCircleIcon />
                      </Button>
                    </td>
                    <td>
                      <Button onClick={() => onRemove(item)} className="remove">
                        <DeleteIcon />
                      </Button>
                    </td>
                    
                  </tr>
                  
                );
              })}
            </table>  



            
            <hr/>

          </>
        )}
      </div>
    
    </>
  );
}
