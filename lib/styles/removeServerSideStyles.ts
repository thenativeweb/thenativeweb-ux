const removeServerSideStyles = function (): void {
  const style = document.getElementById('server-side-styles');

  if (!style) {
    return;
  }
  if (!style.parentNode) {
    return;
  }

  style.parentNode.removeChild(style);
};

export default removeServerSideStyles;
