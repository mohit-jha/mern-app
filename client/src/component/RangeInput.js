import React, { useState } from "react";
import { Modal, InputGroup, FormControl, Form, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";

export default function RangeInput(props) {
  // console.log(props,'props');n
  const Range = props.Range;
  // console.log(Range,'range--------------------------------------------ssssssssss');
  const [smShow, setSmShow] = useState(false);

  // console.log(Range,'ranfaees');
  return (
    <div>
      <Button
        className="btnSetRange"
        variant="contained"
        color="secondary"
        size="small"
        style={{
            backgroundColor: "#1db955",
        }}
        onClick={() => setSmShow(true)}
        >
        Set Range
      </Button>{" "}
      <Modal
        className="modalForRange modal fade bd-example-modal-lg"
        backdrop="static"
        keyboard={false}
        size="lg"
        left
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton onClick={props.closeClick}>
          <Modal.Title id="example-modal-sizes-title-sm">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <h6>Andhra Pradesh</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.AP}
                  name="AP"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <h6>Arunachal Pradesh</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.AR}
                  name="AR"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <h6>Assam</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.AS}
                  name="AS"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Bihar</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.BR}
                  name="BR"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Chhattisgarh</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.CT}
                  name="CT"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Goa</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.GA}
                  name="GA"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Gujrat</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.GJ}
                  name="GJ"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Haryana</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.HR}
                  name="HR"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Himachal</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.HP}
                  name="HP"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Jharkhand</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.JH}
                  name="JH"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Karnataka</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.KA}
                  name="KA"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Kerala</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.KL}
                  name="KL"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Madhya Pradesh</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.MP}
                  name="MP"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Maharashtra</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.MH}
                  name="MH"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Manipur</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.MN}
                  name="MN"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Meghalaya</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.ML}
                  name="ML"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Mizoram</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.MZ}
                  name="MZ"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <h6>Nagaland</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.NL}
                  name="NL"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Odisha</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.OR}
                  name="OR"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <h6>Punjab</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.PB}
                  name="PB"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <h6>Rajasthan</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.RJ}
                  name="RJ"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <h6>Sikkim</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.SK}
                  name="SK"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Tamil Nadu</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.TN}
                  name="TN"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Telangana</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.TG}
                  name="TG"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Tripura</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.TR}
                  name="TR"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Uttarakhand</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.UT}
                  name="UT"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Uttar Pradesh</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.UP}
                  name="UP"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>West Bengal</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.WB}
                  name="WB"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Andaman n Nicobar</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.AN}
                  name="AN"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Chandigarh</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.CH}
                  name="CH"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Dadra and NagarHavel</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.DN}
                  name="DN"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Daman and Diu</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.DD}
                  name="DD"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Delhi</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.DL}
                  name="DL"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Jammu and Kashmir</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.JK}
                  name="JK"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Ladakh</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.LA}
                  name="LA"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Lakshadweep</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.LD}
                  name="LD"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <h6>Puducherry</h6>
                <Form.Control
                  onChange={props.handleChange}
                  value={Range.PY}
                  name="PY"
                />
              </Form.Group>
            </Form.Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      {/* <App range={Range} /> */}
    </div>
  );
}
