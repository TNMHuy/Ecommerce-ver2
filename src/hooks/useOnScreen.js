import { useEffect, useState } from "react"

const useOnScreen = (ref, rootMargin ='0px') => {
    const [visible,setVisible] = useState(false)
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) =>{
                setVisible(entry.isIntersecting)
            },
            {
                rootMargin
            }
        )

        const currentElement = ref?.current
        if (currentElement){
            observer.observe(currentElement)
        }
        return () =>{
            observer.unobserve(currentElement)

        }
    },[])
  return visible
}

export default useOnScreen