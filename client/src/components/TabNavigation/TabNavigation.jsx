import React from "react";
import home from "../../assets/images/home.svg";
import list from "../../assets/images/list.svg";
import pieChart from "../../assets/images/pie-chart.svg";
import plusCircle from "../../assets/images/plus-circle.svg";
import settings from "../../assets/images/settings.svg";
import "./TabNavigation.css";
import { useDispatch, useSelector } from "react-redux";
import { handleClickTab } from "../../views/redux/TabNavigation/TabNavigationSlice";
import { useNavigate } from "react-router-dom";

const tabs = [
  {
    label: "Post an Ad",
    icon: plusCircle,
    path: "/post-ad",
  },
  {
    label: "Packages",
    icon: pieChart,
    path: "/",
  },
  {
    label: "Home",
    icon: home,
    path: "/",
  },
  {
    label: "My Ads",
    icon: list,
    path: "/",
  },
  {
    label: "Settings",
    icon: settings,
    path: "/profile-settings",
  },
];

const TabNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const currentActiveNavigationTab = useSelector(
  //   (state) => state.tabNavigation.currentActiveNavigationTab
  // );

  const isActive = (path) => {
    if (window.location.pathname === path) {
      return true;
    }
    return false;
    // currentActiveNavigationTab;
  };

  const handleClickTabNav = (index, path) => {
    navigate(path);
    dispatch(handleClickTab(index));
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "50px", width: "100%" }}
    >
      <div className="d-flex justify-content-between" style={{ width: "40vw" }}>
        {tabs.map((tab, index) => (
          <div
            className={`d-flex align-items-center ${
              isActive(tab.path) && "tab-active"
            }`}
            onClick={() => handleClickTabNav(index, tab.path)}
          >
            {" "}
            <img src={tab.icon} alt={tab.icon} className="me-2" />
            {tab.label}
          </div>
        ))}
        {/* <div className="d-flex align-items-center tab-active">
          {" "}
          <img src={plusCircle} alt="plusCircle" className="me-2" />
          Post an Ad
        </div>
        <div
          className={`d-flex align-items-center ${isActive(1) && "tab-active"}`}
        >
          {" "}
          <img src={pieChart} alt="pieChart" className="me-2" />
          Packages
        </div>
        <div className="d-flex align-items-center">
          {" "}
          <img src={home} alt="home" className="me-2" />
          Home
        </div>
        <div className="d-flex align-items-center">
          {" "}
          <img src={list} alt="list" className="me-2" />
          My Ads
        </div>
        <div className="d-flex align-items-center">
          {" "}
          <img src={settings} alt="settings" className="me-2" />
          Settings
        </div> */}
      </div>
    </div>
  );
};

export default TabNavigation;
