import React, { useRef, useState } from "react";
import * as formik from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Header from "../../components/Navbar/Navbar";
import TopBanner from "../../components/TopBanner";
import postAdBanner1 from "../../assets/images/post-ad-banner-1.svg";
import postAdBanner2 from "../../assets/images/post-ad-banner-2.svg";
import postAdBanner3 from "../../assets/images/post-ad-banner-3.svg";
// import category from "../../assets/images/post-ad/category.svg";
// import sub_category from "../../assets/images/post-ad/sub-category.svg";
// import description from "../../assets/images/post-ad/description.svg";
// import map from "../../assets/images/post-ad/map.svg";
import "./PostAd.css";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import VideoUploader from "../../components/VideoUploader/VideoUploader";
import ContactInformationForm from "./ContactInformationForm";
import SocialMediaForm from "./SocialMediaForm";
import ServicesOffered from "./ServicesOffered";
import CompanyInformation from "./CompanyInformation";
import FAQs from "./FAQs";
import PdfUploader from "../../components/PdfUploader/PdfUploader";
import ImagesModal from "../../components/ImageUploader/ImagesModal";

function PostAd() {
  const { Formik } = formik;

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [
    selectedCountriesforContactInformation,
    setSelectedCountriesforContactInformation,
  ] = useState([]);
  // const [uploadedImages, setUploadedImages] = useState(Array(5).fill(null));
  const [imagesToPreview, setImagesToPreview] = useState(Array(5).fill(null));
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [imagesError, setImagesError] = useState(false);
  const [pdfsToUpload, setPdfsToUpload] = useState([]);
  const [pdfsError, setPdfsError] = useState(false);
  const [videoToPreview, setVideoToPreview] = useState([]);
  const [videoToUpload, setVideoToUpload] = useState([]);
  const [showImagesModal, setShowImagesModal] = useState(false);

  const handleSubmitAllForms = (values) => {
    // ...(uploadedImages && { imageUploader: { images: uploadedImages } }),
    const newObj = {
      ...values,
      // imageUploader: {
      //   images: imagesToUpload,
      // },
      // pdfUploader: {
      //   pdfs: pdfsToUpload,
      // },
      // VideoUploader: {
      //   videos: videoToUpload,
      // },
      media_urls: {
        images: imagesToUpload,
        video: videoToUpload,
        pdf: pdfsToUpload,
      },
    };
    console.log(
      "newObj-------------------------------------------------:",
      newObj
    );
    // console.log("Form 2 data:", formData2);
    // }
  };
  const Schema = Yup.object().shape({
    // companyInformation: Yup.object().shape({
    //   commercial_name: Yup.string().required("Commercial Name is required"),
    //   category: Yup.string().required("Category is required"),
    //   sub_category: Yup.string().required("Sub-category is required"),
    //   description: Yup.string()
    //     .max(2000, "Must be at most 2000 characters")
    //     .matches(
    //       /^[a-zA-Z0-9.,;:'"/?!@&*()^+\-|\s]+$/,
    //       'Only letters, digits, ".,;:\'/?!@&*()^+-|" signs, and spaces are allowed',
    //     ),
    //   // .required("Required"),
    //   country: Yup.array().min(1, "country is required"),
    // }),
    // contactInformation: Yup.object().shape({
    //   websiteUrl: Yup.string()
    //     .max(30, "Must be at most 30 characters")
    //     .matches(
    //       /^[a-zA-Z0-9.\-+_]+$/,
    //       'Only letters, digits, ".", "-", "+", and "_" signs are allowed',
    //     ),
    //   county: Yup.array().min(1, "country is required"),
    //   city: Yup.string()
    //     .max(25, "Must be at most 25 characters")
    //     .matches(
    //       /^[a-zA-Z\s-]+$/,
    //       'Only letters, spaces, and "-" sign are allowed',
    //     )
    //     .required("Required"),
    //   street: Yup.string()
    //     .max(35, "Must be at most 25 characters")
    //     .matches(
    //       /^[a-zA-Z\s-]+$/,
    //       'Only letters, spaces, and "-" sign are allowed',
    //     )
    //     .required("Required"),
    //   contact_number: Yup.string()
    //     .max(10, "Must be at most 10 characters")
    //     .matches(
    //       /^[a-zA-Z0-9\-/]+$/,
    //       'Only digits, letters, "-" and "/" signs are allowed',
    //     )
    //     .required("Required"),
    //   fullAddress: Yup.string()
    //     .max(70, "Must be at most 70 characters")
    //     .matches(
    //       /^[a-zA-Z0-9",\-./\s]+$/,
    //       'Only letters, ",-./" signs, spaces, and digits are allowed',
    //     )
    //     .required("Full Address is required"),
    // }),
    // SocialMedia: Yup.object().shape({
    //   facebookURL: Yup.string()
    //     .max(40, "Must be 40 characters or less")
    //     .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
    //   instagramURL: Yup.string()
    //     .max(40, "Must be 40 characters or less")
    //     .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
    //   youtubeURL: Yup.string()
    //     .max(40, "Must be 40 characters or less")
    //     .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
    //   tiktokURL: Yup.string()
    //     .max(40, "Must be 40 characters or less")
    //     .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
    //   twitterURL: Yup.string()
    //     .max(40, "Must be 40 characters or less")
    //     .matches(/^[a-zA-Z0-9!@*&();'":|,.<>?/\\]+$/, "Invalid characters"),
    // }),
    // Images: Yup.object().shape({
    //   image1: Yup.string().required("Image 1 is required"),
    //   Image2: Yup.string().required("Image 2 is required"),
    // }),
  });

  const initialValues = {
    companyInformation: {
      commercial_name: "",
      category: "",
      sub_category: "",
      description: "",
      country: [], // Initialize without any selected countries
    },
    contactInformation: {
      contact_number: "",
      websiteUrl: "",
      country: [],
      city: "",
      street: "",
      fullAddress: "",
    },
    SocialMedia: {
      facebookURL: "",
      instagramURL: "",
      youtubeURL: "",
      tiktokURL: "",
      twitterURL: "",
    },
    FAQ: {
      faqs: [
        { question: "predefined 1", answer: "", added: true },
        { question: "predefined 2", answer: "", added: true },
      ],
    },
    servicesOffered: {
      services: [],
    },
  };

  const validate = (values) => {
    const errors = {};

    const isAnyValueNotNull = imagesToPreview.some((value) => value !== null);

    if (!isAnyValueNotNull) {
      setImagesError(true);
    }

    if (
      !values.companyInformation.country ||
      values.companyInformation.country.length === 0
    ) {
      errors.companyInformation = {
        ...errors.companyInformation,
        country: "Please select at least one country.",
      };
    }

    if (
      !values.contactInformation.country ||
      values.contactInformation.country.length === 0
    ) {
      errors.contactInformation = {
        ...errors.contactInformation,
        country: "Please select at least one country.",
      };
    }

    // Add more validation rules as needed

    return errors;
  };

  const handleImageUpdates = (images) => {
    setImagesToPreview(images);
  };

  const handlePdfsUpdates = (images) => {
    setPdfsToUpload(images);
  };

  const handleVideoToPreview = (videos) => {
    setVideoToPreview(videos);
  };

  const handleClickSubmit = () => {
    console.log("submit clickedddddddddddd");
  };

  const handleAddFAQ = (index, values, setValues) => {
    const currentFAQ = values.FAQ.faqs[index];
    currentFAQ.added = true;
    const updatedFAQs = [...values.FAQ.faqs];
    updatedFAQs[index] = currentFAQ;

    setValues({
      ...values,
      FAQ: {
        faqs: updatedFAQs,
      },
    });
  };

  const handleAddServices = (currentService, values, setValues) => {
    // const currentService = values.servicesOffered.services[index];
    // currentFAQ.added = true;
    // const updatedServices = [...values.FAQ.faqs];
    // updatedServices[index] = currentService;
    console.log("currentService", currentService);
    setValues({
      ...values,
      servicesOffered: {
        services: [...values.servicesOffered.services, currentService],
      },
    });
  };

  const handleRemoveService = (indexToRemove, values, setValues) => {
    const clonedServices = [...values.servicesOffered.services];
    const deletedService = clonedServices.filter(
      (_, index) => index !== indexToRemove
    );
    setValues({
      ...values,
      servicesOffered: {
        services: deletedService,
      },
    });
  };

  const handleAddFAQsFields = (values, setValues) => {
    setValues({
      ...values,
      FAQ: {
        faqs: [...values.FAQ.faqs, { question: "", answer: "", added: false }],
      },
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <TopBanner />
      <Header />

      <ImagesModal
        showModal={showImagesModal}
        handleClose={() => setShowImagesModal(false)}
        setShowImagesModal={setShowImagesModal}
        setparentImagesUploadedImages={handleImageUpdates}
        uploadedImages={imagesToPreview}
        imagesError={imagesError}
        setImagesError={setImagesError}
        imagesToUpload={imagesToUpload}
        setImagesToUpload={setImagesToUpload}
      />

      <div className="ad-banner d-flex align-items-center justify-content-between">
        <div style={{ marginLeft: "100px" }}>
          <div className="roboto-bold-36px-h1">Post an Ad</div>
          <div className="roboto-regular-18px-body3">
            Reach thousands of buyers on our platform
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "-50px",
            top: "-32px",
            display: "flex",
          }}
        >
          <div style={{ marginTop: "30px" }} className="postAdBanner1">
            <img src={postAdBanner1} alt="postAdBanner1" />
          </div>
          <div style={{ margin: "0 -65px" }}>
            <img
              src={postAdBanner3}
              alt="postAdBanner3"
              className="postAdBanner3"
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <img
              src={postAdBanner2}
              alt="postAdBanner2"
              className="postAdBanner2"
            />
          </div>
        </div>
      </div>

      <Container fluid style={{ marginTop: "40px", paddingLeft: "150px" }}>
        <Row>
          <Formik
            initialValues={initialValues}
            validationSchema={Schema}
            validate={validate}
            onSubmit={handleSubmitAllForms}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setValues,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <CompanyInformation
                  values={values.companyInformation}
                  errors={errors.companyInformation ?? errors}
                  touched={touched.companyInformation ?? touched}
                  selectedCountries={selectedCountries}
                  setSelectedCountries={setSelectedCountries}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <ImageUploader
                  // parentImages={values.imageUploader.images}
                  setShowImagesModal={setShowImagesModal}
                  setparentImagesUploadedImages={handleImageUpdates}
                  uploadedImages={imagesToPreview}
                  imagesError={imagesError}
                  setImagesError={setImagesError}
                  // imagesToUpload={imagesToUpload}
                  // setImagesToUpload={setImagesToUpload}
                />

                <VideoUploader
                  setparentVideoUploaded={handleVideoToPreview}
                  videoToUpload={videoToUpload}
                  setVideoToUpload={setVideoToUpload}
                />

                <ContactInformationForm
                  values={values.contactInformation}
                  errors={errors.contactInformation ?? errors}
                  touched={touched.contactInformation ?? touched}
                  selectedCountries={selectedCountriesforContactInformation}
                  setSelectedCountries={
                    setSelectedCountriesforContactInformation
                  }
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <SocialMediaForm
                  values={values.SocialMedia}
                  errors={errors.SocialMedia ?? errors}
                  touched={touched.SocialMedia ?? touched}
                  handleChange={handleChange}
                />

                <ServicesOffered
                  values={values}
                  // errors={errors.FAQ ?? errors}
                  // touched={touched.FAQ ?? touched}
                  handleChange={handleChange}
                  handleAddServices={(currentService) =>
                    handleAddServices(currentService, values, setValues)
                  }
                  handleRemoveService={(index) =>
                    handleRemoveService(index, values, setValues)
                  }
                />

                <PdfUploader
                  setparentImagesUploadedImages={handlePdfsUpdates}
                  pdfsToUpload={pdfsToUpload}
                  imagesError={pdfsError}
                  setImagesError={setPdfsError}
                />

                <FAQs
                  values={values}
                  errors={errors.FAQ ?? errors}
                  touched={touched.FAQ ?? touched}
                  handleChange={handleChange}
                  handleAddFieldsForFAQ={() =>
                    handleAddFAQsFields(values, setValues)
                  }
                  handleAddFAQ={(index) =>
                    handleAddFAQ(index, values, setValues)
                  }
                />

                <div style={{ paddingBottom: "300px" }} />
                {/* disabled={!isValid} */}
                <Col
                  className="d-flex justify-content-end"
                  style={{ marginRight: "150px" }}
                >
                  <Button
                    type="submit"
                    onClick={handleClickSubmit}
                    className="btn btn-success roboto-semi-bold-16px-information btn-lg"
                    style={{ padding: "0 100px" }}
                  >
                    Submit Ad
                  </Button>
                </Col>

                <div style={{ paddingBottom: "200px" }} />
              </Form>
            )}
          </Formik>
        </Row>
      </Container>
    </div>
    // </div >
  );
}

export default PostAd;
