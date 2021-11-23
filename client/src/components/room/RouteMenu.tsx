import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { SelectBox } from '@components/room/RouteMenu.style';
import DeviceSelections from '@src/components/setting/DeviceSelections';
import Chat from '@components/room/chat/';
import Users from '@components/user/Users';
import Host from '@components/room/host/';
import Games from '@components/room/games';

const RouteMenu = ({ startVoteRef, sendMessage, GameStartHandlerList }): React.ReactElement => {
  const menuType = useSelector((state: RootState) => state.room.menuType);

  switch (menuType) {
    case '설정':
      return (
        <SelectBox>
          <DeviceSelections />
        </SelectBox>
      );
    case '채팅':
      return <Chat sendMessage={sendMessage} />;
    case '참가자':
      return <Users startVoteRef={startVoteRef} />;
    case '방장':
      return <Host />;
    case '게임':
      return <Games GameStartHandlerList={GameStartHandlerList} />;
    default:
      return <></>;
  }
};

export default RouteMenu;