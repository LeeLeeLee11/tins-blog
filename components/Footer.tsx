
import React from 'react'

const Footer = () => {
    return (<div className={`bottom-0 max-w-2xl p-4 fixed`}>
        <p className='justify-self-center'>
            &copy; {(new Date).getFullYear()} Trung Tin Nguyen
        </p>
    </div>);
}
 
export default Footer;
