(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{15:function(n,t,e){n.exports=e.p+"static/media/close.ea4d4547.svg"},16:function(n,t,e){n.exports=e.p+"static/media/remove.67b8cf8c.svg"},20:function(n,t,e){n.exports=e(27)},27:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(11),o=e.n(i),c=e(17),u=e(18),l=e(3),p=e(4),s=e(6),d=e(5),f=e(7),m=e(1),b=e(2);function g(){var n=Object(m.a)(["\n  text-align: center;\n  margin: 0 0 5px;\n  font-size: 1.4rem;\n  font-weight: 700;\n"]);return g=function(){return n},n}var h=b.b.h3(g()),v=a.a.createContext();function x(){var n=Object(m.a)(["\n  display: block;\n  border: none;\n  border-radius: 50px;\n  color: white;\n  font-weight: 700;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  margin: 5px 0;\n  cursor: pointer;\n  transition: 0.2s;\n  background-color: ",";\n  &:hover {\n    background-color: black;\n  }\n"]);return x=function(){return n},n}var O=b.b.button(x(),(function(n){return n.color||"hsl(195, 100%, 40%)"}));function y(){var n=Object(m.a)(["\n  width: 100%;\n"]);return y=function(){return n},n}function j(){var n=Object(m.a)(["\n  display: block;\n  text-align: center;\n  margin: 0 0 20px;\n  font-size: 1.4rem;\n  font-weight: 400;\n"]);return j=function(){return n},n}function k(){var n=Object(m.a)(["\n  position: relative;\n  width: 100%;\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 1);\n"]);return k=function(){return n},n}function w(){var n=Object(m.a)(["\n  display: inline-block;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n"]);return w=function(){return n},n}function E(){var n=Object(m.a)(["\n  min-height: 400px;\n  display: block;\n"]);return E=function(){return n},n}var C=b.b.img(E()),I=b.b.div(w()),z=b.b.div(k()),H=b.b.span(j()),P=Object(b.b)(O)(y()),q=function(n){var t=n.product,e=t.title,r=t.price,i=t.img;return a.a.createElement(v.Consumer,null,(function(n){return a.a.createElement(I,null,a.a.createElement(C,{src:i,alt:e}),a.a.createElement(z,null,a.a.createElement(h,null,e),a.a.createElement(H,null,r,"$"),a.a.createElement(P,{onClick:function(){return n.addToCart(t)}},"Add to cart")))}))},S="375px",B="425px",T="768px",J="1024px",L="1440px",Q="2560px",A={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(S,")"),mobileL:"(min-width: ".concat(B,")"),tablet:"(min-width: ".concat(T,")"),laptop:"(min-width: ".concat(J,")"),laptopL:"(min-width: ".concat(L,")"),desktop:"(min-width: ".concat(Q,")"),desktopL:"(min-width: ".concat(Q,")")};function M(){var n=Object(m.a)(["\n  text-align: left;\n  font-size: 3rem;\n  color: hsl(195, 100%, 40%);\n  padding: 40px 20px;\n  max-width: 1500px;\n  margin: 0 auto;\n"]);return M=function(){return n},n}function Y(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 300px);\n  justify-content: center;\n  grid-gap: 30px;\n  position: relative;\n  max-width: 1500px;\n  margin: 0 auto;\n  @media "," {\n    grid-template-columns: repeat(2, 300px);\n  }\n  @media "," {\n    grid-template-columns: repeat(3, 300px);\n  }\n  @media "," {\n    grid-template-columns: repeat(4, 300px);\n  }\n"]);return Y=function(){return n},n}var $=b.b.div(Y(),A.tablet,A.laptop,A.laptopL),X=Object(b.b)(h)(M()),F=[{id:1,title:"Jacket",price:379,img:"https://source.unsplash.com/300x400"},{id:2,title:"Jeans",price:249,img:"https://source.unsplash.com/300x400"},{id:3,title:"Sweatshirt",price:79,img:"https://source.unsplash.com/300x400"},{id:4,title:"Socks",price:24,img:"https://source.unsplash.com/300x400"},{id:5,title:"Hoody",price:129,img:"https://source.unsplash.com/300x400"},{id:6,title:"Boots",price:289,img:"https://source.unsplash.com/300x400"}],R=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(a)))).state={},e}return Object(f.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){var n=F.map((function(n){return a.a.createElement(q,{key:n.id,product:n})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(X,null,"React Shopping Cart"),a.a.createElement($,null,n))}}]),t}(a.a.Component);function D(){var n=Object(m.a)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap');\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  #root{\n    position: relative;\n  }\n\n"]);return D=function(){return n},n}var G=Object(b.a)(D());function K(){var n=Object(m.a)(["\n  height: 40px;\n  width: 40px;\n  background-color: lightgrey;\n  color: white;\n  border-radius: 50%;\n  border: none;\n  transition: 0.2s;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 40%;\n  cursor: pointer;\n  &:hover {\n    background-color: black;\n  }\n"]);return K=function(){return n},n}var N=b.b.button(K(),(function(n){return n.icon})),U=e(15),V=e.n(U),W=e(16),Z=e.n(W);function _(){var n=Object(m.a)(["\n  &:hover {\n    background-color: red;\n  }\n"]);return _=function(){return n},n}function nn(){var n=Object(m.a)(["\n  border: 1px solid lightgrey;\n  background-color: white;\n  font-size: 1.4rem;\n  text-align: center;\n"]);return nn=function(){return n},n}function tn(){var n=Object(m.a)(["\n  border: 1px solid lightgrey;\n  background-color: white;\n  font-size: 1.4rem;\n  transition: 0.2s;\n  &:hover {\n    color: white;\n    background-color: black;\n  }\n"]);return tn=function(){return n},n}function en(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 40px);\n  grid-template-rows: 40px;\n  grid-gap: 3px;\n"]);return en=function(){return n},n}function rn(){var n=Object(m.a)(["\n  text-align: left;\n  margin: 5px 0 10px;\n  font-size: 1.4rem;\n  font-weight: 400;\n"]);return rn=function(){return n},n}function an(){var n=Object(m.a)(["\n  text-align: left;\n  margin: 0;\n"]);return an=function(){return n},n}function on(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return on=function(){return n},n}function cn(){var n=Object(m.a)(["\n  width: 100%;\n  min-height: 120px;\n  display: block;\n"]);return cn=function(){return n},n}function un(){var n=Object(m.a)(["\n  padding: 30px;\n  display: grid;\n  grid-template-columns: 90px 1fr 40px;\n  grid-gap: 15px;\n  border-bottom: 1px solid lightgrey;\n"]);return un=function(){return n},n}var ln=b.b.div(un()),pn=b.b.img(cn()),sn=b.b.div(on()),dn=Object(b.b)(h)(an()),fn=b.b.span(rn()),mn=b.b.form(en()),bn=b.b.input(tn()),gn=b.b.input(nn()),hn=Object(b.b)(N)(_()),vn=function(n){var t=n.product,e=t.id,r=t.title,i=t.img,o=t.price,c=t.quantity;return a.a.createElement(v.Consumer,null,(function(n){return a.a.createElement(ln,null,a.a.createElement(pn,{src:i,alt:r}),a.a.createElement(sn,null,a.a.createElement(dn,null,r),a.a.createElement(fn,null,o,"$"),a.a.createElement(mn,null,a.a.createElement(bn,{type:"button",value:"-",onClick:function(){return n.itemQuantity("minus",e)}}),a.a.createElement(gn,{type:"text",value:c,name:e,disabled:!0}),a.a.createElement(bn,{type:"button",value:"+",onClick:function(){return n.itemQuantity("plus",e)}}))),a.a.createElement(hn,{icon:Z.a,onClick:function(){return n.deleteItem(e,o,c)}}))}))};function xn(){var n=Object(m.a)(["\n  display: block;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 400;\n  color: lightgray;\n  padding-top: 80px;\n"]);return xn=function(){return n},n}function On(){var n=Object(m.a)(["\n  font-size: 1.8rem;\n"]);return On=function(){return n},n}function yn(){var n=Object(m.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n"]);return yn=function(){return n},n}function jn(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: auto;\n"]);return jn=function(){return n},n}function kn(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n  padding: 30px 0 10px;\n"]);return kn=function(){return n},n}function wn(){var n=Object(m.a)(["\n  overflow-y: scroll;\n  scrollbar-width: none;\n"]);return wn=function(){return n},n}function En(){var n=Object(m.a)(["\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"]);return En=function(){return n},n}function Cn(){var n=Object(m.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 0;\n"]);return Cn=function(){return n},n}function In(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-bottom: 1px solid lightgrey;\n"]);return In=function(){return n},n}function zn(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-rows: 100px 1fr 200px;\n  width: 100vw;\n  height: 100vh;\n  max-width: 500px;\n  padding: 0 20px;\n  background-color: white;\n  position: fixed;\n  top: 0;\n  right: 0;\n  transition: 0.4s;\n  transform: ",";\n  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);\n"]);return zn=function(){return n},n}var Hn=b.b.div(zn(),(function(n){return n.isOpen?"translateX(0)":"translateX(100%)"})),Pn=b.b.div(In()),qn=b.b.h3(Cn()),Sn=Object(b.b)(N)(En()),Bn=b.b.div(wn()),Tn=b.b.div(kn()),Jn=b.b.div(jn()),Ln=Object(b.b)(h)(yn()),Qn=Object(b.b)(h)(On()),An=b.b.span(xn()),Mn=function(n){var t=n.isOpen,e=n.products,r=n.closeCart,i=n.clearBasket,o=n.totalPrice,c=e.map((function(n){return a.a.createElement(vn,{key:n.id,product:n})}));return a.a.createElement(Hn,{isOpen:t},a.a.createElement(Pn,null,a.a.createElement(qn,null,"Your Cart"),a.a.createElement(Sn,{icon:V.a,onClick:r})),a.a.createElement(Bn,null,c.length?c:a.a.createElement(An,null,"Your cart is empty...")),a.a.createElement(Tn,null,a.a.createElement(Jn,null,a.a.createElement(Ln,null,"Total"),a.a.createElement(Qn,null,o,"$")),a.a.createElement(O,null,"Checkout"),a.a.createElement(O,{color:"grey",onClick:i},"Clear basket")))};function Yn(){var n=Object(m.a)(["\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: 0.2s;\n  opacity: ",";\n  visibility: ",";\n  background-color: rgba(0, 0, 0, 0.9);\n"]);return Yn=function(){return n},n}function $n(){var n=Object(m.a)(["\n  position: relative;\n  background-color: white;\n"]);return $n=function(){return n},n}var Xn=b.b.div($n()),Fn=b.b.div(Yn(),(function(n){return n.isOpen?1:0}),(function(n){return n.isOpen?"visible":"hidden"})),Rn=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(a)))).state={cartIsOpen:!1,productsInCart:[],totalPrice:0},e.addToCartHandle=function(n){var t=n.id,r=n.price,a=e.state,i=a.productsInCart,o=a.totalPrice,l=i.map((function(n){return n.id})).indexOf(t);if(-1!==l)i[l].quantity+=1;else{var p=Object(u.a)({},n,{quantity:1});i=[].concat(Object(c.a)(i),[p])}o+=r,e.setState({cartIsOpen:!0,productsInCart:i,totalPrice:o})},e.closeCartHandle=function(){e.setState({cartIsOpen:!1})},e.clearBasketHandle=function(){e.setState({productsInCart:[],totalPrice:0})},e.deleteItemHandle=function(n,t,r){var a=e.state,i=a.productsInCart,o=a.totalPrice;i=i.filter((function(t){return t.id!==n})),o-=t*r,e.setState({productsInCart:i,totalPrice:o})},e.quantityButtonHandle=function(n,t){var r=e.state.totalPrice,a=e.state.productsInCart,i=a.findIndex((function(n){return n.id===t})),o=a[i].quantity;o>1?"plus"===n?(a[i].quantity+=1,r+=a[i].price):(a[i].quantity-=1,r-=a[i].price):1===o&&"plus"===n&&(a[i].quantity+=1,r+=a[i].price),e.setState({productsInCart:a,totalPrice:r})},e}return Object(f.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){var n=this.state,t=n.cartIsOpen,e=n.productsInCart,r=n.totalPrice,i={addToCart:this.addToCartHandle,closeCart:this.closeCartHandle,deleteItem:this.deleteItemHandle,itemQuantity:this.quantityButtonHandle,inputQuantity:this.quantityInputHandle};return a.a.createElement(v.Provider,{value:i},a.a.createElement(G,null),a.a.createElement(Xn,null,a.a.createElement(R,null),a.a.createElement(Fn,{isOpen:t})),a.a.createElement(Mn,{isOpen:t,products:e,closeCart:this.closeCartHandle,clearBasket:this.clearBasketHandle,totalPrice:r}))}}]),t}(a.a.Component);o.a.render(a.a.createElement(Rn,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ee33debf.chunk.js.map