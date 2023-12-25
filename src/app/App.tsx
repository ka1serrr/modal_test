import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "~shared";
import { Modal } from "~widgets/Modal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='flex justify-center items-center w-full h-screen bg-[#FFCCCC]'>
      <Button onClick={() => setIsOpen(true)}>Выполнить действие</Button>
      <AnimatePresence>{isOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> : null}</AnimatePresence>
    </div>
  );
}

export default App;
