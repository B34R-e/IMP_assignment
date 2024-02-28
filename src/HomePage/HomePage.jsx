import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../css/main.css";
import CVImporting from "./CVImporting";
import Match from "./Match";
import JobDescription from "./JobDescription";
import Result from "./Result";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { click, get_matching_data } from "../slices/matchSlice";
import testingMatchingData from "../data/testing-match-data.json";
import ProcessImage from "./ProcessImage";

function HomePage() {
  const { isMatched, matchingData } = useSelector(
    (state) => state.matchReducer
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(click(isMatched));
  };

  // console.log("resume keys: ", Object.keys(resumeData));
  const Ob = testingMatchingData;

  return (
    <div className="homepage-container">
      <Header />
      <div className="homepage-body">
        <div className="homepage-body-top">
          <CVImporting />
          {/* <Match /> */}
          <JobDescription />
        </div>
        <div className="homepage-body-bottom">
          <ProcessImage />
        </div>

        <Dialog open={isMatched}>
          <DialogTitle
            style={{
              marginBottom: "10px",
              color: "rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))",
            }}
          >
            RESUMÉ/CV SUMMARY
          </DialogTitle>
          <DialogContent className="cv-summary-dialog-content-custom">
            <DialogContentText>
              {/* {matchingData ? JSON.stringify(matchingData) : ""} */}
              {matchingData ? (
                Object.keys(matchingData).map((key) => {
                  if (!["cv_name", "certification_score"].includes(key)) {
                    return (
                      <div className="matching-data-box">
                        <h4 className="matching-data-title">
                          {key.split("_").join(" ")}
                        </h4>
                        <li className="matching-data-value">{Ob[key]}</li>
                        <br />
                      </div>
                    );
                  }
                })
              ) : (
                <h2>There is nothing to print out !</h2>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button className="btn btn-danger" autoFocus onClick={handleClick}>
              Close
            </button>
          </DialogActions>
        </Dialog>
        {/* <Result /> */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
