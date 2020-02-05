// const url = `https://go-dot-moneytransfers-staging.appspot.com/${providerID}?t=${encodedPartnerJsonObject}&l=${encodePartnerLink}`;

const data = [
  {
    name: "WorldRemit",
    logo: "./images/logos/worldremit.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "34,450",
    maintagline: "Transfer money to 145+ countries",
    keyfeatures: {
      one: "Low fees and exchange rates",
      two: "Minimum transfer: None",
      three: "Transfer time: Instant - 3 business days"
    },
    tagline: "none",
    trohpy: "display: block",
    id: "CATZKxZesY1ohk3aAjcQ",
    partnerlink: "https://www.awin1.com/cread.php?awinmid=5877&awinaffid=590963&clickref=[tracking_ref]&p=https%3A%2F%2Fwww.worldremit.com%2Fen%2Faccount%2Fsignup",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: "https://www.awin1.com/cread.php?awinmid=5877&awinaffid=590963&clickref=[tracking_ref]&p=https%3A%2F%2Fwww.worldremit.com%2Fen%2Faccount%2Fsignup"
  },
  {
    name: "XE",
    logo: "./images/logos/xe.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "30,000",
    maintagline: "Direct transfer from your bank account",
    keyfeatures: {
      one: "No fees, competitive exchange rates",
      two: "Minimum transfer: None",
      three: "Transfer time: Same day"
    },
    tagline: "display: block",
    partnerlink: "https://www.awin1.com/awclick.php?gid=345899&mid=12673&awinaffid=590963&linkid=2241253&clickref=[tracking_ref]",
    id: "zWLVb8d0uVh9dRTFWrL4",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: "https://www.awin1.com/awclick.php?gid=345899&mid=12673&awinaffid=590963&linkid=2241253&clickref=[tracking_ref]"
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
      three: "Transfer time: Up to 4 days"
    },
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://www.awin1.com/awclick.php?gid=345899&mid=12673&awinaffid=590963&linkid=2241253&clickref=[tracking_ref]",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: "https://www.awin1.com/awclick.php?gid=345899&mid=12673&awinaffid=590963&linkid=2241253&clickref=[tracking_ref]"
  },
  {
    name: "TransferWise",
    logo: "./images/logos/transferwise.jpg",
    stars: "./images/stars/4-half.png",
    reviewquantity: "13,538",
    maintagline: "Low fees, mid-market exchange rates",
    keyfeatures: {
      one: "Low transaction fees",
      two: "Minimum transfer: None",
      three: "Transfer time: Few hours - 2 days"
    },
    tagline: "none",
    trohpy: "display: none",
    partnerlink: "https://transferwise.com/",
    id: "mRL82pTyUlToDkDXpgJA",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: "https://prf.hn/click/camref:1101l7yuC/pubref:[tracking_ref]/destination:https%3A%2F%2Ftransferwise.com%2Fregister"
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
    tagline: "none",
    trohpy: "display: none",
    id: "LKv6TK3CHzD5zctsekgH",
    partnerlink: "https://www.ofx.com/en-gb/",
    encodePartnerLink: function() {
      return btoa(this.partnerlink);
    },
    url: "https://www.ofx.com/en-gb/p/gb/money-transfers-com/?PID=12871"
  }
];

