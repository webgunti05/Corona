import React, { useState, useEffect } from "react";
import {
  getGlobalData,
  getEffectedCountries,
  getCasesByCountry,
} from "../services/globalService";
import Cards from "../components/subpages/cards";
import CountriesSelect from "../components/subpages/countriesSelect";

const GlobalData = () => {
  const [globData, setGlobData] = useState({});
  const [effectedCountries, setEffectedCountries] = useState([]);
  const [searchParam, setSearchParam] = useState({
    keyword: "",
  });
  const [data, setData] = useState({});
  const [clr, setClr] = useState("red");
  const [bgColor, setBgColor] = useState("#007bff");
  const [blk, setBlk] = useState("#000000");
  const [grn, setGrn] = useState("#28a745");
  const [red, setRed] = useState("#ff0000");

  //Tptol cases by world wide
  useEffect(() => {
    const getUniverseData = async () => {
      const gbData = await getGlobalData();
      setGlobData(gbData);
    };

    getUniverseData();
  }, []);

  //Effected Countries
  useEffect(() => {
    const getDatabyCountries = async () => {
      const dtByCountries = await getEffectedCountries();
      setEffectedCountries(dtByCountries);
    };

    getDatabyCountries();
  }, []);

  let clrCode =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  let clrCode2 =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  let clrCode3 =
    "rgb(" +
    Math.floor(Math.random() * 200) +
    "," +
    Math.floor(Math.random() * 200) +
    "," +
    Math.floor(Math.random() * 200) +
    ")";

  let clrCode4 =
    "rgb(" +
    Math.floor(Math.random() * 100) +
    "," +
    Math.floor(Math.random() * 100) +
    "," +
    Math.floor(Math.random() * 100) +
    ")";

  const changeCountry = async (country) => {
    searchParam.keyword = country;

    setSearchParam(searchParam);
    setClr(clrCode);
    setBgColor(clrCode);
    setBlk(clrCode2);
    setGrn(clrCode3);
    setRed(clrCode4);
    const getDta = await getCasesByCountry(searchParam);
    setData(getDta);
  };

  return (
    <React.Fragment>
      <CountriesSelect
        effectCountrys={effectedCountries}
        changeCountry={changeCountry}
        getDataCOuntry={data}
        clr={clr}
      />
      <Cards
        totalInfo={globData}
        getDataCOuntry={data}
        bgColor={bgColor}
        blk={blk}
        grn={grn}
        red={red}
      />
    </React.Fragment>
  );
};

export default GlobalData;
