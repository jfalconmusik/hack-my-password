Parse.initialize(
  "bBEW1ifNinmD2vqWYUFWlUVDS3cHKus4oi9EL3aY", // This is your Application ID
  "hGL6Y56FGoVOUmuFRBSdkcDbAJR8C039Iw8H9DRa", // This is your Javascript key
  "0pZmrxqkm61A10LRFcJ9axepfdR55LpTOqMljZVj" // This is your Master key (never use it in the frontend)
);

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
  "X-Parse-Application-Id": "bBEW1ifNinmD2vqWYUFWlUVDS3cHKus4oi9EL3aY",
  "X-Parse-REST-API-Key": "dbZskmf7E5yzAKoh18o6jeBefF3Q6HfYJjGNRtV7",
};

// ==========================
// <To Do>

// Upload to cloud functions and test.

//</To Do>
// ==========================

// return await response.json();

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  s = (s - mins) / 60;
  var hrs = s % 24;
  s = (s - hrs) / 24;
  var days = s % 30;
  s = (s - days) / 30;

  let dayString = "";
  if (days > 0) {
    dayString = `${days} days, `;
  }
  let hrsString = "";
  if (hrs > 0) {
    hrsString = `${hrs} hrs, `;
  }
  let minString = "";
  if (mins > 0) {
    minString = `${mins} min, `;
  }

  return `${dayString}${hrsString}${minString}${secs} sec`;
}
// Create user:
Parse.Cloud.define("createUser", (request) => {
  let result;
  console.log(
    `Request: ${JSON.stringify(request)}; Params: ${JSON.stringify(
      request.params
    )}`
  );
  const email = request.params.email;
  const username = request.params.username;
  const password = request.params.password;

  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("password", password);

  return user
    .signUp()
    .then((user) => {
      if (typeof document !== "undefined")
        document.write(`User signed up: ${JSON.stringify(user)}`);
      console.log("User signed up", user);
      return user;
    })
    .catch((error) => {
      if (typeof document !== "undefined")
        document.write(`Error while signing up user: ${JSON.stringify(error)}`);
      console.error("Error while signing up user", error);
      return error;
    });
});

// Login:
Parse.Cloud.define("login", (request) => {
  let r = request.params;
  let username = r.username;
  let password = r.password;

  return Parse.User.logIn(username, password)
    .then((user) => {
      // Do stuff after successful login
      if (typeof document !== "undefined")
        document.write(`Logged in user: ${JSON.stringify(user)}`);
      console.log("Logged in user", user);
      return user;
    })
    .catch((error) => {
      if (typeof document !== "undefined")
        document.write(`Error while logging in user: ${JSON.stringify(error)}`);
      console.error("Error while logging in user", error);
      return error;
    });
});

// Update user to not see document modal again:
Parse.Cloud.define("modality", (request) => {
  console.log("hiding modal for", request.params.userID);
  const userID = request.params.userID;
  const User = new Parse.User();
  const query = new Parse.Query(User);

  return query.get(userID, { useMasterKey: true }).then((object) => {
    //
    // Most importantly:
    object.set("hideModal", true);

    return object.save().then(
      (response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
          document.write(`Updated : ${JSON.stringify(response)}`);
        console.log("Updated ", response);

        return response;
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(`Error while updating : ${JSON.stringify(error)}`);
        console.error("Error while updating ", error);
        return error;
      }
    );
  });
});

// Return all cracks that have the user's id.
Parse.Cloud.define("userEntries", (request) => {
  const userID = request.params.uid;
  const anonInt = request.params.anonInt;

  const MyCustomClass = Parse.Object.extend("crackAttempt");
  const query = new Parse.Query(MyCustomClass);
  if (userID) {
    query.equalTo("userId", userID);
    return query.find().then(
      (results) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
          document.write(`ParseObjects found: ${JSON.stringify(results)}`);
        console.log("ParseObjects found:", results);

        return results;
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(
            `Error while fetching ParseObjects: ${JSON.stringify(error)}`
          );
        console.error("Error while fetching ParseObjects", error);
        return error;
      }
    );
  } else {
    query.equalTo("anonInt", anonInt);
    return query.find().then(
      (results) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
          document.write(`ParseObjects found: ${JSON.stringify(results)}`);
        console.log("ParseObjects found:", results);

        return results;
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(
            `Error while fetching ParseObjects: ${JSON.stringify(error)}`
          );
        console.error("Error while fetching ParseObjects", error);
        return error;
      }
    );
  }
});

