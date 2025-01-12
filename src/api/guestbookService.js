// src/api/guestbookService.js
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// 방명록 데이터 가져오기
export const fetchGuests = async () => {
  const snapshot = await getDocs(collection(db, "guestbook"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// 방명록 메시지 추가
export const addGuest = async (guest) => {
  const docRef = await addDoc(collection(db, "guestbook"), guest);
  return { id: docRef.id, ...guest };
};

// 방명록 메시지 삭제
export const removeGuest = async (id) => {
  await deleteDoc(doc(db, "guestbook", id));
};
