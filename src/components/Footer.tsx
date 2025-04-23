import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--brand-bg)] text-[var(--brand-text)] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Empowering children through education and sport. Building brighter
            futures one community at a time.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/who-we-are" className="hover:text-orange-400">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/what-we-do" className="hover:text-orange-400">
                What We Do
              </Link>
            </li>
            <li>
              <Link to="/impact" className="hover:text-orange-400">
                Our Impact
              </Link>
            </li>
            <li>
              <Link to="/get-involved" className="hover:text-orange-400">
                Get Involved
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@qualigiate.com</li>
            <li>Phone: :011-46018994, 9415829212, 9654997875, 9540913200</li>
            <li>Address: Address :5-A-2 Main Market New Delhi DL 110076</li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Qualigiate . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
