const beatles = {
  albums: [
    "Abbey Road",
    "Sgt Peppers Lonely Heart's Club Band",
    "Revolver",
    "Magical Mystery Tour",
    "Something New"
  ],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
};

let paulName = beatles.members[1].name;
let start = beatles.history.formed;
let end = beatles.history.disbanded;
let born = beatles.members[1].birth;
let album = beatles.albums[3];

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(
  `${paulName} was in the Beatles from ${start} to ${end}. He was born in ${born}. He contributed heavily to the ${album} Album.`
);
