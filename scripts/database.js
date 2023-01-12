/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */



const database = {
    fish: [
        {
            name: "Name: Bart",
            species: "Species: Swordfish",
            food: "Favorite Food: Burgers",
            size: 20,
            location: "Timbuktu",
            image: 'images/fishyboy.jpeg',
        },
        {
            name: "Oliver",
            species: "Starfish",
            food: "Cheeseburger",
            size: 12,
            location: "Indiana",
            image: 'images/fishyboy.jpeg'
        },
        {
            name: "Alex",
            species: "Clownfish",
            food: "Taco Bell",
            size: 4,
            location: "Austria",
            image: 'images/fishyboy.jpeg'
        },
        {
            name: "Gusti",
            species: "Jellyfish",
            food: "Pancake",
            size: 100,
            location: "Texas",
            image: 'images/fishyboy.jpeg'
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}



