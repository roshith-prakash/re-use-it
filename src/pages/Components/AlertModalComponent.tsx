import { useEffect, useState } from "react";
import { AlertModal, CodeBlock, SecondaryButton } from "@/components";

const ModalCode = `import { useEffect, useState, ReactNode } from "react";

const AlertModal = ({
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
  // If the AlertModal is closing - to animate modal fading out
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

  if (!isMounted) return null;

  return (
    <div
      className={\`bg-darkbg/80 fixed inset-0 z-50 flex items-center justify-center transition-opacity \${
        isClosing ? "opacity-0" : "opacity-100"
      }\`}
    >
      {/* When isClosing is true, fadeOut animation is added to AlertModal */}
      <div
        className={\`dark:bg-secondarydarkbg scroller \${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        } relative max-h-[90%] w-auto max-w-[95%] min-w-xs overflow-y-auto rounded-xl bg-white p-6 shadow-xl md:min-w-sm dark:border-3 dark:border-white/25 \${className}\`}
      >
        {children}
      </div>
    </div>
  );
};

export default AlertModal;
`;

const usingCode = `import Modal from './Modal';
import { useState } from "react"

const App = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
        <>
          <AlertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div>
              <h1 className="text-2xl font-semibold">Are you sure?</h1>
              <p className="py-5">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
              <div className="mt-5 flex flex-col-reverse flex-wrap justify-end gap-5 md:flex-row">
                <button
                  className={\`border-cta text-cta hover:bg-cta dark:hover:text-darkbg w-full min-w-14 rounded-lg border-2 px-5 py-[0.40rem] transition-all hover:text-white disabled:border-gray-600 disabled:text-gray-600 disabled:hover:scale-100 disabled:hover:bg-transparent md:w-fit dark:border-white dark:text-white dark:hover:bg-white dark:disabled:border-gray-400 dark:disabled:text-gray-400\`}
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
                <button
                  className={\`border-cta bg-cta hover:bg-hovercta hover:border-hovercta disable w-full min-w-14 rounded-lg border-2 px-5 py-2 text-white transition-all disabled:border-gray-500 disabled:bg-gray-500 md:w-fit\`}
                  onClick={() => setIsModalOpen(false)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </AlertModal>
      </>
  )
}

`;

const AlertModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Alert Dialog | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <AlertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <h1 className="text-2xl font-semibold">Are you sure?</h1>
          <p className="py-5">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
          <div className="mt-5 flex flex-col-reverse flex-wrap justify-end gap-5 md:flex-row">
            <button
              className={`border-cta text-cta hover:bg-cta dark:hover:text-darkbg w-full min-w-14 rounded-lg border-2 px-5 py-[0.40rem] transition-all hover:text-white disabled:border-gray-600 disabled:text-gray-600 disabled:hover:scale-100 disabled:hover:bg-transparent md:w-fit dark:border-white dark:text-white dark:hover:bg-white dark:disabled:border-gray-400 dark:disabled:text-gray-400`}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <button
              className={`border-cta bg-cta hover:bg-hovercta hover:border-hovercta disable w-full min-w-14 rounded-lg border-2 px-5 py-2 text-white transition-all disabled:border-gray-500 disabled:bg-gray-500 md:w-fit`}
              onClick={() => setIsModalOpen(false)}
            >
              Confirm
            </button>
          </div>
        </div>
      </AlertModal>

      <h1 className="text-4xl font-medium">Alert Modal</h1>
      <h2 className="py-5">
        A modal that presents critical information to the user and requires
        their response before proceeding.
      </h2>

      <div className="flex justify-center py-8">
        <SecondaryButton
          text="Open Alert Modal"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Installation */}
      <div>
        <p className="text-2xl font-semibold">Installation</p>
        <div className="my-10 flex gap-5">
          <button
            onClick={() => setCodeWindow(false)}
            className={`${!codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            CLI
          </button>
          <button
            onClick={() => setCodeWindow(true)}
            className={`${codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            Manual
          </button>
        </div>
        {codeWindow ? (
          <div>
            <h3 className="py-2 pl-1 italic">
              Copy and save the component as AlertModal.tsx
            </h3>
            <CodeBlock code={ModalCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add AlertModal`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>isOpen ( boolean , required):</b> Boolean state which specifies
            whether the alert dialog should be displayed.{" "}
          </li>
          <li>
            {" "}
            <b> onClose (function, required):</b> Function to be executed when
            the alert dialog is closed.
          </li>
          <li>
            {" "}
            <b>children (string or element, required):</b> Content to be
            displayed inside the Modal.{" "}
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override the default styles.
          </li>
        </ul>
      </div>

      {/* Usage */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default AlertModalComponent;
