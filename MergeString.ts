// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

function mergeAlternately(word1:string , word2:string): string 
// : string) fonksiyonun bir string döndüreceğini belirtiyor
{
    let result : string[] = [];
    let maxLen : number = Math.max(word1.length , word2.length);

    for (let i=0 ; i<maxLen ;i++){
        if(i<word1.length){
            result.push(word1[i]);
        }
        if ( i<word2.length){
            result.push(word2[i]);
        }
    }
    return result.join('');
}

// += yerine array.push() kullanmak daha performanslıdır