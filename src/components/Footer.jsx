import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-[#a3a3a3] pt-16 pb-8 font-sans">
      <div className="max-w-350 mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <h2 className="text-white text-2xl font-bold mb-6">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-relaxed">
              CS-Ticket is a widely used and trusted open source support ticketing system. Easily scale and streamline your customer service and drastically improve your customer's experience.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-6">Company</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact Saled
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-6">Services</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Products & Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-6">Information</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-6">
              Social Links
            </h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#" className="flex items-center group">
                  <span className="w-5 h-5 text-black bg-white rounded-full flex items-center justify-center mr-3 shrink-0">
                    <FaXTwitter />
                  </span>
                  <span className="text-sm group-hover:text-white transition-colors truncate">
                    @CS — Ticket System
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center group">
                  <span className="w-5 h-5 text-black bg-white rounded-full flex items-center justify-center mr-3 shrink-0">
                    <FaLinkedinIn />
                  </span>
                  <span className="text-sm group-hover:text-white transition-colors truncate">
                    @CS — Ticket System
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center group">
                  <span className="w-5 h-5 text-black bg-white rounded-full flex items-center justify-center mr-3 shrink-0">
                    <FaFacebookF />
                  </span>
                  <span className="text-sm group-hover:text-white transition-colors truncate">
                    @CS — Ticket System
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@cst.com"
                  className="flex items-center group"
                >
                  <span className="w-5 h-5 text-black bg-white rounded-full flex items-center justify-center mr-3 shrink-0">
                    <MdEmail />
                  </span>
                  <span className="text-sm group-hover:text-white transition-colors truncate">
                    support@cst.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#262626] pt-8">
          <p className="text-center text-sm text-white">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
