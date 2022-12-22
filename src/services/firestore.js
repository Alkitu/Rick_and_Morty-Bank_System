import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore();
const userRef = collection(db, "users");
const charactersRef = collection(db, 'characters');

export async function getUsers() {
  return await getDocs(userRef).then((snap) => {
    snap.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
    });
});
}

// Create user
export async function createUser(user) {
  const docRef = await userRef.add(user);
  return docRef.id;
}

// Update user
export async function updateUser(userId, updates) {
  await userRef.doc(userId).update(updates);
}

// Delete User
export async function deleteUser(userId) {
  await userRef.doc(userId).delete();
}


export async function uploadDataToFirebase(data) {
  data.forEach(async (character) => {
    await charactersRef.add(character);
  });
}