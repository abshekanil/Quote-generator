let obj = [
    {quote:"Imagination is more important than knowledge.", name:"Albert Einstein"},
    {quote:"The way to get started is to quit talking and begin doing.", name:"Walt Disney"},
    {quote:"Stay hungry, stay foolish.", name:"Steve Jobs"},
    {quote:"It always seems impossible until it's done.", name:"Nelson Mandela"},
    {quote:"The secret of getting ahead is getting started.", name:"Mark Twain"},
    {quote:"Be the change that you wish to see in the world.", name:"Mahatma Gandhi"},
    {quote:"Go to war with your mind", name:"David Goggins"},
    {quote:"The mind is everything. What you think you become.", name:"Buddha"},
    {quote:"Whatever you are, be a good one.", name:"Abraham Lincoln"},
    {quote:"Be water, my friend.", name:"Bruce Lee"},
    {quote:"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", name:"Abdul Kalam"},
    {quote:"Enjoy the game and chase your dreams. Dreams do come true.", name:"Sachin Tendulkar"},
    {quote:"Your love makes me strong. Your hate makes me unstoppable.", name:"Cristiano Ronaldo"},
    {quote: "Nothing is impossible, the word itself says 'I'm possible'!", name:"Audrey Hepburn"},
    {quote:"What lies behind us and what lies before us are tiny matters compared to what lies within us.", name:"Ralph Waldo Emerson"},
    {quote:"Our greatest glory is not in never falling, but in rising every time we fall.", name:"Confucius"},
    {quote: "Arise, awake and do not stop until the goal is reached.", name:"Swami Vivekananda"},
    {quote: "You can't cross the sea merely by standing and staring at the water.", name:"Rabindranath Tagore"}
];

const btn = document.querySelector('.btn');
let quoteDisplay = document.querySelector('.quoteDisplay');
let nameDisplay = document.querySelector('.nameDisplay');

btn.addEventListener("click", function(){
    showDisplay();
});

function showDisplay(){
    //quote displaying
    let randomNum = Math.floor(Math.random() * obj.length);
    let randomQuote = obj[randomNum].quote;
    quoteDisplay.innerHTML = "&quot " + randomQuote + "&quot ";

    //name displaying

    let randomName = obj[randomNum].name;
    nameDisplay.innerHTML = "- " + randomName;
}

