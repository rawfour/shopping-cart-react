(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,,function(n,t,e){n.exports=e.p+"static/media/close.ea4d4547.svg"},,,,function(n,t,e){n.exports=e.p+"static/media/dress.7234c5a7.jpg"},function(n,t,e){n.exports=e.p+"static/media/hoody.33ca7b77.jpg"},function(n,t,e){n.exports=e.p+"static/media/jacket.cc21c5fd.jpg"},function(n,t,e){n.exports=e.p+"static/media/jeans.ebdaa7f4.jpg"},function(n,t,e){n.exports=e.p+"static/media/jogger.ebbbadec.jpg"},function(n,t,e){n.exports=e.p+"static/media/shirt.346a7bb0.jpg"},function(n,t,e){n.exports=e.p+"static/media/sweatshirt.9a08e3db.jpg"},function(n,t,e){n.exports=e.p+"static/media/tshirt.21a4e3b6.jpg"},,,,function(n,t,e){n.exports=e.p+"static/media/remove.67b8cf8c.svg"},,,,function(n,t,e){n.exports=e.p+"static/media/arrow-down.63fbce54.svg"},function(n,t,e){n.exports=e.p+"static/media/cart.0de0451e.svg"},,,,function(n,t,e){n.exports=e(47)},,,,,,,,,,,,function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(9),o=e.n(i),c=e(4),u=e(6),l=e(5),s=e(3),p={isCartOpen:!1,products:[],totalPrice:0},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":var e=t.payload,r=n.products,a=r.map((function(n){return n.id})).indexOf(e.id),i=n.totalPrice+e.price;return-1!==a?r[a].quantity+=1:(e=Object(s.a)({},e,{quantity:1}),r.push(e)),Object(s.a)({},n,{products:Object(l.a)(r),isCartOpen:!0,totalPrice:i});case"REMOVE_PRODUCT":var o=t.payload,c=n.products.filter((function(n){return n.id!==o.id})),u=n.totalPrice-o.price*o.quantity;return Object(s.a)({},n,{products:Object(l.a)(c),totalPrice:u});case"CHANGE_PRODUCT_QUANTITY":var d=t.payload,f=d.btnType,b=d.product,g=n.products,m=n.totalPrice,v=g,h=m,x=v.findIndex((function(n){return n.id===b.id}));return b.quantity>1?"plus"===f?(v[x].quantity+=1,h+=v[x].price):(v[x].quantity-=1,h-=v[x].price):1===b.quantity&&"plus"===f&&(v[x].quantity+=1,h+=v[x].price),Object(s.a)({},n,{products:Object(l.a)(v),totalPrice:h});case"OPEN_CART":return Object(s.a)({},n,{isCartOpen:!0});case"CLOSE_CART":return Object(s.a)({},n,{isCartOpen:!1});case"CLEAR_BASKET":return Object(s.a)({},n,{products:[],totalPrice:0});default:return n}},f=e(10),b=e(15),g=e.n(b),m=e(16),v=e.n(m),h=e(17),x=e.n(h),O=e(18),y=e.n(O),j=e(19),E=e.n(j),w=e(20),k=e.n(w),C=e(21),P=e.n(C),z=e(22),S=e.n(z),T=[{id:1,title:"Jacket",price:379,sizes:["XS","S","M","L","XL","XXL"],colors:["red","green","blue","gray","black","white"],img:x.a,addedDate:1578787200},{id:2,title:"Jeans",price:249,sizes:["XS","XXL"],colors:["red","green","blue","yellow","orange"],img:y.a,addedDate:1566259200},{id:3,title:"Sweatshirt",price:79,sizes:["S","M","L"],colors:["black","white"],img:P.a,addedDate:1575504e3},{id:4,title:"Tshirt",price:24,sizes:["S","L","XXL"],colors:["red","blue","orange","pink","black","white"],img:S.a,addedDate:1581638400},{id:5,title:"Hoody",price:129,sizes:["XL","XXL"],colors:["blue","yellow","orange","pink","gray"],img:v.a,addedDate:1556755200},{id:6,title:"Dress",price:289,sizes:["XS","S"],colors:["red","green","yellow","orange","gray","black"],img:g.a,addedDate:1562284800},{id:6,title:"Jogger",price:289,sizes:["XS","S"],colors:["red","green","yellow","orange","gray","black"],img:E.a,addedDate:1562284800},{id:6,title:"Shirt",price:289,sizes:["XS","S"],colors:["red","green","yellow","orange","gray","black"],img:k.a,addedDate:1562284800}],F={data:T,isFiltersOpen:!1,activeFilters:{}},_=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_PRODUCTS":var e=t.payload,r=e.value,a=e.products;return"latest"===r?a.sort((function(n,t){return t.addedDate-n.addedDate})):"lowestprice"===r?a.sort((function(n,t){return n.price-t.price})):"highestprice"===r&&a.sort((function(n,t){return t.price-n.price})),Object(s.a)({},n,{data:Object(l.a)(a)});case"OPEN_FILTERS":return Object(s.a)({},n,{isFiltersOpen:!n.isFiltersOpen});case"FILTER_PRODUCTS":var i=t.payload,o=i.filterType,c=i.value,u=n.activeFilters,p=T;return u[o]?u[o].includes(c)?(u[o]=u[o].filter((function(n){return n!==c})),0===u[o].length&&delete u[o]):u[o]=[].concat(Object(l.a)(u[o]),[c]):u=Object(s.a)({},u,Object(f.a)({},o,[c])),Object.keys(u).forEach((function(n,t){0!==u[n].length&&u[n].forEach((function(e,r){p=0===t&&0===r?p.filter((function(n){return!0===n[Object.keys(u)[0]].includes(u[Object.keys(u)[0]][0])})):p.filter((function(t){return!0===t[n].includes(e)}))}))})),Object(s.a)({},n,{data:p,activeFilters:u});default:return n}},L=Object(u.b)({cart:d,productList:_}),D=Object(u.c)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),R=e(1),X=e(2);function A(){var n=Object(R.a)(["\n  display: block;\n  border: none;\n  border-radius: 50px;\n  color: white;\n  font-weight: 700;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  margin: 5px 0;\n  cursor: pointer;\n  transition: 0.2s;\n  background-color: ",";\n  &:hover {\n    background-color: black;\n  }\n"]);return A=function(){return n},n}var U=X.b.button(A(),(function(n){return n.color||"hsl(195, 100%, 40%)"}));function N(){var n=Object(R.a)(["\n  height: 40px;\n  width: 40px;\n  background-color: lightgrey;\n  color: white;\n  border-radius: 50%;\n  border: none;\n  transition: 0.2s;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 40%;\n  cursor: pointer;\n  &:hover {\n    background-color: black;\n  }\n"]);return N=function(){return n},n}var q=X.b.button(N(),(function(n){return n.icon}));function I(){var n=Object(R.a)(["\n  text-align: center;\n  margin: 0 0 5px;\n  font-size: 1.4rem;\n  font-weight: 700;\n"]);return I=function(){return n},n}var M=X.b.h3(I()),Y=e(11),Q=e.n(Y),B=e(26),J=e.n(B);function H(){var n=Object(R.a)(["\n  &:hover {\n    background-color: red;\n  }\n"]);return H=function(){return n},n}function V(){var n=Object(R.a)(["\n  border: 1px solid lightgrey;\n  background-color: white;\n  font-size: 1.4rem;\n  text-align: center;\n"]);return V=function(){return n},n}function $(){var n=Object(R.a)(["\n  border: 1px solid lightgrey;\n  background-color: white;\n  font-size: 1.4rem;\n  transition: 0.2s;\n  &:hover {\n    color: white;\n    background-color: black;\n  }\n"]);return $=function(){return n},n}function G(){var n=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 40px);\n  grid-template-rows: 40px;\n  grid-gap: 3px;\n"]);return G=function(){return n},n}function K(){var n=Object(R.a)(["\n  text-align: left;\n  margin: 5px 0 10px;\n  font-size: 1.4rem;\n  font-weight: 400;\n"]);return K=function(){return n},n}function W(){var n=Object(R.a)(["\n  text-align: left;\n  margin: 0;\n"]);return W=function(){return n},n}function Z(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Z=function(){return n},n}function nn(){var n=Object(R.a)(["\n  width: 100%;\n  min-height: 120px;\n  display: block;\n"]);return nn=function(){return n},n}function tn(){var n=Object(R.a)(["\n  padding: 30px;\n  display: grid;\n  grid-template-columns: 90px 1fr 40px;\n  grid-gap: 15px;\n  border-bottom: 1px solid lightgrey;\n"]);return tn=function(){return n},n}var en=X.b.div(tn()),rn=X.b.img(nn()),an=X.b.div(Z()),on=Object(X.b)(M)(W()),cn=X.b.span(K()),un=X.b.form(G()),ln=X.b.input($()),sn=X.b.input(V()),pn=Object(X.b)(q)(H()),dn=function(n){var t=n.removeProduct,e=n.changeProductQuantity,r=n.product,i=r.id,o=r.title,c=r.img,u=r.price,l=r.quantity;return a.a.createElement(en,null,a.a.createElement(rn,{src:c,alt:o}),a.a.createElement(an,null,a.a.createElement(on,null,o),a.a.createElement(cn,null,u,"$"),a.a.createElement(un,null,a.a.createElement(ln,{type:"button",value:"-",onClick:function(){return e("minus",r)},disabled:1===r.quantity&&!0}),a.a.createElement(sn,{type:"text",value:l,name:i,disabled:!0}),a.a.createElement(ln,{type:"button",value:"+",onClick:function(){return e("plus",r)}}))),a.a.createElement(pn,{icon:J.a,onClick:function(){return t(r)}}))};function fn(){var n=Object(R.a)(["\n  display: block;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 400;\n  color: lightgray;\n  padding-top: 80px;\n"]);return fn=function(){return n},n}function bn(){var n=Object(R.a)(["\n  font-size: 1.8rem;\n"]);return bn=function(){return n},n}function gn(){var n=Object(R.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n"]);return gn=function(){return n},n}function mn(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: auto;\n"]);return mn=function(){return n},n}function vn(){var n=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n  padding: 30px 0 10px;\n"]);return vn=function(){return n},n}function hn(){var n=Object(R.a)(["\n  overflow-y: scroll;\n  scrollbar-width: none;\n"]);return hn=function(){return n},n}function xn(){var n=Object(R.a)(["\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"]);return xn=function(){return n},n}function On(){var n=Object(R.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 0;\n"]);return On=function(){return n},n}function yn(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-bottom: 1px solid lightgrey;\n"]);return yn=function(){return n},n}function jn(){var n=Object(R.a)(["\n  display: grid;\n  grid-template-rows: 100px 1fr 200px;\n  width: 100vw;\n  height: 100vh;\n  max-width: 500px;\n  padding: 0 20px;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  right: 0;\n  transition: 0.4s;\n  transform: ",";\n  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);\n"]);return jn=function(){return n},n}var En=X.b.div(jn(),(function(n){return n.isCartOpen?"translateX(0)":"translateX(100%)"})),wn=X.b.div(yn()),kn=X.b.h3(On()),Cn=Object(X.b)(q)(xn()),Pn=X.b.div(hn()),zn=X.b.div(vn()),Sn=X.b.div(mn()),Tn=Object(X.b)(M)(gn()),Fn=Object(X.b)(M)(bn()),_n=X.b.span(fn()),Ln=Object(c.b)((function(n){var t=n.cart;return{isCartOpen:t.isCartOpen,products:t.products,totalPrice:t.totalPrice}}),(function(n){return{closeCart:function(){return n({type:"CLOSE_CART"})},clearBasket:function(){return n({type:"CLEAR_BASKET"})},removeProduct:function(t){return n(function(n){return{type:"REMOVE_PRODUCT",payload:n}}(t))},changeProductQuantity:function(t,e){return n(function(n,t){return{type:"CHANGE_PRODUCT_QUANTITY",payload:{btnType:n,product:t}}}(t,e))}}}))((function(n){var t=n.isCartOpen,e=n.products,r=n.totalPrice,i=n.closeCart,o=n.clearBasket,c=n.removeProduct,u=n.changeProductQuantity,l=e.map((function(n){return a.a.createElement(dn,{key:n.id,product:n,changeProductQuantity:u,removeProduct:c})}));return a.a.createElement(En,{isCartOpen:t},a.a.createElement(wn,null,a.a.createElement(kn,null,"Your Cart"),a.a.createElement(Cn,{icon:Q.a,onClick:i})),a.a.createElement(Pn,null,l.length?l:a.a.createElement(_n,null,"Your cart is empty...")),a.a.createElement(zn,null,a.a.createElement(Sn,null,a.a.createElement(Tn,null,"Total"),a.a.createElement(Fn,null,r,"$")),a.a.createElement(U,null,"Checkout"),a.a.createElement(U,{color:"grey",onClick:o},"Clear basket")))})),Dn=e(27),Rn=e(28),Xn=e(32),An=e(29),Un=e(34);function Nn(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: hsl(195, 100%, 40%);\n  border-style: solid;\n  border-width: 3px;\n  border-color: ",";\n  background-color: ",";\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  &:hover {\n    border: 3px solid hsl(195, 100%, 40%);\n    background-color: ",";\n  }\n"]);return Nn=function(){return n},n}function qn(){var n=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-gap: 20px;\n  padding: 20px 0;\n"]);return qn=function(){return n},n}function In(){var n=Object(R.a)(["\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 400;\n  margin: 0;\n"]);return In=function(){return n},n}function Mn(){var n=Object(R.a)(["\n  padding: 40px 0;\n"]);return Mn=function(){return n},n}function Yn(){var n=Object(R.a)(["\n  overflow-y: scroll;\n  scrollbar-width: none;\n"]);return Yn=function(){return n},n}function Qn(){var n=Object(R.a)(["\n  position: absolute;\n  padding: 0;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n"]);return Qn=function(){return n},n}function Bn(){var n=Object(R.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin: 0;\n"]);return Bn=function(){return n},n}function Jn(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-bottom: 1px solid lightgrey;\n"]);return Jn=function(){return n},n}function Hn(){var n=Object(R.a)(["\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  width: 100vw;\n  height: 100vh;\n  max-width: 500px;\n  padding: 0 30px;\n  background-color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: 0.4s;\n  /* border-right: 2px solid black; */\n  transform: ",";\n  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);\n"]);return Hn=function(){return n},n}var Vn=X.b.div(Hn(),(function(n){return n.isFiltersOpen?"translateX(0)":"translateX(-100%)"})),$n=X.b.div(Jn()),Gn=X.b.h3(Bn()),Kn=Object(X.b)(q)(Qn()),Wn=X.b.div(Yn()),Zn=X.b.div(Mn()),nt=X.b.h4(In()),tt=X.b.div(qn()),et=Object(X.b)(q)(Nn(),(function(n){return n.active?"hsl(195, 100%, 40%)":"transparent"}),(function(n){return n.color||"hsl(194.1, 63%, 89.4%)"}),(function(n){return n.color||"hsl(194.1, 63%, 89.4%)"})),rt={sizes:["XS","S","M","L","XL","XXL"],colors:["red","green","blue","yellow","orange","pink","gray","black","white"]},at=function(n){function t(){var n,e;Object(Dn.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(Xn.a)(this,(n=Object(An.a)(t)).call.apply(n,[this].concat(a)))).state={activeFilter:[]},e.handleActiveFilter=function(n,t,r){var a=e.state.activeFilter;a.includes(t)?a=a.filter((function(n){return n!==t})):a.push(t),r(n,t),e.setState({activeFilter:a})},e}return Object(Un.a)(t,n),Object(Rn.a)(t,[{key:"render",value:function(){var n=this,t=this.state.activeFilter,e=this.props,r=e.isFiltersOpen,i=e.openFilters,o=e.filterProducts,c=rt.sizes.map((function(e){return a.a.createElement(et,{key:e,active:t.includes(e)&&!0,onClick:function(){return n.handleActiveFilter("sizes",e,o)}},e)})),u=rt.colors.map((function(e){return a.a.createElement(et,{key:e,active:t.includes(e)&&!0,color:e,onClick:function(){return n.handleActiveFilter("colors",e,o)}})}));return a.a.createElement(Vn,{isFiltersOpen:r},a.a.createElement($n,null,a.a.createElement(Gn,null,"Filter"),a.a.createElement(Kn,{icon:Q.a,onClick:i})),a.a.createElement(Wn,null,a.a.createElement(Zn,null,a.a.createElement(nt,null,"Size"),a.a.createElement(tt,null,c)),a.a.createElement(Zn,null,a.a.createElement(nt,null,"Color"),a.a.createElement(tt,null,u))))}}]),t}(a.a.Component),it=e(30),ot=e.n(it);function ct(){var n=Object(R.a)(["\n  font-size: 1.4rem;\n"]);return ct=function(){return n},n}function ut(){var n=Object(R.a)(["\n  padding: 8px 40px 8px 20px;\n  font-size: 1.4rem;\n  border: 1px solid black;\n  background-color: white;\n  border-radius: 50px;\n  appearance: none;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 6%;\n  background-position: 93% 7px;\n"]);return ut=function(){return n},n}function lt(){var n=Object(R.a)(["\n  margin-left: 30px;\n  float: left;\n"]);return lt=function(){return n},n}var st=[{value:"",label:"Sort by"},{value:"latest",label:"Latest"},{value:"lowestprice",label:"Price: Low to high"},{value:"highestprice",label:"Price: High to low"}],pt=X.b.form(lt()),dt=X.b.select(ut(),ot.a),ft=X.b.option(ct()),bt=function(n){var t=n.sortProducts,e=n.products,r=st.map((function(n){return a.a.createElement(ft,{value:n.value,key:n.value},n.label)}));return a.a.createElement(pt,null,a.a.createElement(dt,{onChange:function(n){return t(n.target.value,e)}},r))};function gt(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  flex-basis: 15px;\n  height: 15px;\n  background-color: ",";\n  border-radius: 50%;\n  font-size: 1.2rem;\n  color: gray;\n  box-shadow: ",";\n"]);return gt=function(){return n},n}function mt(){var n=Object(R.a)(["\n  flex-basis: 100%;\n  text-align: left;\n  font-weight: 400;\n  margin-bottom: 10px;\n"]);return mt=function(){return n},n}function vt(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 10px 0;\n"]);return vt=function(){return n},n}function ht(){var n=Object(R.a)(["\n  width: 100%;\n"]);return ht=function(){return n},n}function xt(){var n=Object(R.a)(["\n  display: block;\n  text-align: center;\n  margin: 0 0 20px;\n  font-size: 1.4rem;\n  font-weight: 400;\n"]);return xt=function(){return n},n}function Ot(){var n=Object(R.a)(["\n  position: relative;\n  width: 100%;\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 1);\n"]);return Ot=function(){return n},n}function yt(){var n=Object(R.a)(["\n  display: inline-block;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n"]);return yt=function(){return n},n}function jt(){var n=Object(R.a)(["\n  height: 400px;\n  width: 300px;\n  display: block;\n"]);return jt=function(){return n},n}var Et=X.b.img(jt()),wt=X.b.div(yt()),kt=X.b.div(Ot()),Ct=X.b.span(xt()),Pt=Object(X.b)(U)(ht()),zt=X.b.div(vt()),St=Object(X.b)(M)(mt()),Tt=X.b.span(gt(),(function(n){return n.color||"white"}),(function(n){return n.color?"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)":"none"})),Ft=Object(c.b)(null,(function(n){return{addProduct:function(t){return n(function(n){return{type:"ADD_PRODUCT",payload:n}}(t))}}}))((function(n){var t=n.product,e=n.addProduct,r=t.title,i=t.price,o=t.img,c=t.sizes,u=t.colors.map((function(n){return a.a.createElement(Tt,{key:n,color:n})})),l=c.map((function(n){return a.a.createElement(Tt,{key:n},n)}));return a.a.createElement(wt,null,a.a.createElement(Et,{src:o,alt:r}),a.a.createElement(kt,null,a.a.createElement(M,null,r),a.a.createElement(Ct,null,i,"$"),a.a.createElement(zt,null,a.a.createElement(St,null,"Available colors"),u),a.a.createElement(zt,null,a.a.createElement(St,null,"Available sizes"),l),a.a.createElement(Pt,{onClick:function(){return e(t)}},"Add to cart")))})),_t="375px",Lt="425px",Dt="768px",Rt="1024px",Xt="1440px",At="2560px",Ut={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(_t,")"),mobileL:"(min-width: ".concat(Lt,")"),tablet:"(min-width: ".concat(Dt,")"),laptop:"(min-width: ".concat(Rt,")"),laptopL:"(min-width: ".concat(Xt,")"),desktop:"(min-width: ".concat(At,")"),desktopL:"(min-width: ".concat(At,")")};function Nt(){var n=Object(R.a)(["\n  float: left;\n  margin: 0;\n  padding: 10px 30px;\n"]);return Nt=function(){return n},n}function qt(){var n=Object(R.a)(["\n  text-align: left;\n  font-size: 3rem;\n  color: hsl(195, 100%, 40%);\n  padding: 40px 0;\n  margin: 0 auto;\n"]);return qt=function(){return n},n}function It(){var n=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 300px);\n  /* grid-auto-columns: 300px; */\n  justify-content: center;\n  align-items: center;\n  grid-gap: 30px;\n  position: relative;\n  margin: 0 auto;\n  padding-top: 40px;\n  clear: both;\n  @media "," {\n    grid-template-columns: repeat(2, 300px);\n  }\n  @media "," {\n    grid-template-columns: repeat(3, 300px);\n  }\n  @media "," {\n    grid-template-columns: repeat(4, 300px);\n  }\n"]);return It=function(){return n},n}var Mt=X.b.div(It(),Ut.tablet,Ut.laptop,Ut.laptopL),Yt=Object(X.b)(M)(qt()),Qt=Object(X.b)(U)(Nt()),Bt=Object(c.b)((function(n){var t=n.productList;return{data:t.data,isFiltersOpen:t.isFiltersOpen}}),(function(n){return{sortProducts:function(t,e){return n(function(n,t){return{type:"SORT_PRODUCTS",payload:{value:n,products:t}}}(t,e))},openFilters:function(){return n({type:"OPEN_FILTERS"})},filterProducts:function(t,e){return n(function(n,t){return{type:"FILTER_PRODUCTS",payload:{filterType:n,value:t}}}(t,e))}}}))((function(n){var t=n.data,e=n.sortProducts,r=n.openFilters,i=n.isFiltersOpen,o=n.filterProducts,c=t.map((function(n){return a.a.createElement(Ft,{key:n.id,product:n})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(Yt,null,"React Shopping Cart"),a.a.createElement(Qt,{onClick:r},"Filter"),a.a.createElement(bt,{sortProducts:e,products:t}),a.a.createElement(Mt,null,c),a.a.createElement(at,{isFiltersOpen:i,openFilters:r,filterProducts:o}))})),Jt=e(31),Ht=e.n(Jt);function Vt(){var n=Object(R.a)(["\n\n@import url('https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap');\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  #root{\n    position: relative;\n  }\n\n"]);return Vt=function(){return n},n}var $t=Object(X.a)(Vt());function Gt(){var n=Object(R.a)(["\n  height: 60px;\n  width: 60px;\n  position: fixed;\n  top: 100vh;\n  right: 40px;\n  transform: translateY(calc(-100% - 30px));\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-weight: 700;\n  font-size: 1.3rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  transition: 0.2s;\n  cursor: pointer;\n  background-color: ",";\n  &:hover {\n    transform: translateY(calc(-100% - 30px)) scale(1.1);\n  }\n"]);return Gt=function(){return n},n}function Kt(){var n=Object(R.a)(["\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: 0.2s;\n  opacity: ",";\n  visibility: ",";\n  background-color: rgba(0, 0, 0, 0.9);\n"]);return Kt=function(){return n},n}function Wt(){var n=Object(R.a)(["\n  position: relative;\n  background-color: white;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 10px;\n"]);return Wt=function(){return n},n}var Zt=X.b.div(Wt()),ne=X.b.div(Kt(),(function(n){return n.isCartOpen?1:0}),(function(n){return n.isCartOpen?"visible":"hidden"})),te=Object(X.b)(q)(Gt(),(function(n){return n.color||"hsl(195, 100%, 40%)"})),ee=Object(c.b)((function(n){return{isCartOpen:n.cart.isCartOpen}}),(function(n){return{openCart:function(){return n({type:"OPEN_CART"})}}}))((function(n){var t=n.isCartOpen,e=n.openCart;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Zt,null,a.a.createElement(Bt,null),a.a.createElement(ne,{isCartOpen:t})),a.a.createElement(Ln,null),a.a.createElement(te,{icon:Ht.a,onClick:e}),a.a.createElement($t,null))})),re=function(){return a.a.createElement(c.a,{store:D},a.a.createElement(ee,null))};o.a.render(a.a.createElement(re,null),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.f39bcded.chunk.js.map