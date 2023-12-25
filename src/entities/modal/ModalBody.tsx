import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ModalBody: FC<Props> = ({ children }) => {
  return (
    <div className='font-normal text-base text-black text-justify flex flex-col justify-center items-center w-full'>
      {children}
    </div>
  );
};
