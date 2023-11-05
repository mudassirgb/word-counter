console.log(`****______WORD COUNTER______****`);

// take input from user "string"
// 1: count words.... create function
// 2: count charecters.... create function

import PromptSync from "prompt-sync";
import { filter } from "rxjs";
const prompt= PromptSync();
let userString : string = prompt("Please Enter the desired string....");
 console.log(userString);

function wordCounter (str:string): number{
    let words: string[] = str.split(/\s+/).filter(word => word !== " ")
   return words.length
   
     console.log(words);
    
};
 function charcterCounter (str: string){
    let character = str.replace (/\s+/g,**)
    return character.length
    console.log(character);
 }


    
console.log(`The number of ${userString} are ${wordCounter(userString)}`);
console.log(`The characters of ${userString} are ${charcterCounter(userString)}`);