import { useState } from 'react'

import './App.css'

function App() {
  
 let [sum,setSum]=useState(0);
 let [shoe1,setShoe1]=useState(0);
 let [shoe2,setShoe2]=useState(0);
 let [shoe3,setShoe3]=useState(0);
 let [shoe4,setShoe4]=useState(0);
 let [shoe5,setShoe5]=useState(0);
 let [shoe6,setShoe6]=useState(0);
  return (
    <>
     <div class="shoes">
      <div class="shoes-card"> 
        <div class="img">
        <img src="https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/4/19/a0160232-41de-4735-a597-fa635dfd57521555665661629-1.jpg" width="200" height="200px"/>
        
      </div>
      <div class="img-details">
        <h3>Campus Men Blue Running Shoes</h3>
        <h5>$50</h5>
        <button  id="Add" onClick={()=>{
          shoe1=++shoe1;
          setShoe1(shoe1);
          if(shoe1==1){
          sum=50+sum;
          setSum(sum);}
          
          
          }} >Add to Cart</button>
      </div>
      </div>
      <div class="shoes-card"> 
        <div class="img">
        <img src="https://th.bing.com/th/id/OIP.-xHS2d9FjYaSzK79SLGt3gAAAA?rs=1&pid=ImgDetMain" width="220px" height="200px" />
        
      </div>
      <div class="img-details">
        <h3>Addidas Campus 00s Shoes Grey</h3>
        <h5>$70</h5>
        <button id="Add"  onClick={()=>{
          shoe2=++shoe2;
          setShoe2(shoe2);
          if(shoe2==1){
          sum=70+sum;
          setSum(sum);}
          }}>Add to Cart</button>
      </div>
      </div>
      <div class="shoes-card"> 
        <div class="img">
        <img src="https://i8.amplience.net/i/jpl/jd_384676_a?qlt=92" width="220px" height="200px" />
        
      </div>
      <div class="img-details">
        <h3>Air Jordan Mid 1 Shoe</h3>
        <h5>$100</h5>
        <button id="Add" onClick={()=>{
          shoe3=++shoe3;
          setShoe3(shoe3);
          if(shoe3==1){
          sum=100+sum;
          setSum(sum);}
          }}>Add to Cart</button>
      </div>
      </div>
      <div class="shoes-card"> 
        <div class="img">
        <img src="https://th.bing.com/th/id/OIP.RS5P1l89IFgSDJLSc48OiQHaD7?w=1920&h=1020&rs=1&pid=ImgDetMain" width="220px" height="200px" />
        
      </div>
      <div class="img-details">
        <h3>Air Jordan 1 University BlueShoe</h3>
        <h5>$120</h5>
        <button id="Add" onClick={()=>{
          shoe4=++shoe4;
          setShoe4(shoe4);
          if(shoe4==1){
          sum=120+sum;
          setSum(sum);}
          }}>Add to Cart</button>
      </div>
      </div>
      <div class="shoes-card"> 
        <div class="img">
        <img src="https://i8.amplience.net/i/office/2114612210_ld1.jpg?$newhighres$" width="220px" height="200px"/>
      </div>
      <div class="img-details">
        <h3>Adidas Superstar Blanc 1</h3>
        <h5>$80</h5>
        <button id="Add" onClick={()=>{
          shoe5=++shoe5;
          setShoe5(shoe5);
          if(shoe5==1){
          sum=80+sum;
          setSum(sum);}
          }}>Add to Cart</button>
      </div>
      </div>
      <div class="shoes-card"> 
        <div class="img">
        <img src="https://th.bing.com/th/id/OIP.x8CJdk3pvUWPn45QEn9HpAHaHa?rs=1&pid=ImgDetMain" width="220px" height="200px" />
        
      </div>
      <div class="img-details">
        <h3>Puma Men Sneakers</h3>
        <h5>$60</h5>
        <button id="Add" onClick={()=>{
          shoe6=++shoe6;
          setShoe6(shoe6);
          if(shoe6==1){
          sum=60+sum;
          setSum(sum);}
          }}>Add to Cart</button>
      </div>
      </div>
      </div>
      <div class="Cart">
      <h1 class="heading">Cart</h1>
      <div class="items">
      {(()=>{if(shoe1>0) 
      {return(
        <div class="li" id="li1">
          
        <img src="https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/4/19/a0160232-41de-4735-a597-fa635dfd57521555665661629-1.jpg" width="48px" height="48px"/>
        <div class="cart-items-details"><h1>Campus Men Blue Running Shoes</h1><p>$50</p></div>
        <div class="counter" id="counter">
          <button id="minus" onClick={()=>{
            if(shoe1>0){ shoe1=shoe1-1;
              setShoe1(shoe1);
              sum=sum-50;
              if(sum>=0){
              setSum(sum)};
          }}}>-</button>
          <p>{shoe1}</p>
          <button id="plus" onClick={()=>{
            if(shoe1>0){ shoe1=shoe1+1;
              setShoe1(shoe1);
              sum=sum+50;
              setSum(sum);
          }}}>+</button>
        </div>
        </div>)}})()}
       {(()=>{ if(shoe2>0) 
      {return(
        <div class="li" id="li1">
          
        <img src="https://th.bing.com/th/id/OIP.-xHS2d9FjYaSzK79SLGt3gAAAA?rs=1&pid=ImgDetMain" width="48px" height="48px"/>
        <div class="cart-items-details"><h1>Addidas Campus 00s Shoes Grey</h1><p>$70</p></div>
        <div class="counter" id="counter">
          <button id="minus" onClick={()=>{
            if(shoe2>0){ shoe2=shoe2-1;
              setShoe2(shoe2);
              
              sum=sum-70;
              setSum(sum);
          }}}>-</button>
          <p>{shoe2}</p>
          <button id="plus" onClick={()=>{
            if(shoe2>0){ shoe2=shoe2+1;
              setShoe2(shoe2);
              sum=sum+70;
              setSum(sum);
          }}}>+</button>
        </div>
        </div>)}})()}
        {(()=>{ if(shoe3>0) 
      {return(
        <div class="li" id="li1">
          
        <img src="https://i8.amplience.net/i/jpl/jd_384676_a?qlt=92" width="48px" height="48px"/>
        <div class="cart-items-details"><h1>Air Jordan Mid 1 Shoe</h1><p>$100</p></div>
        <div class="counter" id="counter">
          <button id="minus" onClick={()=>{
            if(shoe3>0){ shoe3=shoe3-1;
              setShoe3(shoe3);
              sum=sum-100;
              setSum(sum);
          }}}>-</button>
          <p>{shoe3}</p>
          <button id="plus" onClick={()=>{
            if(shoe3>0){ shoe3=shoe3+1;
              setShoe3(shoe3);
              sum=sum+100;
              setSum(sum);
          }}}>+</button>
        </div>
        </div>)}})()}
        {(()=>{ if(shoe4>0) 
      {return(
        <div class="li" id="li1">
          
        <img src="https://th.bing.com/th/id/OIP.RS5P1l89IFgSDJLSc48OiQHaD7?w=1920&h=1020&rs=1&pid=ImgDetMain" width="48px" height="48px"/>
        <div class="cart-items-details"><h1>Air Jordan 1 University BlueShoe</h1><p>$120</p></div>
        <div class="counter" id="counter">
          <button id="minus" onClick={()=>{
            if(shoe4>0){ shoe4=shoe4-1;
              setShoe4(shoe4);
              sum=sum-120;
              setSum(sum);
          }}}>-</button>
          <p>{shoe4}</p>
          <button id="plus" onClick={()=>{
            if(shoe4>0){ shoe4=shoe4+1;
              setShoe4(shoe4);
              sum=sum+120;
              setSum(sum);
          }}}>+</button>
        </div>
        </div>)}})()}
        {(()=>{ if(shoe5>0) 
      {return(
        <div class="li" id="li1">
          
        <img src="https://i8.amplience.net/i/office/2114612210_ld1.jpg?$newhighres$" width="48px" height="48px"/>
        <div class="cart-items-details"><h1>Addidas Superstar Blanc 1</h1><p>$80</p></div>
        <div class="counter" id="counter">
          <button id="minus" onClick={()=>{
            if(shoe5>0){ shoe5=shoe5-1;
              setShoe5(shoe5);
              sum=sum-80;
              setSum(sum);
          }}}>-</button>
          <p>{shoe5}</p>
          <button id="plus" onClick={()=>{
            if(shoe5>0){ shoe5=shoe5+1;
              setShoe5(shoe5);
              sum=sum+80;
              setSum(sum);
          }}}>+</button>
        </div>
        </div>)}})()}
        {(()=>{ if(shoe6>0) 
      {return(
        <div class="li" id="li1">
          
        <img src="https://th.bing.com/th/id/OIP.x8CJdk3pvUWPn45QEn9HpAHaHa?rs=1&pid=ImgDetMain" width="48px" height="48px"/>
        <div class="cart-items-details"><h1>Puma Men Sneakers</h1><p>$60</p></div>
        <div class="counter" id="counter">
          <button id="minus" onClick={()=>{
            if(shoe6>0){ shoe6=shoe6-1;
              setShoe6(shoe6);
              sum=sum-60;
              setSum(sum);
          }}}>-</button>
          <p>{shoe6}</p>
          <button id="plus" onClick={()=>{
            if(shoe6>0){ shoe6=shoe6+1;
              setShoe6(shoe6);
              sum=sum+60;
              setSum(sum);
          }}}>+</button>
        </div>
        </div>)}})()}
      </div>
      <p class="total">Total:${sum}</p>
     </div>
    </>
  )
}

export default App
