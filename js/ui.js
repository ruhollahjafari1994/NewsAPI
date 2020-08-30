class UI{
    constructor(){
        this.result =document.querySelector('#result')
    }
    //Show Any Message in html
    printMessage(message,className){
        //create div tag 
        const div =document.createElement('div')
        //append text message to the div 
        div.appendChild(document.createTextNode(message))
        //Append ClassName To the tag
        div.className=className

        document.querySelector('#message').appendChild(div)

        setTimeout(() => {
            this.removeMessage()
        }, 2000);
    }

    //remove message after showing into the html
    removeMessage(){
        const alert=document.querySelector('.alert')
        if (alert) {
            alert.remove()
        }
    }
    //show result in into html 
    showNews(news){
     let htmlTemplate ='';
     news.forEach(newsInfo => {
        console.log(newsInfo)
       this.result.innerHTML += `
       <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                  <h2 class="card-title text-center">${newsInfo.title.split('-',1)}</h2>
                  <img class="card-img-top" src="${newsInfo.urlToImage}" alt="Card image cap">
                  <p class="card-text  lead textto-info">News Information : </p>
                  <span class="badge badge-primary">Source : ${newsInfo.source.name}</span>
                  <span class="badge badge-primary">Date & Time :  ${newsInfo.publishedAt} </span>
                  <br>
                  <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block">Complete News</a>
                  </div>
            </div>
       </div>
       `
     });
    }
}