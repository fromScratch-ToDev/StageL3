import { HTMLAttributes, PropsWithChildren } from "react";

type PProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>;

export default function P({ children, className = "" }: PProps) {
  return (
    <p className={`text-base lg:text-lg xl:text-xl 2xl:text-2xl ${className}`}>
      {children}
    </p>
  );
}
