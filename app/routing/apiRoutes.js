var friendArray = require("../data/friends");


module.exports = function(app){
  app.get("/api/friends", function(req, res){
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res){

    var newFriend = {
      name : req.body.name,
      photo: req.body.photo,
      scores: req.body.scores.split(",").map(Number)
    };

    var bestMatch = getMatch(newFriend);
    friendArray.push(newFriend);

    res.json(friendArray);
  });

var getMatch = function(friend){
    var diffArray = [];

    for(var x =0; x< friendArray.length;x++){
      var matchObj = {
        finaldiff: 0,
        index: 0
      };
      var fDiff = 0;

      for(var i = 0; x< friendArray[x].scores.length; x++){
        fDiff += newFriend.scores[i] - friendArray[x].scores[i];
      }

      if(finalDiff === 0){
        return(friendArray[x]);
      }
      else{
        matchObj.finalDiff = fDiff;
        matchObj.index = x;
        diffArray.push(matchObj);
      }
    }
  };
};
