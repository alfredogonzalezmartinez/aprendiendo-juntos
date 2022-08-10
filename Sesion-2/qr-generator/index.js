const getQrCodeImageUrl = (url) => `https://qrtag.net/api/qr_5.png?url=${url}`;

const qrContainer = document.querySelector("#qr-container");

const currentUrl = document.location.toString();

// <img src="qr.png" alt="qr code" />
const qrCode = document.createElement("img");
qrCode.setAttribute("src", getQrCodeImageUrl(currentUrl));
qrCode.setAttribute("alt", "qr code");

qrContainer.appendChild(qrCode);
