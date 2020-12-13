function mask300() {
  const arr = [
    "?d",
    "?d?d",
    "?l",
    "?d?d?d?d",
    "?d?d?d?d?d?d",
    "?d?d?d?d?d",
    "?l?l",
    "?d?d?d",
    "?u",
    "?s",
    "?l?l?l",
    "?u?u",
    "?l?d",
    "?d?d?d?d?d?d?d",
    "?u?d",
    "?l?l?l?l",
    "?l?l?d?d?d?d",
    "?u?u?u",
    "?l?l?d",
    "?u?l",
    "?l?d?d?d?d",
    "?l?l?l?l?l",
    "?l?l?l?d?d",
    "?l?d?d",
    "?d?d?d?d?l",
    "?l?d?d?d?d?d",
    "?l?l?d?d",
    "?s?d",
    "?l?l?l?d?d?d",
    "?l?l?l?l?d?d",
    "?s?s",
    "?d?d?d?d?l?l",
    "?l?l?d?d?d",
    "?d?d?d?d?d?l",
    "?d?d?d?d?d?d?d?d",
    "?d?l",
    "?u?l?l",
    "?l?s",
    "?l?l?l?l?d",
    "?l?l?l?d",
    "?l?d?d?d",
    "?l?d?l",
    "?l?d?d?d?d?d?d",
    "?u?u?u?u",
    "?l?l?l?l?l?l",
    "?d?d?d?l",
    "?u?u?d",
    "?d?d?d?d?d?d?l",
    "?s?d?d",
    "?u?d?d?d?d",
    "?u?u?u?u?u",
    "?d?l?l",
    "?d?d?d?l?l",
    "?u?u?d?d?d?d",
    "?d?d?d?d?s",
    "?d?d?d?d?u",
    "?l?l?l?d?d?d?d",
    "?l?l?l?l?l?d",
    "?u?l?l?l",
    "?u?u?u?d?d",
    "?d?s?d",
    "?l?s?l",
    "?l?d?d?d?d?l",
    "?d?d?s?d?d",
    "?u?d?d",
    "?d?d?l",
    "?d?d?d?l?l?l",
    "?u?d?d?d?d?d",
    "?d?d?l?d?d",
    "?d?d?s",
    "?d?d?l?l?l",
    "?d?d?l?l",
    "?u?u?u?u?d?d",
    "?l?l?d?d?d?d?d",
    "?l?d?d?l?d?d",
    "?u?l?l?l?l",
    // "?u?u?d?d?d",
    // "?d?d?l?l?d?d",
    // "?u?d?u",
    // "?u?u?u?d?d?d",
    "?d?d?d?d?d?u",
    "?u?u?d?d",
    "?u?u?u?u?d",
    "?l?d?l?d",
    "?u?d?d?d",
    "?d?d?u",
    "?d?d?d?d?u?u",
    "?d?l?l?l",
    "?l?s?d",
    "?l?d?d?d?l",
    "?l?d?d?l",
    "?s?d?d?d?d",
    "?d?l?l?l?l",
    "?l?l?s",
    "?d?d?d?d?l?d",
    // "?d?d?d?d?d?d?d?d?d",
    "?d?d?l?l?l?l",
    "?l?l?d?l",
    "?d?d?d?l?d",
    "?l?d?l?l",
    "?d?d?d?s",
    "?l?d?l?d?d",
    "?d?d?l?d?d?d",
    "?l?l?l?l?l?d?d",
    "?u?d?d?d?d?d?d",
    "?l?l?l?l?d?d?d",
    "?l?d?l?d?l?d",
    "?s?s?s",
    "?d?d?d?l?d?d",
    "?d?s?d?d",
    "?d?l?d?d?d",
    "?u?u?u?d",
    "?d?l?d?d?d?d",
    "?l?l?l?d?l",
    "?d?l?l?d",
    "?d?l?d?d",
    "?d?d?l?d",
    "?u?l?l?l?d?d",
    "?d?d?d?s?d",
    "?d?d?d?d?d?s",
    "?l?d?l?d?l",
    "?u?l?l?d?d",
    "?u?u?l",
    "?l?d?d?l?d",
    "?u?u?u?u?u?u",
    "?l?l?d?l?l",
    "?d?d?d?d?d?d?u",
    "?l?d?l?l?l",
    "?l?l?d?d?l",
    "?u?d?l",
    "?d?u?u",
    "?d?l?l?l?d",
    "?l?d?l?d?d?d",
    "?d?s?d?d?d",
    "?u?l?d?d?d?d",
    "?u?s?u",
    "?l?d?l?l?d",
    "?d?d?d?d?l?l?l",
    "?d?d?d?u?u",
    "?l?l?d?d?l?l",
    "?d?l?l?l?l?l",
    "?u?l?l?l?d",
    "?d?d?l?d?d?l",
    "?s?d?l",
    "?l?d?d?d?d?d?d?d",
    "?l?u?u",
    "?l?d?d?l?l",
    "?l?l?l?l?s",
    "?d?l?l?d?d",
    "?d?d?l?l?d",
    "?u?u?u?u?u?d",
    "?l?s?d?d",
    "?d?d?d?d?d?l?l",
    "?d?d?s?d?d?d",
    "?d?l?d?l?d",
    "?l?l?d?l?d",
    "?u?l?l?d?d?d",
    "?s?d?s",
    "?s?s?d",
    "?d?l?l?l?d?d",
    "?s?l?l",
    "?u?u?s",
    "?d?d?d?s?d?d",
    "?d?l?l?l?l?d",
    "?l?l?l?s",
    "?l?l?d?d?d?l",
    "?d?d?d?d?d?d?d?l",
    "?s?d?d?d?d?d",
    "?l?l?l?d?d?l",
    "?d?d?d?d?s?d",
    // "?l?l?s?d?d",
    "?l?l?l?l?l?l?l",
    // "?l?l?d?d?d?d?d?d",
    "?d?d?d?l?l?d",
    "?u?d?d?d?d?u",
    "?l?l?l?l?d?l",
    "?l?d?d?d?l?l",
    "?d?l?d?l?d?l",
    "?d?l?l?d?d?d",
    "?u?l?l?l?l?l",
    "?u?l?l?d",
    "?l?l?l?l?l?l?d",
    "?d?d?d?u?u?u",
    "?u?u?u?d?d?d?d",
    "?l?d?l?l?d?d",
    "?l?l?l?s?d?d",
    "?d?d?s?d",
    "?d?l?d?l",
    "?u?l?l?l?l?d",
    "?u?l?d?d?d",
    "?u?l?u",
    "?l?u?l",
    "?l?l?u",
    "?d?d?l?d?l",
    "?l?d?d?l?l?l",
    "?l?l?d?l?l?d",
    "?d?d?u?d?d",
    "?d?d?d?d?d?d?s",
    "?l?l?l?d?l?l",
    "?l?l?l?l?d?d?d?d",
    "?l?d?d?d?l?d",
    "?d?d?u?u?u",
    "?l?l?d?l?l?l",
    "?l?d?l?l?l?l",
    "?l?l?s?d",
    "?d?l?d?d?l",
    // "?d?d?d?d?d?d?d?d?d?d",
    "?d?d?l?l?l?d",
    "?u?l?s",
    "?d?l?d?l?l",
    "?l?l?d?l?d?d",
    "?l?d?l?l?d?l",
    "?l?l?l?s?d",
    "?d?s?d?s?d?d",
    "?d?d?l?l?l?d?d",
    "?u?d?d?u?d?d",
    "?d?l?l?d?l",
    "?s?d?d?d?d?s",
    "?d?s?d?d?d?d",
    "?d?u?u?u",
    "?s?d?d?d?s",
    "?d?d?d?u",
    "?d?d?d?d?s?s",
    "?d?l?d?l?d?d",
    "?l?l?l?d?l?d",
    "?u?u?d?d?d?d?d",
    "?d?l?d?d?l?d",
    "?d?u?u?u?u",
    "?l?l?d?d?l?d",
    "?d?d?d?d?d?d?l?l",
    "?l?l?s?l?l",
    "?u?l?u?l",
    "?l?l?l?l?l?s",
    "?l?d?l?l?l?d",
    "?u?d?u?d?d",
    "?s?d?d?d",
    "?l?s?l?l?l",
    "?u?d?d?d?u",
    "?l?d?d?l?l?d",
    "?l?l?l?l?u",
    "?d?d?l?d?l?d",
    "?u?d?u?u",
    "?l?s?d?d?d?d",
    "?l?d?d?l?d?l",
    "?l?l?l?s?l",
    "?d?d?d?l?d?d?d",
    "?l?d?l?d?d?l",
    "?l?l?s?l",
    "?d?d?u?u?d?d",
    "?d?d?d?d?u?d",
    "?l?d?l?d?l?l",
    "?d?s?d?s?d",
    "?d?l?d?d?d?l",
    "?u?u?l?l",
    "?d?d?l?d?d?d?d",
    "?d?d?d?l?l?l?l",
    "?d?d?d?l?d?l",
    "?l?s?l?l",
    "?u?l?l?l?u",
    "?u?d?u?d?u?d",
    "?d?u?l?l",
    "?u?u?d?u",
    "?l?d?d?d?d?s",
    "?u?d?d?d?d?l",
    "?d?d?l?l?d?l",
    "?d?u?d?d?d",
    "?d?d?d?u?d",
    "?u?l?u?d?d",
    "?u?l?l?l?l?d?d",
    "?u?d?d?u",
    "?d?d?u?u",
    "?l?d?u?d",
    "?u?d?u?d",
    "?u?l?d?d",
    "?d?d?d?d?s?l",
    "?u?u?d?d?u",
    "?d?d?l?d?l?l",
    "?l?s?l?s?l",
    "?d?l?l?d?l?l",
    "?d?u?d?d?d?d",
    "?l?l?l?d?d?s",
    "?u?u?l?l?l",
    "?l?l?l?l?l?l?d?d",
    "?l?s?l?s",
    "?u?d?u?u?u",
    "?s?l?l?l?l",
    "?d?d?s?d?d?d?d",
    "?d?l?l?d?l?d",
    "?d?d?l?l?l?l?l",
    "?d?l?l?d?d?l",
    "?d?u?u?u?u?u",
    "?u?d?u?u?d",
    "?u?d?u?d?d?d",
    "?d?l?d?d?l?l",
    "?l?l?l?l?l?d?d?d",
    "?d?l?l?l?d?l",
    // "?s?d?d?d?d?d?d",
    "?d?l?d?l?l?d",
    "?u?u?d?u?u",
    "?u?l?u?d?d?d",
    "?s?l?l?l",
    "?d?u?d?u?d",
    "?u?d?d?d?l",
    "?s?s?s?s",
    "?l?l?d?d?s",
    "?d?s?d?l",
    "?d?d?s?l",
    "?s?l?d?d",
    "?d?l?d?l?l?l",
    //
    "?u?u?u?u?s",
    // "?d?u?l?u",
    // "?u?d?d?d?d?d?d?d",
    // "?l?s?l?d?d?d",
    // "?l?u?u?u",
    // "?u?u?u?l",
    // "?d?d?l?l?d?d?d",
    // "?l?l?l?s?s",
    // "?u?d?d?l?d",
    // "?l?u?d?d?d",
    // "?d?d?u?u?d",
    // "?l?u?d?d?d?d",
    // "?d?d?d?d?d?l?d",
    // "?d?u?u?u?d",
    // "?s?s?d?d?d?d",
    // "?d?d?d?s?l",
    // "?d?d?d?d?l?s",
    // "?s?s?d?d",
    // "?u?l?u?l?d?d",
    // "?l?s?l?d",
    // "?l?l?l?u",
    // "?d?s?d?d?s?d?d",
    // "?d?d?s?d?d?s",
    // "?u?l?l?l?d?d?d",
    // "?u?u?u?s",
    // "?d?d?u?d?d?u",
    // "?u?d?d?u?u",
    // "?l?d?l?d?d?d?d",
    // "?d?l?d?d?d?d?d",
    // "?d?d?d?d?u?u?u",
    // "?u?s?d?d?d?d",
    // "?l?l?u?d?d",
    // "?u?u?d?u?d",
    // "?u?l?l?l?s",
    // "?d?d?s?d?s?d?d",
    // "?d?d?d?d?d?d?d?u",
    // "?d?d?d?d?d?s?d",
    // "?u?u?s?d?d",
    // "?d?d?d?d?d?u?u",
    // "?u?d?l?l?l",
    // "?u?u?d?d?u?u",
    // "?u?d?l?l?d",
    // "?d?d?u?d?u",
    // "?u?d?l?d?d",
    // "?d?l?l?l?l?l?l",
    // "?d?d?d?l?l?d?d",
    // "?s?l?l?l?s",
    // "?u?u?l?d?d",
    // "?d?d?u?l?l",
    // "?l?l?u?l?l",
    // "?l?s?l?l?l?l",
    // "?u?l?d?d?d?d?d",
    // "?l?l?d?d?d?s",
    // "?u?u?l?d?d?d",
    // "?l?d?d?d?d?d?d?l",
    // "?l?l?l?l?s?d?d",
    // "?l?u?u?d?d?d",
    // "?u?l?u?l?l",
    // "?l?l?d?d?d?l?l",
    // "?l?d?d?d?d?d?d?d?d",
    // "?u?u?u?u?u?u?d",
    // "?l?l?l?l?s?l",
    // "?d?d?d?d?l?l?d",
    // "?u?u?u?s?d?d",
    // "?l?l?d?d?d?d?l",
    // "?d?d?d?d?l?l?l?l",
    // "?d?u?u?u?u?d",
    // "?l?l?s?l?l?l",
    // "?l?l?u?d?d?d",
    // "?d?d?d?u?l",
    // "?u?l?u?l?d",
    // "?u?u?u?u?l",
    // "?l?d?d?d?s",
    // "?l?u?l?d?d?d",
    // "?l?l?l?l?d?s",
    // "?u?d?l?l",
    // "?d?u?d?u?d?u",
    // "?l?u?l?d?d",
    // "?d?u?u?d?u",
    // "?u?l?d?l",
    // "?u?u?d?l",
    // "?d?d?s?s?d?d",
    // "?l?l?s?d?d?d?d",
    // "?u?l?l?u?l",
    // "?d?d?s?l?l",
    // "?s?d?l?l?l",
    // "?l?u?l?l?l",
    // "?l?d?d?d?d?l?l",
    // "?u?u?d?d?d?d?d?d",
    // "?u?l?l?l?l?u",
    // "?d?u?u?u?d?d",
    // "?u?l?d?d?l",
    // "?u?l?d?l?d",
    // "?u?u?l?l?d?d",
    // "?l?d?l?d?l?d?d",
    // "?l?l?l?l?s?s",
    // "?u?u?u?u?u?u?u",
    // "?l?l?l?d?s",
    // "?l?l?l?s?l?l",
    // "?d?u?u?d?d?d",
    // "?u?u?u?u?d?u",
    // "?d?u?l?l?l",
    // "?u?d?d?l?d?d",
    // "?d?d?d?u?u?d",
    // "?l?d?d?d?l?l?l",
    // "?d?d?u?l?l?l",
    // "?l?l?l?u?u",
    // "?u?u?d?d?d?u",
    // "?d?d?d?u?l?l",
    // "?u?d?l?d?l",
    // "?l?u?l?u?l",
    // "?d?l?s?l",
    // "?s?l?l?d",
    // "?u?u?u?s?d",
    // "?d?s?l?l",
    // "?l?s?d?l",
    // "?l?l?d?s?d",
    // "?u?u?s?d",
    // "?u?s?d?u",
    // "?l?d?d?l?d?d?d",
    // "?d?u?u?d?d",
    // "?d?u?d?d?u",
    // "?d?d?d?d?d?d?d?d?l",
    // "?l?l?u?u",
    // "?u?l?l?d?l",
    // "?u?u?u?l?l",
    // "?s?l?l?l?l?l",
    // "?l?d?d?s?d?d",
    // "?l?l?l?s?d?d?d",
    // "?l?l?u?u?u",
    // "?d?d?s?d?d?s?d?d",
    // "?d?l?l?l?d?d?d",
    // "?u?u?s?u?u",
    // "?u?u?u?d?d?u",
    // "?d?d?d?d?d?l?l?l",
    // "?d?d?d?s?l?l",
    // "?u?s?u?s",
    // "?u?s?u?d?d",
    // "?u?l?s?d?d",
    // "?u?l?l?u?d?d",
    // "?u?d?d?l?l",
    // "?d?u?l?l?d",
    // "?d?u?d?u?u",
    // "?u?s?u?u?u",
    // "?u?l?d?l?l",
    // "?u?d?d?d?u?u",
    // "?u?l?l?l?l?l?d",
    // "?u?d?u?u?d?d",
    // "?s?l?l?l?l?s",
    // "?l?l?l?d?l?l?l",
    // "?u?d?d?d?d?s",
    // "?d?l?l?d?d?d?d",
    // "?d?l?l?l?l?l?d",
    // "?l?l?s?s?l",
    // "?l?d?d?d?l?d?d",
    // "?s?d?l?l?l?l",
    // "?l?s?l?l?d",
    // "?u?d?d?u?u?u",
    // "?l?d?l?d?s",
    // "?u?u?u?s?u",
    // "?d?d?d?d?l?u",
    // "?l?d?s?s",
    // "?l?d?d?s?d",
  ];
  return arr;
}

export default mask300;
