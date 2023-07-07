import React from 'react';

const ThemeDark = ({ isThemeDark, onClick }) => {
  return (
    <div className='dark-btn'>
      {isThemeDark ? (
        <i onClick={onClick} className='bx bxs-toggle-right bx-lg'></i>
      ) : (
        <i onClick={onClick} className='bx bxs-toggle-left bx-lg'></i>
      )}
    </div>
  )
}
export default ThemeDark