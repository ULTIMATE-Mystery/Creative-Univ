<<<<<<< HEAD
import "./form.css";
const Form = () => {
  return (
    <section className="bg-yellow-main slanted-div mt-8 py-5 ">
      <div className="z-40 font-head text-[14px] font-semibold ml-4">
        Form đăng ký tư vấn
      </div>
      <div className="ml-8 mr-8 mt-3 z-30">
        <form method="POST" id="contactForm" name="contactForm">
          <div class="row">
            <div class="col-md-12 z-50">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Họ và tên (*)"
                ></input>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Ngày sinh (*)"
                ></input>
              </div>
            </div>
            <div class="col-md-12 z-50">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Số điện thoại (*)"
                ></input>
              </div>
            </div>
            <div class="col-md-12 z-50">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Email (*)"
                ></input>
              </div>
            </div>
            <div class="col-md-12 z-50">
              <div class="form-group ">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Portfolio (link google drive/behance)"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-start ml-4 font-body font-bold text-[12px] mt-7">
        <button class="z-50 button ">Đăng ký tư vấn</button>
      </div>
      <div className="ml-5 font-body font-medium text-[9px] -mt-[54px]">
        <p className="leading-3 z-50">
          Có khả năng nhận học bổng lên đến 4 250 000 VNĐ khi gửi kèm portfolio
        </p>
      </div>
      <div className="z-50 flex justify-center mt-[65px] mb-[12px] text-[20px] ml-10 font-hand">
        
          Form đăng ký <br /> chính thức
       
      </div>

      <div className="font-head text-10 font-medium flex flex-col w-[50px] h-[100px] mt[40px] ml-[180px]">
        <img
          className="z-40"
          src="https://i.imgur.com/nXSzPlz.png"
          alt="light"
        />
      </div>
      <div className="z-[10]">
        <img
          className="w-full -mt-[240px] -z-[10]"
          src="https://i.imgur.com/YlslnpE.png"
          alt="hands"
        />
      </div>
    </section>
  );
};

export default Form;
=======
import './form.css';
const Form = () => {
    return (
      <section className="bg-yellow-main slanted-div mt-8">
         <div class="container">
          <div className="font-head text-[14px] font-semibold ml-4"><br/>Form đăng ký tư vấn</div>
          <div className="ml-8 mr-8 mt-5">
          <form method="POST" id="contactForm" name="contactForm">
				<div class="row">
				<div class="col-md-12">
				<div class="form-group">
			    <input type="text" class="form-control" name="name" id="name" placeholder="Họ và tên (*)"></input>
			    </div>
				</div>
                <div class="col-md-12">
				<div class="form-group">
			    <input type="text" class="form-control" name="name" id="name" placeholder="Ngày sinh (*)"></input>
			    </div>
				</div>
                <div class="col-md-12">
				<div class="form-group">
			    <input type="text" class="form-control" name="name" id="name" placeholder="Số điện thoại (*)"></input>
			    </div>
				</div>
                <div class="col-md-12">
				<div class="form-group">
			    <input type="text" class="form-control" name="name" id="name" placeholder="Email (*)"></input>
			    </div>
				</div>
                <div class="col-md-12">
				<div class="form-group">
			    <input type="text" class="form-control" name="name" id="name" placeholder="Portfolio (link google drive/behance)"></input>
			    </div>
				</div>
		</div>
			    </form>
          </div>
          <img id="background-image" src="https://i.imgur.com/kR5RLOh.png" alt="hands"/>
          <div className="ml-4 font-body font-medium text-[8px]">
          <p id="absolute" className="leading-3">
          Có khả năng nhận học bổng lên đến 4 250 000 VNĐ khi gửi kèm portfolio
          </p>
        </div>
        <div className="ml-4 font-body font-bold text-[10px] mt-5">
        <button class="button">Đăng ký tư vấn</button>
        </div>
        <p id="absolute" className="mt-4 ml-[150px] text-[19px] font-hand">
            {" "}
            Form đăng ký <br/> chính thức
          </p>
        <div id="absolute" className="font-head text-10 font-medium flex flex-col w-[40px] h-[100px] mt-[65px] ml-[170px]">
          <img src="https://i.imgur.com/nXSzPlz.png" alt="light" />
        </div>
        </div>
      </section>
    );
  };
  
  export default Form;
  
>>>>>>> e57aace4253b5be8fbd4b4df7c1698267289afae
