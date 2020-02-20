const quotes = [
     `The price of success is hard work, 
      dedication to the job at hand, and
     the determination that whether we win or lose, 
     we have applied the best of ourselves to the task at hand.
     `,
     `There is no substitute for hard work,
      23 or 24 hours a day.
      And there is no substitute 
      for patience and acceptance.
     `,
    `Opportunity is
     missed by most people because it is dressed
      in overalls and looks like work.
    `,
    `Success is no accident. It is hard work, perseverance, 
    learning, studying, 
    sacrifice and most of all, 
    love of what you are doing or learning to do.
    `,
    `Luck? I don't know anything about luck. I've never banked on it 
    and I'm afraid of people who do. 
    Luck to me is something else:
    Hard work - and realizing 
    what is opportunity and what isn't.
    `,
    `A dream doesn't become reality through magic; 
    it takes sweat, determination and hard work.
    `,
    `There is no substitute for hard work. 
    Never give up. Never stop believing. 
    Never stop fighting.
    `,
    `
    Do not hire a man who does your work for money, 
    but him who does it for love of it.
    `,
    `
    Hard work pays off - hard work beats talent any day,
     but if you're talented and work hard, it's hard to be beat.
    `,
    `
    Read the Bible. Work hard and honestly. And don't complain.
    `,
    `
    Never stop fighting until you arrive at your destined place -
     that is, the unique you. Have an aim in life, continuously acquire knowledge,
     work hard, and have perseverance to realise the great life.
    `,
    `
    Far and away the best prize that life has to offer is the chance 
    to work hard at work worth doing.
    `
];
const button = document.getElementById('quoteBtn');
button.addEventListener('click', displayQuotes);

function displayQuotes() {
    const h1 = document.getElementById('Eqoute');
    h1.textContent = quotes[Math.floor(Math.random() * (quotes.length))];
    
};
displayQuotes();


