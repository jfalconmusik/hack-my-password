require("dotenv").config(); // STILL NEED TO SET UP ENV
const express = require("express");
const PORT = process.env.PORT;
const app = express();
const fs = require("fs");
const readline = require("readline");
const LineByLineReader = require("line-by-line");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const cors = require("cors");
const Parse = require("parse/node");
// const session = require("express-session");
// const methodOverride = require("method-override");

Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
Parse.initialize(
  "bBEW1ifNinmD2vqWYUFWlUVDS3cHKus4oi9EL3aY", // This is your Application ID
  "hGL6Y56FGoVOUmuFRBSdkcDbAJR8C039Iw8H9DRa", // This is your Javascript key
  "0pZmrxqkm61A10LRFcJ9axepfdR55LpTOqMljZVj" // This is your Master key (never use it in the frontend)
);

// const headers = {
//   Accept: "application/json",
//   "Content-type": "application/json",
//   "X-Parse-Application-Id": "bBEW1ifNinmD2vqWYUFWlUVDS3cHKus4oi9EL3aY",
//   "X-Parse-REST-API-Key": "dbZskmf7E5yzAKoh18o6jeBefF3Q6HfYJjGNRtV7",
// };

// app.use(express.bodyParser());
// app.use(methodOverride("_method"));
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.patch("/", (req, res) => {
  console.log("hack request received.", req.body);
  res.sendStatus(200);
  let itemID = req.body.itemID;

  let r = req.body.params;
  const hashType = r.hashType;
  const automatic = r.automatic;
  const maskIndex = r.maskIndex;
  const attackMethod = r.attackMethod;
  const salt = r.salt;
  const maskNumber = r.maskNumber;
  const saltType = r.saltType;
  const autoMask = r.autoMask;
  const singleton = r.singleton;

  let hash;

  if (req.body.params.batchMode) {
    hash = req.body.params.hash;
  } else {
    hash = req.body.result.hash;
  }

  let bMilli = Date.now();
  if (attackMethod === "bruteForce") {
    result = totalForce(hash, saltType, hashType, salt, itemID, bMilli);
  } else if (attackMethod === "mask") {
    // console.log("beginning m1");
    // setMaskIncrement(maskIncrement + 1);
    maskAttack(
      hash,
      automatic,
      maskIndex,
      maskNumber,
      saltType,
      hashType,
      salt,
      autoMask,
      singleton,
      itemID,
      bMilli
    );
  }
});

app.patch("/resume", (req, res) => {
  console.log("resume hack request received.", req.body);
  res.sendStatus(200);
  let itemID = req.body.itemID;
  let r = req.body.params;
  const hash = r.hash;
  const hashType = r.hashType;
  const automatic = r.automatic;
  const maskIndex = r.maskIndex;
  const attackMethod = r.attackMethod;
  const salt = r.salt;
  const maskNumber = r.maskNumber;
  const saltType = r.saltType;
  const autoMask = r.autoMask;
  const singleton = r.singleton;
  let currentAttempt = r.currentAttempt;
  let currentCounter = r.currentCounter;
  let currentMaskLine = r.currentMaskLine;
  let currentFullList = r.currentFullList;
  let currentNewArr = r.currentNewArr;

  let bMilli = Date.now();
  if (attackMethod === "bruteForce") {
    result = totalForce(
      hash,
      saltType,
      hashType,
      salt,
      itemID,
      bMilli,
      currentAttempt,
      currentCounter,
      currentFullList,
      currentNewArr
    );
  } else if (attackMethod === "mask") {
    // console.log("beginning m1");
    // setMaskIncrement(maskIncrement + 1);
    maskAttack(
      hash,
      automatic,
      maskIndex,
      maskNumber,
      saltType,
      hashType,
      salt,
      autoMask,
      singleton,
      itemID,
      bMilli,
      currentAttempt,
      currentCounter,
      currentMaskLine,
      currentFullList,
      currentNewArr
    );
  }
});

