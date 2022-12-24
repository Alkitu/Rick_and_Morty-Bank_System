import { getFirestore, setDoc, doc, collection, onSnapshot, getDocs, deleteDoc } from 'firebase/firestore'

const db = getFirestore();
const userRef = collection(db, "users");
// const charactersRef = collection(db, 'characters');


// Detail of user account
export async function getUsers() {
const userRef = collection(db, "users");
  return await getDocs(userRef).then((snap) => {
    snap.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
    });
});
}

// Update user .... We have to pass the userId and the updates like a json 
export async function updateUser(userId, updates) {
  const userRef = doc(db, "users", userId);
  setDoc(userRef,  updates, { merge: true });
}

// Delete User
export async function deleteUser(userId) {
    deleteDoc(doc(db, "users", userId)).then(() => {
      console.log("deleted");
  });
}


export async function uploadDataToFirebase(data) {
  data.forEach(async (character) => {
    await charactersRef.add(character);
  });
}





// // Create user
// export async function createUser(user) {
//   const docRef = await userRef.add(user);
//   return docRef.id;
// }
