import { useContext } from "react"
import { ShopContext } from "./ShopContext"
// import ShopContext from "./ShopContext"

const useShop = () =>{
    const context = useContext(ShopContext)
    if ( context ===undefined) {
        throw new Error('useShop must be used with prodiver')
    }
    return context
}

export default useShop