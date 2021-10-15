import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import { Avatar } from "@material-ui/core";

import data from "./data";

function SearchPage() {
  let GET = {};
  let query = window.location.pathname.split("/").slice(-1).join(" ");

  let searchs;

  let param = query.split("=");

  searchs = param[1].split("%20").join(" ");

  GET[decodeURIComponent(searchs)] = decodeURIComponent(searchs || "");

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchs.toString().toLowerCase())
    );
  });

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      {dataSearch.map((item) => (
        <div className="videoRow">
          <img src={item.image} alt="" />
          <div className="window__text">
            <h3>{item.title}</h3>

            <p className="videoRow__headline">
              <span> {item.views} </span>views ... {item.timestamp}
            </p>

            <p className="videoRow__headline__1">
              <Avatar className="videoCArd__avatar" src={item.channelImage} />

              <span>{item.channel} ... </span>

              <span className="videoRow__subsNumber"> {item.subs}</span>
            </p>

            <p className="videoRow__description">{item.description}</p>

            <p>
              {" "}
              <span className="videoRow__subs videoRow__description ">
                Legendas
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
