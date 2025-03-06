function yeeHa (x) {
    if (x % 3 === 0 && x % 7 === 0) {
        return "Yee Ha";
    }
    else if (x % 7 === 0) {
        return "Ha";
    }
    else if (x % 3 === 0) {
        return "Yee";
    }
    else {
        return "Nada";
    }
}

// 5 % 2 = 1 bc there is one left over
// % is the remainder operator
// 6/2 = 3, two goes into 6 three times, leaving zero left over 
// 6 % 2 = 0, if its zero it means evenly divisible because there is nothing left over