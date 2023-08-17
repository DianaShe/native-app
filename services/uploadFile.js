import { storage } from "../config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function upLoadFile(file, path) {
  const storageRef = ref(storage, path);
  const uploadTask = await uploadBytes(storageRef, file);

  return await getDownloadURL(uploadTask.ref);
}
