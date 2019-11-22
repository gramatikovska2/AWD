/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]

    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]
    }
];

// DO Not change before this

// FIRST WAY - ONLY FILTER
let popular1 = newReleases.filter(value => {
    if (parseFloat(value["rating"]) >= 5.0) {
        return value;
    }
});

// SECOND WAY - MAP AND FILTER
let popular2 = newReleases.map(value => value).filter(value => {
    if (parseFloat(value["rating"]) >= 5.0) {
        return value;
    }
});
// Do not change after this

console.log(popular1); // Retuns [ 654356453, 675465 ]
console.log(popular2);