// Given the  width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes.

function lawnTime (width, length, rate) {
    let lawnMowRate = (width*length)/(rate);
    return lawnMowRate;
}

export {lawnTime}

// everything in brackets are things that need to be declared in the spec
// rate = how many square meters can be mowed per minute
// for example rate = 10, means 10 meters squared can be mowed per minute (1)