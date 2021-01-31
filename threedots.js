const ages = [10, 12, 14, 16, 18, 20];
const ages2 = [21, 11, 16, 14, 12];
const ages3 = [24, 26, 28];

const allAges = ages.concat(ages2).concat(ages3).concat([5]);
const allAges2 = [...ages, ...ages2, ...ages3, 5];
console.log(allAges2);

const business = 450; 
const minister = 730; 
const sochib = 550; 
const takaPoisa = [450, 730, 550];

// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);

console.log(maximum);