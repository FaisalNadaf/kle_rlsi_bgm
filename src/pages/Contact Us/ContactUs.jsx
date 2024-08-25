import React, { useState } from "react";
import MagButton from "../../components/magnitoButton/MagButton";
import { useAccordionButton } from "react-bootstrap";
import ConnectForm from "../../components/ConnectForm/ConnectForm";

const ContactUs = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className=" h-screen w-screen px-28  ">
      <div className="pt-52 pb-2 text-3xl font-normal ">Contact us</div>
      <div className="flex items-center justify-evenly py-6 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1030.5266193251612!2d74.50574201690121!3d15.865471625258424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66af3b639213%3A0xef0ad5fed0ce676c!2sKLE&#39;S%20College%20of%20BCA%2C%20RLSI!5e1!3m2!1sen!2sin!4v1724482872136!5m2!1sen!2sin"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow"
        ></iframe>
        {hide && <ConnectForm setHide={setHide} />}
        <div className="w-1/4">
          <div className="h-[250px] ">
            <p className="hover:text-black text-xl font-medium text-gray-600">
              KLE’S
            </p>
            <p className="hover:text-black text-sm text-gray-600 my-2">
              R.L.SCIENCE INSTITUTE
            </p>
            <p className="hover:text-black text-sm text-gray-600">
              BACHELOR OF COMPUTER APPLICATION
            </p>
            <p className="hover:text-black text-sm text-gray-600">
              COLLEGE ROAD, BELAGAVI
            </p>
            <p className="hover:text-black text-sm text-gray-600 mb-2">
              KARNATAKA – INDIA
            </p>
            <p className="hover:text-black text-sm text-gray-600">
              Office: +91 831 2461928
            </p>
            <p className="hover:text-black text-sm text-gray-600 font-semibold">
              Cell : 7899393919
            </p>
            <p className="hover:text-black text-sm text-gray-600">
              E-mail: info@rlsbca.edu.in
            </p>
          </div>
          <div className="flex items-center justify-center">
            {!hide && (
              <div className="rounded-full  " onClick={() => setHide(true)}>
                {" "}
                <MagButton
                  onClick
                  h={"10"}
                  w={"10"}
                  p={"20000"}
                  txt={"Connect"}
                  bg={"#d186fc"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
