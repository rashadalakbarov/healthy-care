import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../datas/info";

const Appointment = () => {
  const { docId } = useParams();
  const { doctorsData, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctorsData.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctorsData, docId]);

  return (
    docInfo && (
      <div>
        {/* Doctor Details  */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-[#5f6fff] w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {docInfo.name}
              <img src={assets.verified_icon} className="w-5" alt="" />
            </p>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* Doctor About  */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
                About <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p class="text-gray-600 font-medium mt-4">
              Appointment fee:
              <span class="text-gray-800">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
