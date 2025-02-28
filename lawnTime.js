// Given the  width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes.

function lawnTime (width, length, rate) {
    let lawnMowRate = (width*length)/(rate);
    return lawnMowRate;
}

export {lawnTime}