import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  type?: "button" | "submit";
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  type,
  title,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3 rounded-xl  font-semibold max-md:w-full ${
        isSubmitting ? "bg-black/30" : bgColor ? bgColor : "bg-primary-purple"
      } ${
        isSubmitting ? "text-neutral-200" : textColor ? textColor : "text-neutral-100"
      }`}
      onClick={handleClick}
    >
      {leftIcon && (
        <Image
          src={leftIcon}
          width={14}
          height={14}
          alt='left'
        />
      )}
      {title}
      {rightIcon && (
        <Image
          src={rightIcon}
          width={14}
          height={14}
          alt='right'
        />
      )}
    </button>
  );
};
export default Button;
