(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,function(n,t,e){n.exports=e.p+"static/media/close.ea4d4547.svg"},,,,function(n,t,e){n.exports=e.p+"static/media/dress.7234c5a7.jpg"},function(n,t,e){n.exports=e.p+"static/media/hoody.33ca7b77.jpg"},function(n,t,e){n.exports=e.p+"static/media/jacket.cc21c5fd.jpg"},function(n,t,e){n.exports=e.p+"static/media/jeans.ebdaa7f4.jpg"},function(n,t,e){n.exports=e.p+"static/media/jogger.ebbbadec.jpg"},function(n,t,e){n.exports=e.p+"static/media/shirt.346a7bb0.jpg"},function(n,t,e){n.exports=e.p+"static/media/sweatshirt.9a08e3db.jpg"},function(n,t,e){n.exports=e.p+"static/media/tshirt.21a4e3b6.jpg"},,,,function(n,t,e){n.exports=e.p+"static/media/remove.67b8cf8c.svg"},function(n,t,e){n.exports=e.p+"static/media/arrow-down.63fbce54.svg"},function(n,t,e){n.exports=e.p+"static/media/cart.0de0451e.svg"},,,,function(n,t,e){n.exports=e(43)},,,,,,,,,,,,function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(8),o=e.n(i),c=e(4),u=e(5),l=e(3),s={isCartOpen:!1,products:[],totalPrice:0},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":return Object(l.a)({},n,{products:t.payload.newProductList,isCartOpen:!0,totalPrice:n.totalPrice+t.payload.priceToAdd});case"REMOVE_PRODUCT":return Object(l.a)({},n,{products:t.payload.newProductList,totalPrice:n.totalPrice-t.payload.priceToRemove});case"CHANGE_PRODUCT_QUANTITY":return Object(l.a)({},n,{products:t.payload.newProductList,totalPrice:n.totalPrice+t.payload.priceToChange});case"OPEN_CART":return Object(l.a)({},n,{isCartOpen:!0});case"CLOSE_CART":return Object(l.a)({},n,{isCartOpen:!1});case"CLEAR_BASKET":return Object(l.a)({},n,{products:[],totalPrice:0});default:return n}},d=e(28),f=e(14),b=e.n(f),g=e(15),m=e.n(g),x=e(16),v=e.n(x),h=e(17),O=e.n(h),y=e(18),w=e.n(y),j=e(19),E=e.n(j),k=e(20),C=e.n(k),P=e(21),L=e.n(P),z=[{id:1,title:"Jacket",price:379,sizes:["XS","S","M","L","XL","XXL"],colors:["red","green","blue","gray","black","white"],img:v.a,addedDate:1578787200},{id:2,title:"Jeans",price:249,sizes:["XS","XXL"],colors:["red","green","blue","yellow","orange"],img:O.a,addedDate:1566259200},{id:3,title:"Sweatshirt",price:79,sizes:["S","M","L"],colors:["black","white"],img:C.a,addedDate:1575504e3},{id:4,title:"Tshirt",price:24,sizes:["S","L","XXL"],colors:["red","blue","orange","pink","black","white"],img:L.a,addedDate:1581638400},{id:5,title:"Hoody",price:129,sizes:["XL","XXL"],colors:["blue","yellow","orange","pink","gray"],img:m.a,addedDate:1556755200},{id:6,title:"Dress",price:289,sizes:["XS","S"],colors:["red","green","yellow","orange","gray","black"],img:b.a,addedDate:1562284800},{id:7,title:"Jogger",price:289,sizes:["XS","S"],colors:["red","green","yellow","orange","gray","black"],img:w.a,addedDate:1562284800},{id:8,title:"Shirt",price:289,sizes:["XS","S"],colors:["red","green","yellow","orange","gray","black"],img:E.a,addedDate:1562284800}],T={data:z,isFiltersOpen:!1,activeFilters:{}},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_PRODUCTS":return Object(l.a)({},n,{data:Object(d.a)(t.payload)});case"OPEN_FILTERS":return Object(l.a)({},n,{isFiltersOpen:!n.isFiltersOpen});case"FILTER_PRODUCTS":return Object(l.a)({},n,{data:t.payload.newProductList,activeFilters:t.payload.newActiveFilters});default:return n}},_=Object(u.b)({cart:p,productList:S}),F=Object(u.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),D=e(1),R=e(2);function X(){var n=Object(D.a)(["\n  display: block;\n  border: none;\n  border-radius: 50px;\n  color: white;\n  font-weight: 700;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  margin: 5px 0;\n  cursor: pointer;\n  transition: 0.2s;\n  background-color: ",";\n  &:hover {\n    background-color: black;\n  }\n"]);return X=function(){return n},n}var A=R.b.button(X(),(function(n){return n.color||"hsl(195, 100%, 40%)"}));function U(){var n=Object(D.a)(["\n  height: 40px;\n  width: 40px;\n  background-color: lightgrey;\n  color: white;\n  border-radius: 50%;\n  border: none;\n  transition: 0.2s;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 40%;\n  cursor: pointer;\n  &:hover {\n    background-color: black;\n  }\n"]);return U=function(){return n},n}var N=R.b.button(U(),(function(n){return n.icon}));function q(){var n=Object(D.a)(["\n  text-align: center;\n  margin: 0 0 5px;\n  font-size: 1.4rem;\n  font-weight: 700;\n"]);return q=function(){return n},n}var I=R.b.h3(q()),M=e(10),Y=e.n(M),Q=e(25),B=e.n(Q);function J(){var n=Object(D.a)(["\n  &:hover {\n    background-color: red;\n  }\n"]);return J=function(){return n},n}function H(){var n=Object(D.a)(["\n  border: 1px solid lightgrey;\n  background-color: white;\n  font-size: 1.4rem;\n  text-align: center;\n"]);return H=function(){return n},n}function V(){var n=Object(D.a)(["\n  border: 1px solid lightgrey;\n  background-color: white;\n  font-size: 1.4rem;\n  transition: 0.2s;\n  &:hover {\n    color: white;\n    background-color: black;\n  }\n"]);return V=function(){return n},n}function $(){var n=Object(D.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 40px);\n  grid-template-rows: 40px;\n  grid-gap: 3px;\n"]);return $=function(){return n},n}function G(){var n=Object(D.a)(["\n  text-align: left;\n  margin: 5px 0 10px;\n  font-size: 1.4rem;\n  font-weight: 400;\n"]);return G=function(){return n},n}function K(){var n=Object(D.a)(["\n  text-align: left;\n  margin: 0;\n"]);return K=function(){return n},n}function W(){var n=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return W=function(){return n},n}function Z(){var n=Object(D.a)(["\n  width: 100%;\n  min-height: 120px;\n  display: block;\n"]);return Z=function(){return n},n}function nn(){var n=Object(D.a)(["\n  padding: 30px;\n  display: grid;\n  grid-template-columns: 90px 1fr 40px;\n  grid-gap: 15px;\n  border-bottom: 1px solid lightgrey;\n"]);return nn=function(){return n},n}var tn=R.b.div(nn()),en=R.b.img(Z()),rn=R.b.div(W()),an=Object(R.b)(I)(K()),on=R.b.span(G()),cn=R.b.form($()),un=R.b.input(V()),ln=R.b.input(H()),sn=Object(R.b)(N)(J()),pn=function(n){var t=n.removeProduct,e=n.changeProductQuantity,r=n.product,i=n.products,o=r.id,c=r.title,u=r.img,l=r.price,s=r.quantity;return a.a.createElement(tn,null,a.a.createElement(en,{src:u,alt:c}),a.a.createElement(rn,null,a.a.createElement(an,null,c),a.a.createElement(on,null,l,"$"),a.a.createElement(cn,null,a.a.createElement(un,{type:"button",value:"-",onClick:function(){return e("minus",r,i)},disabled:1===r.quantity&&!0}),a.a.createElement(ln,{type:"text",value:s,name:o,disabled:!0}),a.a.createElement(un,{type:"button",value:"+",onClick:function(){return e("plus",r,i)}}))),a.a.createElement(sn,{icon:B.a,onClick:function(){return t(r,i)}}))};function dn(){var n=Object(D.a)(["\n  display: block;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 400;\n  color: lightgray;\n  padding-top: 80px;\n"]);return dn=function(){return n},n}function fn(){var n=Object(D.a)(["\n  font-size: 1.8rem;\n"]);return fn=function(){return n},n}function bn(){var n=Object(D.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n"]);return bn=function(){return n},n}function gn(){var n=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: auto;\n"]);return gn=function(){return n},n}function mn(){var n=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n  padding: 30px 0 10px;\n"]);return mn=function(){return n},n}function xn(){var n=Object(D.a)(["\n  overflow-y: scroll;\n  scrollbar-width: none;\n"]);return xn=function(){return n},n}function vn(){var n=Object(D.a)(["\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"]);return vn=function(){return n},n}function hn(){var n=Object(D.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 0;\n"]);return hn=function(){return n},n}function On(){var n=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-bottom: 1px solid lightgrey;\n"]);return On=function(){return n},n}function yn(){var n=Object(D.a)(["\n  display: grid;\n  grid-template-rows: 100px 1fr 200px;\n  width: 100vw;\n  height: 100vh;\n  max-width: 500px;\n  padding: 0 20px;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  right: 0;\n  transition: 0.4s;\n  transform: ",";\n  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);\n"]);return yn=function(){return n},n}var wn=R.b.div(yn(),(function(n){return n.isCartOpen?"translateX(0)":"translateX(100%)"})),jn=R.b.div(On()),En=R.b.h3(hn()),kn=Object(R.b)(N)(vn()),Cn=R.b.div(xn()),Pn=R.b.div(mn()),Ln=R.b.div(gn()),zn=Object(R.b)(I)(bn()),Tn=Object(R.b)(I)(fn()),Sn=R.b.span(dn()),_n=Object(c.b)((function(n){return{isCartOpen:n.cart.isCartOpen,products:n.cart.products,totalPrice:n.cart.totalPrice}}),(function(n){return{closeCart:function(){return n({type:"CLOSE_CART"})},clearBasket:function(){return n({type:"CLEAR_BASKET"})},removeProduct:function(t,e){return n(function(n,t){return{type:"REMOVE_PRODUCT",payload:{newProductList:t.filter((function(t){return t.id!==n.id})),priceToRemove:n.price*n.quantity}}}(t,e))},changeProductQuantity:function(t,e,r){return n(function(n,t,e){var r=e,a=t.price,i=r.findIndex((function(n){return n.id===t.id}));return t.quantity>1?"plus"===n?r[i].quantity+=1:(r[i].quantity-=1,a*=-1):1===t.quantity&&"plus"===n&&(r[i].quantity+=1),{type:"CHANGE_PRODUCT_QUANTITY",payload:{newProductList:r,priceToChange:a}}}(t,e,r))}}}))((function(n){var t,e=n.isCartOpen,r=n.products,i=n.totalPrice,o=n.closeCart,c=n.clearBasket,u=n.removeProduct,l=n.changeProductQuantity;return t=0!==r.length?r.map((function(n){return a.a.createElement(pn,{key:n.id,product:n,products:r,changeProductQuantity:l,removeProduct:u})})):a.a.createElement(Sn,null,"Your cart is empty..."),a.a.createElement(wn,{isCartOpen:e},a.a.createElement(jn,null,a.a.createElement(En,null,"Your Cart"),a.a.createElement(kn,{icon:Y.a,onClick:o})),a.a.createElement(Cn,null,t),a.a.createElement(Pn,null,a.a.createElement(Ln,null,a.a.createElement(zn,null,"Total"),a.a.createElement(Tn,null,i,"$")),a.a.createElement(A,null,"Checkout"),a.a.createElement(A,{color:"grey",onClick:c},"Clear basket")))})),Fn=e(29);function Dn(){var n=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: hsl(195, 100%, 40%);\n  border-style: solid;\n  border-width: 3px;\n  border-color: ",";\n  background-color: ",";\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  &:hover {\n    border: 3px solid hsl(195, 100%, 40%);\n    background-color: ",";\n  }\n"]);return Dn=function(){return n},n}function Rn(){var n=Object(D.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 20px;\n  padding: 20px 0;\n"]);return Rn=function(){return n},n}function Xn(){var n=Object(D.a)(["\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 400;\n  margin: 0;\n"]);return Xn=function(){return n},n}function An(){var n=Object(D.a)(["\n  padding: 40px 0;\n"]);return An=function(){return n},n}function Un(){var n=Object(D.a)(["\n  overflow-y: scroll;\n  scrollbar-width: none;\n"]);return Un=function(){return n},n}function Nn(){var n=Object(D.a)(["\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"]);return Nn=function(){return n},n}function qn(){var n=Object(D.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 0;\n"]);return qn=function(){return n},n}function In(){var n=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-bottom: 1px solid lightgrey;\n"]);return In=function(){return n},n}function Mn(){var n=Object(D.a)(["\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  width: 100vw;\n  height: 100vh;\n  max-width: 500px;\n  padding: 0 20px;\n  background-color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: 0.4s;\n  transform: ",";\n  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);\n"]);return Mn=function(){return n},n}var Yn=R.b.div(Mn(),(function(n){return n.isFiltersOpen?"translateX(0)":"translateX(-100%)"})),Qn=R.b.div(In()),Bn=R.b.h3(qn()),Jn=Object(R.b)(N)(Nn()),Hn=R.b.div(Un()),Vn=R.b.div(An()),$n=R.b.h4(Xn()),Gn=R.b.div(Rn()),Kn=Object(R.b)(N)(Dn(),(function(n){return n.active?"hsl(195, 100%, 40%)":"transparent"}),(function(n){return n.color||"hsl(194.1, 63%, 89.4%)"}),(function(n){return n.color||"hsl(194.1, 63%, 89.4%)"})),Wn={sizes:["XS","S","M","L","XL","XXL"],colors:["red","green","blue","yellow","orange","pink","gray","black","white"]},Zn=function(n){var t=n.isFiltersOpen,e=n.openFilters,i=n.filterProducts,o=n.activeFilters,c=Object(r.useState)([]),u=Object(Fn.a)(c,2),l=u[0],s=u[1],p=function(n,t){var e=l;e.includes(t)?e=e.filter((function(n){return n!==t})):e.push(t),i(n,t,o),s(e)},d=Wn.sizes.map((function(n){return a.a.createElement(Kn,{key:n,active:l.includes(n)&&!0,onClick:function(){return p("sizes",n)}},n)})),f=Wn.colors.map((function(n){return a.a.createElement(Kn,{key:n,active:l.includes(n)&&!0,color:n,onClick:function(){return p("colors",n)}})}));return a.a.createElement(Yn,{isFiltersOpen:t},a.a.createElement(Qn,null,a.a.createElement(Bn,null,"Filter"),a.a.createElement(Jn,{icon:Y.a,onClick:e})),a.a.createElement(Hn,null,a.a.createElement(Vn,null,a.a.createElement($n,null,"Size"),a.a.createElement(Gn,null,d)),a.a.createElement(Vn,null,a.a.createElement($n,null,"Color"),a.a.createElement(Gn,null,f))))},nt="375px",tt="425px",et="768px",rt="1024px",at="1440px",it="2560px",ot={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(nt,")"),mobileL:"(min-width: ".concat(tt,")"),tablet:"(min-width: ".concat(et,")"),laptop:"(min-width: ".concat(rt,")"),laptopL:"(min-width: ".concat(at,")"),desktop:"(min-width: ".concat(it,")"),desktopL:"(min-width: ".concat(it,")")},ct=e(26),ut=e.n(ct);function lt(){var n=Object(D.a)(["\n  font-size: 1.4rem;\n"]);return lt=function(){return n},n}function st(){var n=Object(D.a)(["\n  width: 100%;\n  padding: 8px 40px 8px 20px;\n  font-size: 1.4rem;\n  border: 1px solid black;\n  background-color: white;\n  border-radius: 50px;\n  appearance: none;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: calc(100% - 15px) 7px;\n"]);return st=function(){return n},n}function pt(){var n=Object(D.a)(["\n  float: left;\n  width: 100%;\n  @media "," {\n    width: auto;\n  }\n"]);return pt=function(){return n},n}var dt=[{value:"",label:"Sort by"},{value:"latest",label:"Latest"},{value:"lowestprice",label:"Price: Low to high"},{value:"highestprice",label:"Price: High to low"}],ft=R.b.form(pt(),ot.mobileL),bt=R.b.select(st(),ut.a),gt=R.b.option(lt()),mt=function(n){var t=n.sortProducts,e=n.products,r=dt.map((function(n){return a.a.createElement(gt,{value:n.value,key:n.value},n.label)}));return a.a.createElement(ft,null,a.a.createElement(bt,{onChange:function(n){return t(n.target.value,e)}},r))};function xt(){var n=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  flex-basis: 15px;\n  height: 15px;\n  background-color: ",";\n  border-radius: 50%;\n  font-size: 1.2rem;\n  color: gray;\n  box-shadow: ",";\n"]);return xt=function(){return n},n}function vt(){var n=Object(D.a)(["\n  flex-basis: 100%;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 10px;\n"]);return vt=function(){return n},n}function ht(){var n=Object(D.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 10px 0;\n"]);return ht=function(){return n},n}function Ot(){var n=Object(D.a)(["\n  width: 100%;\n"]);return Ot=function(){return n},n}function yt(){var n=Object(D.a)(["\n  display: block;\n  text-align: center;\n  margin: 0 0 20px;\n  font-size: 1.4rem;\n  font-weight: 400;\n"]);return yt=function(){return n},n}function wt(){var n=Object(D.a)(["\n  position: relative;\n  width: 100%;\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 1);\n"]);return wt=function(){return n},n}function jt(){var n=Object(D.a)(["\n  display: inline-block;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n"]);return jt=function(){return n},n}function Et(){var n=Object(D.a)(["\n  height: 400px;\n  width: 300px;\n  display: block;\n"]);return Et=function(){return n},n}var kt=R.b.img(Et()),Ct=R.b.div(jt()),Pt=R.b.div(wt()),Lt=R.b.span(yt()),zt=Object(R.b)(A)(Ot()),Tt=R.b.div(ht()),St=Object(R.b)(I)(vt()),_t=R.b.span(xt(),(function(n){return n.color||"white"}),(function(n){return n.color?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)":"none"})),Ft=Object(c.b)((function(n){return{products:n.cart.products}}),(function(n){return{addProduct:function(t,e){return n(function(n,t){var e=t.map((function(n){return n.id})).indexOf(n.id),r=t,a=n.price;if(-1!==e)r[e].quantity+=1;else{var i=Object(l.a)({},n,{quantity:1});r.push(i)}return{type:"ADD_PRODUCT",payload:{newProductList:r,priceToAdd:a}}}(t,e))}}}))((function(n){var t=n.product,e=n.products,r=n.addProduct,i=t.title,o=t.price,c=t.img,u=t.sizes,l=t.colors.map((function(n){return a.a.createElement(_t,{key:n,color:n})})),s=u.map((function(n){return a.a.createElement(_t,{key:n},n)}));return a.a.createElement(Ct,null,a.a.createElement(kt,{src:c,alt:i}),a.a.createElement(Pt,null,a.a.createElement(I,null,i),a.a.createElement(Lt,null,o,"$"),a.a.createElement(Tt,null,a.a.createElement(St,null,"Available colors"),l),a.a.createElement(Tt,null,a.a.createElement(St,null,"Available sizes"),s),a.a.createElement(zt,{onClick:function(){return r(t,e)}},"Add to cart")))})),Dt=e(9);function Rt(){var n=Object(D.a)(["\n  float: left;\n  margin: 0;\n  padding: 10px 30px;\n  width: 100%;\n  @media "," {\n    width: auto;\n  }\n"]);return Rt=function(){return n},n}function Xt(){var n=Object(D.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 20px;\n"]);return Xt=function(){return n},n}function At(){var n=Object(D.a)(["\n  text-align: left;\n  font-size: 3rem;\n  color: hsl(195, 100%, 40%);\n  padding: 40px 0;\n  margin: 0 auto;\n"]);return At=function(){return n},n}function Ut(){var n=Object(D.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 300px);\n  /* grid-auto-columns: 300px; */\n  justify-content: center;\n  align-items: center;\n  grid-gap: 30px;\n  position: relative;\n  margin: 0 auto;\n  padding-top: 40px;\n  clear: both;\n  @media "," {\n    grid-template-columns: repeat(2, 300px);\n  }\n  @media "," {\n    grid-template-columns: repeat(3, 300px);\n  }\n  @media "," {\n    grid-template-columns: repeat(4, 300px);\n  }\n"]);return Ut=function(){return n},n}var Nt=R.b.div(Ut(),ot.tablet,ot.laptop,ot.laptopL),qt=Object(R.b)(I)(At()),It=R.b.div(Xt()),Mt=Object(R.b)(A)(Rt(),ot.mobileL),Yt=Object(c.b)((function(n){var t=n.productList;return{data:t.data,isFiltersOpen:t.isFiltersOpen,activeFilters:t.activeFilters}}),(function(n){return{sortProducts:function(t,e){return n(function(n,t){return"latest"===n?t.sort((function(n,t){return t.addedDate-n.addedDate})):"lowestprice"===n?t.sort((function(n,t){return n.price-t.price})):"highestprice"===n&&t.sort((function(n,t){return t.price-n.price})),{type:"SORT_PRODUCTS",payload:t}}(t,e))},openFilters:function(){return n({type:"OPEN_FILTERS"})},filterProducts:function(t,e,r){return n(function(n,t,e,r){var a=[],i=z,o=e;o[n]?o[n].includes(t)?(o[n]=o[n].filter((function(n){return n!==t})),0===o[n].length&&delete o[n]):o[n].push(t):o=Object(l.a)({},o,Object(Dt.a)({},n,[t]));var c=Object.keys(o);return 0===c.length?a=i:c.forEach((function(n,t){a=0===t||r?i.filter((function(t){var e=t.id,r=!1,i=!1;return a.forEach((function(n){n.id===e&&(r=!0)})),r||(i=t[n].some((function(t){return o[n].includes(t)}))),i})):a.filter((function(t){return t[n].some((function(t){return o[n].includes(t)}))}))})),{type:"FILTER_PRODUCTS",payload:{newActiveFilters:o,newProductList:a}}}(t,e,r))}}}))((function(n){var t=n.data,e=n.sortProducts,r=n.openFilters,i=n.isFiltersOpen,o=n.filterProducts,c=n.activeFilters,u=t.map((function(n){return a.a.createElement(Ft,{key:n.id,product:n})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(qt,null,"React Shopping Cart"),a.a.createElement(It,null,a.a.createElement(Mt,{onClick:r},"Filter"),a.a.createElement(mt,{sortProducts:e,products:t})),a.a.createElement(Nt,null,u),a.a.createElement(Zn,{isFiltersOpen:i,openFilters:r,filterProducts:o,activeFilters:c,data:t}))})),Qt=e(27),Bt=e.n(Qt);function Jt(){var n=Object(D.a)(["\n\n@import url('https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap');\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  #root{\n    position: relative;\n  }\n\n"]);return Jt=function(){return n},n}var Ht=Object(R.a)(Jt());function Vt(){var n=Object(D.a)(["\n  height: 60px;\n  width: 60px;\n  position: fixed;\n  top: 100vh;\n  right: 40px;\n  transform: translateY(calc(-100% - 30px));\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-weight: 700;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  transition: 0.2s;\n  cursor: pointer;\n  background-color: ",";\n  &:hover {\n    transform: translateY(calc(-100% - 30px)) scale(1.1);\n  }\n"]);return Vt=function(){return n},n}function $t(){var n=Object(D.a)(["\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: 0.2s;\n  opacity: ",";\n  visibility: ",";\n  background-color: rgba(0, 0, 0, 0.9);\n"]);return $t=function(){return n},n}function Gt(){var n=Object(D.a)(["\n  position: relative;\n  background-color: white;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 10px;\n"]);return Gt=function(){return n},n}var Kt=R.b.div(Gt()),Wt=R.b.div($t(),(function(n){return n.isCartOpen?1:0}),(function(n){return n.isCartOpen?"visible":"hidden"})),Zt=Object(R.b)(N)(Vt(),(function(n){return n.color||"hsl(195, 100%, 40%)"})),ne=Object(c.b)((function(n){return{isCartOpen:n.cart.isCartOpen}}),(function(n){return{openCart:function(){return n({type:"OPEN_CART"})}}}))((function(n){var t=n.isCartOpen,e=n.openCart;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Kt,null,a.a.createElement(Yt,null),a.a.createElement(Wt,{isCartOpen:t})),a.a.createElement(_n,null),a.a.createElement(Zt,{icon:Bt.a,onClick:e}),a.a.createElement(Ht,null))})),te=function(){return a.a.createElement(c.a,{store:F},a.a.createElement(ne,null))};o.a.render(a.a.createElement(te,null),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.88c7c5cc.chunk.js.map