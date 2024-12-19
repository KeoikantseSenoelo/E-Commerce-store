import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full absolute top-0 left-0 bg-white flex flex-col items-center py-4 space-y-6">
      
      {/* Green Icon (First Icon) */}
      <div className="p-2 rounded hover:bg-gray-300">
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4874 1L9.76744 0.999999L8.24165 8.93076H7.24165L8.88014 0.414182H8.88119L8.95741 0.0180054L22.6737 0.0180083L22.5975 0.414182H22.6001L20.9616 8.93076H19.9616L21.4874 1Z"
            fill="#105E46"
          />
          <rect
            width="18.5019"
            height="22.2023"
            transform="matrix(1 0 -0.188924 0.981992 5.49811 9.66516)"
            fill="#12805D"
          />
          <rect
            width="18.5019"
            height="22.2023"
            transform="matrix(1 0 -0.188924 0.981992 4.19452 8.50879)"
            fill="#02D693"
          />
        </svg>
      </div>

      {/* Other Sidebar Icons */}
      <ul className="space-y-6 flex-1">
        {/* Icon 2 */}
        <li className="p-2 rounded hover:bg-gray-300">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.125 15.8342H20H27.875M12.125 20.7092H27.875M12.125 25.5842H27.875"
              stroke="#1A1F16"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </li>
{/* Icon 3 - Link to Product Page */}
<li className="p-2 rounded hover:bg-gray-300">
  <Link to="/Product">
    <img
      src="/Assets/Nav-Link.png" // Update with the actual path to your image
      alt="Product"
      width="40" // You can adjust the width and height as per the image size
      height="40"
    />
  </Link>
</li>
  {/* Icon 4 - Link to BagPage.js */}
<li className="p-2 rounded hover:bg-gray-300">
  <Link to="/bag">
    <img
      src="/Assets/NavLink.png" // Update with the actual path to your image
      alt="Bag"
      width="" // Adjust size if necessary
      height="40"
      
    />
  </Link>
</li>
      </ul>

      {/* Red Icon at the very bottom with Link to BagPage.js */}
      <div className="mt-auto cursor-pointer">
        <Link to="/bag">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="10" fill="#E5252C" />
            <path
              d="M15.5 20C15.5 19.8011 15.579 19.6103 15.7197 19.4697C15.8603 19.329 16.0511 19.25 16.25 19.25H23V14.375C23 12.875 21.4161 11.75 20 11.75H12.875C12.179 11.7507 11.5118 12.0275 11.0197 12.5197C10.5275 13.0118 10.2507 13.679 10.25 14.375V25.625C10.2507 26.321 10.5275 26.9882 11.0197 27.4803C11.5118 27.9725 12.179 28.2493 12.875 28.25H20.375C21.071 28.2493 21.7382 27.9725 22.2303 27.4803C22.7225 26.9882 22.9993 26.321 23 25.625V20.75H16.25C16.0511 20.75 15.8603 20.671 15.7197 20.5303C15.579 20.3897 15.5 20.1989 15.5 20ZM29.5302 19.4698L25.7802 15.7198C25.6384 15.5851 25.4495 15.5111 25.254 15.5136C25.0584 15.5161 24.8715 15.5949 24.7332 15.7332C24.5949 15.8715 24.5161 16.0584 24.5136 16.254C24.5111 16.4495 24.5851 16.6384 24.7198 16.7802L27.1892 19.25H23V20.75H27.1892L24.7198 23.2198C24.6473 23.2888 24.5892 23.3716 24.5492 23.4633C24.5091 23.555 24.4878 23.6539 24.4865 23.754C24.4852 23.8541 24.504 23.9534 24.5417 24.0461C24.5794 24.1389 24.6353 24.2231 24.7061 24.2939C24.7769 24.3647 24.8611 24.4206 24.9539 24.4583C25.0466 24.496 25.1459 24.5148 25.246 24.5135C25.3461 24.5122 25.445 24.4909 25.5367 24.4508C25.6284 24.4108 25.7112 24.3527 25.7802 24.2802L29.5302 20.5302C29.6707 20.3895 29.7497 20.1988 29.7497 20C29.7497 19.8012 29.6707 19.6105 29.5302 19.4698Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
