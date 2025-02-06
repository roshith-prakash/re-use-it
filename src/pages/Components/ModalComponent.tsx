import { useEffect, useState } from "react";
import { CodeBlock, Modal, SecondaryButton } from "../../components";

const ModalCode = `import { useEffect, useState, MouseEvent, ReactNode } from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}) => {
  // If the Modal is closing - to animate modal fading out
  const [isClosing, setIsClosing] = useState(false);
  // If the modal is to be displayed
  const [isMounted, setIsMounted] = useState(false);

  // When isOpen is true, set isMounted to mount the modal.
  // When isOpen is false (modal is closed by user) & if the modal is mounted, set isClosing to true to animate modal fading out.
  // After 300 ms, set isMounted to false to unmount the modal.
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setIsClosing(false);
    } else if (isMounted) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMounted(false);
        setIsClosing(false);
        onClose();
      }, 300);
    }
  }, [isOpen, isMounted, onClose]);

  // When the backdrop is clicked, set isClosing to animate modal fading out
  // Unmount the modal after 300 ms
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMounted(false);
        setIsClosing(false);
        onClose();
      }, 300);
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className={\`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity \${
        isClosing ? "opacity-0" : "opacity-100"
      }\`}
      onClick={handleBackdropClick}
    >
      {/* When isClosing is true, fadeOut animation is added to Modal */}
      <div
        className={\`dark:bg-secondarydarkbg scroller \${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        } relative max-h-[90%] w-auto max-w-[95%] min-w-xs overflow-y-auto rounded-xl bg-white p-6 shadow-xl md:max-w-2xl md:min-w-sm dark:border-1 dark:border-white \${className}\`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;`;

const usingCode = `import Modal from './Modal';
import { useState } from "react"

const App = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </p>
            </Modal>
            <button onClick={()=>setIsModalOpen(true)}>Open Modal</button>
      </>
  )
}

`;

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Modal | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Modal>

      <h1 className="text-4xl font-medium">Modal</h1>
      <h2 className="py-5">
        A modal component which is displayed when a condition is met.
      </h2>

      <div className="flex justify-center py-8">
        <SecondaryButton
          text="Open Modal"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>isOpen ( boolean , required):</b> Boolean state which specifies
            whether the modal should be displayed.{" "}
          </li>
          <li>
            {" "}
            <b> onClose (function, required):</b> Function to be executed when
            the modal is closed.
          </li>
          <li>
            {" "}
            <b>children (string or element, required):</b> Content to be
            displayed inside the Modal.{" "}
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override the styles for the
            Modal.
          </li>
        </ul>
      </div>

      <h3>Modal.tsx</h3>
      <CodeBlock code={ModalCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default ModalComponent;
