let rest = {
    "host": "localhost",
    "port": 3030,
    "public": "../public/",
    "paginate": {
      "default": 10,
      "max": 50
    },
    "mongodb": "mongodb://localhost:27017/api"
  }
  
  console.log();
  for (let r in rest){
    // console.log(r);
    console.log(r + ":"+ rest[r]);
  }