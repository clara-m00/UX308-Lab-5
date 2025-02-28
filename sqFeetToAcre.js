// There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions//

function sqFeetToAcre(sqfeet) {
    let acre = sqfeet/43560;
    return acre;
}

export {sqFeetToAcre};