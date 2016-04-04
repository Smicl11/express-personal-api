// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var new_profile = {
  name: "Bryan Smith",
  github_link: "https://github.com/Smicl11",
  github_profile_image: "https://avatars0.githubusercontent.com/u/17604285?v=3&s=460",
  current_city: "San Francisco",
  pets: [{
    name: "Prim",
    type: "Cat",
    breed: "Grey Tabby"
  },
  {
    name: "Bailey",
    type: "Dog",
    breed: "Lab"
  }]
};

db.Profile.remove({}, function(err, profiles) {
  console.log('removed all authors');
  db.Profile.create(new_profile, function(err, profile) {
    if (err){
      return console.log("Error:", err);
    }

     console.log("Created new profile", profile._id);
     process.exit(); // we're all done! Exit the program.
  });
});
