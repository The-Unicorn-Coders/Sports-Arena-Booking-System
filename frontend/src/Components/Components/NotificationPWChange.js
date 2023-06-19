import React from 'react';

// Import the CSS file for the component
import '../Styles/NotificationPWChange.css';

/**

This functional component renders a notification for password change.
*/
function NotificationPWChange() {
return (
// Render a div with the class name 'App'
 <div className="App">
   {/* Render a header with a message indicating password change */}
   <header className="App-header">
     <h3 className='header2'>Password Changed!</h3>
     {/* Render a horizontal line */}
     <hr></hr>
     {/* Render a paragraph with a message indicating successful password change */}
     <div className='para1'>Your password has been changed successfully</div>
     {/* Render a button to close the notification */}
     <div><button className="closebtn">Close</button></div>
   </header>
 </div>
);
}
export default NotificationPWChange;