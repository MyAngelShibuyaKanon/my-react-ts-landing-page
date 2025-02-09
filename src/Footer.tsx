import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className='flex flex-col items-center justify-end gap-[.5rem]  mt-12 py-[1rem]'>
      <div className='flex flex-row gap-[1rem]'>
        <FaFacebookSquare size='2rem' />
        <FaInstagram size='2rem' />
        <FaTwitter size='2rem' />
        <FaLinkedin size='2rem' />
      </div>
      <p>
        Copyright ©2025 All rights reserved
      </p>
    </div>
  )
}
