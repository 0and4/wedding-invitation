import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Account from "./component/Account";
import GuestBook from "./component/GuestBook";
import Main from "./component/Main";

function App() {
  const accountRef = useRef(null);
  const guestBookRef = useRef(null);
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

    return () => observer.disconnect();
  }, [scrollDirection]);

  return (
    <div className="App">
      <main>
        <Main />
        <div ref={accountRef} className="fade-in">
          <Account />
        </div>
        <div ref={guestBookRef} className="fade-in">
          <GuestBook />
        </div>
      </main>
    </div>
  );
}

export default App;
