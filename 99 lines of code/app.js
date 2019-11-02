var friends = ["SEBI", "ANDREEA", "DIANA", "SAPIR", "OLIMPIU"]


for (var i of friends) {
    console.log(i + ':')
    for (var j = 99; j >= 1; j--) {
        if (j - 1 != 0) {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + i + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file')
        }
        else {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + i + ' strikes one out, clears it all out, no more lines of code in the file')
        }
    }

}