// Check if crack exists on record. If not, create a database entry for it and fetch the server to begin the crack.

Parse.Cloud.define("crack", (request) => {
  console.log("request params", request.params);
  // uid is stored in an array, since many users might try the same password.
  const hash = request.params.hashString;
  const hashType = request.params.hashType;
  const automatic = request.params.automatic;
  const maskIndex = request.params.maskIndex;
  const attackMethod = request.params.attackMethod;
  const salt = request.params.salt;
  const maskNumber = request.params.maskNumber;
  const saltType = request.params.saltType;
  const manualHash = request.params.manualHash;
  const autoMask = request.params.autoMask;
  const singleton = request.params.singleton;
  const userID = request.params.uid;
  const beginMilli = request.params.beginMilli;
  const timeToCrack = request.params.timeToCrack;
  const ttcMilli = request.params.ttcMilli;
  const anonInt = request.params.anonInt;

  // const body = JSON.stringify({
  //   query: request.text,
  //   variables,
  // });

  const MyCustomClass = Parse.Object.extend("crackAttempt");

  const query = new Parse.Query(MyCustomClass);

  let performCrack;

  let foundAnswer;

  query.containsAll("hash", [hash]);
  query.equalTo("hashType", hashType);
  query.equalTo("salt", salt);
  query.equalTo("saltType", saltType);
  let queryResult = query.find().then(
    (results) => {
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      if (typeof document !== "undefined")
        document.write(`ParseObjects found: ${JSON.stringify(results)}`);
      console.log("ParseObjects found:", results);

      if (results.length > 0) {
        performCrack = false;
        foundAnswer = results;
        console.log("Crack object already exists.");
        console.log(foundAnswer);

        let userOnCrack = query.get(foundAnswer[0].id).then((object) => {
          if (userID) {
            object.addUnique("userId", userID);
          } else {
            object.addUnique("anonInt", anonInt);
          }
          object.save().then(
            (response) => {
              // You can use the "get" method to get the value of an attribute
              // Ex: response.get("<ATTRIBUTE_NAME>")
              if (typeof document !== "undefined")
                document.write(`Updated : ${JSON.stringify(response)}`);
              console.log("Added user id to crack users array ", response);
              return response;
            },
            (error) => {
              if (typeof document !== "undefined")
                document.write(
                  `Error while updating : ${JSON.stringify(error)}`
                );
              console.error("Error while updating ", error);
              errorResponse = error;
              return error;
            }
          );
        });
        return userOnCrack;
      } else {
        performCrack = true;
        let decryptObj;

        const myNewObject = new MyCustomClass();

        myNewObject.set("hash", [hash]);
        myNewObject.set("hashType", hashType);
        myNewObject.set("automatic", automatic);
        myNewObject.set("maskIndex", maskIndex);
        myNewObject.set("maskNumber", Number(maskNumber));
        myNewObject.set("attackMethod", attackMethod);
        myNewObject.set("salt", salt);
        myNewObject.set("saltType", saltType);
        myNewObject.set("manualHash", manualHash);
        myNewObject.set("autoMask", autoMask);
        myNewObject.set("singleton", singleton);
        myNewObject.set("userId", [userID]);
        myNewObject.set("beginMilli", Date.now());
        myNewObject.set("timeToCrack", timeToCrack);
        myNewObject.set("timeToCrackMilli", ttcMilli);
        if (userID) {
          myNewObject.set("anonInt", []);
        } else {
          myNewObject.set("anonInt", [anonInt]);
        }
        let itemID;
        let finalRes = myNewObject.save().then(
          (result) => {
            if (typeof document !== "undefined")
              document.write(`ParseObject created: ${JSON.stringify(result)}`);
            console.log("ParseObject created", result);
            itemID = result.id;
            decryptObj = result;
            console.log(`item id: ${itemID}`);
            // console.log(`hash: ${hash}`);

            if (itemID) {
              let res;

              Parse.Cloud.httpRequest({
                url: "https://hack-my-server.herokuapp.com",
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                  itemID,
                  result: decryptObj,
                  params: request.params,
                }),
              })
                .then((response) => {
                  console.log("hack_my_server response:", response);
                  return JSON.parse(JSON.stringify(response));
                })
                .then((json) => {
                  console.log("hack_my_server json:", json);
                  res = json;
                  return json;
                });

              return { response: res, itemID, decryptObj };
            }
          },
          (error) => {
            if (typeof document !== "undefined")
              document.write(
                `Error while creating ParseObject: ${JSON.stringify(error)}`
              );
            console.error("Error while creating ParseObject: ", error);
            return error;
          }
        );
        return finalRes;
      }
    },
    (error) => {
      if (typeof document !== "undefined")
        document.write(
          `Error while fetching ParseObjects: ${JSON.stringify(error)}`
        );
      console.error("Error while fetching ParseObjects", error);
      peformCrack = false;
      return error;
      // contacting server isn't working, so don't start crack
    }
  );
  console.log(queryResult);
  return queryResult;
});

