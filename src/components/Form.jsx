import React from 'react';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';

const jsonData = localStorage.getItem("applicationsData");
var applicationsArray = JSON.parse(jsonData)


if (applicationsArray === null) {
    console.log(applicationsArray);
    applicationsArray = [];
}


const ContactUsForm = () => {

    return (
        <Formik
            initialValues={{ date: '', company: '', outcome: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert("Information has been saved.");
                    setSubmitting(false);
                    applicationsArray.push(values);
                    // console.log(applicationsArray);
                    localStorage.setItem("applicationsData", JSON.stringify(applicationsArray));
                }, 1000);
            }}
            validationSchema={Yup.object({
                date: Yup.date()
                    .typeError('Date must be in format MM/DD/YYYY')
                    .required('Date is required'),
                company: Yup.string()
                    .required('Company is required'),
                outcome: Yup.string()
                    .required('Outcome is required'),
            })}
        >
            {(formik, isSubmitting) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <Field name="date" className={(formik.touched.date && formik.errors.date) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        {formik.touched.date && formik.errors.date ? (
                            <div className="invalid-feedback">{formik.errors.date}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <Field name="company" className={(formik.touched.company && formik.errors.company) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        {formik.touched.company && formik.errors.company ? (
                            <div className="invalid-feedback">{formik.errors.company}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="outcome">Outcome</label>
                        <Field name="outcome" as="select" className={(formik.touched.outcome && formik.errors.outcome) ? 'form-control is-invalid' : 'form-control'} type="text">
                            <option value="Select an option">Select an option</option>
                            <option value="Application Rejected">Application Rejected</option>
                            <option value="Interviewed - Unsuccessful">Interviewed - Unsuccessful</option>
                            <option value="Interviewed - Hired!">Interviewed - Hired</option>
                            <option value="No Response">No Response</option>
                        </Field>
                        {formik.touched.outcome && formik.errors.outcome ? (
                            <div className="invalid-feedback">{formik.errors.outcome}</div>
                        ) : null}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                    </div>

                </Form>
            )
            }
        </Formik >
    );
};

export default ContactUsForm;