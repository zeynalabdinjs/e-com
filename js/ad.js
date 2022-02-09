var ad_label = document.getElementById("ad-label");
// this variable will store images for preview
var images = [];
// this function will select images
function image_select() {
    ad_label.classList.add("active");
    var image = document.getElementById('file-input').files;

    for (i = 0; i < image.length; i++) {
        if (check_duplicate(image[i].name)) {
            images.push({
                "name": image[i].name,
                "url": URL.createObjectURL(image[i]),
                "file": image[i],
            })
        } else {
            alert(image[i].name + " Artıq əlavə olunub !");
        }
    }

    if(images.length > 0){
        document.getElementById("image-count").innerHTML = "Yüklənən Şəkillər " + images.length;
    }

    // document.getElementById('form').reset();
    document.getElementById('ad-images').innerHTML = image_show();
    
}

// this function will show images in the DOM
function image_show() {
    var image = "";
    images.forEach((i) => {
        image += `<div class="image_container d-flex justify-content-center position-relative">
   	  	  	  	  <img src="`+ i.url + `" alt="Image">
   	  	  	  	  <span class="position-absolute" onclick="delete_image(`+ images.indexOf(i) + `)">&times;</span>
   	  	  	  </div>`;
    })
    return image;

    // for delete code
    // <span class="position-absolute" onclick="delete_image(`+ images.indexOf(i) + `)">&times;</span>
}

// this function will get all images from the array
// function get_image_data() {
//     var form = new FormData()
//     for (let index = 0; index < images.length; index++) {
//         form.append("file[" + index + "]", images[index]['file']);
//     }
//     return form;
// }

// this function will delete a specific image from the container
function delete_image(e) {
    images.splice(e, 1);
    document.getElementById('ad-images').innerHTML = image_show();

    if(images.length < 1){
        document.getElementById("image-count").innerHTML = "Şəkilləri Yükləyin";
    }
    else{
        document.getElementById("image-count").innerHTML = "Yüklənən Şəkillər " + images.length;
        console.log(images);
    }
}

// this function will check duplicate images
function check_duplicate(name) {
    var image = true;
    if (images.length > 0) {
        for (e = 0; e < images.length; e++) {
            if (images[e].name == name) {
                image = false;
                break;
            }
        }
    }
    return image;
}