const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your full name? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favorite? (eg: dinner, brunc etc.) ', (meal) => {
        rl.question('What is you favorite thing to eat for that meal? ', (favMeal) => {
          rl.question('What is your superpower?', (power) => {
    console.log(`${name} enjoy ${activity} and listens to ${music} while eating her ${favMeal} for ${meal}. Her superpower is ${power}!`)
      
      
      rl.close()
          });
        });
      });
    });
  });
});