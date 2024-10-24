import React from "react";

function Footer(prob) {
  function HandleDelete() {
    prob.Cle();
  }

  const year = new Date().getFullYear();
  return (
    <footer>
      <button onClick={HandleDelete} className="icon-button">
        <img
          src="https://cdn4.iconfinder.com/data/icons/content-35/32/clear-ui-cancel-letter_x-button-cross-delete-512.png"
          srcSet="https://cdn4.iconfinder.com/data/icons/content-35/32/clear-ui-cancel-letter_x-button-cross-delete-1024.png"
          alt="cancel icon"
          className="button-image"
        />
      </button>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;