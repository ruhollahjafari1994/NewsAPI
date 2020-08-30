//classes
const  ui =new UI()
const newsAPI=new News()


//listeners
listeners()

function listeners() {
    document.querySelector('#submitBtn').addEventListener('click',search)
}



//functions
function search(e) {
    e.preventDefault()
    const newsName=document.querySelector('#news-name').value
    const countryName=document.querySelector('#country').value
    const categoryName=document.querySelector('#category').value

    if (newsName !=='' || countryName !=='' || categoryName !=='' ) {
            newsAPI.queryAPI(newsName,countryName,categoryName)
            .then(news=>{
              console.log(news.news.articles)
              const newsArray=news.news.articles
              if (newsArray.length>0) {
                  ui.showNews(newsArray)

              }else{
                  ui.printMessage('There Is No News In This Category','alert alert-danger mt-4')

              }
            })
          }
    else{
      ui.printMessage('Please Enter Atleasst one parameter','alert alert-danger mt-4')
    }
}

