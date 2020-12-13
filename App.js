import "react-native-gesture-handler";
// import clear from "react-native-clear-app-cache";
// // import AppCacheClear from "react-native-app-cache-clear";
// import RNClearCache from "react-native-clear-cache";
// import KeyEvent from "react-native-keyevent";
// import { KeyboardRegistry } from "react-native-keyboard-input";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
// import KeyboardedInput from "react-touch-screen-keyboard";
// import "react-touch-screen-keyboard/lib/Keyboard.css"; // if you just want css
import React, {
  useRef,
  useEffect,
  useContext,
  useState,
  Component,
} from "react";
import Parse, { enableEncryptedUser } from "parse/react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
import FocusLock from "react-focus-lock";
import clear from "react-native-clear-cache";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";
// import { config } from "dotenv";
import {
  Animated,
  Easing,
  Text,
  View,
  Button,
  Image,
  // TextInput,
  // Switch,
  ActivityIndicator,
  TouchableNativeFeedback,
  Touchable,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Notifications } from "react-native-notifications";
import {
  ProgressBar,
  Colors,
  List,
  DataTable,
  Badge,
  Divider,
  TextInput,
  Avatar,
  Switch,
  Provider as PaperProvider,
} from "react-native-paper";
// import { TextField, TextArea } from "react-native-ui-lib";
import zxcvbn from "zxcvbn";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import LottieAnimation from "lottie-react-native";

//
import sha256 from "tiny-sha256";
//
// import timer from "react-native-timer-native";
// const timer = require("react-native-timer-native");

// import { Asset, useAssets } from "expo-asset";
import Constants from "expo-constants";
import { animated, useSpring } from "react-spring";
import mask1 from "./masks/mask1";
import mask2 from "./masks/mask2";
import mask3 from "./masks/mask3";
import mask4 from "./masks/mask4";
import mask5 from "./masks/mask5";
import mask6 from "./masks/mask6";
import mask7 from "./masks/mask7";
import mask8 from "./masks/mask8";
import mask9 from "./masks/mask9";
// import tinySha256 from "tiny-sha256";
import { sha512, sha384 } from "js-sha512";
import keys from "./constants/Keys";
const m1 = mask1();
const m2 = mask2();
const m3 = mask3();
const m4 = mask4();
const m5 = mask5();
const m6 = mask6();
const m7 = mask7();
const m8 = mask8();
const m9 = mask9();
// Set global test device ID

const testID = keys.testID;
const productionID = keys.productionID;
const productionID2 = keys.productionID2;

// Is a real device and running in production.
const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;
// com.jessefalconmusik.crackmypassword
//
// setTestDeviceIDAsync("EMULATOR");
// ^^^ Not available on web!

// allows navigation on native

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

// for parse fetch requests:

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

