$(document).ready(function () {

  $('img').bind('click', function (evt) {
    var clickedImg = $(this).attr('id');
    var clickedImgClass = $(this).attr('class');

    if (this.className === 'spinpups') {
      this.className = '';
    }
    else {
      this.className = 'spinpups'
    }
  });
});