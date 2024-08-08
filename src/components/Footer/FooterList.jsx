const FooterList = ({ listTitle, listItems }) => {
  return (
    <div className="text-center text-sm capitalize md:text-base lg:text-start">
      <h5 className="mb-6 font-bold text-white">{listTitle}</h5>
      <ul className="space-y-3 text-neutral-grayishViolet">
        {listItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="block transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterList;

// <div className="text-base capitalize">
//   <p className="mb-6 font-bold text-white">{title}</p>
//   <ul className="text-neutral-grayishViolet">
//     {listItems.map((item) => {
//       return (
//         <li
//           className="mb-3 transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
//           key={item}
//         >
//           <a href="/" className="block">
//             {item}
//           </a>
//         </li>
//       );
//     })}
//   </ul>
// </div>
{
  /* 
        <li>
          <a
            href="#"
            className="block transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            about
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            our team
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
          >
            contact
          </a>
        </li> */
}
