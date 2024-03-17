import { Injectable} from '@angular/core';
@Injectable({
    providedIn:'root',
})

export class CommonService{
    constructor(){}

    // TO GET THE RANDOM COLOR TO SHOW IN GRAPHS 
    getRandomColor(): string {
        // Define minimum values for red, green, and blue components
        const minComponentValue = 100;
    
        // Generate random values for red, green, and blue components
        const red = minComponentValue + Math.floor(Math.random() * (255 - minComponentValue));
        const green = minComponentValue + Math.floor(Math.random() * (255 - minComponentValue));
        const blue = minComponentValue + Math.floor(Math.random() * (255 - minComponentValue));
    
        // Convert RGB values to hexadecimal format
        const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    
        return hex;
    }
    // TO GET THE RANDOM COLOR TO SHOW IN GRAPHS 
}