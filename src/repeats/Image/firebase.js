import { storage } from '../../config/firebase';

export const downloadImage = (image_name) => {
    if (image_name === "/") {
        return storage.ref().child("home.JPG").getDownloadURL();
    } else {
        return storage.ref().child(image_name + ".JPG").getDownloadURL();
    }
}