const getQrCodeImageUrl = (url) =>
  `https://qrtag.net/api/qr_transparent_6.png?url=${url}`;

const getAltText = (url) => `qr code for url: ${url}`;

const isValidUrl = (url) => {
  try {
    return new URL(url) && true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const qrContainer = document.querySelector("#qr-container");

const currentUrl = document.location.toString();

// <img src="qr.png" alt="qr code" />
const qrCode = document.createElement("img");
qrCode.setAttribute("src", getQrCodeImageUrl(currentUrl));
qrCode.setAttribute("alt", getAltText(currentUrl));

qrContainer.appendChild(qrCode);

const urlForm = document.querySelector("#url-form");

urlForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = event.target.url.value;
  if (isValidUrl(url)) {
    qrCode.setAttribute("src", getQrCodeImageUrl(url));
    qrCode.setAttribute("alt", getAltText(url));
  } else {
    alert("Invalid url");
  }
});
