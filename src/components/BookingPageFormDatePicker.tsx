import { useState } from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props.name);

  return (
    <DatePicker className="datepicker"
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
          setFieldValue(field.name, val);
          props.toggleShowTimes();
      }}
      dateFormat="MMMM d, yyyy"
    />
  );
};

//showTimeSelect
//      timeFormat="HH:mm"
////      timeIntervals={60}
//minTime={setHours(setMinutes(new Date(), 0), 17)}
//      maxTime={setHours(setMinutes(new Date(), 0), 22)}
//dateFormat="hh:mm, MMMM d, yyyy"