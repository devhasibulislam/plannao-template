/**
 * Title: Write a program using JavaScript on Out Side Click
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/in/devhasibulislam
 * Facebook: https://facebook.com/in/devhasibulislam
 * Instagram: https://instagram.com/in/devhasibulislam
 * Twitter: https://twitter.com/in/devhasibulislam
 * Pinterest: https://pinterest.com/in/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 29, July 2023
 */

import { useEffect, useRef, useCallback } from "react";

const OutsideClick = ({ onOutsideClick, children }) => {
  const wrapperRef = useRef(null);

  const handleOutsideClick = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    },
    [onOutsideClick]
  );

  useEffect(() => {
    const handleOutsideClickEvent = (event) => handleOutsideClick(event);
    document.addEventListener("mousedown", handleOutsideClickEvent);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickEvent);
    };
  }, [handleOutsideClick]);

  return <div ref={wrapperRef} className="z-50">{children}</div>;
};

export default OutsideClick;
