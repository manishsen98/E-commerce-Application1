import AllProductSection from "../AllProductSection";
import Header from "../Header";
import PrimeDealSection from "../PrimeDealSection";
import "./index.css"

const Products = () => (
    <>
    <Header/>
     <div className="product-sections">
     <PrimeDealSection /> 
      <AllProductSection/>
     
     </div>
    

    </>
)

export default Products