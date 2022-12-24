import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";


export default function ImageField(props: imageFieldProps) {
  const [imageBase64, setImageBase64] = useState("");
  // IF the user select the image from the url this should be empty but nobody wants to have two same images
  const [imageUrl, setImageUrl] = useState(props.imageURL);
  //The context allows us to get access the value of the formik form 
  const {values} = useFormikContext<any>();




  const divStyle = { marginTop: "5px" };
  const imgStyle = { width: "300px" , height: "220px" };

  const handleOnChange = (eventsArgs: ChangeEvent<HTMLInputElement>) => {
    if (eventsArgs.currentTarget.files) {
      const file = eventsArgs.currentTarget.files[0];
      if (file) {
        toBase64(file)
          .then((base64Representation: string) =>
            setImageBase64(base64Representation)
          )
          .catch((error) => console.log(error));
          // want to sending the file back to the parent component 
          values[props.field] = file;
           // IF the user select the image from the url this should be empty but nobody wants to have two same images
           setImageUrl('');
      } else {
        setImageBase64("");
      }
    }
  };
  // helper function , This Operation is async
  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };


  return (
    <div className="mb-3">
      <label htmlFor="">{props.displayName}</label>
      <div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png,.jfif , .pjpeg , .pjp,.svg, .webp "
          onChange={handleOnChange}
        />
      </div>
      {imageBase64 ? (
        <div>
          <div style={divStyle}>
            <img style={imgStyle} src={imageBase64} alt="selected" />
          </div>
        </div>
      ) : null}
    

{imageUrl ? (
    <div>
      <div style={divStyle}>
        <img style={imgStyle} src={imageUrl} alt="selected" />
      </div>
    </div>
  ) : null}
  </div>
  );
}
interface imageFieldProps {
  displayName: string;
  imageURL: string;
  field: string;
}
ImageField.defaultProps ={
    imageURL: ''
}
