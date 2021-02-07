export default function CreateNumberItems(array , widthScren){
    let newArray=[]
    if (widthScren>1023){
        return newArray = array.slice(0,9)
    }
    if (widthScren < 1023 && widthScren > 768){
        return newArray = array.slice(0,8)
    }
    if (widthScren < 767 ){
        return newArray = array.slice(0,4)
    }
    return newArray;
}