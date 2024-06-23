import { ReactNode } from "react";

import classNames from "classnames/bind";
import styles from "../PopupList.module.scss";
const cn = classNames.bind(styles);

interface IPopupListWrapProps {
   children: ReactNode;
   isOpen: boolean;
}

const PopupListWrap = ({ children, isOpen }: IPopupListWrapProps) => {
   return (
      <div className={cn("popupListWrap", isOpen && "_open")}>{children}</div>
   );
};

export default PopupListWrap;