// app.post("/batch/:userID/:crackID", (req, res) => {
app.post("/batch/:userID/:crackID", upload.single("uri"), (req, res) => {
  console.log("batch received", req.body);

  // console.log()
  let r = req.body.params;
  console.log("r:", r);
  console.log("stringify:", JSON.stringify(r));
  console.log("typeof params", typeof r);
  //
  //
  //
  //
  let splitArr = r.split(" ");
  let single = splitArr[0].split("=[");

  let sin = single[1];

  let singleton = [`${sin.substring(0, sin.length - 2)}`];
  console.log(typeof singleton, singleton);
  let anonI = splitArr[1].split("=")[1];

  let anonInt = anonI.substring(0, anonI.length);

  console.log(typeof anonInt, anonInt);

  let sal = `${splitArr[2].split("=")[1]}`;
  let salt = sal.substring(0, sal.length);

  console.log("salt", salt);

  let beginMilli = Date.now();

  let autoMask = ["?"];

  console.log("automask", autoMask);

  let timeToCrack = "";

  let masky = `${splitArr[6].split("=")[1]}`;
  let maskNumber = Number(masky);
  console.log("masknumber", maskNumber);

  let salty = `${splitArr[7].split("=")[1]}`;
  let saltType = salty.substring(0, salty.length - 1);
  console.log(saltType);

  let aut = `${splitArr[8].split("=")[1]}`;

  let automatic = false;

  console.log(automatic);

  let ui = `${splitArr[9].split("=")[1]}`;

  let uid = ui.substring(0, ui.length - 1);

  console.log("uid", uid);

  let manu = `${splitArr[10].split("=")[1]}`;

  let manualHash;
  if (manu == "false") {
    manualHash = false;
  } else {
    manualHash = true;
  }

  console.log("manual", manualHash);

  let ttcMilli = Number(beginMilli);

  let maskIndex = 0;

  let attackM = `${splitArr[13].split("=")[1]}`;
  let attackMethod = attackM.substring(0, attackM.length - 1);

  console.log("attackMethod:", attackMethod);

  let has = splitArr[14].split("=")[1];
  let hashType = `${has.substring(0, has.length - 1)}`;
  console.log("hashType:", hashType);

  //
  //
  //
  //

  let userID = req.params.userID;
  let crackID = req.params.crackID;

  let arr = [];

  let filename = "";
  // let dirname = "";
  // Function to get current filenames
  // in directory with "withFileTypes"
  // set to "true"

  function mergeSort(a) {
    let arr = [...a];
    // YOUR CODE HERE
    if (arr.length <= 1) {
      return arr;
    } else {
      let middleIndex = Math.floor(arr.length / 2);
      let left = arr.slice(0, middleIndex);
      let right = arr.slice(middleIndex, arr.length);

      let leftSorted = mergeSort(left);
      let rightSorted = mergeSort(right);

      //
      return merge(leftSorted, rightSorted);
    }
  }

  // HELPER FUNCTION: merge two sorted arrays
  // this version sorts by unix timestamp
  function merge(arr1, arr2) {
    var result = [];

    while (arr1.length && arr2.length) {
      fs.stat(`./uploads/${arr1[0].name}`, function (err, stats) {
        let mtime1 = stats.mtime.getTime();
        console.log(arr1[0].name, mtime);

        fs.stat(`./uploads/${arr2[0].name}`, function (err, stats) {
          let mtime2 = stats.mtime.getTime();
          console.log(arr2[0].name, mtime);

          if (mtime1 >= mtime2) {
            result.push(arr1.shift());
          } else {
            result.push(arr2.shift());
          }
        });
      });
    }

    return result.concat(arr1, arr2);
  }

  fs.readdir(".", { withFileTypes: true }, (err, files) => {
    console.log("\nCurrent directory files:");
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });

  fs.readdir("./uploads", { withFileTypes: true }, (err, files) => {
    console.log("\nUploads:");
    if (err) console.log(err);
    else {
      console.log(files);
      let sortedArr = mergeSort(files);
      console.log(sortedArr);

      let latestFile = sortedArr[sortedArr.length - 1].name;

      console.log(latestFile);
      lr = new LineByLineReader(`./uploads/${latestFile}`);

      let counter = 0;
      lr.on("error", function (err) {
        console.log("line by line reader error:");
        console.log(err);
        // 'err' contains error object
      });

      lr.on("line", function (line) {
        console.log("Line: " + line);
        counter++;
        arr.push(line);
        console.log(arr);
        // console.log(arr);
        // 'line' contains the current line without the trailing newline character.
      });
      console.log(counter);
      console.log("arr", arr);

      lr.on("end", function () {
        console.log("end");
        console.log("arr", arr);
        let params = {
          arr: [...arr],
          userID,
          crackID,
          data: {
            singleton,
            anonInt,
            salt,
            beginMilli,
            autoMask,
            timeToCrack,
            saltType,
            automatic,
            uid,
            manualHash,
            ttcMilli,
            maskIndex,
            attackMethod,
            maskNumber: 0,
            hashType,
            hash: [...arr],
          },
        };
        Parse.Cloud.run("setBatch", params)
          .then((response) => {
            console.log("heroku to parse batch function:", response);
            return JSON.parse(JSON.stringify(response));
          })
          .then((json) => {
            console.log(json);
          })
          .catch((error) => {
            console.log("error:");
            console.log(error);
          });
        // All lines are read, file is closed now.
      });
    }
  });

  //   });

  console.log(arr);

  res.end("OK");
});

