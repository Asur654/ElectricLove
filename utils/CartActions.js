import toast from "react-hot-toast";
import { db, storage } from "@/lib/firebase";

import { doc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, collection, where, query } from "firebase/firestore";

export const addToCart = async ({ data, Useruid }) => {
  const CartRef = collection(db, `ElectricLove/UserData/Users/${Useruid}/Cart`);
  const q = query(CartRef, where("title", "==", data.title));
  const snap = await getDocs(q);

  if (!snap.empty) {
    toast.error("Already in Cart!");
    return;
  }

  if (!data?.title) {
    throw new Error("product title is required");
  }

  const newId = doc(
    collection(db, `ElectricLove/UserData/Users/${Useruid}/Cart`),
  ).id;
  await setDoc(
    doc(db, `ElectricLove/UserData/Users/${Useruid}/Cart/${newId}`),
    {
      ...data,
      id: newId,
      quantity: 1,
    },
  );
  toast.success("Item added to Cart!")
};

export const deleteItemFromCart = async ({ itemId, Useruid }) => {
  if (!itemId) {
    throw new Error("itemId is required");
  }
  await deleteDoc(
    doc(db, `ElectricLove/UserData/Users/${Useruid}/Cart/${itemId}`),
  );
};

export const increamentItem = async ({ itemId, Useruid }) => {
  if (!itemId) {
    throw new Error("itemId is required");
  }
  const itemRef = doc(
    db,
    `ElectricLove/UserData/Users/${Useruid}/Cart/${itemId}`,
  );
  const quantity = (await getDoc(itemRef)).data().quantity;
  if (quantity >= 10) {
    toast.error("Buying Limit exceeded");
    return;
  }
  await updateDoc(itemRef, {
    quantity: quantity + 1,
  });
};

export const decrementItem = async ({ itemId, Useruid }) => {
  if (!itemId) {
    throw new Error("itemId is required");
  }
  const itemRef = doc(
    db,
    `ElectricLove/UserData/Users/${Useruid}/Cart/${itemId}`,
  );
  const quantity = (await getDoc(itemRef)).data().quantity;
  if (quantity <= 1) {
    toast.error("Use delete to remove item");
    return;
  }
  await updateDoc(itemRef, {
    quantity: quantity - 1,
  });
};
