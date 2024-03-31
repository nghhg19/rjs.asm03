import clasess from "../../static/styles/home/OtherInfo.module.scss";

const OtherInfor = () => {
  return (
    <>
      <div className={clasess.otherInfo}>
        <div className={clasess.Info_flex}>
          <div>
            <p className={clasess.info_title}>Free shipping</p>
            <p className={clasess.info_subText}>Free shipping worlwide</p>
          </div>
          <div>
            <p className={clasess.info_title}>24 X 7 Service</p>
            <p className={clasess.info_subText}>Free shipping worlwide</p>
          </div>
          <div>
            <p className={clasess.info_title}>Festival Offer</p>
            <p className={clasess.info_subText}>Free shipping worlwide</p>
          </div>
        </div>

        <div className={`wrapper ${clasess.formSub}`}>
          <div className={clasess.lableFrom}>
            <p className={clasess.info_title}>Lest's Be Friends!</p>
            <p className={clasess.info_subText}>
              Nisi nisi tempor consequat laboris nisi.
            </p>
          </div>
          <form className={clasess.form}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="form-control"
              required
            />
            <button
              type="submit"
              className={clasess.btn_subscribe}
              // onClick={subscibeHandler}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtherInfor;
