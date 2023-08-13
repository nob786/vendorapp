import React, { useEffect, useRef, useState } from "react";
import * as formik from "formik";
import * as Yup from "yup";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import {
  handleCreateNewAd,
  handleUpdateAdPostErrorAlerting,
  handleUpdateAdPostSuccessAlerting,
  setImagesError,
  setMediaError,
} from "../redux/Posts/AdsSlice";
import UnsavedChangesPrompt from "../../utilities/hooks/UnsavedChanged";
import { ScrollToError } from "../../utilities/ScrollToError";
import { ScrollCustom } from "../../utilities/ScrollCustom";

function PostAd() {
  const { Formik } = formik;

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [
    selectedCountriesforContactInformation,
    setSelectedCountriesforContactInformation,
  ] = useState([]);
  // const [uploadedImages, setUploadedImages] = useState(Array(5).fill(null));
  const [imagesToPreview, setImagesToPreview] = useState(Array(5).fill(null));
  // const [imagesToUpload, setImagesToUpload] = useState([]);
  // const [imagesError, setImagesError] = useState(false);
  const [pdfsToUpload, setPdfsToUpload] = useState([]);
  const [pdfsError, setPdfsError] = useState(false);
  const [videoToPreview, setVideoToPreview] = useState([]);
  const [videoToUpload, setVideoToUpload] = useState([]);
  const [showImagesModal, setShowImagesModal] = useState(false);
  const [uploadingData, setUploadingData] = useState(false);
  const [relatedSubCategoryId, setRelatedSubCategoryId] = useState(null);
  const [isMultipleCountries, setIsMultipleCountries] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.Ads.loading);
  const AdPostSuccessAlert = useSelector(
    (state) => state.Ads.AdPostSuccessAlert
  );
  const AdPostErrorAlert = useSelector((state) => state.Ads.AdPostErrorAlert);
  const imagesToUpload = useSelector((state) => state.Ads.media_urls.images);
  const imagesError = useSelector((state) => state.Ads.imagesError);
  const isMediaUploading = useSelector((state) => state.Ads.isMediaUploading);
  const mediaError = useSelector((state) => state.Ads.mediaError);

  console.log({ relatedSubCategoryId });

  const handleSubmitAllForms = (values) => {
    // ...(uploadedImages && { imageUploader: { images: uploadedImages } }),
    console.log("inside handleSubmitAllForms");
    if (imagesError) {
      const el = document.querySelector(".images-container");
      (el?.parentElement ?? el)?.scrollIntoView();
      return;
    }

    const addSubCategoryToFaqs = values.FAQ.faqs.map((faq) => {
      faq,
        (faq.sub_category = parseInt(
          values.companyInformation.sub_category,
          10
        ));
    });

    console.log("values ON SUBMITT", values);

    const objToSubmit = {
      media_urls: {
        images: imagesToUpload,
        video: videoToUpload,
        pdf: pdfsToUpload,
      },
      name: values.companyInformation.commercial_name,
      description: values.companyInformation.description,
      website: values.contactInformation.websiteUrl,
      city: values.contactInformation.city,
      street: values.contactInformation.street,
      number: values.contactInformation.contact_number,
      full_address: values.contactInformation.fullAddress,
      facebook: values.SocialMedia.facebookURL,
      instagram: values.SocialMedia.instagramURL,
      youtube: values.SocialMedia.youtubeURL,
      tiktok: values.SocialMedia.tiktokURL,
      twitter: values.SocialMedia.twitterURL,
      // others: values.SocialMedia.othersURL,
      offered_services: values.servicesOffered.services,
      sub_category: parseInt(values.companyInformation.sub_category, 10),
      ...(relatedSubCategoryId !== null && {
        related_sub_categories: relatedSubCategoryId,
      }),
      country: parseInt(values.contactInformation.country, 10),
      ...(values.companyInformation.country.length > 0
        ? { activation_countries: values.companyInformation.country }
        : {
            activation_countries: [
              parseInt(values.contactInformation.country, 10),
            ],
          }),
      faqs: values.FAQ.faqs,
    };

    // const newObj = {
    //   ...values,
    //   // imageUploader: {
    //   //   images: imagesToUpload,
    //   // },
    //   // pdfUploader: {
    //   //   pdfs: pdfsToUpload,
    //   // },
    //   // VideoUploader: {
    //   //   videos: videoToUpload,
    //   // },
    //   media_urls: {
    //     images: imagesToUpload,
    //     video: videoToUpload,
    //     pdf: pdfsToUpload,
    //   },
    //   // values.FAQs
    // };
    console.log(
      "newObj-------------------------------------------------:",
      objToSubmit
    );
    dispatch(handleCreateNewAd({ data: objToSubmit, navigate }));

    // console.log("Form 2 data:", formData2);
    // }
  };
  const Schema = Yup.object().shape({
    companyInformation: Yup.object().shape({
      commercial_name: Yup.string()
        .min(2, "Too short, minimum 2 characters")
        .max(60, "Too long, maximum 60 characters")
        .required("Commercial Name is required"),
      category: Yup.string().required("Category is required"),
      sub_category: Yup.string().required("Sub-category is required"),
      description: Yup.string()
        .min(2, "Too short, minimum 5 characters")
        .max(2000, "Must be at most 6667 characters")
        .matches(
          /^[a-zA-Z0-9.,;:'"/?!@&*()^+\-|\s]+$/,
          'Only letters, digits, ".,;:\'/?!@&*()^+-|" signs, and spaces are allowed'
        )
        .required("Description is required"),
      // .required("Required"),
      country: Yup.mixed().when({
        is: (value) => value !== undefined, // Apply the validation when the field is present
        then: () =>
          Yup.lazy((value) => {
            if (Array.isArray(value)) {
              // If it's an array, apply array validation and validate the array elements
              return Yup.array().of(
                Yup.lazy((element) => {
                  // Define validation for each array element based on its type
                  if (typeof element === "string") {
                    return Yup.string();
                  }
                  if (typeof element === "number") {
                    return Yup.number().integer();
                  }
                  if (typeof element === "object") {
                    return Yup.object({
                      // Add your object schema here for array elements that are objects...
                    });
                  }
                  // Return null or throw an error if none of the types match
                  throw new Error("Invalid array element");
                })
              );
            }
            if (typeof value === "object") {
              // If it's an object, define the object shape
              return Yup.object({
                // Add your object schema here...
              });
            }
            if (typeof value === "number") {
              // If it's a number, apply integer validation
              return Yup.number().integer();
            }
            if (typeof value === "string") {
              // If it's a string, apply string validation
              return Yup.string();
            }

            // Return null or throw an error if none of the types match
            throw new Error("Invalid field type");
          }),
      }),
    }),
    contactInformation: Yup.object().shape({
      websiteUrl: Yup.string()
        .max(30, "Must be at most 30 characters")
        .matches(
          // eslint-disable-next-line max-len
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
          "Invalid characters"
        ),
      county: Yup.array().min(1, "country is required"),
      city: Yup.string()
        .min(3, "Too short, minimum 3 characters")
        .max(25, "Must be at most 25 characters")
        .matches(
          /^[a-zA-Z\s-]+$/,
          'Only letters, spaces, and "-" sign are allowed'
        )
        .required("Required"),
      street: Yup.string()
        .min(3, "Too short, minimum 3 characters")
        .max(27, "Must be at most 27 characters")
        .matches(
          /^[A-Za-z0-9\-,.\/\s]+$/,
          'Only letters, digits, spaces, "-,./" signs are allowed'
        )
        .required("Required"),
      contact_number: Yup.string()
        .max(10, "Must be at most 10 characters")
        .matches(
          /^[a-zA-Z0-9\-/]+$/,
          'Only digits, letters, "-" and "/" signs are allowed'
        )
        .required("Required"),
      fullAddress: Yup.string()
        .max(70, "Must be at most 70 characters")
        .matches(
          /^[A-Za-z0-9\s,.\-\/]+$/,
          'Only letters, digits, spaces, ", .", "-", and "/" characters are allowed'
        )
        .required("Full Address is required"),
    }),
    SocialMedia: Yup.object().shape({
      facebookURL: Yup.string()
        // .max(40, "Must be 40 characters or less")
        .matches(
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
          "Invalid characters"
        ),
      instagramURL: Yup.string()
        // .max(40, "Must be 40 characters or less")
        .matches(
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
          "Invalid characters"
        ),
      youtubeURL: Yup.string()
        // .max(40, "Must be 40 characters or less")
        .matches(
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
          "Invalid characters"
        ),
      tiktokURL: Yup.string()
        // .max(40, "Must be 40 characters or less")
        .matches(
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
          "Invalid characters"
        ),
      twitterURL: Yup.string()
        // .max(40, "Must be 40 characters or less")
        .matches(
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
          "Invalid characters"
        ),
      otherURL: Yup.string()
        // .max(40, "Must be 40 characters or less")
        .matches(
          /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
          "Invalid characters"
        ),
    }),
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
      otherURL: "",
    },
    FAQ: {
      faqs: [],
    },
    servicesOffered: {
      services: [],
    },
  };

  // {
  //   question: "predefined 1",
  //   answer_input: "",
  //   type: "text_field",
  //   added: true,
  // },
  // {
  //   question: "predefined 2",
  //   answer_input: "",
  //   type: "text_field",
  //   added: true,
  // },

  const validate = (values) => {
    const errors = {};

    const isAnyValueNotNull = imagesToUpload.some((value) => value !== null);

    if (imagesToUpload.length === 0 && !imagesError) {
      // setImagesError(true);
      dispatch(setImagesError(true));
      // console.log("ScrollCustom");
    }

    // only validate country if related sub category is selected
    // if (isMultipleCountries && values.companyInformation.country.length === 0) {
    //   errors.companyInformation = {
    //     ...errors.companyInformation,
    //     country: "Please select at least one country.",
    //   };
    // }

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

    // if(errors.companyInformation.country){

    // }

    console.log("errorserrors", errors);
    // alert(errors.companyInformation.country);

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

  const handleClickSubmit = (values) => {
    if (values.companyInformation.country.length === 0) {
      const el = document.querySelector(".border-danger");
      (el?.parentElement ?? el)?.scrollIntoView();
    }
    console.log("submit clickedddddddddddd", values);
  };

  console.log("imagesToUpload", imagesToUpload);

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

  const handleRemoveFAQ = (index, values, setValues) => {
    const updatedFAQs = [...values.FAQ.faqs];
    updatedFAQs.splice(index, 1);

    setValues({
      ...values,
      FAQ: {
        faqs: updatedFAQs,
      },
    });
  };

  const handleEditFAQ = (index, values, setValues) => {
    const currentFAQ = values.FAQ.faqs[index];
    currentFAQ.added = false;
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
        faqs: [
          ...values.FAQ.faqs,
          {
            question: "",
            answer_input: "",
            type: "text_field",
            added: false,
          },
        ],
      },
    });
  };

  const hasUnsavedChanges = (values) => {
    console.log("values", values);
    // Implement your logic to check for unsaved changes here
    // For example, you can check if any field's value is different from its initial value
    // Return true if there are unsaved changes, otherwise false
    // return Object.keys(values).some(
    //   (field) => values[field] !== initialValues[field]
    // );
    // return (
    //   selectedCountries.length !== initialValues.activation_countries.length ||
    //   imagesToUpload.length !== initialValues.imagesToUpload.length ||
    //   selectedCountries.some((country, index) => country !== initialValues.selectedCountries[index]) ||
    //   imagesToUpload.some((image, index) => image !== initialValues.imagesToUpload[index]) ||
    //   Object.keys(values).some((field) => values[field] !== initialValues[field])
    // );

    // ------------------------------------ USE THIS ONE FOR EDIT AD ------------------------------------
    // selectedCountries.some((country, index) => country !== initialValues.selectedCountries[index]) ||
    // imagesToUpload.some(
    //   (image, index) => image !== initialValues.imagesToUpload[index]
    // )

    return (
      selectedCountries.length !== "" ||
      imagesToUpload.length > 0 ||
      Object.keys(values).some(
        (field) => values[field] !== initialValues[field]
      )
    );
  };

  useEffect(() => {
    if (AdPostSuccessAlert) {
      setTimeout(() => {
        // setIsAlert(false);
        dispatch(handleUpdateAdPostSuccessAlerting(false));
      }, 4000);
    }
  }, [AdPostSuccessAlert]);

  useEffect(() => {
    if ((AdPostErrorAlert, mediaError)) {
      setTimeout(() => {
        // setIsAlert(false);
        dispatch(handleUpdateAdPostErrorAlerting(false));
        dispatch(setMediaError(null));
      }, 4000);
    }
  }, [AdPostErrorAlert, mediaError]);

  console.log("AdPostErrorAlert", AdPostErrorAlert);

  return (
    <div style={{ position: "relative" }}>
      <TopBanner />
      <Header />
      <TabNavigation />
      <Alert
        severity="success"
        variant="filled"
        style={{
          position: "fixed",
          top: AdPostSuccessAlert ? "80px" : "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "ease 200ms",
          opacity: AdPostSuccessAlert ? 1 : 0,
          // width: "150px",
        }}
      >
        Submitted successfully
      </Alert>
      <Alert
        severity="error"
        variant="filled"
        style={{
          position: "fixed",
          top: AdPostErrorAlert || mediaError ? "80px" : "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "ease 200ms",
          opacity: AdPostErrorAlert || mediaError ? 1 : 0,
          // width: "150px",
        }}
      >
        {AdPostErrorAlert?.website?.length > 0
          ? AdPostErrorAlert?.website
          : mediaError !== null
          ? mediaError
          : "Something went wrong"}
      </Alert>

      {/* <ImagesModal
        showModal={showImagesModal}
        handleClose={() => setShowImagesModal(false)}
        setShowImagesModal={setShowImagesModal}
        setparentImagesUploadedImages={handleImageUpdates}
        uploadedImages={imagesToPreview}
        imagesError={imagesError}
        setImagesError={setImagesError}
        imagesToUpload={imagesToUpload}
        setImagesToUpload={setImagesToUpload}
      /> */}
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
                <ScrollToError />
                <UnsavedChangesPrompt
                  hasUnsavedChanges={() => hasUnsavedChanges(values)}
                />
                <CompanyInformation
                  values={values.companyInformation}
                  errors={errors.companyInformation ?? errors}
                  touched={touched.companyInformation ?? touched}
                  selectedCountries={selectedCountries}
                  setSelectedCountries={setSelectedCountries}
                  relatedSubCategoryId={relatedSubCategoryId}
                  setRelatedSubCategoryId={setRelatedSubCategoryId}
                  isMultipleCountries={isMultipleCountries}
                  setIsMultipleCountries={setIsMultipleCountries}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <ImageUploader
                  // parentImages={values.imageUploader.images}
                  // setShowImagesModal={setShowImagesModal}
                  setparentImagesUploadedImages={handleImageUpdates}
                  uploadedImages={imagesToPreview}
                  imagesError={imagesError}
                  // setImagesError={setImagesError}
                  // imagesToUpload={imagesToUpload}
                  // setImagesToUpload={setImagesToUpload}
                  // setShowImagesModal={setShowImagesModal}
                  // setparentImagesUploadedImages={handleImageUpdates}
                  // uploadedImages={imagesToPreview}
                  // imagesError={imagesError}
                  // setImagesError={setImagesError}
                  setUploadingData={setUploadingData}
                  imagesToUpload={imagesToUpload}
                  // setImagesToUpload={setImagesToUpload}
                />

                <VideoUploader
                  // setparentVideoUploaded={handleVideoToPreview}
                  videoToPreview={videoToPreview}
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
                  handleRemoveFAQ={(index) =>
                    handleRemoveFAQ(index, values, setValues)
                  }
                  handleEditFAQ={(index) =>
                    handleEditFAQ(index, values, setValues)
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
                    disabled={loading || isMediaUploading}
                    onClick={() => handleClickSubmit(values)}
                    className="btn btn-success roboto-semi-bold-16px-information btn-lg"
                    style={{ padding: "0 100px" }}
                  >
                    {loading ? (
                      // "Loading…"
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Submit Ad"
                    )}
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
