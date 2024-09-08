import { reactHooksModule } from "@reduxjs/toolkit/query/react"

//eğer ki parametre olarak aldığı değer tanımlı ise o değeri geri döndüren değilse "bilinmiyor" metni döndüren 
const checkValid = (value)=>{
    return !value ? "Bilinmiyor" : value;

}
export default checkValid;