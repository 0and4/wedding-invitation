import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Account from "./component/Account";
import GuestBook from "./component/GuestBook";
import Main from "./component/Main";
import Invitation from "./component/Invitation";
import Calendar from "./component/Calendar";
import Location from "./component/Location";
import Gallery from "./component/Gallery";

function App() {
  const accountRef = useRef(null);
  const guestBookRef = useRef(null);
  const invitationRef = useRef(null);
  const calendarRef = useRef(null);
  const locationRef = useRef(null);
  const galleryRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && scrollDirection === "down") {
            entry.target.classList.add("slide-down");
          } else if (!entry.isIntersecting) {
            entry.target.classList.remove("slide-down");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (accountRef.current) observer.observe(accountRef.current);
    if (guestBookRef.current) observer.observe(guestBookRef.current);
    if (invitationRef.current) observer.observe(invitationRef.current);
    if (calendarRef.current) observer.observe(calendarRef.current);
    if (locationRef.current) observer.observe(locationRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, [scrollDirection]);

  return (
    <div className="App">
      <main>
        <Main />
        <div ref={invitationRef} className="fade-in">
          <Invitation />
        </div>
        <div ref={calendarRef} className="fade-in">
          <Calendar />
        </div>
        <div ref={locationRef} className="fade-in">
          <Location />
        </div>
        <div ref={accountRef} className="fade-in">
          <Account />
        </div>
        <div ref={galleryRef} className="fade-in">
          <Gallery />
        </div>
        <div ref={guestBookRef} className="fade-in">
          <GuestBook />
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 say & bee. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
