
/** WAP to print common character in given two strings */

function commonChar(str1, str2) {
    let output = new Set();
    for(let char1 of str1) {
        for(let char2 of str2) {
            if(char1 === char2){
                output.add(char1);
            }
        }
    }
    console.log([...output].join(''));
}


commonChar("NAINA", "REENA");