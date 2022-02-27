export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) =>{
    items.map(user => {
    if(user[objPropName] === itemId){
        return {...user, ...newObjectProps}
    }
    return user;
})
}