// app.post("/batch", upload.single("uri"), (req, res) => {
//   console.log("batch received", req.body);

//   req.pipe()
//   readline
//   .createInterface({
//     input: fs.createReadStream(filename),
//     terminal: false,
//   })
//   .on("line", function (line) {
//     console.log("Line: " + line);
//   });

//   res.end("OK");
// });

app.listen(PORT, () => {
  console.log("Listening on", PORT);
});

const sha256 = require("tiny-sha256");
const sha512 = require("js-sha512").sha512;
const sha384 = require("js-sha512").sha384;

const mask1 = require("./masks/mask1");
const mask2 = require("./masks/mask2");
const mask3 = require("./masks/mask3");
const mask4 = require("./masks/mask4");
const mask5 = require("./masks/mask5");
const mask6 = require("./masks/mask6");
const mask7 = require("./masks/mask7");
const mask8 = require("./masks/mask8");
const mask9 = require("./masks/mask9");

const m1 = mask1();
const m2 = mask2();
const m3 = mask3();
const m4 = mask4();
const m5 = mask5();
const m6 = mask6();
const m7 = mask7();
const m8 = mask8();
const m9 = mask9();

const allCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  "'",
  // '"',
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
  // JSON.stringify("\n").slice(0, 1), =========== can't handle backslash
  "|",
  // "`",
];

const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowerAndDigits = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const upperAndDigits = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const symbols = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
  "|",
];

function finalize(itemID, result) {
  console.log(
    "begin finalize",
    `itemID: ${itemID}`,
    `result: ${JSON.parse(JSON.stringify(result))}`
  );
  Parse.Cloud.run("finalize", { itemID, result: result })
    .then((response) => {
      console.log(response);
      return JSON.parse(JSON.stringify(response));
    })
    .then((json) => {
      console.log(json);
      if (!json.error) {
        console.log("finalizing crack object on cloud succeeded.");
      }
    })
    .catch((error) => {
      console.log("received error from parse:");
      console.log(error);
    });
}

function hashFunction(input, saltType, hashType, salt) {
  let hashed;

  let pending;
  let currentSalt = salt;

  if (saltType === "append") {
    pending = `${input}${currentSalt}`;
  } else if (saltType === "prepend") {
    pending = `${currentSalt}${input}`;
  } else {
    pending = input;
  }

  if (hashType === "SHA-256") {
    hashed = sha256(pending);
  } else if (hashType === "SHA-384") {
    hashed = sha384(pending);
  } else if (hashType === "SHA-512") {
    hashed = sha512(pending);
  }
  return hashed;
}

