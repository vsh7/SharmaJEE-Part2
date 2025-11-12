import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '@/components/Footer'
// import { Footer } from 'react-day-picker'

export const Courses = () => {
  useEffect(() => {
    window.open("https://courses.sharmajee.com/s/store", "_blank");

    // Optional: redirect user back to home (or any page) after opening new tab
    window.location.href = "/";
  }, []);

  // Nothing rendered — page instantly redirects
  return null;
}

export default Courses;
