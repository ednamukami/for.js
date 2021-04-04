
const friends = ['james', 'jean', 'Jane'];
for ( let element of friends ) {
    console.log(element);
}
const car = {
    name: "porsch",
    model: "911",
    make: "carerra 4s"
}
for ( let key in car ) {
    console.log(`${key} => ${car[key]}`);
}