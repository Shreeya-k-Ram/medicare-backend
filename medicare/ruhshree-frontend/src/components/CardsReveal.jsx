import { useEffect, useRef, useState } from "react";
import "./CardsReveal.css";

export default function CardsReveal({
  children,
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`staggered-item ${
        isVisible ? "staggered-item-visible" : ""
      } ${className}`}
      style={{
        "--stagger-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}