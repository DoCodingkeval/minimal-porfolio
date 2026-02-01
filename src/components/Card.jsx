import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Card = ({ className, children }) => {
  useGSAP(() => {

  })
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
