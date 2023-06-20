import Image from "next/image";
import style from "./uploadresume.module.css";
import upload from "/public/images/choose.svg";
import { useRef, useState } from "react";
import axios from "axios";
import tick from "/public/images/tick.svg";

const UploadResume = () => {
  const [disableBtn, setDisableBtn] = useState(true);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    filename: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState({
    selectedfile: null,
  });
  const [msg, setMsg] = useState("");
  const [focus, setFocus] = useState(true);
  const isFocus = focus ? "Let us know" : "";

  const checkFileType = (e, eventType) => {
    let extension;

    if (eventType === "drop") {
      extension = e.dataTransfer.files[0].name.match(/\.([^.]+)$/)[1];
    } else {
      extension = e.target.value.match(/\.([^.]+)$/)[1];
    }

    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "pdf":
      case "ppt":
        eventType !== "drop"
          ? setFile({ selectedfile: e.target.files[0] })
          : setFile({ selectedfile: e.dataTransfer.files[0] });
        setMsg("");
        break;
      default:
        setFile({ selectedfile: null });
        setMsg(`.${extension} format is not supported.`);
    }
  };

  const checkSize = (e, eventType) => {
    let size;
    if (eventType === "drop") {
      size = e.dataTransfer.files[0].size / 8;
    } else {
      size = e.target.files[0].size / 8;
    }

    if (size <= 5000000) {
      checkFileType(e, eventType);
    } else {
      setMsg("Size should be less than 5MB");
    }
  };
  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      checkSize(e);
    } else {
      setFile({ selectedfile: null });
    }
  };

  const toogleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "name" && value.trim() === "") {
      error = "Name is required";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email is invalid";
    } else if (name === "subject" && value.trim() === "") {
      error = "Subject is required";
    } else if (name === "description " && value.trim() === "") {
      error = "description  is required";
    } else {
      setDisableBtn(false);
    }
    //
    setErrors({ ...errors, [name]: error });
    setValue({ ...value, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    file.selectedfile && fileReader.readAsDataURL(file.selectedfile);

    fileReader.onload = async () => {
      const base64String = fileReader.result.split(",")[1];

      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        filename: file.selectedfile.name,
        attachment: base64String,
        description: e.target.description.value,
      };

      try {
        const getData = await axios.post(
          `${process.env.baseURL}/rev2023/Common/SendEmail`,
          data
        );

        if (getData.data.returnMsg === "Email sent successfully") {
          const mailData = {
            name: data.name,
            designation: data.subject,
            email: data.email,
          };
          try {
            const emailres = await axios.post(
              `${process.env.baseURL}/rev2023/Common/SendEmailToUser`,
              mailData
            );
          } catch {}
        }
      } catch (e) {}

      setValue({
        name: "",
        email: "",
        subject: "",
        filename: "",
        description: "",
        attachment: "",
      });
    };
  };

  return (
    <section>
      <div className="container">
        <h3 className={style.heading}>Upload your resume</h3>
        <div className={style.main_form}>
          <div className={style.form_append}>
            <form onSubmit={handleSubmit}>
              <div className={`flex ${style.form_fieled}`}>
                <div className={style.carrer_form_control}>
                  <label htmlFor="" className={style.form_name}>
                    Full name *
                  </label>
                  <input
                    className={style.form_input}
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Julia William"
                    value={value.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className={style.error}>{errors.name}</p>}
                </div>
                <div className={style.carrer_form_control}>
                  <label htmlFor="" className={style.form_email}>
                    Contact email *
                  </label>
                  <input
                    className={style.form_input}
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={value.email}
                    placeholder="you@example.com"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className={style.error}>{errors.email}</p>
                  )}
                </div>
                <div className={style.carrer_form_control}>
                  <label htmlFor="" className={style.form_subject}>
                    Subject *
                  </label>
                  <input
                    className={style.form_input}
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={value.subject}
                    placeholder="UI Designer"
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className={style.error}>{errors.subject}</p>
                  )}
                </div>
                <div className={style.carrer_form_control}>
                  <label htmlFor="" className={style.form_upload}>
                    Resume *
                  </label>
                  <div className={style.file_attach}>
                    <input
                      type="file"
                      onChange={handleUpload}
                      className={style.form_input}
                      id="getFile"
                      selectedfile={file.selectedfile}
                      name="filename"
                      style={{ display: "none" }}
                    />

                    {file.selectedfile !== null ? (
                      <p className={style.filename}>{file.selectedfile.name}</p>
                    ) : msg !== "" ? (
                      msg
                    ) : (
                      <span className={style.select_file}>Choose file</span>
                    )}

                    <label
                      className={style.upload_file_btn}
                      onClick={() => document.getElementById("getFile").click()}
                    >
                      Choose
                      <Image
                        src={upload}
                        alt="upload_file"
                        className={style.upload_icon}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className={style.carrer_text_area}>
                <label htmlFor="" className={style.form_txt_area}>
                  Tell us a bit about you *
                </label>
                <textarea
                  name="description"
                  id=""
                  onChange={handleChange}
                  className={style.textarea}
                  value={value.description}
                  placeholder={isFocus}
                  onFocus={() => setFocus(false)}
                  onBlur={() => setFocus(true)}
                />

                {errors.description && (
                  <p className={style.error}>{errors.description}</p>
                )}
              </div>
              <p className={`para ${style.form_txt}`}>
                By submitting this form you agree to our terms and conditions
                and our Privacy Policy which explains how we may collect, use
                and disclose your personal information including to third
                parties.
              </p>
              <button
                className={`btn ${style.upload_btn} ${
                  disableBtn ? style.disable : ""
                }`}
                type="submit"
                onClick={toogleModal}
                disabled={disableBtn}
              >
                Apply now
              </button>

              {modal && (
                <div className={style.overlay}>
                  <div className={style.popup} id="popup">
                    <Image
                      src={tick}
                      alt="join-us"
                      className={style.joinus_img}
                    />
                    <h2>Thank You!😄</h2>
                    <p className="para">
                      Your Details has been successfully Submited.
                    </p>
                    <button onClick={toogleModal} className={style.popup_btn}>
                      ok
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadResume;
