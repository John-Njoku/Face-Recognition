import React, { useEffect, useRef, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";


const whiteList = ["/protected"];

function Layout() {
  const location = useLocation();
  const [account, setAccount] = useState(null);


  useEffect(() => {
    // Reference to the 'faceAuth' node in Firebase Realtime Database
    const faceAuthRef = ref(database, "faceAuth");

    // Listen for changes in the 'faceAuth' data
    onValue(faceAuthRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAccount(data.account); // Set account state from Firebase data
      } else {
        setAccount(null); // If no data, clear the account state
      }
    });
  }, []);




  if (!account && whiteList.includes(location.pathname)) {
    return <Navigate to="/" />;
  }

  if (account && !whiteList.includes(location.pathname)) {
    return <Navigate to="/protected" />;
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <Outlet className="grow" />
      <Footer />
    </div>
  );
}

export default Layout;
