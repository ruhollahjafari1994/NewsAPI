class News{
    constructor(){
        this.APIkey = '97e0db8a1ba74fd8bc7fb50ec561a6c6'
    }

    //send url to the API
   async queryAPI(newsName,countryName,categoryName){
//Build URL
let url ='http://newsapi.org/v2/'
//
if (countryName==='' && categoryName==='') {
    url +='everything?'
}else{
    url +='top-headlines?'
}
//if news name exist
if (newsName !=='') {
    url +=`q=${newsName}&`
}
//if country exist
if (countryName !=='') {
    url +=`country=${countryName}&`
}
//if category exist
if (categoryName !=='') {
    url +=`category=${categoryName}&`
}
//------------------Complete Url With Key
url +=`apikey=${this.APIkey}`
const newsResponse =await fetch(url)
const news =await newsResponse.json()
return {
    news
}
    }
}