const removeServerSideStyles = function (): void {
  const style = document.getElementById('server-side-styles');

  if (style) {
    style.parentNode.removeChild(style);
  }
};

export default removeServerSideStyles;
