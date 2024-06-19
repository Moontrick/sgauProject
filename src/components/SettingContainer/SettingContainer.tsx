import {SettingContainerWrapper} from './styles';
import React, {ReactNode} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ErrorModal, ShowLoading } from './components';
import { isErrorOpen, isShowLoading } from '../../app/reducer/SettingStore';


interface SettingContainerProps {
    children: ReactNode;
  }


export const SettingContainer: React.FC<SettingContainerProps> = ({children}) => {
  const dispatch = useDispatch();
  const showLoading = useSelector(isShowLoading)
  const errorModal = useSelector(isErrorOpen)
  return (
        <SettingContainerWrapper id="root">
          {children}
          {(showLoading === 1) && <ShowLoading />}
          {errorModal.isErrorOpen && <ErrorModal errInfo={errorModal.errorInfo} />}
        </SettingContainerWrapper>
  );
};
