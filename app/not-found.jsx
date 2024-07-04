import NavMenu from '@/components/NavMenu';
import React from 'react';
import '@/styles/pages/NotFound.scss';
import Button from '@/components/Button';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Haven - 404',
};

const NotFoundPage = () => {
  return (
    <div class="y__error">
      <NavMenu color="brown" />
      <div class="y__error_wrap">
        <div class="y__error_wrap_marquee">
          <div class="span_slider">
            <h1 class="span_slider_wrap">
              <span class="span_slider_wrap_txt">Page not found</span>
              <span class="span_slider_wrap_txt">Page not found</span>
              <span class="span_slider_wrap_txt">Page not found</span>
            </h1>
            <h1 class="span_slider_wrap">
              <span class="span_slider_wrap_txt">Page not found</span>
              <span class="span_slider_wrap_txt">Page not found</span>
              <span class="span_slider_wrap_txt">Page not found</span>
            </h1>
          </div>
        </div>
        <div class="y__error_wrap_inner">
          <p data-animation="h">
            Oops, it looks like this page has taken a day off. But while
            you&apos;re here, why not browse our exquisite furniture collection?
            Your dream home awaits!
          </p>
          <Button color="brown">Back to home</Button>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
