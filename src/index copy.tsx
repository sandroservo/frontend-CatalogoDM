import { LazyLoadImage } from "react-lazy-load-image-component";
import { Heart, ShoppingCart, Star, Eye } from "@phosphor-icons/react";
import { useProduto } from "../../hooks/useProduto";
import "./styles.css"


  

export function Main() {
    //const [cache, setCache] = useState<CacheData>({});

    const {listaProduto} = useProduto();
    
    
    
    // useEffect(() => {
    //     listaProduto?.forEach((produto) => {
    //       if (!cache[produto.imagem]) {
    //         axios
    //           .get(produto.imagem, { responseType: "blob" })
    //           .then((response) => {
    //             const url = URL.createObjectURL(response.data);
    //             setCache((prevCache) => ({ ...prevCache, [produto.imagem]: url }));
    //           })
    //           .catch((error) => {
    //             console.error(error);
    //           });
    //       }
    //     });
    //   }, [cache, listaProduto]);
    
    return (
        
        <div className="container">
{listaProduto?.length && listaProduto.map((produto) => (
            <div className="card" key={produto.id}>
                <div className="imgBx">
               
                <LazyLoadImage src={produto.imagem} alt="" 
               
                />
          
                    <ul className="action">
                        <li>
                            <Heart size={16} weight="fill" />
                            <span>Add to WishList</span>
                        </li>
                        <li>
                            <ShoppingCart size={16} weight="fill" />
                            <span>Add to Cart</span>
                        </li>
                        <li>
                            <Eye size={16} weight="fill" />
                            <span>View Details</span>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className="productName">
                        <h3>{produto.nome}</h3>
                    </div>
                    <div className="price_rating">
                        <h2>R${produto.preco}</h2>
                        <div className="rating">
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                            <Star size={16} weight="fill" />
                        </div>
                    </div>
                </div>
            </div>
            ))}
            

        </div>
    )
}