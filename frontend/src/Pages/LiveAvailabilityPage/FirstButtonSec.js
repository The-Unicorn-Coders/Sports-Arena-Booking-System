import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function FirstButtonSec() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          paddingTop: '50px',
          top: '820px',
          left:'50px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '0',
            gap: '14px',
            width: '1156px',
            height: '114px',
            flex: 'none',
            order: '0',
            flexGrow: '0',
            position: 'absolute',
          }}
        >
          <Button
            onClick={() => handleClick('Indoor-Cricket')}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '13px 35px',
              gap: '1px',
              height: '50px',
              borderRadius: '25px',
              flex: 'none',
              flexGrow: '0',
              width: '210px',
              background: activeButton === 'Indoor-Cricket' ? '#1c5555' : '#fff',
              border: '3px solid #1c5555',
              color: activeButton === 'Indoor-Cricket' ? '#fff' : '#1c5555',
            }}
          >
            Indoor-Cricket
          </Button>
          <Button
            onClick={() => handleClick('Swimming')}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '13px 35px',
              gap: '1px',
              height: '50px',
              borderRadius: '25px',
              flex: 'none',
              flexGrow: '0',
              width: '130px',
              background: activeButton === 'Swimming' ? '#1c5555' : '#fff',
              border: '3px solid #1c5555',
              color: activeButton === 'Swimming' ? '#fff' : '#1c5555',
            }}
          >
            Swimming
          </Button>
          <Button
            onClick={() => handleClick('Table-Tennis')}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '13px 35px',
              gap: '1px',
              height: '50px',
              borderRadius: '25px',
              flex: 'none',
              flexGrow: '0',
              width: '130px',
              background: activeButton === 'Table-Tennis' ? '#1c5555' : '#fff',
              border: '3px solid #1c5555',
              color: activeButton === 'Table-Tennis' ? '#fff' : '#1c5555',
            }}
          >
            Table-Tennis
          </Button>
          <Button
            onClick={() => handleClick('Billiard')}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '13px 35px',
              gap: '1px',
              height: '50px',
              borderRadius: '25px',
              flex: 'none',
              flexGrow: '0',
              width: '130px',
              background: activeButton === 'Billiard' ? '#1c5555' : '#fff',
              border: '3px solid #1c5555',
              color: activeButton === 'Billiard' ? '#fff' : '#1c5555',
            }}
          >
            Billiard
          </Button>
        </div>
      </div>
    </div>
  );
}
