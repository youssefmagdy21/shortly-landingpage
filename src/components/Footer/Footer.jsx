import FooterList from "./FooterList";
import SocialMediaIcons from "./SocialMediaIcons";
import footerLogo from "/src/assets/images/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-darkViolet">
      <div className="flex flex-col items-center gap-11 px-6 py-12 md:px-16 md:py-16 lg:flex-row lg:items-start lg:gap-[2.6875rem] lg:px-32 xl:gap-20 xl:px-40">
        <div className="lg:mr-auto">
          <img src={footerLogo} alt="footer logo" className="max-w-max" />
        </div>

        <FooterList
          listTitle={"Features"}
          listItems={[
            { name: "Link Shortening", link: "#" },
            { name: "Branded Links", link: "#" },
            { name: "Analytics", link: "#" },
          ]}
        />
        <FooterList
          listTitle={"Resources"}
          listItems={[
            { name: "Blog", link: "#" },
            { name: "Developers", link: "#" },
            { name: "Support", link: "#" },
          ]}
        />
        <FooterList
          listTitle={"Company"}
          listItems={[
            { name: "About", link: "#" },
            { name: "Our Team", link: "#" },
            { name: "Careers", link: "#" },
            { name: "Contact", link: "#" },
          ]}
        />

        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
