import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";

const SocialMediaIcons = () => {
  const socialIcons = [
    { src: iconFacebook, id: "fic" },
    { src: iconTwitter, id: "tic" },
    { src: iconPinterest, id: "pic" },
    { src: iconInstagram, id: "igic" },
  ];

  return (
    <ul className="flex items-center gap-5">
      {socialIcons.map((icon) => {
        return (
          <li key={icon.id}>
            <a href="/" className="block">
              <img src={icon.src} alt="" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialMediaIcons;
