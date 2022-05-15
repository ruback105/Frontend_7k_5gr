const cilveks = {
    firstName: "Edvards",
    lastName: "Safronovs",
    age: 26,
   
    skills: {
        LanguagesSpoken: [
            "Russian",
            "Latvian",
            "English"
        ],
        
    Web:["HTML, CSS, React JS, Bootstrap"],

    },

    Workexperience: "Tele2, Tele3",
    Education: "Secondary SChool, Latvian Univercity",

    FAQ:{
        MyHobbies:["Cycling, Diving"],
        MyFavouritePlaylist:"open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator",
    }
}

console.log("Person full name:", cilveks.firstName + cilveks.lastName); 
console.log(`Age of ${cilveks.firstName} ${cilveks.lastName}:`, cilveks.age);
