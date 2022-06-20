import React from "react";

const Products = () => {

  const [data,setData]=React.useState([]);
  const [loading,setLoading]=React.useState(false);
  const [error,setError]=React.useState(false);
  


  const getProduct=()=>{
    setLoading(true);
    fetch("http://localhost:8080/products")
    .then((res)=>res.json)
    .then((res)=>{setData(res)})
    .catch((erro)=>{setError(true);setData([])})
    .finally(()=>setLoading(false));
  }

  React.useEffect(()=>{
    getProduct();
  },[])

  return <>{
    loading?<h1>loading...</h1>:error?<h1>error....</h1>:
    data.map((item)=>
    <ProductItem item={item} key={item.id}/>
    )}
    </>;
};

export default Products;
