import 'dotenv/config';
// import {} from 'discord.js';

function sayMyName(name: string): void {
  if (name === 'Heisenberg') {
    console.log('You\'re right 👍');
  } else {
    console.log('You\'re wrong 👎');
  }
}

sayMyName('Heisenberg');
console.log(process.env);
