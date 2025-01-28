import { useEffect, useState } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import { Modal, SecondaryButton } from "../../components";

const ModalCode = `import { MouseEvent, ReactNode } from "react";

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
  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the click is on the backdrop
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div
        className={\`dark:bg-secondarydarkbg scroller animate-opacity relative max-h-[90%] w-auto max-w-[95%] min-w-xs overflow-y-auto rounded-xl bg-white p-6 shadow-xl md:max-w-2xl md:min-w-sm dark:border-2 dark:border-white \${className}\`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
`;

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

      <h1 className="text-center text-2xl font-medium">Modal</h1>
      <h2 className="mt-8 py-5 text-center">
        A Modal component which pops up when a condition is met.
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
            <b>
              className (string, optional): To override the styles for the
              Modal.
            </b>
          </li>
        </ul>
      </div>

      <h3>Modal.tsx</h3>
      <CopyBlock
        text={ModalCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CopyBlock
        text={usingCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default ModalComponent;
