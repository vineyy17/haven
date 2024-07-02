import React from 'react';
import '@/styles/pages/Contactpage.scss';
import NavMenu from '@/components/NavMenu';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contactPage__container">
        <NavMenu />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
