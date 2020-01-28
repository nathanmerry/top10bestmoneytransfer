// const url = `https://go-dot-moneytransfers-staging.appspot.com/${providerID}?t=${encodedPartnerJsonObject}&l=${encodePartnerLink}`;

const data = [
  {
    name: "XE",
    logo: "./images/logos/xe.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "30,000",
    maintagline: "Direct transfer from your bank account",
    keyfeatures: {
      one: "No fees, competitive exchange rates",
      two: "Minimum transfer: none",
      three: "Transfer time: Same day"
    },
    order: 1,
    tagline: "display: block",
    trohpy: "display: block",
    partnerlink: "https://www.xe.com/",
    id: "zWLVb8d0uVh9dRTFWrL4",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return `https://go-dot-moneytransfers-staging.appspot.com/${
        this.id
      }?t=${encodedPartnerJsonObject}&l=${this.encodePartnerLink()}`;
    }
  },
  {
    name: "Currency Fair",
    logo: "./images/logos/currencyfair.jpg",
    stars: "./images/stars/5.png",
    reviewquantity: "3,704",
    maintagline: "DiGet 10 free transfers with signup",
    keyfeatures: {
      one: "Low fees, competitive exchange rates",
      two: "Minimum transfer: none",
      three: "Transfer time: same day"
    },
    url: "www.google.com",
    order: 2,
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://www.currencyfair.com/",
    id: "ofhSa2xJ0RnVLHdbm1sJ",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return `https://go-dot-moneytransfers-staging.appspot.com/${
        this.id
      }?t=${encodedPartnerJsonObject}&l=${this.encodePartnerLink()}`;
    }
  },
  {
    name: "Azimo",
    logo: "./images/logos/amizo.jpg",
    stars: "",
    reviewquantity: "No reviews yets <br>",
    maintagline: "First 2 international transfers are free",
    keyfeatures: {
      one: "Minimum transfer: £10",
      two: "Minimum transfer: none",
      three: "Transfer time: 30 minutes or less"
    },
    order: 3,
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://azimo.com/en",
    id: "uVvcMl5Cg2YyCkhREzt3",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return `https://go-dot-moneytransfers-staging.appspot.com/${
        this.id
      }?t=${encodedPartnerJsonObject}&l=${this.encodePartnerLink()}`;
    }
  },
  {
    name: "World Remit",
    logo: "./images/logos/worldremit.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "33,786",
    maintagline: "Transfer money to 145+ countries",
    keyfeatures: {
      one: "Low fees and exchange rates",
      two: "Minimum transfer: none",
      three: "Transfer time: instant - 3 business days"
    },
    order: 4,
    tagline: "none",
    trohpy: "display: none",
    id: "CATZKxZesY1ohk3aAjcQ",
    partnerlink: "https://www.worldremit.com/",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return `https://go-dot-moneytransfers-staging.appspot.com/${
        this.id
      }?t=${encodedPartnerJsonObject}&l=${this.encodePartnerLink()}`;
    }
  },
  {
    name: "HiFX",
    logo: "./images/logos/hifx.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "34,389",
    maintagline: "Secure transfers 24/7 from any device",
    keyfeatures: {
      one: "No Fees",
      two: "Minimum transfer: £250",
      three: "Transfer time: up to 4 days"
    },
    order: 5,
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://www.hifx.co.uk/",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return this.partnerlink;
    }
  },
  {
    name: "Paysend",
    logo: "./images/logos/paysend.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "6,791",
    maintagline: "Special promo code: 'TOP10BEST'",
    keyfeatures: {
      one: "Fixed fees - only £1.00",
      two: "Minimum transfer: £2.81",
      three: "Transfer time: instant - 3 business days"
    },
    order: 6,
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://paysend.com/",
    id: "bqhjibRAu0EcFcdsyn9E",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return `https://go-dot-moneytransfers-staging.appspot.com/${
        this.id
      }?t=${encodedPartnerJsonObject}&l=${this.encodePartnerLink()}`;
    }
  },
  {
    name: "TransferGo",
    logo: "./images/logos/transfergo.jpg",
    stars: "./images/stars/5.png",
    reviewquantity: "13,538",
    maintagline: "Save up to 90% on international transfers",
    keyfeatures: {
      one: "Transaction fee from £0.99",
      two: "Minimum transfer: none",
      three: "Transfer time: 30 minutes - 3 days"
    },
    url: "www.google.com",
    order: 7,
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://www.transfergo.com/en",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return this.partnerlink;
    }
  },
  {
    name: "TransferWise",
    logo: "./images/logos/transferwise.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "13,538",
    maintagline: "Low fees, mid-market exchange rates",
    keyfeatures: {
      one: "Low transaction fees",
      two: "Minimum transfer: none",
      three: "Transfer time: few hours - 2 days"
    },
    order: 8,
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://transferwise.com/",
    id: "mRL82pTyUlToDkDXpgJA",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return `https://go-dot-moneytransfers-staging.appspot.com/${
        this.id
      }?t=${encodedPartnerJsonObject}&l=${this.encodePartnerLink()}`;
    }
  },
  {
    name: "OFX",
    logo: "./images/logos/ofx.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "3,747",
    maintagline: "No transfer fees",
    keyfeatures: {
      one: "Great exchange rates for sending money abroad",
      two: "Minimum transfer: £100",
      three: "Transfer time: Transfer time: same day - 2 days"
    },
    order: 9,
    tagline: "none",
    trohpy: "display: none",
    id: "LKv6TK3CHzD5zctsekgH",
    partnerlink: "https://www.ofx.com/en-gb/",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return `https://go-dot-moneytransfers-staging.appspot.com/${
        this.id
      }?t=${encodedPartnerJsonObject}&l=${this.encodePartnerLink()}`;
    }
  },
  {
    name: "MoneyGram",
    logo: "./images/logos/moneygram.jpg",
    stars: "./images/stars/1-half.png",
    reviewquantity: "64",
    maintagline: "Send money to banks around the world",
    keyfeatures: {
      one: "Fee: varies by amount and country",
      two: "Transfer time: instant - next day",
      three: "Daily limit: £6,000"
    },
    order: 10,
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://www.moneygram.com/mgo/gb/en/",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: function() {
      return this.partnerlink;
    }
  }
];
