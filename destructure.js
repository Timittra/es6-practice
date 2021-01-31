const person = { name: 'Jack Willium', age: 17, job:'Facebooking', gfName:'Emma Watson', address: "Dhaka", phone:"01718866251", 
friends:['Tom Hancks', "Tom Curise", "Tom Yarn"]};

// const gfName = person.gfName;
// // const phone = person.phone;
// const {phone} =  person;
// console.log(gfName);
// console.log(phone);


const friends = ['Amir Khan', 'Sharukh Khan', 'Salman Khan', 'Shakib Khan', 'Arman Khan'];
const [normalFriend, closeFriend, ...dudherMachi] = friends;

const complexObject = {
    name: 'abc',
    info: {
        address: 'Dhaka',
        phone : '01787',
        leader : 'Tiger leader'
    }
}
const {leader} = complexObject.info;
// console.log(normalFriend, closeFriend, dudherMachi);
console.log(leader);