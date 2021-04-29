export default class ShareSocials {
    constructor() {
        this.init();
    }

    // isPost = () => {
    //     return $('.td-post-title').length;
    // };

  listenButtonShareClick = () => {
      // more share click available on mobile and tablet
      $('.more-share').click(() => {
          if (navigator.share) {
              navigator
                  .share({
                      title: document.title,
                      text: 'FADI Join Stock Company',
                      url: window.location.href,
                  })
                  .then(() => 0)
                  .catch((error) => {
                      // eslint-disable-next-line no-console
                      console.log(error);
                  });
          }
      });

      // listen sharefb button click
      $('.share-facebook').on('click', function () {
          window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                  window.location
              )}`,
              'pop',
              'width=600, height=400, scrollbars=no'
          );
          return false;
      });
  };

  init = () => {
      //   if (this.isPost()) {
      //       $('.td-post-title').after(TEMPLATE.SOCIALS_TEMPLATE);
      //       this.listenButtonShareClick();
      //   }
      this.listenButtonShareClick();
  };
}
