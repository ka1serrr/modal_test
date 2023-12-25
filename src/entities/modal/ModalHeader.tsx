import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ModalHeader: FC<Props> = ({ children }) => {
  return <h2 className='font-bold text-center text-2xl text-black border-b border-black w-full'>{children}</h2>;
};
