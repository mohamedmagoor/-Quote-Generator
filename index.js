 var Button = document.getElementById("btn");
 var blockOFQuote = document.getElementById("blockOFQuote");
 var auther = document.getElementById("auther");
 
 
      

function genertaQuote(){

    var quote = [{
        quote : "“Be yourself; everyone else is already taken.”",
        author : "― Oscar Wilde",
    
    },
    {
        quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author : "― Marilyn Monroe",
    
    },
    {
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author : "― Albert Einstein",
    
    },
    {
        quote : "“So many books, so little time.”",
        author : "― Frank Zapp",
    
    },
    {
        quote : "“A room without books is like a body without a soul.”",
        author : "― Marcus Tullius Cicero ",
    
    },
    {
        quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author : "― Bernard M. Baruch",
    
    },
    

]

var arrayIndex  = Math.floor(Math.random() * quote.length );
blockOFQuote.innerHTML = quote[arrayIndex].quote 
auther.innerHTML = quote[arrayIndex].author




}