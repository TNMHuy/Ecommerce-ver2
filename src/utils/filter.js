
export const cateFilter = (list,cate) => {
    if(cate!=='all')
        return  list.filter((item)=> item.category === cate)
    else
        return list

}
export const ratingFilter = (list,rating) =>{
    
}
export const sortAtoZ = (list) =>{
    list.sort(function(a,b){
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0
    })
}