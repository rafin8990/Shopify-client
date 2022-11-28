import { useEffect, useState } from "react"

const useSeller=email=>{
    const [isSeller, setIsSeller]=useState(false);
    const [isSellerLoader, setIsSellerLoader]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://shopify-server.vercel.app/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                setIsSeller(data.isAdmin)
                setIsSellerLoader(false)
            })
        }
    },[email])
    return [isSeller, isSellerLoader]
}
export default useSeller;