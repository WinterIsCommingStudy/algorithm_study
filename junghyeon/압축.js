
function solution(msg) {
    const dictionary = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const answer = []
    
        for(let j = i+1; j <= msg.length; j++) { 
            w += c
            c = msg[j];
            console.log("w =",w,"c =", c)
            if(dictionary.includes(w+c)) {
                continue;
            } else {
                dictionary.push(w+c)
                answer.push(dictionary.indexOf(w)+1)
                if(w.length !== 1) i += w.length-1;  
                break;
            }
        }
    }
    return answer
}
