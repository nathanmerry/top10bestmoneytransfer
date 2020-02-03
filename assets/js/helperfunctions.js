

const createPartnerHTML = data => {
  return `<div data-partner class="partner">
  <div class="partner__wrapper">
    <div class="partner__column-1">
        <div class="partner__number-wrapper">
          <div class="partner__number">
            <span data-number>${index + 1}</span>
          </div>
          
        </div>
        <div class="partner__logo-reviews">
          <img class="partner__logo" src="${data.logo}">
          <div class="partner__reviews">
            <img class="partner__stars" src="${data.stars}">
            <div class="partner__review-count">
              <span class="bold">${data.reviewquantity}</span> Reviews on<img class="partner__star-solo" src="images/stars/stand-alone.png">
              <span class="bold">TrustPilot</span>
            </div>
          </div>
        </div>
      <div class="partner__display-sm partner__visit-btn-wrapper">
      <a href="${data.url}" target="_blank" class="partner__visit-btn--clear partner__visit-btn" 
        data-mt-click="data-mt-click" 
        data-mt-click-location="comparisonTable" 
        data-mt-click-element="cta" 
        data-mt-provider-id="${data.id}" 
        data-mt-provider-name="${data.name}" 
        data-mt-link-inject="true">
          VISIT SITE
        </a>
      </div>
    </div>
    <div class="partner__column-2">
      <div class="partner__name-wrapper">
        <h3 class="partner__name">${data.name}</h3>
        <img style="${data.trohpy}" class="partner__trophy" src="./images/stars/trohpy.png" />
      </div>
      <div class="partner__tagline">${data.maintagline}</div>
      <ul class="partner__key-features">
        <li class="partner__key-feature">
          <img class="partner__tick" src="./images/tick-green.png"/>
          ${data.keyfeatures.one}
        </li>
        <li class="partner__key-feature">
          <img class="partner__tick" src="./images/tick-green.png"/>
          ${data.keyfeatures.two}
        </li>
        <li class="partner__key-feature">
          <img class="partner__tick" src="./images/tick-green.png"/>
          ${data.keyfeatures.three}
        </li>
      </ul>
    </div>
    <div class="partner__column-3">
      <a href="${data.url}" target="_blank" class="partner__visit-btn" 
        data-mt-click="data-mt-click" 
        data-mt-click-location="comparisonTable" 
        data-mt-click-element="cta" 
        data-mt-provider-id="${data.id}" 
        data-mt-provider-name="${data.name}" 
        data-mt-link-inject="true">
        VISIT SITE
        <img class="partner__lock-img" src="./images/padlock.png" />
      </a>
    </div>
  </div>
  </div>`;
};

console.log('hello')
