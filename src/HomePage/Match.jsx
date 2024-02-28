import React from "react";
import "../css/main.css";
import { useSelector, useDispatch } from "react-redux";
import { click, get_matching_data } from "../slices/matchSlice";
import axios from "axios";

function Match() {
  const { isMatched, matchingData } = useSelector(
    (state) => state.matchReducer
  );
  const { jobName } = useSelector((state) => state.jdReducer);
  const { resumeFile } = useSelector((state) => state.resumeReducer);
  const dispatch = useDispatch();

  const postData = async () => {
    try {
      const cv_name = resumeFile.name.split(".pdf")[0];
      // request jobname {'job_name' : name} || request jobdescription {"job_name": name, " job_description": text}
      const response = await axios.get(
        `/backend/candidate/${cv_name}/job/${jobName}`
      );
      // const jd_response = await axios.post("/job", job_description); // cái này là submit riêng
      console.log(response.status);
      dispatch(get_matching_data(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    dispatch(click(isMatched));
    console.log(
      JSON.stringify({
        job_name: jobName,
      })
    );
    console.log(jobName);
    postData();
  };

  return (
    <div className="match-container">
      <button className="match-button" onClick={handleClick}>
        Match
      </button>
    </div>
  );
}

export default Match;
