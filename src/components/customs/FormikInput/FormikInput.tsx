import { Field, ErrorMessage } from 'formik';
type InputProp = {
  className?: string;
  name: string;
  type?: string;
};
const FormikInput = ({ className, name, type = 'text' }: InputProp) => {
  return (
    <div className={`my-3 flex flex-col items-start gap-1 ${className}`}>
      <label className="text-white first-letter:uppercase" htmlFor={name}>
        {name}
      </label>
      <Field className="w-full py-1 pl-1 rounded-sm outline-none" type={type} id={name} name={name} />
      <ErrorMessage name={name} component="div" className="error text-red-500" />
    </div>
  );
};

export default FormikInput;
