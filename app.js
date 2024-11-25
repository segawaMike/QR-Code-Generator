let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");
let qrImg = document.getElementById("qrImg");
const genBtn = document.getElementById("gen-btn");
const downloadBtn = document.getElementById("download-btn");

genBtn.addEventListener("click", ()=>{
    generateQR();
})

function generateQR() {
    if (qrText.value.length > 0) {
        const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrImg.src = qrCodeUrl;
        imgBox.classList.add("show-img");

        downloadBtn.href = qrCodeUrl;
        downloadBtn.download = "QRCode.png"
        downloadBtn.classList.add('download')
    }else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }


 }