const App = () => {
  const styles = StyleSheet.create({
    lottie: {
      // width: 370,
      // height: 370,
      width: 150,
      height: 150,
      zIndex: 99,
      top: 16,
    },
    lottie2: {
      // width: 370,
      // height: 370,
      width: 300,
      height: 300,
      zIndex: 99,
      // bottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    container2: {
      flex: 1,
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    animationStyle: {
      height: "100%",
      width: "100%",
    },
    nav: {
      // backgroundColor: "lightgray",

      backgroundColor: "#0b94d4",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 40,
      paddingRight: 40,
    },
    navOn: {
      backgroundColor: "purple",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 40,
      paddingRight: 40,
    },
    strength: {
      // backgroundColor: "lightgray",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      height: 13,
      width: "100%",
      top: 5,
    },
  });

  const [anonInt, setAnonInt] = useState(0);

  useEffect(() => {
    createInstallation = async () => {
      const Installation = Parse.Object.extend(Parse.Installation);
      const installation = new Installation();

      installation.set("deviceType", Platform.OS);

      await installation.save();
    };

    createInstallation();

    setAnonInt(Math.random().toFixed(10));
  }, []);
  //

  // ALPHA:

  // - Auto hacks shouldn't even do the function. They should just save to database and tell how long it would have taken.

  // - Every initiation or resumption of a crack spawns and forks a child process, that way the server can still listen for requests.

  // - Check for unfinished hacks on boot.

  // - Time elapsed literally does nothing. Many bits of info screen are utterly broken. Begin and end timezones should match.

  // - In salts, option to append/salt to hash, plaintext, or both.

  // - Local notifications on success. Trying react native background task to check if user entries has more completed decryptions.

  // BETA:

  // - Styling (better colors)
  // - light/dark themes
  // - Sort by batch.
  // - Responsive.
  // - all/some masks in set feature      <---- somewhat bloated.
  // - Cleanup...

  /////////////////////////////////
  //
  //
  // expo build:android -t apk creates an emulator-ready app. Don't forget adb logcat.
  // expo build:android -t app-bundle for production. Requires signing and new versionCode. in build.gradle and app.json
  //

  // Notifications --- These might depend on firebase, which makes it impossible:
  // Notifications.registerRemoteNotifications();
  // Notifications.events().registerRemoteNotificationsRegistered((event) => {
  //   // TODO: Send the token to my server so it could send back push notifications...
  //   console.log("Device Token Received", event.deviceToken);
  // });
  // Notifications.events().registerRemoteNotificationsRegistrationFailed(
  //   (event) => {
  //     console.error(event);
  //   }
  // );

  // Notifications.events().registerNotificationReceivedForeground(
  //   (notification, completion) => {
  //     console.log(
  //       `Notification received in foreground: ${notification.title} : ${notification.body}`
  //     );
  //     completion({ alert: false, sound: false, badge: false });
  //   }
  // );

  // Notifications.events().registerNotificationOpened(
  //   (notification, completion) => {
  //     console.log(`Notification opened: ${notification.payload}`);
  //     completion();
  //   }
  // );

  // Notifications.postLocalNotification(
  //   {
  //     body: "The password is cracked!",
  //     title: "Cracked!",
  //     sound: "chime.aiff",
  //     category: "SOME_CATEGORY",
  //     link: "localNotificationLink",
  //     fireDate: new Date(),
  //   },
  //   id
  // );
  //
  // state:
  const [timeStarted, setTimeStarted] = useState("");
  const [timeEnded, setTimeEnded] = useState("");
  const [cracked, setCracked] = useState("");
  const [manualHash, setManualHash] = useState(false);
  const toggleSwitch = () => setManualHash((previousState) => !previousState);

  useEffect(() => {
    if (!manualHash) {
      setCustomMaskString("");
    }
  }, [manualHash]);
  //
  const [maskNumber, setMaskNumber] = useState(1);
  const [showMaskList, setShowMaskList] = useState(false);
  const toggleSwitchShowMasks = () =>
    setShowMaskList((previousState) => !previousState);
  const [maskUsed, setMaskUsed] = useState([]);
  const [useBruteForce, setUseBruteForce] = useState(false);
  //
  const [crackHistory, setCrackHistory] = useState([]);
  const [fastestCrack, setFastestCrack] = useState("");
  const [slowestCrack, setSlowestCrack] = useState("");
  const [guesses, setGuesses] = useState("");
  const [guessesNeeded, setGuessesNeeded] = useState(0);
  // crack history will be an array of objects logging the specs for each crack.
  const [currentPassword, setCurrentPassword] = useState("");
  const [hash, setHash] = useState("");
  const [decrypted, setDecrypted] = useState("");
  //
  const [showCharWarning, setShowCharWarning] = useState(false);
  //
  const [continueCrack, setContinueCrack] = useState(false);
  const [uncrackable, setUncrackable] = useState(false);
  //
  const [wordStrength, setWordStrength] = useState(0);
  //
  //
  const [beginMilli, setBeginMilli] = useState(0);
  const [endMilli, setEndMilli] = useState(0);
  const [totalMilli, setTotalMilli] = useState(0);
  const [finalElapsed, setFinalElapsed] = useState("");
  //
  //
  const [toolTipVisible, setTooltipVisible] = useState(false);
  //
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);

  const hideModal = () => setModalVisible(false);
  //
  //
  //
  const [hashType, setHashType] = useState("SHA-256");
  const [hashTypeNumber, setHashTypeNumber] = useState(0);

  useEffect(() => {
    if (hashTypeNumber == "0" || hashTypeNumber == 0) {
      setHashType("SHA-256");
    } else if (hashTypeNumber == "1" || hashTypeNumber == 1) {
      setHashType("SHA-384");
    } else if (hashTypeNumber == "2" || hashTypeNumber == 2) {
      setHashType("SHA-512");
    }
  });

  function hashFunction(input) {
    let hashed;

    let pending;

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
  //
  //
  //

  let currentHash = "";

  // useEffect(() => {
  //   // for Lottie
  //   this.animation.play();
  // }, []);
  const [visible, setVisible] = useState(false);

  //
  const [maskIndex, setMaskIndex] = useState(0);

  const [singleton, setSingleton] = useState([]);

  // function msToTime(s) {
  //   var ms = s % 1000;
  //   s = (s - ms) / 1000;
  //   var secs = s % 60;
  //   s = (s - secs) / 60;
  //   var mins = s % 60;
  //   var hrs = (s - mins) / 60;

  //   let hrsString = "";
  //   if (hrs > 0) {
  //     hrsString = `${hrs} hrs, `;
  //   }
  //   let minString = "";
  //   if (mins > 0) {
  //     minString = `${mins} min, `;
  //   }

  //   return `${hrsString}${minString}${secs} sec`;
  // }

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

  useEffect(() => {
    if (beginMilli && endMilli) {
      let answer = endMilli - beginMilli;
      let ansString = msToTime(answer);
      setFinalElapsed(ansString);
      setTotalMilli(answer);
    }
  }, [endMilli]);

  const [stateSpaceMilli, setStateSpaceMilli] = useState(0);
  useEffect(() => {
    if (maskIndex !== 99 && maskUsed[maskIndex]) {
      setSingleton([maskUsed[maskIndex].toString()]);

      let space = stateSpace([maskUsed[maskIndex]]);

      setStateSpaceMilli(space);
      let secondsProjected = msToTime(space);
      setTimeToCrack(`${secondsProjected}`);
    } else {
      setSingleton([...maskUsed]);
    }
  }, [maskIndex]);
  // useEffect(() => {
  //   if (visible) {
  //     for (let i = 0; i <= 100000000; i++) {
  //       if (i === 100000000) {
  //         setVisible(false);
  //       }
  //     }
  //   }
  // }, [visible]);

  const [tooLong, setTooLong] = useState(false);

  useEffect(() => {
    if (
      currentPassword.includes(`\\`) ||
      currentPassword.includes("`") ||
      currentPassword.includes('"')
    ) {
      setShowCharWarning(true);
    } else {
      setShowCharWarning(false);
    }

    let res = zxcvbn(currentPassword).score;
    setWordStrength(res);
    if (automatic) {
      let mask = genMask(currentPassword);
      setAutoMask([mask.toString()]);
    } else {
      setAutoMask([]);
    }

    if (currentPassword.length > 12 && !manualHash) {
      setTooLong(true);
    } else {
      setTooLong(false);
    }
  }, [currentPassword]);

  const [customMask, setCustomMask] = useState(false);
  const [customMaskString, setCustomMaskString] = useState("");
  const [customMaskFinal, setCustomMaskFinal] = useState("");
  const [customMaskError, setCustomMaskError] = useState(false);
  const [isOnCustom, setIsOnCustom] = useState(false);

  useEffect(() => {
    let split = customMaskString.split("");

    setCustomMaskError(false);
    for (let i = 0; i < split.length; i++) {
      if (
        !(
          split[i] == "d" ||
          split[i] == "l" ||
          split[i] == "u" ||
          split[i] == "a" ||
          split[i] == "s"
        )
      ) {
        setCustomMaskError(true);
      }
    }

    setCustomMaskFinal(`?${customMaskString.split("").join("?")}`);
  }, [customMaskString]);

  useEffect(() => {
    if (maskNumber == 10) {
      setUseBruteForce(true);
      setCustomMask(false);
    } else if (maskNumber == 11) {
      setUseBruteForce(false);
      setCustomMask(true);
      setMaskIndex(0);
    } else {
      setUseBruteForce(false);
      setCustomMask(false);
      setMaskIndex(0);
      if (maskNumber == 1) {
        setMaskUsed(m1);
      } else if (maskNumber == 2) {
        setMaskUsed(m2);
      } else if (maskNumber == 3) {
        setMaskUsed(m3);
      } else if (maskNumber == 4) {
        setMaskUsed(m4);
      } else if (maskNumber == 5) {
        setMaskUsed(m5);
      } else if (maskNumber == 6) {
        setMaskUsed(m6);
      } else if (maskNumber == 7) {
        setMaskUsed(m7);
      } else if (maskNumber == 8) {
        setMaskUsed(m8);
      } else if (maskNumber == 9) {
        setMaskUsed(m9);
      }
    }
  }, [maskNumber]);

  useEffect(() => {
    if (!manualHash) {
      setAutomatic(true);
      setSaltNumber(0);
    } else {
      setAutomatic(false);
    }
  }, [manualHash]);

  // const [totalTimeTaken, setTotalTimeTaken] = useState("");

  // useEffect(() => {
  //   if (timeStarted && timeEnded) {

  //     let exactStarting = timeStarted.split(" ")
  //   } else {
  //     setTotalTimeTaken("");
  //   }
  // }, [timeStarted, timeEnded]);

  const Banner = () => {
    return (
      <AdMobBanner
        bannerSize="mediumRectangle"
        adUnitID={productionID} // Test ID, Replace with your-admob-unit-id // productionID, testID
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={this.bannerError}
      />
    );
  };

  const Banner2 = () => {
    return (
      <AdMobBanner
        bannerSize="mediumRectangle"
        adUnitID={productionID} // Test ID, Replace with your-admob-unit-id // productionID, testID
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={this.bannerError}
      />
    );
  };

  ///////////////////////////////////////////
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
  // '"',
  // JSON.stringify("\n").slice(0, 1), =========== can't handle backslash
  const [attackMethod, setAttackMethod] = useState("");
  const [attackToggle, setAttackToggle] = useState(true);

  const [maskIncrement, setMaskIncrement] = useState(0);

  // useEffect(() => {
  //   if (maskIncrement > 0) {
  //     maskAttack(hash);
  //   }
  // }, [maskIncrement]);

  useEffect(() => {
    console.log("attack method changed", attackMethod);

    if (attackMethod === "bruteForce") {
      totalForce(hash);
    } else if (attackMethod === "mask") {
      // console.log("beginning m1");
      // setMaskIncrement(maskIncrement + 1);
      maskAttack(hash);
    }
    if (maskIncrement === 0) {
      setMaskIncrement(1);
    }
  }, [attackToggle]);

  ////////////////////////////////////////
  // for react-spring:
  // const AnimatedView = animated(View);
  ////////////////////////////////////////
  let counter;
  const cracks = [];
  const hashes = [];
  const [allAttempts, setAllAttempts] = useState([]);
  const [allHashes, setAllHashes] = useState([]);

  const [maskProtoState, setMaskProtoState] = useState("");
  const [maskStringState, setMaskStringState] = useState("");
  const [bruteStringState, setBruteStringState] = useState("");
  const [counterState, setCounterState] = useState(1);
  const [hashStringState, setHashStringState] = useState("");
  //
  // for display:
  const [counterDisplay, setCounterDisplay] = useState(0);
  const [attemptDisplay, setAttemptDisplay] = useState([]);
  const [counterDisplayBool, setCounterDisplayBool] = useState(false);
  const [attemptDisplayBool, setAttemptDisplayBool] = useState(false);

  //

  const [saltNumber, setSaltNumber] = useState(0);
  const [saltType, setSaltType] = useState("none");
  const [currentSalt, setCurrentSalt] = useState("");
  const [willSalt, setWillSalt] = useState(false);

  const [isOnPassword, setIsOnPassword] = useState(true);
  const [isOnHash, setIsOnHash] = useState(false);

  useEffect(() => {
    if (attemptDisplay.length > 100) {
      let difference = Number(attemptDisplay.length - 100);
      let newArr = [...attemptDisplay].splice(0, difference);
      setAttemptDisplay([...newArr]);
    }
  }, [attemptDisplay]);

  useEffect(() => {
    // make sure salts only run on manual hash mode.
    if (saltNumber == "0" || saltNumber == 0) {
      setWillSalt(false);
      setSaltType("none");
    } else if (saltNumber == "1" || saltNumber == 1) {
      setWillSalt(true);
      setSaltType("append");
    } else if (saltNumber == "2" || saltNumber == 2) {
      setWillSalt(true);
      setSaltType("prepend");
    }
  }, [saltNumber]);

  //

  // a more thorough brute force function:
  function totalForce(hashString, reset, counterIncrement) {
    // setVisible(true);
    setDecrypted("");
    // we start with a string containing only the character "a", the first character in our set.
    let i = allCharacters[0];
    // initiate the variable containing the hash we create from these strings:
    let crackHash = "";

    setCracked(false);
    setContinueCrack(true);
    setAllAttempts([]);
    setAllHashes([]);
    // a number to increment so that we can report the number of guesses to the user:
    counter = 1;
    // run the function until we create the matching hash, or the user stops the crack manually.
    let r = reset;
    let shouldQuit = false;
    while (crackHash !== hashString && !shouldQuit) {
      let traceBack = true;
      counter++;

      // ^^ might be unnecessary or might need to change number.
      // push the guesses to an array so we can show the user:
      // setCrackHistory([...crackHistory, i]);
      // create the hash:
      if (r) {
        i = bruteStringState;
        counter = counterIncrement;
        r = false;
      }

      let result = hashFunction(i);

      cracks.push(i);
      hashes.push(result);
      // save our hash:
      crackHash = result;
      // console.log(`guessed: ${i}, hash: ${result}, count: ${counter}`);
      if (result === hashString) {
        // if we have a match, then we're done.
        console.log(`password cracked! It took ${counter} guesses.`);
        setContinueCrack(false);
        setCracked(true);
        setGuessesNeeded(counter);
        setAllAttempts(cracks);
        setAllHashes(hashes);
        setVisible(false);
        const currentTime = new Date();
        let time = currentTime.toString();
        let eMilli = Date.now();
        setEndMilli(eMilli);
        setTimeEnded(time);
        setCounterDisplayBool(false);
        setAttemptDisplayBool(false);
        setDecrypted(i);
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
        shouldQuit = cacheTimeOut(counter);
        //
        // attempting to have program to stop and start crack on useEffect every 10000 or so hashes to prevent cache overflow.
        if (shouldQuit) {
          setHashStringState(hashString);
          setCounterState(counter);
          // setCounterDisplay(Number(counterDisplay + counter));
          setBruteStringState(i);
          console.log("reseting cache...");
        } else {
        }
        console.log(i);
      }
    }
  }

  const [automatic, setAutomatic] = useState(true);
  const [autoMask, setAutoMask] = useState([]);

  const genMask = (password) => {
    let mask = `?${password
      .replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g, "l")
      .replace(
        /\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\}|\[|\]|\:|\;|\'|\<|\>|\.|\?|\/|\|/g,
        "s"
      )
      .replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g, "u")
      .replace(/0|1|2|3|4|5|6|7|8|9/g, "d")
      .split("")
      .join("?")}`;

    console.log(`auto mask: ${mask}`);
    setAutoMask([mask.toString()]);

    return mask;
  };

  function cacheTimeOut(counter) {
    if (counter % 20000 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const [timeToCrack, setTimeToCrack] = useState("");

  const [space, setSpace] = useState(0);

  const [documentObj, setDocumentObj] = useState({});

  const [batchMode, setBatchMode] = useState(false);

  useEffect(() => {
    console.log(documentObj);
    if (documentObj["uri"]) {
      let params = {
        hashType,
        automatic,
        maskIndex,
        attackMethod: `${useBruteForce ? "bruteForce" : "mask"}`,
        salt: currentSalt,
        maskNumber,
        saltType,
        autoMask,
        manualHash,
        singleton:
          customMask && !customMaskError ? [`${customMaskFinal}`] : singleton,
        uid: userID,
        beginMilli,
        timeToCrack,
        ttcMilli: stateSpaceMilli,
        anonInt,
      };
      setIsModalVisible(true);
      setVisible(true);
      if (animation.current) {
        animation.current.play();
      }

      Parse.Cloud.run("initBatch", params)
        .then((response) => {
          console.log("batch:", response);
          return JSON.parse(JSON.stringify(response));
        })
        .then((json) => {
          console.log(json["itemID"]);
          console.log("batch useEffect", documentObj, documentObj.uri);
          if (documentObj.uri) {
            FileSystem.uploadAsync(
              `https://hack-my-server.herokuapp.com/batch/${userID}/${json["itemID"]}`,
              documentObj.uri,
              {
                headers: {
                  "Content-Type": "application/json",
                },
                httpMethod: "POST",
                uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                fieldName: "uri",
                parameters: { pathToObj: `${documentObj.name}`, params },
              }
            )
              .then((response) => {
                console.log("batch file uploaded:", response);

                setBatchMode(true);
                if (animation.current) {
                  animation.current.play();
                }

                setDocumentObj({});
                return JSON.parse(JSON.stringify(response));
              })
              .then((json) => {
                console.log(json);
              })
              .catch((error) => {
                console.log("error:");
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log("error:");
          console.log(error);
        });
    }
  }, [documentObj]);

  const [docPickSuccess, setDocPickSuccess] = useState(false);
  function getDocument() {
    setDocPickSuccess(false);
    console.log("getting document");
    let result = DocumentPicker.getDocumentAsync({}).then((result) => {
      console.log("initial promise", result, "type", typeof result);

      if (result["type"] == "success") {
        setDocPickSuccess(true);
      }
      setDocumentObj(result);
      console.log(result, result.uri);
    });
  }

  function stateSpace(input) {
    return Number(
      input[0]
        .split("?")
        .map((i) => {
          if (i == "d") {
            return 10;
          } else if (i == "l" || i == "u") {
            return 26;
          } else if (i == "s") {
            return 29;
          } else {
            return 1;
          }
        })
        .reduce((a, b) => a * b, 1)
    );
  }

  useEffect(() => {
    if (!manualHash && autoMask[0]) {
      let space = stateSpace(autoMask);
      console.log(space);
      setSpace(space);

      let secondsProjected = msToTime(space);
      setTimeToCrack(`${secondsProjected}`);
    } else {
      setTimeToCrack("");
    }
  }, [autoMask, manualHash]);

  const [noMatches, setNoMatches] = useState(false);
  const [savedIndex, setSavedIndex] = useState(0);

  const maskAttack = (hashString, reset, counterIncrement) => {
    console.log("mask attack started");
    // setVisible(true);
    setDecrypted("");
    let mask;
    let continueThisMask;
    if (automatic) {
      mask = autoMask;
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
    setContinueCrack(true);
    setAllAttempts([]); // arrays of everything done so far.
    setAllHashes([]);
    let counter = 0; // a number to increment so that we can report the number of guesses to the user:

    let r = reset;
    //
    let foundPassword = false;
    let i = 0;
    // if (r) {
    //   i = Number(savedIndex - 1);
    // }
    let shouldQuit;
    for (i; i < mask.length; i++) {
      if (crackHash !== hashString) {
        let line = mask[i];

        let maskProto = `${line}`.split("?").join("");
        let maskString = maskProto
          .replace(/d/g, "0")
          .replace(/u|H/g, "A")
          .replace(/l|h/g, "a")
          .replace(/s/g, "~"); // now we have the initial string for this given mask
        console.log(maskString);
        if (r) {
          maskString = maskStringState;
          r = false;
          counter = counterIncrement;
        }
        function recurseIterate() {
          let result = hashFunction(maskString);

          // ^^ may be unnecessary or might need to change number.
          continueThisMask = false; // here we decide if we're going to move on to the next mask or not once we're done
          crackHash = result;
          console.log(`${maskString}: ${result}`);
          if (result === hashString) {
            console.log(`password cracked! It took ${counter + 1} guesses.`);
            setContinueCrack(false);
            setCracked(true);
            setNoMatches(false);
            setGuessesNeeded(counter);
            setDecrypted(maskString);
            const currentTime = new Date();
            let time = currentTime.toString();
            let eMilli = Date.now();
            setEndMilli(eMilli);
            setTimeEnded(time);
            setVisible(false);
            setCounterDisplayBool(false);
            setAttemptDisplayBool(false);
            foundPassword = true;
            return crackHash;
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
            shouldQuit = cacheTimeOut(counter);
            //
            // attempting to have program to stop and start crack on useEffect every 10000 or so hashes to prevent cache overflow.
            if (shouldQuit) {
              setSavedIndex(i);
              setHashStringState(hashString);
              setMaskProtoState(maskProto);
              setCounterState(counter);
              // setCounterDisplay(Number(counterDisplay + counter));
              setMaskStringState(maskString);
              console.log("resetting cache...");
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
    if (!foundPassword && !shouldQuit) {
      const currentTime = new Date();
      let time = currentTime.toString();
      setTimeEnded(time);
      setNoMatches(true);
      setCracked(true);
      setVisible(false);
    }
  };

  const executeHash = async (password, method) => {
    console.log("execute hash started");
    setBatchMode(false);
    if (Number(saltNumber) > 0) {
      console.log(`Salt: ${currentSalt}, type: ${saltType}`);
    }
    setSavedIndex(0);
    setVisible(true);
    setFinalElapsed("");
    setBeginMilli(0);
    setEndMilli(0);
    setNoMatches(false);
    setCounterDisplayBool(false);
    setAttemptDisplayBool(false);
    setCounterDisplay(0);
    setAttemptDisplay([]);
    const currentTime = new Date();
    let bMilli = Date.now();
    let time = currentTime.toString();
    setBeginMilli(bMilli);
    setTimeStarted(time);
    setTimeEnded("");
    setGuessesNeeded(0);
    setContinueCrack(true);
    setUncrackable(false);
    setCracked(false);
    let res = zxcvbn(password);
    let strength = 0;
    let fastest = JSON.stringify(
      res.crack_times_display["offline_fast_hashing_1e10_per_second"]
    );
    let slowest = JSON.stringify(
      res.crack_times_display["online_throttling_100_per_hour"]
    );
    console.log(Object.keys(res));
    //
    console.log(fastest);
    console.log(slowest);
    setFastestCrack(fastest.split('"').join(""));
    setSlowestCrack(slowest.split('"').join(""));
    console.log(
      `password strength: ${res.score}. ${JSON.stringify(
        res.crack_times_display
      )}`
    );
    strength = res.score;
    setWordStrength(strength);
    // implement a strength bar based on this number, 0-4.
    if (strength == 0) {
      console.log("guesses < 10^3");
      setGuesses("< 10^3");
    } else if (strength == 1) {
      console.log("guesses < 10^6");
      setGuesses("< 10^6");
    } else if (strength == 2) {
      console.log(" < 10^8");
      setGuesses("< 10^8");
    } else if (strength == 3) {
      console.log("guesses < 10^10");
      setGuesses("< 10^10");
    } else if (strength == 4) {
      console.log(" > 10^10");
      setGuesses("> 10^10");
    }

    let hashString;
    if (!manualHash) {
      hashString = hashFunction(password);
      setHash(hashString);
    } else {
      hashString = password;
      setHash(password);
    }

    // setAttackMethod(method);
    // setAttackToggle(!attackToggle);

    parseServer(hashString, method, beginMilli, timeToCrack);
    console.log(attackMethod);
    console.log("attack method set", method);
    console.log(password, typeof password, typeof method);
    //////////////////////////////////////////////////
    // setAttackMethod(method);
    // setAttackToggle(!attackToggle);
    ///////////////////////////////////////////////////
  };

  const [hacksPending, setHacksPending] = useState([]);
  const [hacksLoaded, setHacksLoaded] = useState([]);
  const [serverObj, setServerObj] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    console.log(`userID: ${userID}`);
  }, [userID]);

  useEffect(() => {
    console.log(JSON.stringify(serverObj));
  }, [serverObj]);

  const parseServer = async (
    hashString,
    attackMethod,
    beginMilli,
    timeToCrack
  ) => {
    // userID will have to be stored in state.
    let params = {
      hashString,
      hashType,
      automatic,
      maskIndex,
      attackMethod,
      salt: currentSalt,
      maskNumber,
      saltType,
      autoMask,
      manualHash,
      singleton:
        customMask && !customMaskError ? [`${customMaskFinal}`] : singleton,
      uid: userID,
      beginMilli,
      timeToCrack,
      ttcMilli: stateSpaceMilli,
      anonInt,
    };
    console.log("about to parse server with these params:", params);
    Parse.Cloud.run("crack", params)
      .then((response) => {
        console.log("server responded to request for crack");
        console.log("initial response: ", response);
        let json = JSON.parse(JSON.stringify(response));
        return json;
      })
      .catch((error) => console.log(error));
    console.log("server parsed");
    let hackObject = params;
    // define the data shape.

    setHacksPending([...hacksPending, hackObject]);
    setLoadingScreen(true);
    setVisible(true);
    setIsModalVisible(true);
  };

  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////   ////////////////////////////////
  // SORTING:
  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////   ////////////////////////////////

  const [userEntries, setUserEntries] = useState([]);
  const [userEntriesProto, setUserEntriesProto] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  //
  const [sortByDate, setSortByDate] = useState(true);
  const [sortByType, setSortByType] = useState(false);
  const [sortByManual, setSortByManual] = useState(true);
  const [sortByCompleted, setSortByCompleted] = useState(false);
  //
  const [sortToggle, setSortToggle] = useState(true);

  const handleSortMethod = (method) => {
    if (method == "Type") {
      if (sortByType) {
        setSortToggle(!sortToggle);
      } else {
        setSortByType(true);
        setSortToggle(true);
      }
      setSortByCompleted(false);
      setSortByDate(false);
      setSortByManual(false);
    } else if (method == "Manual") {
      if (sortByManual) {
        setSortToggle(!sortToggle);
      } else {
        setSortByManual(true);
        setSortToggle(true);
      }
      setSortByCompleted(false);
      setSortByDate(false);
      setSortByType(false);
    } else if (method == "Finished") {
      if (sortByCompleted) {
        setSortToggle(!sortToggle);
      } else {
        setSortByCompleted(true);
        setSortToggle(true);
      }
      setSortByManual(false);
      setSortByDate(false);
      setSortByType(false);
    } else if (method == "Date") {
      if (sortByDate) {
        setSortToggle(!sortToggle);
      } else {
        setSortByDate(true);
        setSortToggle(true);
      }
      setSortByManual(false);
      setSortByCompleted(false);
      setSortByType(false);
    }
  };

  const defaultSort = () => {
    setSortToggle(true);
    setSortByDate(true);
    setSortByType(false);
    setSortByManual(false);
    setSortByCompleted(false);
  };

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
  function merge(arr1, arr2) {
    var result = [];

    while (arr1.length && arr2.length) {
      // If sorting by manual:

      if (sortByManual && sortToggle) {
        if (arr1[0].manualHash >= arr2[0].manualHash) {
          result.push(arr1.shift());
        } else {
          result.push(arr2.shift());
        }
      } else if (sortByManual && !sortToggle) {
        if (arr1[0].manualHash <= arr2[0].manualHash) {
          result.push(arr1.shift());
        } else {
          result.push(arr2.shift());
        }
      } else if (sortByType && sortToggle) {
        if (arr1[0].hashType <= arr2[0].hashType) {
          result.push(arr1.shift());
        } else {
          result.push(arr2.shift());
        }
      } else if (sortByType && !sortToggle) {
        if (arr1[0].hashType >= arr2[0].hashType) {
          result.push(arr1.shift());
        } else {
          result.push(arr2.shift());
        }
      } else if (sortByCompleted && sortToggle) {
        if (
          arr1[0].finished >= arr2[0].finished ||
          arr1[0].decrypted >= arr2[0].decrypted ||
          arr1[0].noMatches >= arr2[0].noMatches
        ) {
          result.push(arr1.shift());
        } else {
          result.push(arr2.shift());
        }
      } else if (sortByCompleted && !sortToggle) {
        if (
          arr1[0].finished <= arr2[0].finished ||
          arr1[0].decrypted <= arr2[0].decrypted ||
          arr1[0].noMatches <= arr2[0].noMatches
        ) {
          result.push(arr1.shift());
        } else {
          result.push(arr2.shift());
        }
      }
    }

    return result.concat(arr1, arr2);
  }

  useEffect(() => {
    if (sortByDate && sortToggle) {
      setUserEntries([...userEntriesProto]);
    } else if (sortByDate && !sortToggle) {
      setUserEntries([...userEntriesProto].reverse());
    } else {
      setUserEntries(mergeSort(userEntriesProto));
    }
  }, [sortByCompleted, sortByDate, sortByManual, sortByType, sortToggle]);
  // reverses the direction by which sorting is done.

  useEffect(() => {
    console.log(userEntries);
  }, [userEntries]);

  const [showEmailVerification, setShowEmailVerification] = useState(false);

  const [userObject, setUserObject] = useState({});

  const [errorSignIn, setErrorSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    console.log("userObject:", userObject);
    console.log("object id: ", userObject.objectId);

    console.log(userObject.ACL);
    setUserID(userObject.objectId);
  }, [userObject]);

  const createUser = () => {
    let params = {
      username: username,
      password: signInPassword,
      email: signInEmail,
    };

    Parse.Cloud.run("createUser", params)
      .then((response) => {
        console.log("sign in response:", response);
        return JSON.parse(JSON.stringify(response));
      })
      .then((json) => {
        if (json["code"]) {
          setErrorSignIn(true);
          setErrorMessage(json["message"]);
        } else {
          setUserObject(json);
          setErrorMessage("");
          setErrorSignIn(false);
        }
      });
    setShowEmailVerification(true);
  };

  const login = () => {
    console.log("beginning login");
    let params = {
      username: username,
      password: signInPassword,
      email: signInEmail,
    };

    Parse.Cloud.run("login", params)
      .then((response) => {
        console.log("sign in response:", response, typeof response);
        console.log(JSON.stringify(response));
        console.log(JSON.parse(JSON.stringify(response)));
        return JSON.parse(JSON.stringify(response));
      })
      .then((json) => {
        console.log("received json");
        if (json["code"]) {
          setErrorSignIn(true);
          setErrorMessage(json["message"]);
        } else {
          setUserObject(json);
          setErrorMessage("");
          setGotEntries(false);
        }
      })
      .catch((error) => {
        console.log("getting error from parse for login: ");
        console.log(error);
      });
  };

  const queryServer = async () => {
    const params = { uid: userID, anonInt: anonInt };

    Parse.Cloud.run("userEntries", params)
      .then((response) => {
        console.log(response);
        return JSON.parse(JSON.stringify(response));
      })
      .then((json) => {
        console.log(json);
        setUserEntries([...json].reverse());
        setUserEntriesProto([...json].reverse());
        setGotEntries(true);
        setSortToggle(true);
        setSortByDate(true);
        setSortByCompleted(false);
        setSortByManual(false);
        setSortByType(false);

        // setHacksLoaded([...hacksLoaded, json]);

        // let newArr = [...hacksPending];

        // remove this crack from pending now...
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (gotEntries) {
      setIsProgressVisible(false);
    }
  }, [gotEntries]);

  useEffect(() => {
    console.log(userEntries);
  }, [userEntries]);

  const stopBruteForce = () => {
    setContinueCrack(false);
  };
  //////
  function handleCrack(currentPassword) {
    if (useBruteForce) {
      executeHash(currentPassword, "bruteForce");
    } else {
      executeHash(currentPassword, "mask");
    }
  }
  ///////
  const loader = require("./3165-loader.json");
  const checkmark = require("./22303-check-mark.json");
  const progress = require("./117-progress-bar.json");
  // const progress = require("./117-progress-bar.json");
  // const progress = require("./lf30_editor_huieuian.json");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCheckVisible, setIsCheckVisible] = useState(false);
  const [isProgressVisible, setIsProgressVisible] = useState(false);
  function toggleVisible() {
    setIsModalVisible(!isModalVisible);
  }

  const animation = React.createRef();
  const animation2 = React.createRef();
  const animation3 = React.createRef();
  useEffect(() => {
    if (isModalVisible) {
      if (animation.current) {
        animation.current.play();
      }
    }
  }, [isModalVisible]);
  //

  useEffect(() => {
    if (isProgressVisible) {
      if (animation2.current) {
        animation2.current.play();
      }
    }
  }, [isProgressVisible]);
  //
  useEffect(() => {
    if (isCheckVisible) {
      if (animation3.current) {
        animation3.current.play();
      }
    }
  }, [isCheckVisible]);
  //
  // ========================
  // </lotties>
  // ========================

  const HackModal = () => {
    return (
      <View>
        <Modal
          isVisible={isModalVisible}
          style={{ marginBottom: "3%" }}
          onRequestClose={() => setIsModalVisible(false)}
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <View style={{ backgroundColor: "white", maxWidth: "100%" }}>
            <View>
              <Divider style={{ height: 10, backgroundColor: "white" }} />
              {cracked && guessesNeeded && !noMatches ? (
                <Text style={{ fontWeight: "bold" }}>
                  {`Cracked! ${Number(
                    guessesNeeded
                  )} attempts (${finalElapsed}).`}
                </Text>
              ) : (
                <View></View>
              )}
              {useBruteForce ? (
                <Text
                  style={{
                    marginBottom: "3%",
                    left: "3%",
                    position: "relative",
                  }}
                >
                  {
                    "Brute force attempts force quit after a few days to avoid infinite loops."
                  }
                </Text>
              ) : (
                <View></View>
              )}
              {fastestCrack ? (
                <Divider style={{ backgroundColor: "white", height: 8 }} />
              ) : (
                <View></View>
              )}
              {!cracked && fastestCrack && !batchMode ? (
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginLeft: "5%",
                      marginRight: "5%",
                      marginBottom: "3%",
                    }}
                  >
                    {`Cracking... ${
                      timeToCrack
                        ? `(~ ${timeToCrack})`
                        : `You'll be notified when we're done.`
                    }`}
                  </Text>
                  <Text
                    style={{ marginLeft: "5%", marginRight: "5%" }}
                  >{`You can now view this decryption attempt in your History.`}</Text>
                </View>
              ) : (
                <View></View>
              )}
              {batchMode ? (
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginLeft: "5%",
                      marginRight: "5%",
                      marginBottom: "3%",
                    }}
                  >
                    {`Your batch is being processed`}
                  </Text>
                  <Text
                    style={{ marginLeft: "5%", marginRight: "5%" }}
                  >{`You can now view this decryption attempt in your History.`}</Text>
                </View>
              ) : (
                <View></View>
              )}

              <View>
                {fastestCrack && !cracked && counterDisplayBool ? (
                  // <ActivityIndicator size="large" />
                  // <Pulse size={20} color="#00ff6b" />
                  <Text>{`Attempted ${counterDisplay} times and counting...`}</Text>
                ) : (
                  // <LottieView source={loader} progress={this.state.progress} />
                  <View></View>
                )}
              </View>
              <View>
                {fastestCrack && !cracked && attemptDisplayBool ? (
                  attemptDisplay.map((item) => {
                    return <Text>{`last guess: ${item}`}</Text>;
                  })
                ) : (
                  // <LottieView source={loader} progress={this.state.progress} />
                  <View></View>
                )}
              </View>
              {!cracked && fastestCrack ? (
                <Divider style={{ backgroundColor: "white", height: 30 }} />
              ) : (
                <View></View>
              )}
              {cracked && manualHash && !noMatches ? (
                <Text style={{ fontWeight: "bold", marginBottom: "3%" }}>
                  {`Your password was: ${decrypted}`}
                </Text>
              ) : (
                <View></View>
              )}
              {noMatches ? (
                <Text style={{ fontWeight: "bold", marginBottom: "3%" }}>
                  {`No matches found in this mask. Please try another.`}
                </Text>
              ) : (
                <View></View>
              )}

              <Divider style={{ height: 170, backgroundColor: "white" }} />
              <View style={styles.container}>
                {!batchMode ? (
                  <LottieAnimation
                    ref={animation}
                    source={loader}
                    loop={true}
                    speed={1}
                    style={styles.lottie}
                  />
                ) : (
                  <View></View>
                )}
              </View>
              <Button title="OK" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  //  <AnimatedLoader
  //                   style={{ position: "relative" }}
  //                   color="#00ff00"
  //                   visible={isModalVisible}
  //                   overlayColor="rgba(255,255,255, 0)"
  //                   source={loader}
  //                   animationStyle={styles.lottie}
  //                   speed={1}
  //                 />
  // const [progress, setProgress] = useState(new Animated.Value(0));

  // useEffect(() => {
  //   Animated.timing(progress, {
  //     toValue: 1,
  //     duration: 5000,
  //     easing: Easing.linear,
  //   }).start();
  // }, [visible]);

  const handleUpload = () => {
    if (willHideModal || userObject.hideModal) {
      getDocument();
    }
    setShowUploadModal(true);
  };

  const [home, setHome] = useState(true);
  const [info, setInfo] = useState(false);
  const [history, setHistory] = useState(false);
  /////
  /////
  //////
  const NavBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "#e1ecf0",
        }}
      >
        <View opacity={1}>
          {home ? (
            <TouchableOpacity
              style={styles.navOn}
              onPress={() => {
                setHome(true);
                setInfo(false);
                setHistory(false);
              }}
            >
              <Text style={{ color: "white" }}>Home</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
          {!home ? (
            <TouchableOpacity
              style={styles.nav}
              onPress={() => {
                setHome(true);
                setInfo(false);
                setHistory(false);
              }}
            >
              <Text style={{ color: "white" }}>Home</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
        <View opacity={1}>
          {history ? (
            <TouchableOpacity
              style={styles.navOn}
              onPress={() => {
                setHome(false);
                setInfo(false);
                setHistory(true);
              }}
            >
              <Text style={{ color: "white" }}>History</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
          {!history ? (
            <TouchableOpacity
              style={styles.nav}
              onPress={() => {
                setHome(false);
                setInfo(false);
                setHistory(true);
              }}
            >
              <Text style={{ color: "white" }}>History</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
        <View opacity={1}>
          {info ? (
            <TouchableOpacity
              style={styles.navOn}
              onPress={() => {
                setHome(false);
                setInfo(true);
                setHistory(false);
              }}
            >
              <Text style={{ color: "white" }}>Info</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
          {!info ? (
            <TouchableOpacity
              style={styles.nav}
              onPress={() => {
                setHome(false);
                setInfo(true);
                setHistory(false);
              }}
            >
              <Text style={{ color: "white" }}>Info</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    );
  };

  const [isOnUsername, setIsOnUsername] = useState(false);
  const [isOnSignInPassword, setIsOnSignInPassword] = useState(false);
  const [isOnSignInEmail, setIsOnSignInEmail] = useState(false);

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [showHistory, setShowHistory] = useState(false);

  function explicitHashFunction(input, saltType, hashType, salt) {
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

  const [gotEntries, setGotEntries] = useState(false);

  const [historyToggle, setHistoryToggle] = useState(true);

  useEffect(() => {
    if (showHistory) {
      queryServer();
    }
  }, [showHistory, historyToggle]);

  const RowDivider = () => {
    return (
      <Divider
        style={{
          height: 0.75,
          backgroundColor: "gray",
          width: "75%",
        }}
        opacity={0.5}
      />
    );
  };

  const [isSignInVisible, setIsSignInVisible] = useState(true);

  const SignInModal = () => {
    return (
      <View>
        <Modal
          isVisible={isSignInVisible}
          style={{ marginBottom: "3%", width: "80%", left: "5%" }}
          onRequestClose={() => setIsSignInVisible(false)}
        >
          <Divider
            style={{
              backgroundColor: "white",
              height: 150,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          />
          <View style={{ bottom: 105 }}>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: "5%",
                marginRight: "5%",
                marginBottom: "3%",
                bottom: 10,
              }}
            >{`Remember to sign in if you want to save your data.`}</Text>
            <Button
              onPress={() => {
                setIsSignInVisible(false);
              }}
              title="Got it"
            />
          </View>
        </Modal>
      </View>
    );
  };

  const [batch, setBatch] = useState([]);

  const [showBatchModal, setShowBatchModal] = useState(false);

  const BatchModal = () => {
    return (
      <View>
        <Modal
          isVisible={showBatchModal}
          style={{ marginBottom: "3%", width: "80%", left: "5%" }}
          onRequestClose={() => setShowBatchModal(false)}
        >
          <Divider
            style={{
              backgroundColor: "white",
              height: 600,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              top: 200,
            }}
          />
          <View style={{ bottom: 370, height: 500 }}>
            <ScrollView>
              {batch.map((item) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginBottom: "3%",
                        marginTop: "3%",
                        bottom: 10,
                      }}
                    >{`${item.password}: `}</Text>
                    <Text
                      style={{
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginBottom: "3%",
                        marginTop: "3%",
                        bottom: 10,
                      }}
                    >{`${item.hash}`}</Text>
                    <Divider
                      opacity={0.4}
                      style={{
                        backgroundColor: "black",
                        height: 1,
                        width: "80%",
                        left: "10%",
                        marginBottom: 10,
                      }}
                    />
                  </View>
                );
              })}
            </ScrollView>
            <Button
              onPress={() => {
                setShowBatchModal(false);
              }}
              title="OK"
            />
          </View>
        </Modal>
      </View>
    );
  };

  const [showUploadModal, setShowUploadModal] = useState(false);

  const [willHideModal, setWillHideModal] = useState(false);

  // const updateUserModal = () => {
  //   console.log("modality starting");
  //   if (!userObject.hideModal) {
  //     Parse.Cloud.run("modality", { userID })
  //       .then((response) => {
  //         console.log("updating modality:", response);
  //         return JSON.parse(JSON.stringify(response));
  //       })
  //       .then((json) => {
  //         console.log(json);
  //       })
  //       .catch((error) => {
  //         console.log("error updating modality:");
  //         console.log(error);
  //       });
  //   }
  // };

  const UploadModal = () => {
    return (
      <View>
        <Modal
          isVisible={showUploadModal}
          style={{ marginBottom: "3%", width: "90%", left: "0%" }}
          onRequestClose={() => setShowUploadModal(false)}
        >
          <Divider
            style={{
              backgroundColor: "white",
              height: 340,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              top: 130,
              justifyContent: "space-evenly",
            }}
          />
          <View style={{ bottom: 105 }}>
            <View
              elevation={10}
              style={{
                backgroundColor: "lightgray",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                // marginLeft: "%6",
                // marginRight: "%6",
                width: "84%",
                left: "8%",

                bottom: 90,
                // marginBottom: 1,
              }}
            >
              <Text
                style={{
                  width: "90%",
                  left: "5%",
                  marginBottom: 15,
                }}
              >{`If you have a lot of encrypted passwords that you'd like to crack all at once, a common practice is to make them into a .TXT file.`}</Text>
              <Text
                style={{
                  width: "90%",
                  left: "5%",
                  marginBottom: 15,
                }}
              >{`Just put each hash onto a new line of a .TXT, and you'll be able to upload it from right here.`}</Text>
              <Text
                style={{
                  width: "90%",
                  left: "5%",
                  marginBottom: 15,
                }}
              >{`Make sure to pick your settings first. `}</Text>
              <Text
                style={{
                  width: "90%",
                  left: "5%",
                  marginBottom: 15,
                }}
              >{`Then we'll start decrypting your hashes in bulk. 😊`}</Text>
              <Text
                style={{
                  width: "90%",
                  left: "5%",
                  marginBottom: 15,
                }}
              >
                {`Our current limit is `}
                <Text style={{ color: "blue" }}>{`500 passwords.`}</Text>
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
                bottom: 80,
              }}
            >
              <View style={{ width: "40%" }}>
                <Button
                  onPress={() => {
                    setShowUploadModal(false);
                    setWillHideModal(true);
                    // updateUserModal();
                    getDocument();
                  }}
                  title="Select"
                />
              </View>

              <View style={{ width: "40%" }}>
                <Button
                  color="red"
                  onPress={() => {
                    setShowUploadModal(false);
                  }}
                  title="Exit"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const [createAccount, setCreateAccount] = useState(false);

  const toggleCreate = () => {
    setCreateAccount(!createAccount);
  };

  /////////////////////////////////////////////////////
  ///////
  ///////
  //
  //
  ///////
  /////
  //////
  //////
  /////
  ///
  ///
  ///
  /////////////////////////////////////////////////////
  ///////
  ///////
  //
  //
  ///////
  /////
  //////
  //////
  /////
  ///
  ///
  ///
  /////////////////////////////////////////////////////
  ///////
  ///////
  //
  //
  ///////
  /////
  //////
  //////
  /////
  ///
  ///
  ///
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-around",
        flex: 1,
      }}
    >
      {home ? (
        <PaperProvider style={{}}>
          <View style={{ backgroundColor: "white", maxWidth: "100%" }}>
            <Divider style={{ height: 60, backgroundColor: "white" }} />

            {!userObject.objectId ? (
              <TextInput
                id="textInput"
                style={{ height: 40, borderColor: "white", borderWidth: 1 }}
                onChangeText={(text) => {
                  setCurrentPassword(text);
                }}
                value={currentPassword}
                placeholder="Password"
                mode="outlined"
                // editable
              />
            ) : (
              <View style={{ flexDirection: "row", width: "100%" }}>
                <TextInput
                  id="textInput"
                  style={{
                    height: 40,
                    borderColor: "white",
                    borderWidth: 1,
                    width: "79%",
                  }}
                  onChangeText={(text) => {
                    setCurrentPassword(text);
                  }}
                  value={currentPassword}
                  placeholder="Password"
                  mode="outlined"
                  // editable
                />
                <View style={{ width: "20%", top: 8 }}>
                  <Button
                    color="purple"
                    style={{ width: "90%", fontWeight: "bold" }}
                    onPress={() => {
                      handleUpload();
                    }}
                    title="Upload"
                    disabled={!manualHash}
                  />
                </View>
              </View>
            )}

            {hash ? (
              <Text style={{ fontWeight: "bold" }}>{`Your hash:`}</Text>
            ) : (
              <View></View>
            )}
            {hash ? (
              <Text style={{ fontStyle: "italic" }}>
                {hash ? `${hash}` : "none"}
              </Text>
            ) : (
              <View></View>
            )}

            <Divider style={{ backgroundColor: "white", height: 8 }} />
            {!fastestCrack ? (
              <View style={{ width: "84%", left: "7.5%", marginBottom: "5%" }}>
                <Text style={{ right: 3 }}>{"Strength:"}</Text>
                <ProgressBar
                  style={styles.strength}
                  progress={0.25 * wordStrength}
                  color={Colors.blue800}
                />
              </View>
            ) : (
              <View></View>
            )}
            {isSignInVisible ? <SignInModal /> : <View></View>}
            {!willHideModal && !userObject.hideModal && showUploadModal ? (
              <UploadModal />
            ) : (
              <View></View>
            )}
            {isModalVisible ? <HackModal /> : <View></View>}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
              elevation={1}
            >
              <Picker
                selectedValue={hashTypeNumber}
                style={{
                  height: 50,
                  width: 150,
                }}
                onValueChange={(itemValue) => setHashTypeNumber(itemValue)}
              >
                <Picker.Item label="SHA-256" value="0" />
                <Picker.Item label="SHA-384" value="1" />
                <Picker.Item label="SHA-512" value="2" />
              </Picker>
              <View
                elevation={1}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // left: `${cracked ? "25%" : "37%"}`,
                  maxWidth: "100%",
                  marginTop: "3%",
                  right: "3%",
                }}
              >
                <Text
                  style={{
                    marginRight: "12%",
                    position: "relative",
                    right: "7%",
                    marginTop: "1%",
                  }}
                >
                  {"Enter Hash Directly:"}
                </Text>
                <View style={{ flex: 1 }}>
                  <Switch
                    style={{ right: "42%", left: "10%" }}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={manualHash ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={manualHash}
                  />
                </View>
              </View>
            </View>
            {!customMaskError ? (
              <Divider
                elevation={0}
                style={{ height: 57, backgroundColor: "white" }}
              />
            ) : (
              <Divider
                elevation={0}
                style={{ height: 37, backgroundColor: "white" }}
              />
            )}
            {customMaskError || tooLong || showCharWarning ? (
              <View
                elevation={10}
                style={{
                  backgroundColor: "lightgray",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  // marginLeft: "%6",
                  // marginRight: "%6",
                  width: "85%",
                  left: "6%",

                  bottom: 45,
                  marginBottom: 1,
                }}
              >
                {customMaskError && !tooLong && !showCharWarning ? (
                  <Text
                    style={{
                      width: "90%",
                      left: "5%",
                    }}
                  >{`Custom mask can only use: "u", "l", "d", "s", and "a".`}</Text>
                ) : (
                  <View></View>
                )}
                {tooLong && !showCharWarning ? (
                  <Text
                    style={{
                      width: "90%",
                      left: "5%",
                    }}
                  >{`Max password length: 12`}</Text>
                ) : (
                  <View></View>
                )}
                {showCharWarning ? (
                  <Text
                    style={{
                      width: "90%",
                      left: "5%",
                    }}
                  >{`No backticks, backslashes, or double quotes.`}</Text>
                ) : (
                  <View></View>
                )}
              </View>
            ) : (
              <View></View>
            )}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                bottom: 40,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-evenly",
                  left: "7%",
                }}
              >
                {manualHash ? (
                  <Picker
                    selectedValue={maskNumber}
                    style={{
                      height: 50,
                      width: 150,
                    }}
                    onValueChange={(itemValue) => setMaskNumber(itemValue)}
                  >
                    <Picker.Item label="Mask Set 1" value="1" />
                    <Picker.Item label="Mask Set 2" value="2" />
                    <Picker.Item label="Mask Set 3" value="3" />
                    <Picker.Item label="Mask Set 4" value="4" />
                    <Picker.Item label="Mask Set 5" value="5" />
                    <Picker.Item label="Mask Set 6" value="6" />
                    <Picker.Item label="Mask Set 7" value="7" />
                    <Picker.Item label="Mask Set 8" value="8" />
                    <Picker.Item label="Mask Set 9" value="9" />
                    <Picker.Item label="Brute Force" value="10" />
                    <Picker.Item label="Custom" value="11" />
                  </Picker>
                ) : (
                  <View
                    style={{
                      backgroundColor: `${
                        currentPassword !== "" ? "lightgray" : "white"
                      }`,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      // marginLeft: "%6",
                      // marginRight: "%6",
                      width: "85%",
                      left: "5%",
                      bottom: 25,
                      height: 20,
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: "2%",
                        width: "90%",
                        marginRight: "30%",
                        position: "relative",
                        color: `${currentPassword !== "" ? "black" : "white"}`,
                      }}
                    >
                      {autoMask}
                    </Text>
                  </View>
                )}
                {!manualHash ? (
                  <Divider
                    elevation={0}
                    style={{ backgroundColor: "white", height: 101 }}
                  />
                ) : (
                  <View></View>
                )}

                {!useBruteForce && manualHash && !customMask ? (
                  <Picker
                    selectedValue={maskIndex}
                    style={{
                      height: 50,
                      width: 150,
                      left: "4%",
                      // color: `${manualHash ? "black" : "white"}`,
                      // left: `${manualHash ? "initial" : "400%"}`,
                    }}
                    onValueChange={(itemValue) => setMaskIndex(itemValue)}
                  >
                    {maskUsed.map((mask, index) => {
                      return (
                        <Picker.Item label={`${mask}`} value={`${index}`} />
                      );
                    })}
                  </Picker>
                ) : (
                  <View></View>
                )}
                {customMask && !useBruteForce && manualHash ? (
                  <View>
                    <TextInput
                      id="customInput"
                      style={{
                        height: 40,
                        borderColor: "gray",
                        borderWidth: 1,
                        width: 150,
                        right: "15%",
                        top: "7%",
                        // position: "relative",
                      }}
                      onChangeText={(text) => {
                        setCustomMaskString(text);
                      }}
                      value={customMaskString}
                      placeholder="Enter Mask..."
                      mode="flat"
                    />
                  </View>
                ) : (
                  <View></View>
                )}
              </View>
              {manualHash ? (
                <Divider
                  style={{
                    backgroundColor: "gray",
                    height: 1,
                    maxWidth: "80%",
                    marginLeft: "10%",
                  }}
                />
              ) : (
                <View></View>
              )}
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                {manualHash ? (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Picker
                      selectedValue={saltNumber}
                      style={{
                        height: 50,
                        width: 150,
                      }}
                      onValueChange={(itemValue) => setSaltNumber(itemValue)}
                    >
                      <Picker.Item label="No Salt" value="0" />
                      <Picker.Item label="Append Salt" value="1" />
                      <Picker.Item label="Prepend Salt" value="2" />
                    </Picker>
                  </View>
                ) : (
                  <View></View>
                )}
                {manualHash ? (
                  <TextInput
                    id="saltInput"
                    style={{
                      height: 40,
                      borderColor: "gray",
                      borderWidth: 1,
                      width: 150,
                    }}
                    onChangeText={(text) => {
                      setCurrentSalt(text);
                    }}
                    value={currentSalt}
                    placeholder="Salt"
                    mode="flat"
                    disabled={!willSalt}
                  />
                ) : (
                  <View></View>
                )}
              </View>
              <Divider style={{ backgroundColor: "white", height: 10 }} />
              <Button
                style={{ width: "90%", fontWeight: "bold" }}
                onPress={() => {
                  setAllAttempts([]);
                  handleCrack(currentPassword);
                }}
                title="Crack Password"
                disabled={customMaskError || tooLong || showCharWarning}
              />
            </View>
            <ScrollView style={{ width: "80%", marginLeft: "10%" }}>
              {showMaskList ? (
                <View>
                  <Text>{"d = digit;"}</Text>
                  <Text>{"l = lowercase;"}</Text>
                  <Text>{"u = uppercase;"}</Text>
                  <Text>{"s = symbol"}</Text>
                </View>
              ) : (
                <View></View>
              )}
              <Divider style={{ backgroundColor: "white", height: 5 }} />
              {showMaskList ? (
                <View>
                  <Text>
                    {
                      "Example: ?l?l?l?l?d?d?d = lowercase-lowercase-lowercase-lowercase-digit-digit-digit"
                    }
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
              <Divider />
              <DataTable>
                {showMaskList ? (
                  maskUsed.map((mask) => {
                    return (
                      <DataTable.Row>
                        <DataTable.Cell>
                          <Text>{mask ? `${mask}` : "none"}</Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    );
                  })
                ) : (
                  <View></View>
                )}
              </DataTable>
            </ScrollView>
            <View style={{ width: "90%", left: "11%" }}>
              <Banner />
            </View>
          </View>
        </PaperProvider>
      ) : (
        <View></View>
      )}

      {history ? (
        <PaperProvider>
          <View>
            {!userObject.objectId ? (
              <View>
                <Divider style={{ height: 60, backgroundColor: "white" }} />
                <View
                  style={{ display: "flex", flexDirection: "row", left: "50%" }}
                >
                  <Text
                    style={{ color: `${!createAccount ? "blue" : "black"}` }}
                  >
                    Sign In
                  </Text>
                  <Switch
                    style={{ bottom: 2, marginLeft: 4, marginRight: 0 }}
                    trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleCreate}
                    value={createAccount}
                  />
                  <Text
                    style={{ color: `${createAccount ? "blue" : "black"}` }}
                  >
                    Create Account
                  </Text>
                </View>
                <TextInput
                  id="username"
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={(text) => {
                    setUsername(text);
                  }}
                  value={username}
                  placeholder="Username"
                  mode="outlined"
                />
                <TextInput
                  id="signInEmail"
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={(text) => {
                    setSignInEmail(text);
                  }}
                  value={signInEmail}
                  placeholder="Email"
                  mode="outlined"
                />
                <TextInput
                  id="signInPassword"
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={(text) => {
                    setSignInPassword(text);
                  }}
                  value={signInPassword}
                  placeholder="Password"
                  mode="outlined"
                />
                {errorSignIn ? (
                  <View
                    elevation={99}
                    opacity={0.5}
                    style={{
                      backgroundColor: "red",
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      // marginLeft: "%6",
                      // marginRight: "%6",
                      width: "80%",
                      left: "10%",
                      bottom: "2.5%",
                      top: 30,
                    }}
                  >
                    <Text
                      opacity={1}
                      style={{
                        width: "90%",
                        left: "5%",
                      }}
                    >{`${errorMessage}`}</Text>
                  </View>
                ) : (
                  <View></View>
                )}
                {!errorSignIn ? (
                  <Divider style={{ height: 40, backgroundColor: "white" }} />
                ) : (
                  <View></View>
                )}
                {errorSignIn ? (
                  <Divider style={{ height: 20, backgroundColor: "white" }} />
                ) : (
                  <View></View>
                )}
                <Divider style={{ height: 30, backgroundColor: "white" }} />
                {!createAccount ? (
                  <View>
                    <Button
                      style={{ width: "90%" }}
                      title="Sign In"
                      onPress={() => login()}
                    />
                  </View>
                ) : (
                  <View>
                    <Button
                      style={{ width: "90%" }}
                      title="Create Account"
                      onPress={() => createUser()}
                    />
                  </View>
                )}

                <Divider style={{ height: 10, backgroundColor: "white" }} />
              </View>
            ) : (
              <View>
                <Divider style={{ height: 60, backgroundColor: "white" }} />
                <Text
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    fontWeight: "bold",
                    display: "flex",
                    marginTop: "5%",
                    marginBottom: "5%",
                    fontSize: 18,
                    textAlign: "center",
                  }}
                >{`${userObject.username}: ${userObject.email}`}</Text>
                <Divider style={{ height: 2, backgroundColor: "black" }} />
              </View>
            )}
            <Button
              style={{ width: "90%" }}
              title={showHistory ? "Refresh History" : "Show History"}
              onPress={() => {
                setIsProgressVisible(true);
                setShowHistory(true);
                setHistoryToggle(!historyToggle);
                // defaultSort();
              }}
            />
            {!showHistory ? (
              <View style={{ width: "90%", left: "11%", top: 30 }}>
                <Banner2 />
              </View>
            ) : (
              <View></View>
            )}
            {showBatchModal ? <BatchModal /> : <View></View>}
            {showHistory && !gotEntries ? (
              <View elevation={99}>
                <Divider style={{ height: 100, backgroundColor: "white" }} />
                <View style={styles.container2}>
                  <LottieAnimation
                    ref={animation2}
                    source={progress}
                    loop={true}
                    speed={2.2}
                    style={styles.lottie2}
                  />
                </View>
              </View>
            ) : (
              <View></View>
            )}
            {showHistory && userEntries.length == 0 && gotEntries ? (
              <View>
                <Divider style={{ height: 10, backgroundColor: "white" }} />
                <Text style={{ textAlign: "center" }}>
                  You haven't cracked anything yet.
                </Text>
                <Divider style={{ height: 10, backgroundColor: "white" }} />
              </View>
            ) : (
              <View></View>
            )}
            {showHistory && userEntries.length > 0 ? (
              <View
                elevation={20}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  top: 10,
                  marginBottom: 11,
                }}
              >
                <View
                  style={{
                    width: "23%",
                    backgroundColor: "blue",
                    color: "blue",
                  }}
                >
                  {sortByDate && sortToggle ? (
                    <Button
                      color="purple"
                      title="Date ▼"
                      onPress={() => {
                        handleSortMethod("Date");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {sortByDate && !sortToggle ? (
                    <Button
                      color="purple"
                      title="Date ▲"
                      onPress={() => {
                        handleSortMethod("Date");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {!sortByDate ? (
                    <Button
                      color="purple"
                      title="Date"
                      onPress={() => {
                        handleSortMethod("Date");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
                <View style={{ width: "23%", backgroundColor: "blue" }}>
                  {sortByType && sortToggle ? (
                    <Button
                      color="purple"
                      title="Type ▼"
                      onPress={() => {
                        handleSortMethod("Type");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {sortByType && !sortToggle ? (
                    <Button
                      color="purple"
                      title="Type ▲"
                      onPress={() => {
                        handleSortMethod("Type");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {!sortByType ? (
                    <Button
                      color="purple"
                      title="Type"
                      onPress={() => {
                        handleSortMethod("Type");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
                <View style={{ width: "23%", backgroundColor: "blue" }}>
                  {sortByManual && sortToggle ? (
                    <Button
                      color="purple"
                      title="Manual ▼"
                      onPress={() => {
                        handleSortMethod("Manual");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {sortByManual && !sortToggle ? (
                    <Button
                      color="purple"
                      title="Manual ▲"
                      onPress={() => {
                        handleSortMethod("Manual");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {!sortByManual ? (
                    <Button
                      color="purple"
                      title="Manual"
                      onPress={() => {
                        handleSortMethod("Manual");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
                <View style={{ width: "23%", backgroundColor: "blue" }}>
                  {sortByCompleted && sortToggle ? (
                    <Button
                      color="purple"
                      title="Finished ▼"
                      onPress={() => {
                        handleSortMethod("Finished");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {sortByCompleted && !sortToggle ? (
                    <Button
                      color="purple"
                      title="Finished ▲"
                      onPress={() => {
                        handleSortMethod("Finished");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                  {!sortByCompleted ? (
                    <Button
                      color="purple"
                      title="Finished"
                      onPress={() => {
                        handleSortMethod("Finished");
                      }}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
              </View>
            ) : (
              <View></View>
            )}
            {showHistory && userEntries.length > 0 ? (
              <ScrollView style={{ marginBottom: "50%" }}>
                {userEntries.map((entry) => {
                  let showSampleAttempts = false;
                  return (
                    <View
                      style={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: "lightgray",
                        marginLeft: "1%",
                        marginRight: "1%",
                      }}
                    >
                      <Divider
                        style={{ height: 10, backgroundColor: "white" }}
                      />
                      {!entry.noMatches &&
                      entry.decrypted &&
                      entry.decrypted.length == 1 ? (
                        <View
                          style={{
                            marginBottom: "1%",
                          }}
                        >
                          <Text>
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "blue",
                                textAlign: "center",
                                marginBottom: "6%",
                              }}
                            >{`${
                              entry.hash && entry.hash.length == 1
                                ? "Password: "
                                : "1 Password Found: "
                            } `}</Text>

                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                textAlign: "center",
                                marginBottom: "6%",
                              }}
                            >
                              {`${entry.decrypted[0].password}`}
                            </Text>
                          </Text>
                        </View>
                      ) : (
                        <View></View>
                      )}
                      {entry.decrypted && entry.decrypted.length > 1 ? (
                        <View
                          style={{
                            marginBottom: "1%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text>
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "blue",
                                textAlign: "center",
                                marginBottom: "6%",
                                marginTop: "40%",
                              }}
                            >{`Batch ${
                              entry.finalElapsed ? "Complete" : "Working..."
                            }`}</Text>
                          </Text>
                          <View style={{ width: "30%" }}>
                            <Button
                              title="Show All"
                              onPress={() => {
                                setShowBatchModal(true);
                                setBatch(entry.decrypted);
                              }}
                            />
                          </View>
                        </View>
                      ) : (
                        <View></View>
                      )}
                      {!entry.finalElapsed &&
                      entry.decrypted &&
                      entry.decrypted.length < 1 ? (
                        <View
                          style={{
                            marginBottom: "1%",
                          }}
                        >
                          <Text>
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "blue",
                                textAlign: "center",
                                marginBottom: "6%",
                              }}
                            >{`Cracking... `}</Text>
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "black",
                                textAlign: "center",
                                marginBottom: "6%",
                              }}
                            >
                              {entry.currentAttempt
                                ? `last attempt was: ${entry.currentAttempt}`
                                : ""}
                            </Text>
                          </Text>
                        </View>
                      ) : (
                        <View></View>
                      )}
                      {entry.noMatches ? (
                        <View
                          style={{
                            marginBottom: "2%",
                          }}
                        >
                          <Text>
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "blue",
                                textAlign: "center",
                                marginBottom: "6%",
                              }}
                            >{`No Matches Found`}</Text>
                          </Text>
                        </View>
                      ) : (
                        <View></View>
                      )}

                      {entry.hash && entry.hash.length === 1 ? (
                        <Text style={{ marginBottom: "3%" }}>
                          <Text style={{ fontWeight: "bold" }}>{`Hash: `}</Text>
                          {`${entry.hash}`}
                        </Text>
                      ) : (
                        <View></View>
                      )}

                      <RowDivider />
                      <View
                        style={{
                          // justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                      >
                        <Text>
                          <Text style={{ fontWeight: "bold" }}>{`Type: `}</Text>
                          {`${entry.hashType}`}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            // marginLeft: 20,
                            // left: "30%",
                            position: "relative",
                          }}
                        >{`${entry.manualHash ? "  -  Manual" : ""}`}</Text>
                      </View>
                      <RowDivider />
                      <Text>
                        <Text
                          style={{ fontWeight: "bold" }}
                        >{`Attack method: `}</Text>
                        {`${entry.attackMethod}`}
                      </Text>
                      {entry.automatic ? (
                        <View>
                          <Text>
                            <Text
                              style={{ fontWeight: "bold" }}
                            >{`Mask Used: `}</Text>
                            {`${entry.autoMask[0]}`}
                          </Text>
                          <RowDivider />
                        </View>
                      ) : (
                        <View></View>
                      )}
                      {entry.singleton[0] ? (
                        <View>
                          <Text>
                            <Text
                              style={{ fontWeight: "bold" }}
                            >{`Mask Used: `}</Text>
                            {`${entry.singleton[0]}`}
                          </Text>
                          <RowDivider />
                        </View>
                      ) : (
                        <View></View>
                      )}
                      {entry.salt ? (
                        <View>
                          <Text>
                            <Text
                              style={{ fontWeight: "bold" }}
                            >{`Salt: `}</Text>
                            {`${entry.saltType} ${entry.salt}`}
                          </Text>
                          <RowDivider />
                        </View>
                      ) : (
                        <View></View>
                      )}
                      <Text>
                        <Text
                          style={{ fontWeight: "bold" }}
                        >{`Created: `}</Text>
                        {`${new Date(entry.beginMilli)}`}
                      </Text>
                      <RowDivider />
                      {entry.finalElapsed ? (
                        <View>
                          <Text>
                            <Text
                              style={{ fontWeight: "bold" }}
                            >{`Finished: `}</Text>
                            {`${entry.timeEnded}`}
                          </Text>
                          <RowDivider />
                          <Text>
                            <Text
                              style={{ fontWeight: "bold" }}
                            >{`Elapsed Time: `}</Text>
                            {`${entry.finalElapsed}`}
                          </Text>
                          <RowDivider />
                          <Text>
                            <Text
                              style={{ fontWeight: "bold" }}
                            >{`Total Attempts: `}</Text>
                            {`${entry.totalAttempts}`}
                          </Text>
                          <RowDivider />
                          {entry.allAttempts.length > 0 ? (
                            <Button
                              style={{ width: "90%" }}
                              title={
                                showSampleAttempts
                                  ? "Show Samples"
                                  : "Hide Samples"
                              }
                              onPress={() => {
                                if (showSampleAttempts) {
                                  showSampleAttempts = false;
                                } else {
                                  showSampleAttempts = true;
                                }
                              }}
                            />
                          ) : (
                            <View></View>
                          )}
                          {entry.allAttempts.length > 0 &&
                          showSampleAttempts ? (
                            <View
                              style={{
                                maxHeight: "25%",
                                display: "flex",
                                maxWidth: "90%",
                                position: "relative",
                                marginLeft: "5%",
                                marginTop: "-3%",
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                // marginRight: "50%",
                                marginBottom: "3%",
                                backgroundColor: "lightgray",
                              }}
                            >
                              <ScrollView
                                style={{
                                  flexGrow: 0,
                                  maxWidth: "90%",
                                  marginLeft: "5%",
                                  fontSize: 12,
                                }}
                              >
                                {entry.allAttempts.map((attempt) => {
                                  return (
                                    <Text
                                      style={{
                                        marginBottom: "3%",
                                        fontSize: 12,
                                      }}
                                    >
                                      <Text
                                        style={{ fontWeight: "bold" }}
                                      >{`${attempt}`}</Text>
                                      {`: ${explicitHashFunction(
                                        attempt,
                                        entry.saltType,
                                        entry.hashType,
                                        entry.salt
                                      )}`}
                                    </Text>
                                  );
                                })}
                                <Text style={{ fontSize: 12 }}>
                                  <Text
                                    style={{
                                      fontWeight: "bold",
                                      fontStyle: "italic",
                                    }}
                                  >{`${decrypted}`}</Text>
                                  {`: ${hashStringState}`}
                                </Text>
                              </ScrollView>
                            </View>
                          ) : (
                            <View></View>
                          )}
                        </View>
                      ) : (
                        <View>
                          <RowDivider />
                          <Text>
                            <Text
                              style={{ fontWeight: "bold" }}
                            >{`Elapsed Time: `}</Text>
                            {`${msToTime(
                              Number(Date.now()) - entry.beginMilli
                            )}`}
                          </Text>
                          <RowDivider />
                          {(entry.hash && entry.hash.length == 1) ||
                          !entry.manualHash ? (
                            <Text>
                              <Text
                                style={{ fontWeight: "bold" }}
                              >{`~ Time Remaining: `}</Text>
                              {`${msToTime(
                                Number(
                                  entry.timeToCrackMilli -
                                    (Number(Date.now()) - entry.beginMilli)
                                )
                              )}`}
                            </Text>
                          ) : (
                            <View></View>
                          )}
                        </View>
                      )}

                      <Divider
                        style={{ height: 10, backgroundColor: "white" }}
                      />
                      <Divider
                        style={{ height: 1, backgroundColor: "black" }}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            ) : (
              <View></View>
            )}
          </View>
        </PaperProvider>
      ) : (
        <View></View>
      )}

      {info ? (
        <PaperProvider>
          <ScrollView style={{ marginBottom: "0%", flex: 1, top: 40 }}>
            <List.Section title="About Password Cracking">
              <List.Accordion
                titleStyle={{ fontWeight: "bold" }}
                title="Hash Function"
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={require("./assets/hashtag-svgrepo-com.png")}
                  />
                )}
              >
                <List.Item
                  title="A password is never stored 'as is' in a database. First, an algorithm will turn it into a fixed-length string of random characters."
                  descriptionNumberOfLines={10}
                  titleNumberOfLines={10}
                ></List.Item>
                <List.Item
                  title="Learn more about hashes."
                  titleStyle={{ color: "blue" }}
                  descriptionNumberOfLines={10}
                  titleNumberOfLines={10}
                  onPress={() =>
                    Linking.openURL(
                      "https://en.wikipedia.org/wiki/Cryptographic_hash_function"
                    )
                  }
                ></List.Item>
              </List.Accordion>
              <List.Accordion
                titleStyle={{ fontWeight: "bold" }}
                title="Mask Attack"
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={require("./assets/Guy_Fawkes_mask.png")}
                  />
                )}
              >
                <List.Item
                  title="This app has ~300 masks (password formulas). They were created by studying the Rock You password list, the largest password leak in history."
                  descriptionNumberOfLines={15}
                  titleNumberOfLines={15}
                ></List.Item>
                <List.Item
                  title="Learn more about mask attacks."
                  titleStyle={{ color: "blue" }}
                  descriptionNumberOfLines={15}
                  titleNumberOfLines={15}
                  onPress={() => {
                    Linking.openURL(
                      "https://hashcat.net/wiki/doku.php?id=mask_attack"
                    );
                  }}
                ></List.Item>
              </List.Accordion>
              <List.Accordion
                title="Safety"
                titleStyle={{ fontWeight: "bold" }}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={require("./assets/shield1970470.png")}
                  />
                )}
              >
                <List.Item
                  title="Keep your passwords long, and never reuse passwords. As this app demonstrates, cracking your password is easy if its short and simple."
                  descriptionNumberOfLines={15}
                  titleNumberOfLines={15}
                ></List.Item>
                <List.Item
                  title="Learn more about password safety."
                  titleStyle={{ color: "blue" }}
                  descriptionNumberOfLines={15}
                  titleNumberOfLines={15}
                  onPress={() => {
                    Linking.openURL(
                      "https://www.techsafety.org/passwordincreasesecurity"
                    );
                  }}
                ></List.Item>
              </List.Accordion>
            </List.Section>
            <View
              elevation={20}
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 125,
                marginBottom: 60,
              }}
            >
              <TouchableOpacity
                onTouchEnd={() =>
                  Linking.openURL("https://www.buymeacoffee.com/jessecoyote")
                }
              >
                <View style={{ flexDirection: "row" }}>
                  <Avatar.Image
                    elevation={20}
                    size={120}
                    source={require("./assets/developer.png")}
                    onTouchEnd={() =>
                      Linking.openURL(
                        "https://www.buymeacoffee.com/jessecoyote"
                      )
                    }
                  />
                  <Text
                    style={{
                      color: "blue",
                      position: "relative",
                      top: 45,
                      left: 40,
                      fontWeight: "bold",
                      fontSize: 17,
                    }}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.buymeacoffee.com/jessecoyote"
                      )
                    }
                  >
                    {"Buy Me a Coffee"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </PaperProvider>
      ) : (
        <View></View>
      )}
      <NavBar
        elevation={10}
        style={{
          alignItems: "center",
          backgroundColor: "#d3d9db",
        }}
      />
    </View>
  );
};

export default App;
