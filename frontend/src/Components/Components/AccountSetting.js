import React from 'react'// import React
import '../Styles/AccountSettingPage';// import CSS file
import TextField from '@mui/material/TextField';// import TextField component from Material-UI

function AccountSettingPage() {
  return (
    <div  className="App">
        <header className="App-header">
        <div className='vl'></div>
        
        {/* Title of the page */}
        <h2 className='head1'> Account Setting</h2>
        <form>
          {/* Text fields for First Name, Last Name and Email Address */}
          <TextField id="outlined-basic" label="First Name" placeholder="First name" variant="outlined" className="Fname" />
          <TextField id="outlined-basic" label="Last Name" placeholder="Last name" variant="outlined" className ="LName" />
          <TextField id="outlined-basic" label =" Email Address"placeholder="Email Address" variant="outlined" className='email' />
          
          {/* Buttons to Save and navigate to other sections */}
          <div><button className="submit">Save</button></div>
          <div><button className="submit1">Account</button></div>
          <div><button className="submit2">Security</button></div>
        </form>
      </header>
    </div>
  );
}
export default AccountSettingPage;