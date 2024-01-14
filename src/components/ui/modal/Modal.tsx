import { ReactNode } from "react";
import { ModalnContainer } from "./styled";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <ModalnContainer>
      {props.isOpen && (
        <div className="overlay-background" onClick={props.toggle}>
          <div className="modal-overlay" onClick={props.toggle}>
            <div onClick={(e) => e.stopPropagation()} className="modal-box">
              {props.children}
            </div>
          </div>
        </div>
      )}
    </ModalnContainer>
  );
}