Parse.Cloud.define("initBatch", (request) => {
  console.log("initBatch request", request.params);

  const hashType = request.params.hashType;
  const automatic = request.params.automatic;
  const maskIndex = request.params.maskIndex;
  const attackMethod = request.params.attackMethod;
  const salt = request.params.salt;
  const maskNumber = request.params.maskNumber;
  const saltType = request.params.saltType;
  const manualHash = request.params.manualHash;
  const autoMask = request.params.autoMask;
  const singleton = request.params.singleton;
  const userID = request.params.uid;
  const beginMilli = request.params.beginMilli;
  const timeToCrack = request.params.timeToCrack;
  const ttcMilli = request.params.ttcMilli;
  const anonInt = request.params.anonInt;

  // const body = JSON.stringify({
  //   query: request.text,
  //   variables,
  // });

  const MyCustomClass = Parse.Object.extend("crackAttempt");

  const myNewObject = new MyCustomClass();

  myNewObject.set("hash", []);
  myNewObject.set("hashType", hashType);
  myNewObject.set("automatic", automatic);
  myNewObject.set("maskIndex", maskIndex);
  myNewObject.set("maskNumber", Number(maskNumber));
  myNewObject.set("attackMethod", attackMethod);
  myNewObject.set("salt", salt);
  myNewObject.set("saltType", saltType);
  myNewObject.set("manualHash", manualHash);
  myNewObject.set("autoMask", autoMask);
  myNewObject.set("singleton", singleton);
  myNewObject.set("userId", [userID]);
  myNewObject.set("beginMilli", Date.now());
  myNewObject.set("timeToCrack", timeToCrack);
  myNewObject.set("timeToCrackMilli", ttcMilli);
  myNewObject.set("batch", true);

  let finalRes = myNewObject.save().then(
    (result) => {
      if (typeof document !== "undefined")
        document.write(`ParseObject created: ${JSON.stringify(result)}`);
      console.log("ParseObject created", result);
      itemID = result.id;
      decryptObj = result;
      console.log(`item id: ${itemID}`);
      // console.log(`hash: ${hash}`);

      if (itemID) {
        let res;

        return { result, itemID };
      }
    },
    (error) => {
      if (typeof document !== "undefined")
        document.write(
          `Error while creating ParseObject: ${JSON.stringify(error)}`
        );
      console.error("Error while creating ParseObject: ", error);
      return error;
    }
  );
  return finalRes;
});

Parse.Cloud.define("setBatch", (request) => {
  console.log("setBatch request", request.params);
  let itemID = request.params.crackID;
  let hashes = request.params.arr;

  let r = request.params.data;

  const MyCustomClass = Parse.Object.extend("crackAttempt");
  const query = new Parse.Query(MyCustomClass);
  return query.get(itemID).then((object) => {
    //
    // Most importantly:
    object.set("hash", [...hashes]);
    return object.save().then(
      (response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
          document.write(`Updated : ${JSON.stringify(response)}`);
        console.log("Updated ", response);

        return query.find(itemID).then(
          (results) => {
            if (typeof document !== "undefined")
              document.write(`crackAttempt found: ${JSON.stringify(results)}`);
            console.log("crackAttempt found", results);

            const hash = r.hash;
            const hashType = r.hashType;
            const automatic = r.automatic;
            const maskIndex = r.maskIndex;
            const attackMethod = r.attackMethod;
            const salt = r.salt;
            const maskNumber = Number(r.maskNumber);
            const saltType = r.saltType;
            const manualHash = r.manualHash;
            const autoMask = r.autoMask;
            const singleton = r.singleton;
            const userID = r.uid;
            const beginMilli = r.beginMilli;
            const timeToCrack = r.timeToCrack;
            const ttcMilli = r.ttcMilli;
            const anonInt = r.anonInt;

            const parameters = {
              hash,
              hashType,
              automatic,
              maskIndex,
              attackMethod,
              salt,
              maskNumber,
              saltType,
              manualHash,
              autoMask,
              singleton,
              userID,
              beginMilli,
              timeToCrack,
              ttcMilli,
              anonInt,
              batchMode: true,
            };

            return Parse.Cloud.httpRequest({
              url: "https://hack-my-server.herokuapp.com",
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              mode: "cors",
              body: JSON.stringify({
                itemID,
                params: parameters,
              }),
            })
              .then((response) => {
                console.log("hack_my_server response, begin batch:", response);
                return JSON.parse(JSON.stringify(response));
              })
              .then((json) => {
                console.log("hack_my_server json, begin batch:", json);
                return json;
              });
          },
          (error) => {
            if (typeof document !== "undefined")
              document.write(
                `Error while fetching crackAttempt: ${JSON.stringify(error)}`
              );
            console.error("Error while fetching crackAttempt", error);
          }
        );
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(`Error while updating : ${JSON.stringify(error)}`);
        console.error("Error while updating ", error);
        return error;
      }
    );
  });
});

