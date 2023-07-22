import React from "react";
import {
  Button, Col, Container, Form, Modal, Row,
} from "react-bootstrap";
import Select from "react-select";

const countries = [
  "Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud",
  "Botosani", "Braila", "Brasov", "Buzau", "Calarasi",
  "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dambovita",
  "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita",
  "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti",
  "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu-Mare", "Sibiu",
  "Suceava", "Teleorman", "Timis", "Tulcea", "Valcea", "Vaslui", "Vrancea",
];

function ContactInformationForm({
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
        name: "contactInformation.country",
        value: countryNames,
      },
    });
  };
  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

  return (
    <Container style={{ paddingTop: "40px" }}>

      <div className="roboto-semi-bold-28px-h2" style={{ marginBottom: "40px" }}>
        Contact Information
      </div>

      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Contact Person Number</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="contactInformation.contact_number"
              type="text"
              size="lg"
              placeholder="Enter Number"
              value={values.contact_number}
              onChange={handleChange}
              isValid={touched.contact_number && !errors.contact_number}
              isInvalid={!!errors.contact_number}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contact_number}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Website URL</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="contactInformation.websiteUrl"
              type="text"
              size="lg"
              placeholder="Enter websiteUrl"
              value={values.websiteUrl}
              onChange={handleChange}
              isValid={touched.websiteUrl && !errors.websiteUrl}
              isInvalid={!!errors.websiteUrl}
            />
            <Form.Control.Feedback type="invalid">
              {errors.websiteUrl}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={4}>
          {/* <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Country</Form.Label>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "56px" }}
              name="county"
              value={values.country || ""}
              onChange={handleChange}
              isValid={touched.country && !errors.country}
              isInvalid={touched.country && !!errors.country}
              className={errors.country ? "border-danger" : ""}
            >
              <option disabled selected value hidden="true">Select country</option>
            </Form.Select>
            <div className="text-danger" style={{ fontSize: "14px" }}>
              {errors.country}
            </div>
          </Form.Group> */}

          <Form.Group className="form-group mb-3" controlId="form3Example6">
            <Form.Label className="roboto-medium-20px-body1">Country</Form.Label>
            <Select
              options={countryOptions}
              isMulti
              name="contactInformation.country"
              value={countryOptions.filter((option) => selectedCountries.includes(option.value))}
              onChange={handleCountryChange}
              onBlur={handleBlur("contactInformation.country")}
              className={errors?.country ? "border-danger country-field" : "country-field"}
              classNamePrefix="select"
            />
            {errors?.country && (
              <div className="text-danger">{errors.country}</div>
            )}
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">City</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="contactInformation.city"
              type="text"
              size="lg"
              placeholder="Enter City"
              value={values.city}
              onChange={handleChange}
              isValid={touched.city && !errors.city}
              isInvalid={!!errors.city}
            />
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={4}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Street</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="contactInformation.street"
              type="text"
              size="lg"
              placeholder="Enter websiteUrl"
              value={values.street}
              onChange={handleChange}
              isValid={touched.street && !errors.street}
              isInvalid={!!errors.street}
            />
            <Form.Control.Feedback type="invalid">
              {errors.street}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={8}>
          <Form.Group className="mb-4" controlId="form3Example3">
            <Form.Label className="roboto-medium-20px-body1">Full Address</Form.Label>
            <Form.Control
              style={{ height: "56px" }}
              className="lg-input-small-text"
              name="contactInformation.fullAddress"
              type="text"
              size="lg"
              placeholder="Enter websiteUrl"
              value={values.fullAddress}
              onChange={handleChange}
              isValid={touched.fullAddress && !errors.fullAddress}
              isInvalid={!!errors.fullAddress}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullAddress}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInformationForm;