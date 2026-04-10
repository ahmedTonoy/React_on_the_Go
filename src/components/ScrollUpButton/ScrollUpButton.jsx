import { useEffect, useState } from "react";
import './ScrollUpButton.css'

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`scroll-top ${show ? "show" : ""}`}
      onClick={scrollToTop}
    >
      ⇮
    </button>
  );
}

export default ScrollToTopButton;