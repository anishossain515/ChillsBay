import React from 'react';
import { FooterData } from '../Utilities/Data';
import { Button } from '@nextui-org/react';

function Footer() {
  const { socialIcons, sections } = FooterData;

  const MenuSection = ({ menus, title }) => {
    return (
      <div className="mt-5">
        <p className="text-Dark_Indigo font-bold uppercase">{title}</p>
        <hr className="my-7" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {menus.map((menu, index) => (
            <ul key={index} className="space-y-3">
              {menu.items.map((item, indx) => (
                <li key={indx} className="text-[#656B89] hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  };

  return (
    <footer className="py-20 px-5 lg:px-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-4">
          <img src="/logo.png" alt="Logo" className="mb-6" />
          <p className="text-Dark_Indigo">Copyright {new Date().getFullYear()} ©</p>
          <div className="flex items-center gap-4 pt-6">
            {socialIcons.map((icon, inx) => (
              <a href={icon.link} key={inx} target="_blank" rel="noopener noreferrer" className="flex">
                <img src={icon.img} alt="SocialIcon" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-8 col-span-4 grid grid-cols-1 xl:grid-cols-3 2xl:gap-10 gap-5">
          {sections.map(({ title, menuLink }, index) => (
            <MenuSection key={index} title={title} menus={menuLink} />
          ))}
          <div className="bg-[#F5FAFF] px-6 py-[30px] rounded-2xl flex flex-col max-w-[288px]">
            <img src="/footerCardImg.png" alt="FooterCardImg" className="size-[54px] object-cover mb-4" />
            <h3 className="text-Dark_Indigo font-bold text-xl">Become a Partner</h3>
            <p className="text-[#656B89] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.
            </p>
            <Button color="primary" className="mt-6 shadow-lg">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
