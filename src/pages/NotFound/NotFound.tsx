import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// import logo from 'assets/logo/logo-fpt.png';

function NotFound() {
  // const navigate = useNavigate();

  return (
    <>
      <section className="dark:bg-gray-900 flex min-h-screen items-center justify-center bg-white">
        <div className="mx-auto max-w-screen-xl -translate-y-20 px-4 py-20 lg:px-6 lg:py-32">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="dark:text-primary-500 mb-8 text-6xl font-extrabold  tracking-tight text-orange-400">404</h1>
            <p className="text-gray-900 mb-2 text-2xl font-bold tracking-tight  dark:text-white">
              Trang bạn truy cập không tồn tại.
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400 mb-4 font-light">Vui lòng kiểm tra lại.</p>
            <Link
              to={'/'}
              className="focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="fixed mx-auto h-[100vh] bg-black px-10 pt-5">
        <img src={logo} alt="" className="mx-auto w-40" />
        <h1 class="my-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">
          Hiện website chưa hỗ trợ cho phiên bản cho màn hình tablet. Vui lòng
          truy cập trên máy tính có trải nghiệm tốt nhất.
          <br />
        </h1>
        <h1 className="my-6 text-center text-3xl">😊😊😊</h1>
        <iframe
          className="mx-auto rounded-2xl"
          width="700"
          height="400"
          src="https://www.youtube.com/embed/yI3dEh0AvxE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section> */}
    </>
  );
}

export default NotFound;
