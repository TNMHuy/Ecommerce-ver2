import { useEffect, useState } from "react"

const usePageBottom = () => {
    const [reachedBottom,setReachedBottom] = useState(false)
    useEffect(()=>{
        const handleScroll = () =>{
            const innerHeight = window.innerHeight
            const offsetHeight = document.documentElement.offsetHeight
            const scrollTop = document.documentElement.scrollTop
            const hasReachedBottom = offsetHeight -(innerHeight+ scrollTop) <=10
            setReachedBottom(hasReachedBottom)
        }
        window.addEventListener('scroll',handleScroll)
        return () =>  window.removeEventListener('scroll',handleScroll)
    },[])
  return reachedBottom
}

export default usePageBottom