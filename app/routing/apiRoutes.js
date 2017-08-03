var friendArray = require("../data/friends");


module.exports = function(app){

  app.get("/api/friends", function(req, res){
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res){

  var bestMatch = {
    name: "",
    photo: "",
    friendDifference: 1000
  };
    var userData= req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    for (var i = 0; i < friendArray.length; i++) {

      console.log(friendArray[i].name);
      totalDifference = 0;

      for(var j = 0; j< friendArray[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendArray[i].scores[j]));

        if(totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friendArray[i].name;
          bestMatch.photo = friendArray[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

        friendArray.push(userData)
        res.json(friendArray);

  });

};
