import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

//  Displays a single product with full details, images, and options
export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, selectedStatus } = useSelector((s) => s.products);

//  Fetch the product by ID when the component loads
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  //  Show loading state
  if (selectedStatus === "loading" || !selectedProduct)
    return <p>Loading product...</p>;

  const p = selectedProduct;

  return (
    <div className="container mx-auto p-4">
      {/* Product breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">
        Home {'>'} Products {'>'} Default {'>'} {p.title}
      </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Image Gallery and Thumbnails */}
         <div className="flex flex-col md:flex-row gap-4">
           <div className="flex flex-row md:flex-col gap-2">
             {/* Small thumbnail images */}
             {/* You'll need to replace these with a loop over an array of image URLs from your product data */}
             <img src={p.image} alt={p.title} className="w-20 h-20 object-contain cursor-pointer border border-gray-300 p-1" />
             <img src={p.image} alt={p.title} className="w-20 h-20 object-contain cursor-pointer border border-gray-300 p-1" />
             <img src={p.image} alt={p.title} className="w-20 h-20 object-contain cursor-pointer border border-gray-300 p-1" />
             <img src={p.image} alt={p.title} className="w-20 h-20 object-contain cursor-pointer border border-gray-300 p-1" />
           </div>
           {/* Main product image */}
           <div className="flex-grow">
             <img src={p.image} alt={p.title} className="w-full max-h-[500px] object-contain" />
          </div>
        </div>

        {/* Product Details Section */}
         <div className="flex flex-col">
           <h1 className="text-3xl font-bold">{p.title}</h1>
           <div className="flex items-center mt-2">
             <span className="text-yellow-400">★★★★☆</span>
             <span className="ml-2 text-sm text-gray-600">({Math.floor(Math.random() * 200) + 1} Reviews)</span> {/* Random number for demo */}
           </div>
           <p className="text-3xl font-semibold mt-4">${p.price.toFixed(2)}</p>
           <p className="mt-4 text-gray-700">
             {/* Using a lorem ipsum-like placeholder for a better visual representation */}
             Sed eget eros, ante at vulputata vulputa, eros pede semper sit eget, vitae luctus luctus libero eu augue. Morbi purus libero, faucibus adipiscing.
           </p>

           <div className="mt-6">
             <div className="flex items-center mb-4">
               <span className="text-gray-600 mr-2">Color:</span>
               <div className="flex gap-2">
                 <div className="w-6 h-6 border-2 border-gray-400 rounded-full cursor-pointer bg-blue-500"></div>
                 <div className="w-6 h-6 border-2 border-transparent rounded-full cursor-pointer bg-red-500 hover:border-gray-400"></div>
                 <div className="w-6 h-6 border-2 border-transparent rounded-full cursor-pointer bg-yellow-500 hover:border-gray-400"></div>
               </div>
             </div>

             <div className="flex items-center mb-4">
               <span className="text-gray-600 mr-2">Size:</span>
               <select className="border border-gray-300 rounded px-3 py-1">
                 <option>Select a size</option>
                 <option>S</option>
                 <option>M</option>
                 <option>L</option>
                 <option>XL</option>
               </select>
               <a href="#" className="ml-4 text-blue-600 hover:underline">Size guide</a>
            </div>

             <div className="flex items-center gap-4">
               <span className="text-gray-600">Qty:</span>
               <input type="number" defaultValue="1" min="1" className="w-20 border border-gray-300 rounded px-2 py-1 text-center" />
             </div>
           </div>
          
          <div className="mt-6 flex items-center gap-3">
             <button onClick={() => dispatch(addToCart(p))} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
               🛒 ADD TO CART
             </button>
             <a href="#" className="text-blue-600 flex items-center hover:underline">
               <span className="mr-1">🤍</span> Add to Wishlist
             </a>
             <a href="#" className="text-blue-600 flex items-center hover:underline">
               <span className="mr-1">📊</span> Add to Compare
             </a>
           </div>

           <div className="mt-6 pt-4 border-t border-gray-200">
            <span className="text-gray-600">Category:</span> <span className="text-gray-800">{p.category}</span>
           </div>
         </div>
       </div>

      {/* Tabs Section for Description, Additional Info, etc. */}
       <div className="mt-10">
         <div className="border-b border-gray-200">
           <nav className="-mb-px flex space-x-8" aria-label="Tabs">
             <a href="#" className="border-b-2 border-blue-600 text-blue-600 py-4 px-1 inline-flex items-center font-medium text-sm">
              Description
             </a>
             <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 inline-flex items-center font-medium text-sm">
               Additional Information
             </a>
             <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 inline-flex items-center font-medium text-sm">
               Shipping & Returns
             </a>
             <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 inline-flex items-center font-medium text-sm">
               Reviews (2)
             </a>
           </nav>
         </div>
         <div className="mt-6 p-4 border border-t-0 border-gray-200 rounded-b">
           <h3 className="font-bold text-lg mb-2">Product Information</h3>
          <p>{p.description}</p>
          
        </div>
       </div>
     </div>
  );
}


