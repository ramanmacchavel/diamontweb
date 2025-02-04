import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  DateField,
  SelectField,
  TextField,
} from "../../../../Components/ReduxField";
import { Button } from "../../../../Components";
const AddGuest = (props) => {
  const { qutationId, onCloseModal } = props;
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-10/12 mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Guest</h3>
              <button
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                onClick={onCloseModal}
              >
                <span className="block w-6 h-6 text-2xl text-black bg-white outline-none opacity-5 focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
              <div>
                <div class="flex space-x-1">
                  <div className="w-1/12">
                    <Field
                      name="Salutation"
                      label="Salutation"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="FirstName"
                      label="First Name"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="LastName"
                      label="Last Name"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field name="Email" label=" Email" component={TextField} />
                  </div>
                  <div className="w-1/12">
                    <Field name="Code" label="Code" component={TextField} />
                  </div>
                  <div>
                    <Field name="Phone" label="Phone" component={TextField} />
                  </div>
                  <div className="w-1/12">
                    <Field name="Gender" label="Gender" component={TextField} />
                  </div>
                  <div>
                    <Field
                      name="passpoetnumber"
                      label="Passport No"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="nationality"
                      label="Nationality"
                      component={TextField}
                    />
                  </div>
                  <div className="mt-6">
                    <Button name="Add" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <table className="w-full border border-collapse table-auto">
                  <thead className="text-sm font-bold text-white bg-slate-700">
                    <tr>
                      <th className="w-2/12 p-2 border">Name</th>
                      <th className="w-2/12 p-2 border">Email</th>
                      <th className="w-2/12 p-2 border">Phone</th>
                      <th className="w-1/12 p-2 border">Gender</th>
                      <th className="w-1/12 p-2 border">Lead Passenger</th>
                      <th className="w-1/12 p-2 border"></th>
                    </tr>
                  </thead>
                  <tbody className="text-md">
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={onCloseModal}
              >
                Close
              </button>
              <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                type="button"
                onClick={onCloseModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default reduxForm({
  form: "AddGuest",
})(AddGuest);
