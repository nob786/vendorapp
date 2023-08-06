import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Select from "react-select";
import commercialNameIcon from "../../assets/images/post-ad/commercial_name.svg";
import categoryIcon from "../../assets/images/post-ad/category.svg";
import subCategoryIcon from "../../assets/images/post-ad/sub-category.svg";
import descriptionIcon from "../../assets/images/post-ad/description.svg";
import mapIcon from "../../assets/images/post-ad/map.svg";
import "./PostAd.css";
import { secure_instance } from "../../axios/axios-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// const countries = [
//   "Alba",
//   "Arad",
//   "Arges",
//   "Bacau",
//   "Bihor",
//   "Bistrita-Nasaud",
//   "Botosani",
//   "Braila",
//   "Brasov",
//   "Buzau",
//   "Calarasi",
//   "Caras-Severin",
//   "Cluj",
//   "Constanta",
//   "Covasna",
//   "Dambovita",
//   "Dolj",
//   "Galati",
//   "Giurgiu",
//   "Gorj",
//   "Harghita",
//   "Hunedoara",
//   "Ialomita",
//   "Iasi",
//   "Ilfov",
//   "Maramures",
//   "Mehedinti",
//   "Mures",
//   "Neamt",
//   "Olt",
//   "Prahova",
//   "Salaj",
//   "Satu-Mare",
//   "Sibiu",
//   "Suceava",
//   "Teleorman",
//   "Timis",
//   "Tulcea",
//   "Valcea",
//   "Vaslui",
//   "Vrancea",
// ];

// const categories = [
//   "venues", "vendors", "for_him", "for_her",
// ];
// const subCategories = ["Testing"];

