import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props.name);

  return (
    <DatePicker className="datepicker"
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
          props.toggleShowTimes();
          setFieldValue(field.name, val?.toDateString());
      }}
      placeholderText={field.name}
      dateFormat="MMMM d, yyyy"
    />
  );
};