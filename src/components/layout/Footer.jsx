import style from "../../static/styles/Footer.module.scss";

const Footer = () => {
  const links = [
    {
      name: "Customer Services",
      listLinks: [
        "Help & Contact Us",
        "Returns & Refunds",
        "Online Stores",
        "Terms & Conditions",
      ],
    },
    {
      name: "Company",
      listLinks: ["What We Do", "Available & Refunds", "Lastest Posts", "FAQs"],
    },
    {
      name: "Social Media",
      listLinks: ["Twitter", "Instagram", "Facebook", "Pinterest"],
    },
  ];
  return (
    <div className={style.footer}>
      {links.map((item) => {
        return (
          <ul key={item.name} className={style.footer_listItem}>
            <h4 className={style.footer_title}>{item.name}</h4>
            {item.listLinks.map((link, id) => {
              return (
                <li key={id} className={style.footer_list_link}>
                  <p>{link}</p>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Footer;
