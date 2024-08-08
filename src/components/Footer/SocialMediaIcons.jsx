import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoPinterest,
} from "react-icons/bi";

const SocialMediaIcons = () => {
  return (
    <div className="text-white">
      <ul className="flex gap-5">
        <li>
          <a
            href="#"
            className="block text-3xl transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            <BiLogoFacebookSquare />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-3xl transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            <BiLogoTwitter />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-3xl transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            <BiLogoPinterest />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-3xl transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            <BiLogoInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
