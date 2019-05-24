const removeServerSideStyles = function () {
  const style = document.getElementById('server-side-styles');

  if (style) {
    style.parentNode.removeChild(style);
  }
};

export default removeServerSideStyles;
