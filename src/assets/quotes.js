/**
 * 
 * @author Vinit Shahdeo <https://github.com/vinitshahdeo>
 */
import arr from './data.json' assert {type: 'json'}

    // utility to generate a random number
    let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    index = randomInt(0, arr.length), // random index to be used
    
    /**
     * 
     * Kept `getRandomQuote` method to ensure the backward compatibility as
     * All the version <= `v1.0.8` has this method
     * 
     * TO BE DEPRECATED SOON
     */
    getRandomQuote = () => arr[index].text,

    /**
     * 
     * By default, { author: true },
     * To hide author, pass options as { author: false }
     */
    getQuote = (options) => {
		randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
    	index = randomInt(0, arr.length), // random index to be used
        !options && (options = {author: true}); // default option
        return {
            text: arr[index].text,
            ...(options && options.author ? { author: arr[index].from } : {})
        };
    };

export {
    getRandomQuote,
    getQuote
};