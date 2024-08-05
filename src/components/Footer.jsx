import FooterList from "./FooterList";
import SocialMediaIcons from "./SocialMediaIcons";
import logo from "../assets/images/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full items-start gap-20 bg-neutral-darkViolet px-32 py-16">
      <span className="mr-auto">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </span>
      <FooterList
        title={"Features"}
        listItems={["Link Shortening", "Branded Links", "Analytics"]}
      />
      <FooterList
        title={"Resources"}
        listItems={["Blog", "Developers", "Support"]}
      />
      <FooterList
        title={"Company"}
        listItems={["About", "Our Team", "Careers", "Contact"]}
      />
      <SocialMediaIcons />
    </footer>
  );
};
export default Footer;
