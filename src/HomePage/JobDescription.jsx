import React from "react";
import "../css/main.css";
import { useSelector, useDispatch } from "react-redux";
import { get_job_description, get_job_name } from "../slices/jdSlice";
import axios from "axios";

function JobDescription() {
  const { jobDescription, jobName } = useSelector((state) => state.jdReducer);
  const { fileURL, newImage } = useSelector((state) => state.resumeReducer);
  const dispatch = useDispatch();

  const postDescriptionData = async () => {
    try {
      // request jobname {'job_name' : name} || request jobdescription {"job_name": name, " job_description": text}
      const response = await axios.post(
        "/backend/job",
        {
          job_name: jobName,
          job_description: jobDescription,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // const jd_response = await axios.post("/job", job_description); // cái này là submit riêng
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleJobDescriptionChange = (evt) => {
    dispatch(get_job_description(evt.target.value));
    console.log(evt.target.value);
  };

  const handleJobNameChange = (evt) => {
    dispatch(get_job_name(evt.target.value));
    console.log(evt.target.value);
  };

  const handleSubmitJD = () => {
    console.log(
      "jobDescription",
      JSON.stringify({
        job_name: jobName,
        job_description: jobDescription,
      })
    );
    postDescriptionData();
  };

  return (
    <div className="jd-container" hidden={fileURL == "" ? "hidden" : ""}>
      {/* <input
        type="text"
        className="form-control"
        placeholder="Enter your job's name..."
        onChange={handleJobNameChange}
      /> */}
      {/* <textarea
        className="form-control"
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleJobDescriptionChange}
        placeholder="Enter/Paste your Job Description..."
      ></textarea> */}
      {/* <button className="jd-button-1" onClick={handleSubmitJD}>
        Submit Job Description
      </button> */}
      {newImage ? (
        <img
          src={URL.createObjectURL(
            new Blob([newImage.data], { type: "image/jpeg" })
          )}
          alt="Smoothed Image"
        />
      ) : (
        <img src={fileURL} alt="" />
      )}
    </div>
  );
}

export default JobDescription;
