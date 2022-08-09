const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

generatedPasswordEl = document.getElementById("generated-password")


// Generate Password button

function generatePassword() {
    let selector1 = Math.floor(Math.random() * characters.length)
    let selector2 = Math.floor(Math.random() * characters.length)
    let selector3 = Math.floor(Math.random() * characters.length)
    let selector4 = Math.floor(Math.random() * characters.length)
    let selector5 = Math.floor(Math.random() * characters.length)
    let selector6 = Math.floor(Math.random() * characters.length)
    let selector7 = Math.floor(Math.random() * characters.length)
    let selector8 = Math.floor(Math.random() * characters.length)
    let selector9 = Math.floor(Math.random() * characters.length)
    let selector10 = Math.floor(Math.random() * characters.length)
    let selector11 = Math.floor(Math.random() * characters.length)
    let selector12 = Math.floor(Math.random() * characters.length)
    let selector13 = Math.floor(Math.random() * characters.length)
    let selector14 = Math.floor(Math.random() * characters.length)
    let selector15 = Math.floor(Math.random() * characters.length)
    generatedPasswordEl.textContent = characters[selector1] + characters[selector2] + characters[selector3] + characters[selector4] + characters[selector5] + 
                                        characters[selector6] + characters[selector7] + characters[selector8] + characters[selector9] + characters[selector10] +
                                        characters[selector11] + characters[selector12] + characters[selector13] + characters[selector14] + characters[selector15]
    
}