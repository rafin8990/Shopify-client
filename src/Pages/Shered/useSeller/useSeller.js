import { useEffect, useState } from "react"

const useSeller=email=>{
    const [isSeller, setIsSeller]=useState(false);
    const [isSellerLoader, setIsSellerLoader]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
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