import { useState, useEffect } from "react";
import { useLogin } from "../Authentication/LoginContext";
import LoginCard from "../Authentication/LoginCard";
import { Link } from "react-router-dom";
import MainNav from './MainNav';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [jewelleryOpen, setJewelleryOpen] = useState(false);
  const { user, handleSignOut } = useLogin();
  let timeoutId;

  const categories = {
    JEWELLERY: [
      ['CHAIN', 'JEWELLERY SET', 'JHUMKA'],
      ['NECKLACE', 'RINGS', 'LOCKET'],
      ['BANGLES', 'EARRINGS', 'HARAM'],
      ['BRACELETS', 'PENDANT', 'KADA'],
      ['NOSE STUDS', 'ANKLETS', 'PAYAL'],
      ['CHOKER SET', 'PEARL', 'SECOND STUD'],
      ['DAILY WEAR', 'STUDS', ''],
      ['VADDANAM', 'MOTI SET', ''],
    ],
    METALS: [
      'GOLD',
      'DIAMOND',
      'SILVER',
      'PLATINUM',
      'GEMSTONE',
      'WHITE GOLD',
      'ROSE GOLD'
    ],
    WEDDING: [
      'BRIDAL SET',
      'MANGALSUTRA',
      'COUPLE RINGS',
      'ENGAGEMENT RINGS',
      'BRIDAL NATH',
      'MAANG TIKKA',
      'ANNIVERSARY'
    ],
    FOR: [
      'BABY',
      'KIDS',
      'GIRLS',
      'BOYS',
      'MEN',
      'WOMEN',
      'BRIDE',
      'GROOM'
    ],
    PURITY: [
      '18 CARAT',
      '20 CARAT',
      '22 CARAT',
      '24 CARAT'
    ]
  };

  const handleProductClick = (category) => {
    setJewelleryOpen(false);
  };

  // Automatically close the login modal when the user is logged in
  useEffect(() => {
    if (user) {
      setLoginOpen(false);
    }
  }, [user]);

  return (
    <>
      <MainNav 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
        jewelleryOpen={jewelleryOpen}
        setJewelleryOpen={setJewelleryOpen}
        timeoutId={timeoutId}
        categories={categories}
        handleProductClick={handleProductClick}
      />

      {/* Login Card - Only show when loginOpen is true and user is not logged in */}
      {loginOpen && !user && (
        <LoginCard 
          isOpen={loginOpen} 
          onClose={() => setLoginOpen(false)} 
        />
      )}
    </>
  );
}

export default Navigation;
