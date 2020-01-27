const track = new Tracking();

// gets random ID's and sets them to variable
const userID = track.getRandomID();
const sessionID = track.getRandomID();

// set user cookie
if (track.getCookie("user") != "") {
  console.log("user cookie set");
} else {
  track.setCookie("user", userID, "30");
}

// set session cookie
track.setCookie("session", sessionID, "1");
if (track.getCookie("user") != "") {
  console.log("session cookie set");
}

// save cookies to variable
const sessionCookie = track.getCookie("session");
const userCookie = track.getCookie("user");

// inserts cookies into Json Object
const partnerJsonObject = track.setTrackingStringJson(
  userCookie,
  sessionCookie
);

const partnerJsonObjectString = JSON.stringify(partnerJsonObject);

const encodedPartnerJsonObject = btoa(partnerJsonObjectString);

const partnerLink = "https://.com/";

const encodePartnerLink = btoa(partnerLink);

// console.log(encodePartnerLink)

const providerID = "0LaW6MdpDlkfYi4sZzbk";

const url = `https://go-dot-moneytransfers-staging.appspot.com/${providerID}?t=${encodedPartnerJsonObject}&l=${encodePartnerLink}`;



