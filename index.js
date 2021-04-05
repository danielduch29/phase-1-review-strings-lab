// Write your code in this file!
const currentUser = 'Daniel';
/**const welcomeMessage = 'Welcome to Flatbook, ${currentUser}!'; 
 My template literal does not work**/
 const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';
 const excitedWelcomeMessage = welcomeMessage.toUpperCase();
 const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
 //It works now, I was not using backticks in the first error
