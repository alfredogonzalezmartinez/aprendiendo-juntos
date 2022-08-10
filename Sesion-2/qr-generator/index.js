const qrContainer = document.querySelector("#qr-container");

// <img src="qr.png" alt="qr code" />
const qrCode = document.createElement("img");
qrCode.setAttribute("src", "qr.png");
qrCode.setAttribute("alt", "qr code");

qrContainer.appendChild(qrCode);
