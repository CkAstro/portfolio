type Props = {
   type: 'text' | 'textArea';
   className: string;
   value: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormInput = ({ type, className, value, onChange }: Props): JSX.Element => {
   const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
      event.currentTarget.select();

   if (type === 'text')
      return (
         <label className={className}>
            <input
               type="text"
               className={className}
               onFocus={handleFocus}
               value={value}
               onChange={onChange}
               maxLength={50}
            />
         </label>
      );

   return (
      <label className={className}>
         <textarea
            className={className}
            onFocus={handleFocus}
            value={value}
            onChange={onChange}
            rows={8}
            maxLength={1000}
         />
      </label>
   );
};

export default FormInput;
