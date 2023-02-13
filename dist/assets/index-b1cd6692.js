import{a as o,j as e,F as c,f as i,r as m,g as v,b as y,i as h,t as C,k as S}from"./index-8ec4fd4d.js";import{u as k,C as j}from"./useWindowSize-7c87da91.js";const F=({item:t,removeFromCart:n,removeItem:l,addToCart:a})=>o("div",{className:"flex flex-col md:flex-row items-center justify-between p-4  rounded-lg shadow",children:[o("div",{className:"flex items-center",children:[e("img",{src:t==null?void 0:t.image,alt:t.name,className:"w-16 h-16 rounded-full mr-4"}),o("div",{className:"text-gray-600 text-sm",children:[e("p",{className:"font-medium",children:t.name}),o("p",{children:["$",t.price]})]})]}),o("div",{className:"flex items-center justify-end flex-wrap md:flex-nowrap",children:[e("button",{className:"bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-full mr-1 md:mr-4",onClick:()=>n(t),children:"-"}),e("p",{className:"text-gray-600 text-sm mr-1 md:mr-4",children:t.quantity}),e("button",{className:"bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded-full mr-1 md:mr-4",onClick:()=>a(t),children:"+"}),e("button",{className:"bg-red-500 hover:bg-red-600 text-white  p-1 md:py-2 md:px-4 rounded-full ",onClick:()=>l(t.id),children:"Remove"}),o("p",{className:"text-gray-600 text-sm ml-1 md:ml-5 w-24 font-bold",children:["Total: $",(t.price*(t.quantity||1)).toFixed(2)]})]})]}),T=({showModal:t,setShowModal:n,title:l,content:a})=>e(c,{children:t?o(c,{children:[e("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none",children:e("div",{className:"relative w-auto my-6 mx-auto max-w-3xl bg-orange-200",children:o("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none modal-wrapper",children:[o("div",{className:"flex items-start justify-between p-5 ",children:[e("h3",{className:"text-3xl font-semibold",children:l}),e("button",{className:"p-1 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>n(!1),children:e("span",{className:" text-white  h-6 w-6 text-2xl block outline-none focus:outline-none z-10",children:"×"})})]}),a&&e("div",{className:"p-5 modal-body",children:a})]})})}),e("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null}),z=()=>{const t=i(s=>s.cart.items),n=i(s=>s.cart.total),[l,a]=m.useState(!1),[r,d]=m.useState(!1),{user:u}=v(),{addToCart:x,removeFromCart:f,removeItem:p}=y(),{width:g,height:w}=k(),N=s=>{p(s),C("Product removed successfully")},b=()=>{u?(a(!l),setTimeout(()=>{S("cart"),window.location.assign("/products")},5e3)):d(!0)};return t.length?o("section",{className:"h-screen",children:[o("div",{className:"p-10 rounded-lg shadow",children:[t.map(s=>e(F,{item:s,removeFromCart:f,addToCart:x,removeItem:N},s.id)),o("div",{className:"mt-10",children:[o("h2",{className:"text-xl font-bold",children:["Total: $",n.toFixed(2)]}),e("button",{className:"bg-green-500 text-white py-2 px-4 rounded mt-5",onClick:b,children:"Pay now"})]})]}),l&&e(j,{width:g,height:w}),r&&e(T,{showModal:r,setShowModal:d,content:o("p",{className:"text-md font-medium",children:["To add an item to your shopping cart, you need to"," ",e(h,{to:"/auth/login",className:"text-orange-500",children:"log in"})]})})]}):o("h1",{className:"text-5xl mt-20 h-screen text-center",children:["Oooopsss cart is empty"," ",e(h,{to:"/products",className:"text-orange-300",children:"go to shoooping"})]})};export{z as Cart};