// Resume crack attempt:

Parse.Cloud.define("resume", (request) => {
  console.log("beginning resume", request.params);
  //
  // Just to be explicit:
  let r = request.params;
  let itemID = r.itemID;

  const MyCustomClass = Parse.Object.extend("crackAttempt");
  const query = new Parse.Query(MyCustomClass);
  return query.get(itemID).then((object) => {
    //
    // Most importantly:
    object.set("currentAttempt", r.currentAttempt);
    object.set("currentCounter", r.currentCounter);
    object.set("notFound", r.currentFullList);
    object.set("decrypted", r.currentNewArr);
    if (r.currentMaskLine) {
      object.set("currentMaskLine", r.currentMaskLine);
    }
    if (r.currentCounter % 50000000 === 0) {
      object.addUnique("allAttempts", r.currentAttempt);
    }

    return object.save().then(
      (response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
          document.write(`Updated : ${JSON.stringify(response)}`);
        console.log("Updated ", response);

        Parse.Cloud.httpRequest({
          url: "https://hack-my-server.herokuapp.com/resume",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({
            itemID,
            params: request.params,
          }),
        })
          .then((response) => {
            console.log("hack_my_server response, resume:", response);
            return JSON.parse(JSON.stringify(response));
          })
          .then((json) => {
            console.log("hack_my_server json, resume:", json);
            res = json;
            return json;
          });

        return response;
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(`Error while updating : ${JSON.stringify(error)}`);
        console.error("Error while updating ", error);
        return error;
      }
    );
  });
});

// Update database after finishing crack:

Parse.Cloud.define("finalize", (request) => {
  console.log("begin finalize");
  console.log(request);
  let itemID = request.params.itemID;
  let result = request.params.result;
  console.log("result.endMilli: ", typeof result.endMilli);
  console.log("result.beginMilli: ", typeof result.beginMilli);
  console.log(
    "final elapsed",
    Number(Number(result.endMilli) - Number(result.beginMilli))
  );
  let totalElapsed = Number(
    Number(result.endMilli) - Number(result.beginMilli)
  );
  console.log("total elapsed: ", totalElapsed);
  let finalElapsed = msToTime(totalElapsed);

  const MyCustomClass = Parse.Object.extend("crackAttempt");
  const query = new Parse.Query(MyCustomClass);

  // { noMatches, timeEnded, allAttempts, endMilli, decrypted, counter };
  // here you put the objectId that you want to update
  return query.get(itemID).then((object) => {
    object.set("finalElapsed", finalElapsed);
    object.set("noMatches", result.noMatches || result.forceQuit || false);
    object.set("allAttempts", result.allAttempts);
    object.set("timeEnded", result.timeEnded);
    object.set("endMilli", result.endMilli);
    object.set("decrypted", result.decrypted);
    object.set("notFound", result.fullList);
    object.set("totalAttempts", result.counter);
    object.set("finished", true);
    return object.save().then(
      (response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
          document.write(`Updated : ${JSON.stringify(response)}`);
        console.log("Updated ", response);
        return response;
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(`Error while updating : ${JSON.stringify(error)}`);
        console.error("Error while updating ", error);
        return error;
      }
    );
  });
});