function CompanyInformation({
  values,
  errors,
  touched,
  selectedCountries,
  setSelectedCountries,
  setRelatedSubCategoryId,
  relatedSubCategoryId,
  handleChange,
  handleBlur,
}) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isMultipleCountries, setIsMultipleCountries] = useState(false);
  const [relatedSubCategory, setRelatedSubCategory] = useState(
    values?.related_sub_categories
  );

  console.log("relatedSubCategory----------------", relatedSubCategory);
  const [modalShow, setModalShow] = React.useState(false);
  const [countriesList, setCountries] = useState(
    values.country.length > 0 ? values.country : []
  );
  // const [subCategories, setSubCategories] = useState([]);

  const countryOptions = countriesList.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  console.log({ values });

  // const countryOptions = countries.map((country) => ({
  //   value: country,
  //   label: country,
  // }));

  const handleCountryChange = (selectedOptions) => {
    const countryNames = selectedOptions.map((option) => option.value);
    setSelectedCountries(countryNames);
    // handleChange("companyInformation.country")(countryNames);
    handleChange({
      target: {
        name: "companyInformation.country",
        value: countryNames,
      },
    });
  };

  const listCategories = async () => {
    const request = await secure_instance.request({
      url: "/api/ads/category/",
      method: "Get",
    });
    // console.log(request.data);
    setCategories(request.data.data);
  };

  // const listSubCategories = async () => {
  //   const request = await secure_instance.request({
  //     url: "/api/ads/sub_category/",
  //     method: "Get",
  //   });
  //   // console.log(request.data);
  //   setSubCategories(request.data.data);
  // };

  const fetchSubCategories = async (id) => {
    values.sub_category = "";
    const request = await secure_instance.request({
      url: `/api/ads/category/${id}/sub-categroy-from-category/`,
      method: "Get",
    });
    // console.log(request.data);
    setSubCategories(request.data.data);
  };

  const handleSubCategorySelected = async (id) => {
    // values.sub_category = "";
    const request = await secure_instance.request({
      url: `/api/ads/sub_category/${id}/activation-countries-exists/`,
      method: "Get",
    });

    if (request.data.data.activation_country) {
      setIsMultipleCountries(true);
    } else {
      setIsMultipleCountries(false);
    }

    const requestRelatedSub = await secure_instance.request({
      url: `/api/ads/sub_category/${id}/public-related/`,
      method: "Get",
    });
    // console.log("outsideeeeeeeeeeeeeeee", requestRelatedSub.data.data);
    if (
      Object.prototype.hasOwnProperty.call(requestRelatedSub.data.data, "id")
    ) {
      setRelatedSubCategory(requestRelatedSub.data.data);
      setModalShow(true);
      console.log("first", requestRelatedSub.data.data);
    }
    // console.log(request.data);
    // setSubCategories(request.data.data);
  };

  const listCountries = async () => {
    const request = await secure_instance.request({
      url: "/api/ads/country/",
      method: "Get",
    });
    // console.log(request.data);
    setCountries(request.data.data);
  };

  useEffect(() => {
    listCategories();
    // listSubCategories();
    listCountries();
  }, []);

  // console.log("values", values);
  // console.log("touched", touched);
  // console.log("errors", errors);

  // const [selectedCountries, setSelectedCountries] = useState([]);

  // console.log({ selectedCountries });

  // const handleChangeCountry = () => {

  // };

  return (
    <Container fluid style={{ marginTop: "40px" }}>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ border: "none" }} />
        <Modal.Body>
          <h4>{`${relatedSubCategory?.name} exists as a realted sub category`}</h4>
          <h4>{`Do you want to add it?`}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>No</Button>
          <Button
            variant="success"
            onClick={() => {
              setRelatedSubCategoryId(relatedSubCategory.id);
              setModalShow(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <div
          className="roboto-semi-bold-28px-h2"
          style={{ marginBottom: "40px" }}
        >
          Company Information
        </div>
        <div className="">
          {/* <Col md={6} lg={4}>
            <Form.Group className="form-group mb-3" controlId="form3Example3">
              <Form.Label
                className="roboto-medium-20px-body1 d-flex align-items-center"
                style={{ marginBottom: "20px" }}
              >
                <img
                  src={commercialNameIcon}
                  alt="commercialName"
                  style={{ marginRight: "16px" }}
                />
                Commercial Name
              </Form.Label>
              <Form.Control
                style={{ height: "56px" }}
                className="lg-input-small-text"
                type="text"
                name="companyInformation.commercial_name"
                size="sm"
                placeholder="Enter Company Name"
                value={values.commercial_name || ""}
                onChange={handleChange}
                isValid={touched.commercial_name && !errors.commercial_name}
                isInvalid={touched.commercial_name && !!errors.commercial_name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.commercial_name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col> */}
          <Col md={6} lg={4}>
            <Form.Group className="form-group mb-3" controlId="form3Example4">
              <Form.Label
                className="roboto-medium-20px-body1 d-flex align-items-center"
                style={{ marginBottom: "20px" }}
              >
                <img
                  src={categoryIcon}
                  alt="categoryIcon"
                  style={{ marginRight: "16px" }}
                />
                Select Category
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "56px", border: "1px solid #797979" }}
                // style={{
                //   height: "56px",
                //   transition: "box-shadow 0.3s ease-in-out",
                //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                // }}
                name="companyInformation.category"
                value={values.category || ""}
                // onChange={handleChange}
                onChange={(e) => {
                  console.log("category selected", e.target.value);
                  fetchSubCategories(e.target.value);
                  handleChange(e);
                }}
                // onBlur={handleBlur}
                isValid={touched.category && !errors.category}
                isInvalid={touched.category && !!errors.category}
                className={errors.category ? "border-danger" : ""}
              >
                <option selected value hidden="true">
                  {values.category !== ""
                    ? values.category.name
                    : "Select Category"}
                </option>
                {categories?.map((category, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={index} value={Number(category.id)}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
              {/* <Form.Control.Feedback type="invalid"> */}
              <div className="text-danger" style={{ fontSize: "14px" }}>
                {errors.category}
              </div>
              {/* </Form.Control.Feedback> */}
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group className="form-group mb-3" controlId="form3Example5">
              <Form.Label
                className="roboto-medium-20px-body1 d-flex align-items-center"
                style={{ marginBottom: "20px" }}
              >
                <img
                  src={subCategoryIcon}
                  alt="categoryIcon"
                  style={{ marginRight: "16px" }}
                />
                Select sub-category
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "56px", border: "1px solid #797979" }}
                name="companyInformation.sub_category"
                value={values.sub_category || ""}
                // onChange={handleChange}
                onChange={(e) => {
                  handleSubCategorySelected(e.target.value);
                  handleChange(e);
                }}
                // onBlur={handleBlur}
                isValid={touched.sub_category && !errors.sub_category}
                isInvalid={touched.sub_category && !!errors.sub_category}
                className={errors.sub_category ? "border-danger" : ""}
              >
                {/* <option selected value hidden="true">Select sub_category</option> */}
                <option selected value hidden="true">
                  {values.sub_category !== ""
                    ? values.sub_category.name
                    : "Select sub category"}
                </option>
                {subCategories.map((subCategory, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={index} value={subCategory.id}>
                    {subCategory.name}
                  </option>
                ))}
              </Form.Select>
              {/* <Form.Control.Feedback type="invalid"> */}
              <div className="text-danger" style={{ fontSize: "14px" }}>
                {errors.sub_category}
              </div>
              {/* <Form.Control.Feedback type="invalid">
                        {errors.address}
                      </Form.Control.Feedback> */}
            </Form.Group>
          </Col>

          {relatedSubCategoryId !== null && (
            <Col md={6} lg={8} className="mb-3 mt-4 d-flex align-items-center">
              <div
                className="roboto-regular-18px-information"
                style={{ fontWeight: "600" }}
              >
                {`${relatedSubCategory?.name} is added as related sub category`}
              </div>
              <FontAwesomeIcon
                icon={faClose}
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => {
                  setRelatedSubCategoryId(null);
                  setRelatedSubCategory(null);
                }}
                // style={{
                //   position: "absolute",
                //   top: "2px",
                //   right: "5px",
                //   color: "#FFF",
                // }}
              />
            </Col>
          )}
          <Col md={6} lg={8}>
            <Form.Group className="form-group mb-3" controlId="form3Example6">
              <Form.Label
                className="roboto-medium-20px-body1 d-flex align-items-center"
                style={{ marginBottom: "20px" }}
              >
                <img
                  src={descriptionIcon}
                  alt="categoryIcon"
                  style={{ marginRight: "16px" }}
                />
                Description
              </Form.Label>
              <Form.Control
                style={{ minHeight: "300px" }}
                className="lg-input-small-text"
                name="companyInformation.description"
                as="textarea"
                rows={3}
                type="text"
                size="lg"
                placeholder="Describe your service in detail"
                value={values.description || ""}
                // onChange={setField}
                onChange={handleChange}
                // isValid={touched.description && !errors.description}
                isInvalid={touched.description && !!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            {/* <Form.Group className="form-group mb-3" controlId="form3Example7">
              <Form.Label className="roboto-medium-20px-body1 d-
                              <img src={subCategoryIcon} alt="categoryIcon" style={{ marginRight: "16px" }} />

                              Country</Form.Label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "56px" }}
                name="companyInformation.country"
                value={values.country || ""}
                onChange={handleChange}
                // onBlur={handleBlur}
                isValid={touched.country && !errors.country}
                isInvalid={touched.country && !!errors.country}
                className={errors.country ? "border-danger" : ""}
              >
                <option value hidden="true">Select country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </Form.Select>
              <div className="text-danger" style={{ fontSize: "14px" }}>
                {errors.country}
              </div>
            </Form.Group> */}
            {/* <Form.Group className="form-group mb-3" controlId="form3Example6">
              <Form.Label className="roboto-medium-20px-body1 d-
                              <img src={subCategoryIcon} alt="categoryIcon" style={{ marginRight: "16px" }} />

                              Country</Form.Label>
              <Select
                options={countries.map((country) => ({ value: country, label: country }))}
                // defaultValue={[countries[0]].map((country) => ({ value: country, label: country }))}
                isMulti
                name="companyInformation.country"
                // name="companyInformation.country"
                // options={colourOptions}
                onChange={console.log}
                // className="basic-multi-select"
                className={selectedCountries.length === 0 ? "border-danger" : ""}
                classNamePrefix="select"
                required
              />
            </Form.Group> */}

            <Form.Group className="form-group mb-3" controlId="form3Example6">
              <Form.Label
                className="roboto-medium-20px-body1 d-flex align-items-center"
                style={{ marginBottom: "20px" }}
              >
                <img
                  src={mapIcon}
                  alt="categoryIcon"
                  style={{ marginRight: "16px" }}
                />
                Country
              </Form.Label>

              {isMultipleCountries ? (
                <Select
                  options={countryOptions}
                  isMulti
                  name="companyInformation.country"
                  styles={{ height: "56px" }}
                  value={countryOptions.filter((option) =>
                    selectedCountries.includes(option.value)
                  )}
                  onChange={handleCountryChange}
                  onBlur={handleBlur("companyInformation.country")}
                  className={
                    errors?.country
                      ? "border-danger country-field"
                      : "country-field border-custom"
                  }
                  classNamePrefix="select"
                />
              ) : (
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "56px", border: "1px solid #797979" }}
                  name="companyInformation.country"
                  value={values.country || ""}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  isValid={touched.country && !errors.country}
                  isInvalid={touched.country && !!errors.country}
                  className={errors.country ? "border-danger" : ""}
                >
                  <option selected value hidden="true">
                    Select County
                  </option>
                  {countryOptions.map((county, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <option key={index} value={county.value}>
                      {county.label}
                    </option>
                  ))}
                </Form.Select>
              )}
              {errors?.country && (
                <div className="text-danger">{errors.country}</div>
              )}
            </Form.Group>
          </Col>
          {console.log("values.country", values.country)}
        </div>
      </Row>
    </Container>
  );
}

export default CompanyInformation;
