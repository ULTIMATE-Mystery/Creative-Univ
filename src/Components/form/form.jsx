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
  