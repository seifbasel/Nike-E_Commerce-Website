import PopularProductCard from '../components/PopularProductCard';
import  {products}  from '../constans';

const PopularProducts = () => {
  return (
    <section id ="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin font-bold"><span className="text-coral-red">Popular</span> Products</h1>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Discover the latest must-have items in our Popular Products section! From trendy gadgets to timeless classics, we've curated a selection of top-rated products that are flying off the shelves. Whether you're looking for innovative tech gadgets, stylish fashion accessories, or practical home essentials, you'll find something to love here. Stay ahead of the curve and shop our Popular Products today!</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product)=>(
          <PopularProductCard key=
          {product.name}{...product}/>
        ))}
        </div>
        

    </section>
  )
}

export default PopularProducts