import { X } from "lucide-react";
import { FC, KeyboardEvent, useCallback } from "react";
import { ModalBody, ModalHeader } from "~entities";
import { Button, animations, useInFocus, useTimer } from "~shared";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Modal: FC<Props> = (props) => {
  const { setIsOpen } = props;

  const closeOnKey = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  const time = useTimer();
  const ref = useInFocus();

  const handleSubmit = () => {
    setIsOpen(false);
    alert("Действие выполнено");
  };

  return (
    <motion.div
      variants={animations}
      initial='hidden'
      animate='visible'
      exit='hidden'
      tabIndex={0}
      className='bg-black/20 w-screen h-screen absolute -z-1 center'
      onKeyDown={closeOnKey}
      ref={ref}
    >
      <div className='absolute center z-[200000]'>
        <div className='flex flex-col gap-6 bg-white rounded-md w-[500px] relative p-4'>
          <X className='cursor-pointer absolute right-1 top-1' onClick={() => setIsOpen(false)} />
          <ModalHeader>Согласие с правилами</ModalHeader>
          <ModalBody>
            <p>
              Для данной функции применяются особые условия и правила пользования, их необходимо подтвердить, нажав на
              кнопку <span className='font-semibold text-xl'>Подтвердить</span>
            </p>
            <div className='mt-3 flex gap-3'>
              <Button color='danger' onClick={() => setIsOpen(false)}>
                Отмена
              </Button>
              <Button disabled={time > 0} onClick={handleSubmit}>
                Подтвердить {time}
              </Button>
            </div>
          </ModalBody>
        </div>
      </div>
    </motion.div>
  );
};
