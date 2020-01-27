const partnerDivs = [
  $("#partner1"),
  $("#partner2"),
  $("#partner3"),
  $("#partner4"),
  $("#partner5"),
  $("#partner6"),
  $("#partner7"),
  $("#partner8"),
  $("#partner9"),
  $("#partner10")
];




const renderPartners = data => {
  partnerDivs.forEach((partner, index) => {
    let partnerInfo = data[index];
    let partneHTML = createPartnerHTML(partnerInfo);
    partner.append(partneHTML);
  });
};
renderPartners(data);
