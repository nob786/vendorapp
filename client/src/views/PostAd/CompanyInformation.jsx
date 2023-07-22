import React, { useState } from "react";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import Select from "react-select";
import commercialName from "../../assets/images/post-ad/commercial_name.svg";
// import category from "../../assets/images/post-ad/category.svg";
// import sub_category from "../../assets/images/post-ad/sub-category.svg";
// import description from "../../assets/images/post-ad/description.svg";
// import map from "../../assets/images/post-ad/map.svg";
import "./PostAd.css";

const countries = [
  "Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud",
  "Botosani", "Braila", "Brasov", "Buzau", "Calarasi",
  "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dambovita",
  "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita",
  "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti",
  "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu-Mare", "Sibiu",
  "Suceava", "Teleorman", "Timis", "Tulcea", "Valcea", "Vaslui", "Vrancea",
];

const categories = [
  "venues", "vendors", "for_him", "for_her",
];
const subCategories = [
  "Testing",
];

function CompanyInformation({
  values,
  errors,
  touched,
  selectedCountries,
  setSelectedCountries,
  handleChange,
  handleBlur,
}) {
  const countryOptions = countries.map((country) => ({ value: country, label: country }));

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

  // console.log("values", values);
  // console.log("touched", touched);
  // console.log("errors", errors);

  // const [selectedCountries, setSelectedCountries] = useState([]);

  // console.log({ selectedCountries });

  // const handleChangeCountry = () => {

  // };

  return (
    <Container fluid style={{ marginTop: "40px" }}>

      <Row>
        <div className="roboto-semi-bold-28px-h2" style={{ marginBottom: "40px" }}>Company Information</div>
        <div className="">

          <Col md={6} lg={3}>
            <Form.Group className="form-group mb-3" controlId="form3Example3">
              <Form.Label
                className="roboto-medium-20px-body1 d-flex align-items-center"
                style={{ marginBottom: "20px" }}
              >
                <img src={commercialName} alt="commercialName" style={{ marginRight: "16px" }} />
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
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="form-group mb-3" controlId="form3Example4">
              <Form.Label className="roboto-medium-20px-body1">Select Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "56px" }}
                // style={{
                //   height: "56px",
                //   transition: "box-shadow 0.3s ease-in-out",
                //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                // }}
                name="companyInformation.category"
                value={values.category || ""}
                onChange={handleChange}
                // onBlur={handleBlur}
                isValid={touched.category && !errors.category}
                isInvalid={touched.category && !!errors.category}
                className={errors.category ? "border-danger" : ""}
              >
                <option selected value hidden="true">Select Category</option>
                {categories.map((category, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={index} value={category}>{category}</option>
                ))}
              </Form.Select>
              {/* <Form.Control.Feedback type="invalid"> */}
              <div className="text-danger" style={{ fontSize: "14px" }}>
                {errors.category}
              </div>
              {/* </Form.Control.Feedback> */}
            </Form.Group>
          </Col>

          <Col md={6} lg={3}>
            <Form.Group className="form-group mb-3" controlId="form3Example5">
              <Form.Label className="roboto-medium-20px-body1">Select sub-category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "56px" }}
                name="companyInformation.sub_category"
                value={values.sub_category || ""}
                onChange={handleChange}
                // onBlur={handleBlur}
                isValid={touched.sub_category && !errors.sub_category}
                isInvalid={touched.sub_category && !!errors.sub_category}
                className={errors.sub_category ? "border-danger" : ""}
              >
                {/* <option selected value hidden="true">Select sub_category</option> */}
                <option selected value hidden="true">Select sub category</option>
                {subCategories.map((subCategory, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={index} value={subCategory}>{subCategory}</option>
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

          <Col md={6} lg={8}>
            <Form.Group className="form-group mb-3" controlId="form3Example6">
              <Form.Label className="roboto-medium-20px-body1">Description</Form.Label>
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

          <Col md={6} lg={3}>
            {/* <Form.Group className="form-group mb-3" controlId="form3Example7">
              <Form.Label className="roboto-medium-20px-body1">Country</Form.Label>
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
              <Form.Label className="roboto-medium-20px-body1">Country</Form.Label>
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
              <Form.Label className="roboto-medium-20px-body1">Country</Form.Label>
              <Select
                options={countryOptions}
                isMulti
                name="companyInformation.country"
                // styles={{ height: "56px" }}
                value={countryOptions.filter((option) => selectedCountries.includes(option.value))}
                onChange={handleCountryChange}
                onBlur={handleBlur("companyInformation.country")}
                className={errors?.country ? "border-danger country-field" : "country-field"}
                classNamePrefix="select"
              />
              {errors?.country && (
                <div className="text-danger">{errors.country}</div>
              )}
            </Form.Group>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default CompanyInformation;
