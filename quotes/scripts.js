let quotes = [
    {
        "quote":"The purpose of our lives is to be happy.",
        "author":"DALAI LAMA"
    },
    {
        "quote":"Life is what happens when you’re busy making other plans.",
        "author":"John Lennon"
    },

    {
        "quote":"Get busy living or get busy dying.",
        "author":"Stephen King"
    },

    {
        "quote":"Many of life's failures are people who did not realise how close they were to success when they gave up.",
        "author":"THOMAS A.EDISON"
    },

    {
        "quote":"If you want to live a happy life, tie it to a goal, not to people or things.",
        "author":"Albert Einstein"
    },

    {
        "quote":"Money and success don’t change people; they merely amplify what is already there.",
        "author":"Will Smith"
    },

    {
        "quote":"Be yourself; everyone else is already taken.",
        "author":" Oscar Wilde"
    },

    {
        "quote":"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
        "author":"Henry Ford"
    },

    {
        "quote":"Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author":"Albert Einstein"
    },

    {
        "quote":"Life is a succession of lessons which must be lived to be understood.",
        "author":"Helen Keller"
    }
]

//vars

const btn= document.getElementById("btn");
const quote= document.getElementById("quote");
const author= document.getElementById("author");

//evnet listner

btn.addEventListener('click',getQ);

//function

function getQ () {
    let num = Math.floor(Math.random() * quotes.length);
    quote.innerHTML= '<span>"</span>' + quotes[num].quote + '<span>"</span>';
    author.innerHTML= '<span>-</span>' + quotes[num].author +'<span>-</span>';

}