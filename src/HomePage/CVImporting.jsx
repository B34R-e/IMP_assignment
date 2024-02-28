import React, { useRef } from "react";
import "../css/main.css";
import { useSelector, useDispatch } from "react-redux";
import {
  get,
  set_import_status,
  set_upload_status,
  set_file_url,
} from "../slices/resumeSlice";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

function CVImporting() {
  const { resumeFile, importStatus, uploadStatus } = useSelector(
    (state) => state.resumeReducer
  );

  const dispatch = useDispatch();

  const postFileData = async () => {
    try {
      const response = await axios.post(
        "/backend/upload-cv",
        { file_upload: resumeFile },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (evt) => {
    if (evt.target.files) {
      dispatch(get(evt.target.files[0]));
      dispatch(set_file_url(URL.createObjectURL(evt.target.files[0])));
    }
    dispatch(set_import_status("hidden"));
    dispatch(set_upload_status(""));
  };

  const handleResetClick = () => {
    dispatch(set_upload_status("hidden"));
    dispatch(set_import_status(""));
  };

  const handleUploadFileClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = (evt) => {
    postFileData();
    // setFile(URL.createObjectURL(e.target.files[0]));
    console.log("resumeFile: ", resumeFile);
  };
  const fileInputRef = useRef(null);

  return (
    <div className="cv-importing-container">
      <h2>UPLOAD YOUR IMAGE (.jpg, .png)</h2>
      <div className="cv-importing-form">
        <div className="resume-upload" hidden={uploadStatus}>
          <button onClick={handleUpload} className="cv-importing-button-2">
            UPLOAD FILE
          </button>
          <div className="resume-file-box">
            <span className="resume-file-name">
              {resumeFile ? resumeFile.name : ""}
            </span>
          </div>
          {/* <img src="../img/reset.svg" alt="" /> */}
          <FontAwesomeIcon
            icon={faRotateRight}
            onClick={handleResetClick}
            className="btn"
          />
        </div>
        <div className="resume-browsing" hidden={importStatus}>
          <button
            className="cv-importing-button-2"
            onClick={handleUploadFileClick}
            hidden={importStatus}
          >
            Browse
          </button>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          // name={"file"}
          className="cv-importing-input"
          onChange={handleChange}
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
  );
}

export default CVImporting;
