import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../Config/firebase-config';

export const imageUpload = async (image) => {
  if (image) {
    const imageName = image.name;
    const random = new Date().getTime();
    const path = `images/${random}_${imageName}`;
    const imagesRef = ref(storage, path);
    await uploadBytes(imagesRef, image);
    const url = await getDownloadURL(ref(storage, path));

    return url;
  }
  return '';
};
