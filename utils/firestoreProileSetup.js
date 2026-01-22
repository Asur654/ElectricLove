import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export const firestoreProfileSetup = async (User) => {
  try {
    const userRef = doc(db, `ElectricLove/UserData/Users/${User.uid}`);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return;
    }
    await setDoc(doc(db, `ElectricLove/UserData/Users/${User.uid}`), {
      Username: User.displayName,
      Email: User.email,
      ProfilePhoto: null,
      uid: User.uid,
      createdAt: serverTimestamp(),
    });

  } catch (err) {
    console.log("Error setting up user profile in Firestore:", err);
    }
  };