function totalForce(
  hash,
  saltType,
  hashType,
  salt,
  itemID,
  bMilli,
  currentAttempt,
  currentCounter,
  currentFullList,
  currentNewArr
) {
  ///////////////////
  ////////////////////
  let fullList = [...hash];
  let newArr = [];

  //   let final = {
  //     noMatches,
  //     timeEnded,
  //     allAttempts,
  //     fullList,
  //     endMilli: Date.now(),
  //     decrypted,
  //     counter,
  //     beginMilli: bMilli,
  //////////////////
  //////////////////
  // setVisible(true);
  let decrypted = [];
  // we start with a string containing only the character "a", the first character in our set.
  let i = allCharacters[0];
  // initiate the variable containing the hash we create from these strings:
  let crackHash = "";

  let cracked = false;
  let continueCrack = true;
  let allAttempts = [];
  let allHashes = [];
  // a number to increment so that we can report the number of guesses to the user:
  let counter = 1;
  // run the function until we create the matching hash, or the user stops the crack manually.

  let shouldSave = false;
  let endMilli;
  let timeEnded;
  let forceQuit = false;
  let reset;
  if (currentAttempt) {
    reset = true;
  } else {
    reset = false;
  }

  if (reset) {
    newArr = currentNewArr;
    fullList = currentFullList;
  }
  while (fullList.length > 0 && !forceQuit) {
    let traceBack = true;
    counter++;

    if (reset) {
      i = currentAttempt;
      counter = currentCounter;
      reset = false;
    }

    if (counter == 50000000000) {
      forceQuit = true;
    }

    // ^^ might be unnecessary or might need to change number.
    // push the guesses to an array so we can show the user:
    // setCrackHistory([...crackHistory, i]);
    // create the hash:

    let result = hashFunction(i, saltType, hashType, salt);
    // save our hash:
    crackHash = result;
    // console.log(`guessed: ${i}, hash: ${result}, count: ${counter}`);

    if (fullList.includes(result)) {
      newArr.push({ password: i, hash: result });

      fullList.splice(fullList.indexOf(result), 1);
    }

    if (fullList.length == 0) {
      // if we have a match, then we're done.
      console.log(
        `password${
          newArr.length > 1 ? "s" : ""
        } cracked! It took ${counter} guesses.`
      );
      continueCrack = false;
      cracked = true;
      const currentTime = new Date();
      let time = currentTime.toString();
      timeEnded = time;

      decrypted = i;
    } else {
      for (let j = 1; j <= i.length; j++) {
        if (
          i[i.length - j] !== allCharacters[allCharacters.length - 1] &&
          traceBack === true
        ) {
          i = `${i.substring(0, i.length - j)}${
            allCharacters[allCharacters.indexOf(i[i.length - j]) + 1]
          }${"a".repeat(j - 1)}`;
          traceBack = false;
        }
      }
      if (traceBack === true) {
        i = `${"a".repeat(i.length + 1)}`;
      }
      shouldSave = cacheTimeOut(counter);
      //
      // attempting to have program to stop and start crack on useEffect every 10000 or so hashes to prevent cache overflow.
      if (shouldSave) {
        Parse.Cloud.run("resume", {
          hash,
          saltType,
          hashType,
          salt,
          itemID,
          bMilli,
          currentAttempt: i,
          currentCounter: counter,
          attackMethod: "totalForce",
          currentFullList: fullList,
          currentNewArr: newArr,
        })
          .then((response) => {
            console.log(response);
            return JSON.parse(JSON.stringify(response));
          })
          .then((json) => {
            console.log(json);
            if (!json.error) {
              console.log("saving state data to cloud successful.");
            }
          })
          .catch((error) => {
            console.log("received error from parse:");
            console.log(error);
          });
        console.log("saving data to cloud...");
      }
    }
  }

  if (!forceQuit) {
    let final = {
      decrypted,
      endMilli: Date.now(),
      timeEnded,
      fullList,
      newArr,
      allAttempts,
      beginMilli: bMilli,
    };
    if (!shouldSave) {
      console.log("run finalize", itemID, final);
      finalize(itemID, final);
    }
  } else {
    let final = {
      decrypted,
      endMilli: Date.now(),
      timeEnded,
      allAttempts,
      forceQuit,
      fullList,
      newArr,
      beginMilli: bMilli,
    };
    if (!shouldSave) {
      console.log("run finalize", itemID, final);
      finalize(itemID, final);
    }
  }
}

