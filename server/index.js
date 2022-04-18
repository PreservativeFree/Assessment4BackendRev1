const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => { //FEATURE ONE
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => { //FEATURE TWO
  const fortunes = ["A smooth long journey! Great expectations.",
					 "Allow compassion to guide your decisions.",
					 "An inch of time is an inch of gold",
           "Better ask twice than lose yourself once.",
           "In the end all things will be known"
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.put('/api/fortune', (req, res) => {
      req.body.push('If you have something good in your life, do not let it go!')
      res.status(200).send("Fortune updated.")
      return
    
    //res.status(400).send("List not found.")
})
app.delete('/api/compliment', (req, res) => {
  for(let i = 0; i < req.compliments.length; i++) {
    req.compliments[i] = ""
  }
  res.status(200).send("Deleted Compliments.")
})

app.listen(4000, () => console.log("Server running on 4000"));
