import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFromControls/KodlamaIoTextInput";

export default function productAdd() {
  const initialValues = { productName: "", productUnitPrice: 10 };
  const schema = yup.object({
    productName: yup.string().required("Ürün adı zorunlu"),
    productUnitPrice: yup.number().required("Ürün fiyatı zorunlu"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {}}
      >
        <Form className="ui form">
          <KodlamaIoTextInput
            name="productName"
            placeholder="Ürün adı"
          ></KodlamaIoTextInput>
          <KodlamaIoTextInput
            name="productUnitPrice"
            placeholder="Ürün adı"
          ></KodlamaIoTextInput>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
