import React, { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import PersonalInformation from "./PersonalInformation";
import ChangePassword from "./ChangePassword";
// import CompanyInformation from "../PostAd/CompanyInformation";
import DeleteAccount from "./DeleteAccount";
import CompanyInformationSettings from "./CompanyInformation";
// import PersonalInformation from "./PersonalInformation";

function ProfileView() {
  const [currentView, setCurrentView] = useState("profileSettings");

  return (
    <>
      {currentView === "profileSettings" && <ProfileSettings setCurrentView={setCurrentView} />}
      {currentView === "PersonalInformation" && <PersonalInformation />}
      {currentView === "ChangePassword" && <ChangePassword />}
      {currentView === "CompanyInformation" && <CompanyInformationSettings />}
      {currentView === "DeleteAccount" && <DeleteAccount />}
    </>
  );
}

export default ProfileView;
