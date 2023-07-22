/* eslint-disable jsx-a11y/label-has-associated-control */
import { faHeart, faPlus } from "@fortawesome/fontawesome-free-solid";
import { faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button, Col, Container, Row,
} from "react-bootstrap";
import InfoIcon from "../../assets/images/gg_info.svg";
import "./ImageUploader.css";

function ImageUploader({ setparentImagesUploadedImages, imagesError, setImagesError }) {
  const [images, setImages] = useState(Array(5).fill(null));

  console.log("imagesError imagesError imagesError", imagesError);

  const handleImagesUpload = (event, image) => {
    console.log({ images });
  };
  const handleImageUpload = (event, index) => {
    event.preventDefault();
    const uploadedImage = event.target.files[0];
    const updatedImages = [...images];

    const reader = new FileReader();

    reader.onload = () => {
      updatedImages[index] = {
        file: uploadedImage,
        previewURL: reader.result,
      };
      setImages(updatedImages);
    };
    console.log("updatedImages inside image component", updatedImages);
    setImagesError(false);
    setparentImagesUploadedImages(updatedImages);
    reader.readAsDataURL(uploadedImage);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
    setparentImagesUploadedImages(updatedImages);
  };

  return (
    <Container fluid style={{ marginTop: "30px" }}>
      <div className="roboto-medium-20px-body1" style={{ marginBottom: "25px" }}>Upload Images</div>

      {imagesError
        && <span className="text-danger">Atleast 1 photo is Required</span>}
      <div style={{ maxWidth: "900px", border: "2px dashed #A0C49D", padding: "16px" }}>

        <ul style={{ paddingLeft: "20px" }}>
          <li className="roboto-regular-16px-information" style={{ color: "#A9A8AA", lineHeight: "22px" }}>
            Upload 5 of the best images that describe your service

          </li>
          <li className="roboto-regular-16px-information" style={{ color: "#A9A8AA", lineHeight: "22px" }}>
            Images can be upload in JPEG or PNG format

          </li>
          <li className="roboto-regular-16px-information" style={{ color: "#A9A8AA", lineHeight: "22px" }}>
            Size of images cannot exceed 5 Mb

          </li>
        </ul>

        {/* <Button
          type="button"
          className="btn btn-success roboto-semi-bold-16px-information"
          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", height: "44px" }}
          onClick={handleImagesUpload}
        >
          Upload Images
        </Button> */}

        <div className="d-flex align-items-center">
          <img
            src={InfoIcon}
            alt={InfoIcon}
          />
          <span className="mx-1 roboto-regular-14px-information" style={{ color: "#A9A8AA", margin: "15px 0" }}>
            Double click to set main image
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between" style={{ flexWrap: "wrap" }}>
          {images.map((image, index) => (
            <Col md={3} lg={2} key={index}>
              <div className="mb-5">
                {image !== null ? (
                  <div style={{
                    position: "relative", border: "2px dotted #386C34", width: "145px", height: "126px",
                  }}
                  >
                    <img
                      src={image.previewURL}
                      alt={`Preview ${index + 1}`}
                      style={{ width: "141px", height: "122px", objectFit: "cover" }}
                    />
                    <button
                      type="button"
                      style={{ position: "absolute", top: "0", right: "0" }}
                      className="upload-img-close-btn"
                      onClick={() => removeImage(index)}
                    >
                      <FontAwesomeIcon
                        icon={faClose}
                        style={{
                          position: "absolute", top: "2px", right: "5px", color: "#FFF",
                        }}
                      />
                    </button>
                  </div>
                ) : (
                  <div style={{
                    border: "2px dashed #A0C49D", width: "141px", height: "122px",
                  }}
                  >
                    <label
                      htmlFor={`file-input-${index}`}
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "141px", height: "122px", cursor: "pointer",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faAdd}
                        style={{
                          color: "#A0C49D", width: "40px", height: "40px", marginRight: "10px", marginBottom: "8px",
                        }}
                      />
                    </label>
                    <input
                      id={`file-input-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(event) => handleImageUpload(event, index)}
                      style={{ display: "none", border: "1px solid red" }}
                    />
                  </div>
                )}
              </div>
            </Col>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ImageUploader;