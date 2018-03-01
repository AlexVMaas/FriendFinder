// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to 
// display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle 
// incoming survey results. This route will also be used to handle the 
// compatibility logic. 

// APIs - provides JSON
// ============================================================
app.get("/api/tables", function(req, res) {
  var firstFive= []
    for (var i = 0; i < 5; i++) {
      firstFive.push(reservations[i].uniqueID) 
    }
    return res.json(firstFive);
});

app.get("/api/waitlist", function(req, res) {
  var waitingList= []
    for (var i = 5; i < reservations.length; i++) {
      waitingList.push(reservations[i].uniqueID)   
    }
    return res.json(waitingList);
});

app.get("/api/tables", function(req, res) {
    for (var i = 0; i < 5; i++) {
      firstFive.push(reservations[i].uniqueID) 
    }
    return res.json(firstFive);
});

app.get("/api/waitlist", function(req, res) {
    for (var i = 5; i < reservations.length; i++) {
      waitingList.push(reservations[i].uniqueID)   
    }
    return res.json(waitingList);
});

// Takes In JSON 
app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
});