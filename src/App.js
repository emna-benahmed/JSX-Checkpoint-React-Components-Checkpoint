import React from "react";
import Address from "./Component/Profil/Address";
import FullName from "./Component/Profil/FullName";
import ProfilePhoto from "./Component/Profil/ProfilePhoto";

function App() {
  return (
    <div className="App">
    
    
     <ProfilePhoto/>
     <div className="na">
     <FullName/>
     <Address/>
     </div>
    </div>
  );
}

export default App;
