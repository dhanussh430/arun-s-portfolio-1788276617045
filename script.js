

document.addEventListener(
  'DOMContentLoaded',
  () => {

    const ctaButton =
      document.querySelector('.cta');


    if (ctaButton) {

      ctaButton.addEventListener(
        'click',
        () => {

          const footer =
            document.querySelector('footer');


          if (footer) {

            footer.scrollIntoView({
              behavior: 'smooth'
            });

          }

        }
      );

    }

  }
);