const maskAttack = (
  hash,
  automatic,
  maskIndex,
  maskNumber,
  saltType,
  hashType,
  salt,
  autoMask,
  singleton,
  itemID,
  bMilli,
  currentAttempt,
  currentCounter,
  currentMaskLine,
  currentFullList,
  currentNewArr
) => {
  console.log("mask attack started, hash:", hash, hashType, saltType, salt);
  //
  if (currentAttempt) {
    console.log(
      `resumed: ${currentAttempt}, counter: ${currentCounter}, mask line: ${currentMaskLine}`
    );
  }

  let fullList = [...hash];

  console.log(fullList);
  let newArr = [];

  let mask;
  let continueThisMask;
  if (automatic) {
    mask = autoMask;
    // automatic will be empty if we're not using automatic, or it will contain the mask generated.
  } else if (maskIndex !== 99) {
    // 99 means all masks in list. Not 99 means use the generated singleton mask.
    mask = singleton;
  } else if (maskNumber == "1") {
    mask = m1;
  } else if (maskNumber == "2") {
    mask = m2;
  } else if (maskNumber == "3") {
    mask = m3;
  } else if (maskNumber == "4") {
    mask = m4;
  } else if (maskNumber == "5") {
    mask = m5;
  } else if (maskNumber == "6") {
    mask = m6;
  } else if (maskNumber == "7") {
    mask = m7;
  } else if (maskNumber == "8") {
    mask = m8;
  } else if (maskNumber == "9") {
    mask = m9;
  }

  console.log(mask[0]);

  console.log(`beginning ${mask}`);
  let crackHash = ""; // keep our current generated hash in memory.
  // setCracked(false); // state management.

  let decrypted = [];
  let continueCrack = true;
  let noMatches;
  let guessesNeeded;
  let endMilli;
  let timeEnded;
  let allAttempts = []; // arrays of everything done so far.
  let counter = 0; // a number to increment so that we can report the number of guesses to the user:
  let foundPassword = false;
  let i = 0;
  let reset;
  if (currentAttempt) {
    reset = true;
  } else {
    reset = false;
  }
  //////////////////////////
  //////////////////////////
  if (reset) {
    newArr = currentNewArr;
    fullList = currentFullList;
    i = Number(currentMaskLine);
  }
  let shouldSave;
  for (i; i < mask.length && fullList.length > 0; i++) {
    if (fullList.length > 0) {
      let line = mask[i];

      // console.log("line: ", line);
      // console.log("mask: ", mask);
      let maskProto = `${line}`.split("?").join("");
      let maskString = maskProto
        .replace(/d/g, "0")
        .replace(/u|H/g, "A")
        .replace(/l|h/g, "a")
        .replace(/s/g, "~"); // now we have the initial string for this given mask
      console.log("maskProto: ", maskProto);
      console.log("maskString: ", maskString);
      if (reset) {
        maskString = currentAttempt;
        counter = currentCounter;
        reset = false;
      }
      function recurseIterate() {
        let result = hashFunction(maskString, saltType, hashType, salt);

        // ^^ may be unnecessary or might need to change number.
        continueThisMask = false; // here we decide if we're going to move on to the next mask or not once we're done
        crackHash = result;
        console.log(`${maskString}: ${result}`);

        if (fullList.includes(result)) {
          newArr.push({ password: maskString, hash: result });

          fullList.splice(fullList.indexOf(result), 1);
        }

        if (fullList.length == 0) {
          console.log(
            `password${newArr.length > 1 ? "s" : ""} cracked! It took ${
              counter + 1
            } guesses.`
          );
          continueCrack = false;
          cracked = true;
          noMatches = false;
          guessesNeeded = counter;
          decrypted = [...newArr];
          const currentTime = new Date();
          let time = currentTime.toString();
          let eMilli = Date.now();
          endMilli = eMilli;
          timeEnded = time;
          foundPassword = true;
        } else {
          let traceBack = true;
          for (let j = 1; j <= maskProto.length; j++) {
            if (traceBack == true) {
              function cycle(chartype, character) {
                let charset;
                if (chartype === "d") {
                  charset = digits;
                } else if (chartype === "s") {
                  charset = symbols;
                } else if (chartype === "a") {
                  charset = allCharacters;
                } else if (chartype === "l") {
                  charset = lowerCase;
                } else if (chartype === "u") {
                  charset = upperCase;
                } else if (chartype === "h") {
                  charset = lowerAndDigits;
                } else if (chartype === "H") {
                  charset = upperAndDigits;
                }

                if (charset[charset.indexOf(character) + 1] !== undefined) {
                  continueThisMask = true;
                  // once we increment, we have to set all the next characters to the beginnings of their respective sets.
                  let trailing = maskProto
                    .slice(Number(maskProto.length - (j - 1)))
                    .replace(/d/g, "0")
                    .replace(/u|H/g, "A")
                    .replace(/l|h/g, "a")
                    .replace(/s/g, "~");

                  maskString = `${maskString.substring(
                    0,
                    maskString.length - j
                  )}${charset[charset.indexOf(character) + 1]}${trailing}`; // string up to char to cycle, then cycled char, then trail if any.

                  traceBack = false;
                }
              }
              cycle(
                maskProto[maskProto.length - j],
                maskString[maskString.length - j]
              );
            }
          }
        }

        counter++;

        if (continueThisMask) {
          shouldSave = cacheTimeOut(counter);
          //
          // attempting to have program to stop and start crack on useEffect every 4000 or so hashes to prevent stack overflow.
          if (shouldSave) {
            Parse.Cloud.run("resume", {
              hash,
              automatic,
              maskIndex,
              maskNumber,
              saltType,
              hashType,
              salt,
              autoMask,
              singleton,
              itemID,
              bMilli,
              decrypted,
              currentAttempt: maskString,
              currentCounter: counter,
              currentMaskLine: i,
              attackMethod: "mask",
              currentFullList: fullList,
              currentNewArr: newArr,
            })
              .then((response) => {
                console.log(response);
                return JSON.parse(JSON.stringify(response));
              })
              .then((json) => {
                console.log(json);
                if (!json.error) {
                  console.log("saving state data to cloud successful.");
                }
              })
              .catch((error) => {
                console.log("received error from parse:");
                console.log(error);
              });
            console.log("saving data to cloud...");
          } else {
            recurseIterate(); // the function iterates a character and then starts from the beginning to make a new hash, and repeats until the correct hash is made
          }

          // OR until all options for this mask have been exhausted.
          // if all characters in the string match the end of their respective sequences, none will be iterated and continue will be false,
          // the next line will be read.
        }
      }
      // counter++;
      recurseIterate();
    }
  }
  //
  if (!foundPassword) {
    const currentTime = new Date();
    let time = currentTime.toString();
    timeEnded = time;
    noMatches = true;
  }

  let final = {
    noMatches,
    timeEnded,
    allAttempts,
    fullList,
    endMilli: Date.now(),
    decrypted,
    counter,
    beginMilli: bMilli,
  };

  console.log("final", final);

  if (!shouldSave) {
    console.log("finalizing");
    finalize(itemID, final);
  }

  return final;
};

function cacheTimeOut(counter) {
  if (counter % 5000 === 0) {
    return true;
  } else {
    return false;
  }
}
