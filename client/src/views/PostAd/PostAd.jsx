import React, { useRef, useState } from "react";
import * as formik from "formik";
import * as Yup from "yup";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import Header from "../../components/Navbar/Navbar";
import TopBanner from "../../components/TopBanner";
import postAdBanner1 from "../../assets/images/post-ad-banner-1.svg";
import postAdBanner2 from "../../assets/images/post-ad-banner-2.svg";
import postAdBanner3 from "../../assets/images/post-ad-banner-3.svg";
import commercialName from "../../assets/images/post-ad/commercial_name.svg";
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
// import * as formik from "formik";
// import * as Yup from "yup";
// "Cabane Turistice",
// "Castele",
// "Cluburi",
// "Complexuri",
// "Corturi de Lux",
// "Hoteluri",
// "Pensiuni",
// "Restaurante",
// "Sali de Evenimente",
// "Vile",

function PostAd() {
  const { Formik } = formik;

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [initialImages, setInitialImages] = useState(Array(5).fill(null));

  const handleSubmitAllForms = (values) => {
    // console.log("selectedCountries", selectedCountries);
    // const form1IsValid = CompanyInformationRef.current.isValid;
    // const form2IsValid = ContactInformationRef.current.isValid;

    // if (form1IsValid && form2IsValid) {
    //   const formData1 = CompanyInformationRef.current.values;
    //   const formData2 = ContactInformationRef.current.values;

    // Perform any additional processing or API calls with the form data from both forms
    console.log("values-------------------------------------------------:", values);
    // console.log("Form 2 data:", formData2);
    // }
  };
  const Schema = Yup.object().shape({
    companyInformation: Yup.object().shape({
      // commercial_name: Yup.string().required("Commercial Name is required"),
      // category: Yup.string().required("Category is required"),
      // sub_category: Yup.string().required("Sub-category is required"),
      // sub_category: Yup.string().required("Sub-category is required"),
      // description: Yup.string().required("Description is required"),
      // country: Yup.string().required("Country is required"),
      country: Yup.array().min(1, "country is required"),
    }),
    // contactInformation: Yup.object().shape({
    //   websiteUrl: Yup.string().required("Website URL is required"),
    //   county: Yup.string().required("County is required"),
    //   city: Yup.string().required("City is required"),
    //   street: Yup.string().required("Street is required"),
    //   contact_number: Yup.string().required("Contact Number is required"),
    //   fullAddress: Yup.string().required("Full Address is required"),
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
      county: "",
      city: "",
      street: "",
      fullAddress: "",
    },
    Images: {
      images: initialImages,
    },
  };

  const validate = (values) => {
    const errors = {};

    if (!values.companyInformation.country || values.companyInformation.country.length === 0) {
      errors.companyInformation = {
        ...errors.companyInformation,
        country: "Please select at least one country.",
      };
    }

    // Add more validation rules as needed

    return errors;
  };

  // const handleSubmitAllForms = (values) => {
  //   // Handle submission with the combined form data
  //   console.log('All Form Data:', values);
  // };

  return (
    <div>
      <TopBanner />
      <Header />

      <div className="ad-banner d-flex align-items-center justify-content-between">
        <div style={{ marginLeft: "100px" }}>
          <div className="roboto-bold-36px-h1">Post an Ad</div>
          <div className="roboto-regular-18px-body3">Reach thousands of buyers on our platform</div>
        </div>

        <div style={{
          position: "absolute", right: "-50px", top: "-32px", display: "flex",
        }}
        >
          <div style={{ marginTop: "30px" }}>
            <img src={postAdBanner1} alt="postAdBanner1" />
          </div>
          <div style={{ margin: "0 -65px" }}>
            <img src={postAdBanner3} alt="postAdBanner3" />
          </div>
          <div style={{ marginTop: "30px" }}>
            <img src={postAdBanner2} alt="postAdBanner2" />
          </div>
        </div>
      </div>

      <Container fluid style={{ marginTop: "40px", paddingLeft: "150px" }}>

        <Row>

          {/* <Formik
      initialValues={InitialValues}
      validationSchema={Schema}
      onSubmit={handleSubmit}
      children={NameForm}
    /> */}

          {/* <CompanyInformation
            handleChange={handleChange}
            values={values}
            touched={touched}
            errors={errors}
            onSubmit={() => { }}
          /> */}

          <Formik
            initialValues={initialValues}
            validationSchema={Schema}
            validate={validate}
            onSubmit={handleSubmitAllForms}
          >
            {/* {({ */}
            {/* // isValid, handleSubmit, values, errors, touched, handleChange, */}
            {/* }) => ( */}
            {({
              values, errors, touched, handleChange, handleBlur, handleSubmit,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>

                {console.log("valuesvalues", values.companyInformation)}
                {console.log("selectedCountries", selectedCountries)}

                <CompanyInformation
                  values={values.companyInformation}
                  errors={errors.companyInformation ?? errors}
                  touched={touched.companyInformation ?? touched}
                  selectedCountries={selectedCountries}
                  setSelectedCountries={setSelectedCountries}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <ImageUploader />

                {/* <VideoUploader /> */}

                {/* <ContactInformationForm
                  values={values.contactInformation}
                  errors={errors.contactInformation}
                  touched={touched.contactInformation}
                  handleChange={handleChange}
                /> */}

                {/* <SocialMediaForm /> */}

                {/* <ServicesOffered /> */}

                {/* <div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button
                      type="button"
                      className="btn btn-success roboto-semi-bold-16px-information btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      onClick={handleSubmitAllForms}
                    >
                      Submit Ad
                    </Button>
                  </div>
                </div> */}

                {/* disabled={!isValid} */}
                <Button type="submit">
                  Submit All Forms
                </Button>

                <div style={{ paddingBottom: "100px" }} />
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
