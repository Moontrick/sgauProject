import React, { ReactNode, useEffect } from 'react';
import {ModalBox, useStyles} from './styles';
import { Button, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
interface ModalInfoInterface {
    open: boolean;
    children: ReactNode;
    style?: React.CSSProperties | undefined;
    onClose: () => void
}
    
export const CustomModal = ({open, children,onClose,  style} : ModalInfoInterface) => {
    const classes = useStyles()
  return (
    <Modal open={open} onClose={onClose}>
        <ModalBox>
            <div className={classes.root}>
                {children}
            </div>
            <Button onClick={() => onClose()} >
                <CloseIcon />
             </Button>
        </ModalBox>
    </Modal>
  );
}

