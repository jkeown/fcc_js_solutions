// Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  // Good luck!
  const regex = /^1?\s?((\(\d{3}\))|(\d{3}))\s?\-?\d{3}\s?\-?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");

