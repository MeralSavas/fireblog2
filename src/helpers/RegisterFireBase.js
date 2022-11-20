import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { writeUserData } from "./LiveData";
import { app } from "./firebase";

function RegisterFireBase(email, password, data, setError, navigate) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      writeUserData(data, user.uid, "kullanici");
    })
    .catch((error) => {
      setError(error.code);
      // ..
      console.log(data);
    });
}

export default RegisterFireBase;
