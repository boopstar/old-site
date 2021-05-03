let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/image1.png') {
      myImage.setAttribute('src','image/nice.png');
    } else {
      myImage.setAttribute('src','image/nice.png');
    }
}

