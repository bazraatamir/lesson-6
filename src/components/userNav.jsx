import React, {useState} from "react";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div>
      <nav className='relative'>
        <button onClick={handleClick}>click</button>
        {isOpen && (
          <ul className='absolute top-12'>
            <li>hello</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default UserNav;
