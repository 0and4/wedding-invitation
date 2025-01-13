// src/api/guestbookService.js
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// 방명록 데이터 가져오기
export const fetchGuests = async () => {
  const guestbookQuery = query(
    collection(db, "guestbook"),
    orderBy("timestamp", "desc") // 최신순 정렬
  );

  const snapshot = await getDocs(guestbookQuery);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// 방명록 메시지 추가
export const addGuest = async (guest) => {
  const guestWithTimestamp = {
    ...guest,
    timestamp: new Date(), // 현재 시간 추가
  };

  const docRef = await addDoc(collection(db, "guestbook"), guestWithTimestamp);
  return { id: docRef.id, ...guestWithTimestamp };
};

// 방명록 메시지 삭제
export const removeGuest = async (id) => {
  await deleteDoc(doc(db, "guestbook", id));
};
