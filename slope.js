function slope (x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    let slope = rise/run;
    return slope;
}

export {slope}