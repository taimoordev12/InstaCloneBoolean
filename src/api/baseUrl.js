 
let  baseUrl;

if(process.env.NODE_ENV === "development") {
    baseUrl =" https://flynn.boolean.careers/exercises/api/boolgram";
}

export default baseUrl;