import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import testImage from "../components/image/tesodev.png";
import LeftArrow from "../components/icon/LeftArrow";
import FormikErrorFocus from "formik-error-focus";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { NotifyMessageContext } from "../context/NotifyMessageCtx";
import { SET_DATA, SET_SEARCH_QUERY } from "../store/actions";
import { formatDate } from "../utils/dateTime";

const AddNewPage = () => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    namesurname: Yup.string()
      .min(4, "Too Short name surname!")
      .max(60, "Too Long name surname!")
      .required("Name and surname required "),
    country: Yup.string()
      .min(2, "Too Short country!")
      .max(40, "Too Long country!")
      .required("Counrty required"),
    city: Yup.string()
      .min(2, "Too Short city!")
      .max(40, "Too Long city!")
      .required("City required"),
    email: Yup.string().email("Invalid email").required("Email required"),
  });

  const { getElementValue } = useContext(NotifyMessageContext);

  const handleSubmit = (values) => {
    if (
      values.namesurname.split(" ").length >= 2 &&
      values.namesurname.split(" ")[1] !== ""
    ) {
      getElementValue(
        "You entered the data correctly. Added Successfully",
        false
      );
      const saveValue = {
        name: values?.namesurname.split(" ")[0],
        surname: values?.namesurname.split(" ")[1],
        city: values?.city,
        country: values?.country,
        email: values?.email,
        date: formatDate(new Date()),
      };
      SET_DATA([
        saveValue.name,
        saveValue.surname,
        saveValue.company,
        saveValue.email,
        saveValue.date,
        saveValue.country,
        saveValue.city,
      ]);
    } else {
      getElementValue("Name and surname should contain at least 2 words", true);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          position: "relative",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 32,
            }}
          >
            <Link to={"/"}>
              <img src={testImage} style={{ width: "149px", height: "63px" }} />
            </Link>
            <div
              onClick={() => {
                SET_SEARCH_QUERY("");
                navigate(-1);
              }}
            >
              <LeftArrow />
            </div>
            <text
              style={{ fontWeight: "700", fontSize: "24px", color: "#484848" }}
            >
              Return to List Page
            </text>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 32,
            }}
          >
            <div style={{ width: "149px", height: "63px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Formik
                  initialValues={{
                    namesurname: "",
                    country: "",
                    city: "",
                    email: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    handleSubmit(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "590px",
                          paddingTop: "80px",
                        }}
                      >
                        <Field name="namesurname">
                          {({ field, form }) => (
                            <>
                              <label
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  color:
                                    errors.namesurname && touched.namesurname
                                      ? "rgba(255, 0, 0, 0.7)"
                                      : "#686868",
                                }}
                              >
                                Name Surname
                              </label>
                              <input
                                style={{
                                  padding: "10px 20px",
                                  border: "1.5px solid #484848",
                                  borderRadius: "12px",
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  marginTop: "10px",
                                }}
                                {...field}
                                type="text"
                                placeholder="Enter name and surname"
                                className={
                                  errors.namesurname && touched.namesurname
                                    ? "inputformik"
                                    : ""
                                }
                              />
                              {errors.namesurname && touched.namesurname ? (
                                <div
                                  style={{
                                    color: "rgba(255, 0, 0, 0.7)",
                                    paddingTop: "10px",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                  }}
                                >
                                  {errors.namesurname}
                                </div>
                              ) : null}
                            </>
                          )}
                        </Field>

                        <Field name="country">
                          {({ field, form }) => (
                            <>
                              <label
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  color:
                                    errors.country && touched.country
                                      ? "rgba(255, 0, 0, 0.7)"
                                      : "#686868",
                                  marginTop: "40px",
                                }}
                              >
                                Country
                              </label>
                              <input
                                style={{
                                  padding: "10px 20px",
                                  border: "1.5px solid #484848",
                                  borderRadius: "12px",
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  marginTop: "10px",
                                }}
                                {...field}
                                type="text"
                                placeholder="Enter a country"
                                className={
                                  errors.country && touched.country
                                    ? "inputformik"
                                    : ""
                                }
                              />
                              {errors.country && touched.country ? (
                                <div
                                  style={{
                                    color: "rgba(255, 0, 0, 0.7)",
                                    paddingTop: "10px",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                  }}
                                >
                                  {errors.country}
                                </div>
                              ) : null}
                            </>
                          )}
                        </Field>

                        <Field name="city">
                          {({ field, form }) => (
                            <>
                              <label
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  color:
                                    errors.city && touched.city
                                      ? "rgba(255, 0, 0, 0.7)"
                                      : "#686868",
                                  marginTop: "40px",
                                }}
                              >
                                City
                              </label>
                              <input
                                style={{
                                  padding: "10px 20px",
                                  border: "1.5px solid #484848",
                                  borderRadius: "12px",
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  marginTop: "10px",
                                }}
                                {...field}
                                type="text"
                                placeholder="Enter a city"
                                className={
                                  errors.city && touched.city
                                    ? "inputformik"
                                    : ""
                                }
                              />
                              {errors.city && touched.city ? (
                                <div
                                  style={{
                                    color: "rgba(255, 0, 0, 0.7)",
                                    paddingTop: "10px",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                  }}
                                >
                                  {errors.city}
                                </div>
                              ) : null}
                            </>
                          )}
                        </Field>

                        <Field name="email">
                          {({ field, form }) => (
                            <>
                              <label
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  color:
                                    errors.email && touched.email
                                      ? "rgba(255, 0, 0, 0.7)"
                                      : "#686868",
                                  marginTop: "40px",
                                }}
                              >
                                Email
                              </label>
                              <input
                                style={{
                                  padding: "10px 20px",
                                  border: "1.5px solid #484848",
                                  borderRadius: "12px",
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  marginTop: "10px",
                                }}
                                {...field}
                                type="text"
                                placeholder="Enter a e-mail (abc@xyz.com)"
                                className={
                                  errors.email && touched.email
                                    ? "inputformik"
                                    : ""
                                }
                              />
                              {errors.email && touched.email ? (
                                <div
                                  style={{
                                    color: "rgba(255, 0, 0, 0.7)",
                                    paddingTop: "10px",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                  }}
                                >
                                  {errors.email}
                                </div>
                              ) : null}
                            </>
                          )}
                        </Field>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "70px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flex: 1,
                              justifyContent: "end",
                            }}
                          >
                            <button
                              type="submit"
                              style={{
                                padding: "13px 40px",
                                width: "138px",
                                height: "46px",
                                background: "#4F75C2",
                                color: "white",
                                borderRadius: "12px",
                                border: "none",
                                fontWeight: "700",
                                fontSize: "18px",
                              }}
                              disabled={
                                !errors.namesurname &&
                                !errors.country &&
                                !errors.city &&
                                !errors.email
                                  ? false
                                  : true
                              }
                            >
                              Add
                            </button>
                          </div>
                        </div>
                        <FormikErrorFocus
                          offset={0}
                          align={"top"}
                          focusDelay={0}
                          duration={100}
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPage;
