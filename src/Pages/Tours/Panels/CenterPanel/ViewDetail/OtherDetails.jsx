import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdAdd } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import HotelDetail from "./HotelDetail";
import SightSheeingsic from "./SightSheeingsic";
import SightSheeingpvt from "./SightSheeingpvt";
import SightSheeingtktonly from "./SightSheeingtktonly";
import Transfersic from "./Transfersic";
import Transferpvt from "./Transferpvt";
import Meal from "./Meal";
import ExtraActivity from "./ExtraActivity";
import Visa from "./Visa";
import Flight from "./Flight";
import AddTotalCost from "../../Models/AddTotalCost";
import PaxMarkup from "../../Models/PaxMarkup";
import axios from "axios";
import { BaseUrl } from "../../../../../Reducers/Api";
import { useParams } from "react-router-dom";
import QueryForAllDates from "./QueryForAllDates";
import { useSelector } from "react-redux";
const OtherDetails = () => {
  const navigate = useNavigate();
  const [totalCostShow, settotalCostShow] = useState(false);
  const [paxMarkupShow, setpaxMarkupShow] = useState(false);
  const [queryDetail, setqueryDetail] = useState({});
  const [destinationList, setdestinationList] = useState([]);
  const queryHotelList = useSelector((state) => state.mainQuery.hotelManual);

  const querySightSeeingList = useSelector(
    (state) => state.mainQuery.sightSeeingManual
  );

  const queryTransferList = useSelector(
    (state) => state.mainQuery.transferManul
  );
  const { id } = useParams();
  const handleCloseTotalShow = () => {
    settotalCostShow(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const handleCloseMarkupShow = () => {
    setpaxMarkupShow(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };

  useEffect(() => {
    getQueryDetail();
  }, []);

  const getQueryDetail = async () => {
    await axios
      .post(BaseUrl + "getTourQueryDetails", { tourQueryId: id })
      .then((res) => {
        console.log("getTourQueryDetails", res.data.destList);
        setdestinationList(res.data.destList);
        setqueryDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitFinalObject = () => {
    const submitObject = {
      queryQuotationId: id,
      quoteTitle: "",
      nofAdult: "",
      nofChild: "",
      nofInfant: "",
      serviceType: "", // 1 - Complete package, 2 - Extra service, 3 - Flight Only, 4 - Hotel Only, 5 - Land Part, 6- Transfer Only, 7 - Visa Only
      sglRoom: "",
      dblRoom: "",
      trplRoom: "",
      quadRoom: "",
      cwbRoom: "",
      cnbRoomAbove05: "",
      cnbRoomBelow05: "",
      infRoom: "",
      queryHotelList: queryHotelList,
      querySightSeeingList: querySightSeeingList,
      queryTransferList: queryTransferList,
    };

    //     setQueryQuotation
    // getQueryQuotationDetails
    // editQueryQuotation
    // listQueryQuotation

    console.log(`${JSON.stringify(submitObject, null, 2)}`);

    axios
      .post(BaseUrl + "editQueryQuotation", submitObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {totalCostShow === true && (
        <AddTotalCost onCloseModal={handleCloseTotalShow} />
      )}
      {paxMarkupShow === true && (
        <PaxMarkup onCloseModal={handleCloseMarkupShow} />
      )}
      <div className="p-5">
        <div className="flex p-5 space-x-3 bg-gray-300">
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-orange-500 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <MdArrowBack size={15} />
            Go Back
          </span>
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-teal-500 cursor-pointer"
            onClick={() => settotalCostShow(true)}
          >
            <MdAdd size={15} />
            Add Total Cost
          </span>
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-red-500 cursor-pointer"
            onClick={() => setpaxMarkupShow(true)}
          >
            <MdAdd size={15} />
            Add Per Pax Markup
          </span>
          <span className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer">
            <RiGalleryFill />
            Preview
          </span>
          <span className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer">
            <RiGalleryFill />
            Preview Detailed
          </span>
        </div>
      </div>
      <div className="px-5">
        <div className="grid grid-cols-3 text-center text-white bg-teal-500 divide-x">
          <div className="flex-col p-2">
            <div className="text-md">Adult Cost</div>
            <div>THB 36</div>
          </div>
          <div className="flex-col p-2">
            <div className="text-md">Child Cost</div>
            <div>THB 26</div>
          </div>
          <div className="flex-col p-2">
            <div className="text-md">Infant Cost</div>
            <div>THB 10</div>
          </div>
        </div>
      </div>

      <QueryForAllDates dateRange={destinationList} />
      <div className="flex justify-end flex-auto px-5 py-3">
        <button
          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => submitFinalObject()}
        >
          Save All
        </button>
      </div>
      {/* {destinationList?.map((item, index) => (
        <div key={index}>{item.destination}</div>
      ))} */}
      {/* <div>
        <HotelDetail />
      </div>
      <div>
        <SightSheeingsic />
        <SightSheeingpvt />
        <SightSheeingtktonly />
      </div>
      <div>
        <Transfersic />
        <Transferpvt />
      </div>
      <div>
        <Meal />
      </div>
      <div>
        <ExtraActivity />
      </div>
      <div>
        <Visa />
      </div>
      <div>
        <Flight />
      </div> */}
    </>
  );
};

export default OtherDetails;
