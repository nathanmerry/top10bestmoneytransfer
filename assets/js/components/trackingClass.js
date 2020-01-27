class Tracking {
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  getRandomID() {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  }

  setTrackingStringJson(userID, sessionID) {
    this.outboundObject = {
      userId: userID,
      sessionId: sessionID,
      context: {
        userAgent: {
          ua:
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
          browser: {
            name: "Chrome"
          },
          os: {
            name: "Linux"
          },
          device: {
            type: "desktop"
          },
          isBot: false
        },
        hostname: "moneytransfers.com",
        url: "https://moneytransfers.com/about-us",
        queryString: null,
        country: null,
        region: null,
        city: null,
        locale: "en",
        tracking: {
          gclid: null,
          msclkid: null,
          landingPage: null,
          utmSource: null,
          utmMedium: null,
          utmCampaign: null,
          utmTerm: null,
          utmContent: null
        }
      },
      corridorData: {
        countryFrom: "GB",
        countryTo: "CZ",
        currencyFrom: "GBP",
        currencyTo: "CZK"
      }
    };

    return this.outboundObject;
  }
}
