import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  instagramDesktopIcon,
  instagramIcon,
  twitterDesktopIcon,
  twitterIcon,
  telegramDesktopIcon,
  telegramIcon,
} from '../icons/index';

function Footer() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [countLetters, setCountLetters] = useState(0);

  function onSubmit(data) {
    console.log('Form Data:', data);
  }

  function handleMessageChange(e) {
    setCountLetters(e.target.value.length);
  }

  return (
    <footer className="bg-cover bg-center text-white bg-[url('../assets/Images/footer_bg.jpeg')]">
      <div className="mask bg-black bg-opacity-75 z-10">
        <div className="container max-w-[1400px] py-8 px-5 mx-auto flex flex-col lg:flex-row justify-between">
          <div className="links flex justify-around md:justify-between  w-full lg:w-5/12">
            <div>
              <h5 className="text-sm font-normal mb-2 md:text-xl md:font-bold md:mb-4">
                دسترسی آسان
              </h5>
              <ul className="flex flex-col gap-y-2 md:gap-y-4 pr-3 md:pr-6">
                <li className="text-xs font-normal md:text-sm md:font-medium text-neutral-300">
                  <Link to="/faq">پرسش های متداول</Link>
                </li>
                <li className="text-xs font-normal md:text-sm md:font-medium text-neutral-300">
                  <Link to="/rules">قوانین ترخینه</Link>
                </li>
                <li className="text-xs font-normal md:text-sm md:font-medium text-neutral-300">
                  <Link to="/privacy">حریم خصوصی</Link>
                </li>
              </ul>
              <div className="items-center gap-x-2 mt-2 md:gap-x-4 flex md:hidden">
                <button>
                  <Link>{twitterIcon}</Link>
                </button>
                <button>
                  <Link>{instagramIcon}</Link>
                </button>
                <button>
                  ,<Link>{telegramIcon}</Link>
                </button>
              </div>
              <div className="items-center gap-x-2 mt-2 md:gap-x-4 md:flex hidden">
                <button>
                  <Link>{twitterDesktopIcon}</Link>
                </button>
                <button>
                  <Link>{instagramDesktopIcon}</Link>
                </button>
                <button>
                  <Link>{telegramDesktopIcon}</Link>
                </button>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-normal mb-2 md:text-xl md:font-bold md:mb-4">
                شعبه های ترخینه
              </h5>
              <ul className="flex flex-col gap-y-2 md:gap-y-4 pr-3 md:pr-6">
                <li className="text-xs font-normal md:text-sm md:font-medium text-neutral-300">
                  <Link>شعبه اکباتان</Link>
                </li>
                <li className="text-xs font-normal md:text-sm md:font-medium text-neutral-300">
                  <Link>شعبه چالوس</Link>
                </li>
                <li className="text-xs font-normal md:text-sm md:font-medium text-neutral-300">
                  <Link>شعبه اقدسیه</Link>
                </li>
                <li className="text-xs font-normal md:text-sm md:font-medium text-neutral-300">
                  <Link>شعبه ونک</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="form w-full lg:w-1/2">
            <h5 className="text-sm font-normal mb-2 mt-4 lg:mt-0 md:text-xl md:font-bold md:mb-4">
              پیام به ترخینه
            </h5>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-start gap-8 pr-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-y-5 w-full">
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی"
                      className="h-10 px-4 bg-transparent text-neutral-100 placeholder:text-neutral-100 outline-none border border-neutral-700 rounded"
                      {...register('firstAndLastName', {
                        required: 'نام و نام خانوادگی الزامی است',
                      })}
                    />
                    <span className="text-error text-xs pt-1">
                      {errors.firstAndLastName?.message}
                    </span>
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      type="tel"
                      dir="rtl"
                      placeholder="شماره تماس"
                      className="h-10 px-4 bg-transparent text-neutral-100 placeholder:text-neutral-100 outline-none border border-neutral-700 rounded"
                      {...register('phoneNumber', {
                        required: 'شماره تلفن الزامی است',
                      })}
                    />
                    <span className="text-error text-xs pt-1">
                      {errors.phoneNumber?.message}
                    </span>
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      type="email"
                      placeholder="آدرس ایمیل"
                      className="h-10 px-4 bg-transparent text-neutral-100 placeholder:text-neutral-100 outline-none border border-neutral-700 rounded"
                      {...register('email', {
                        required: 'ایمیل الزامی است',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'ایمیل نامعتبر هست',
                        },
                      })}
                    />
                    <span className="text-error text-xs pt-1">
                      {errors.email?.message}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end w-full">
                  <div className="flex flex-col w-full">
                    <textarea
                      className="px-4 w-full bg-transparent text-neutral-100 placeholder:text-neutral-100 outline-none border border-neutral-700 rounded py-4 h-40 overflow-hidden"
                      placeholder="پیام شما"
                      maxLength={200}
                      {...register('message', {
                        required: 'پیام الزامی است',
                      })}
                      onChange={handleMessageChange}
                    ></textarea>
                    <span className="text-error text-xs pt-1">
                      {errors.message?.message}
                    </span>
                  </div>
                  <span className="mb-2 text-xs font-normal text-neutral-400">
                    {countLetters}/200
                  </span>
                  <button
                    type="submit"
                    className="text-neutral-100 text-sm font-medium px-12 h-10 border border-neutral-700 rounded hover:bg-neutral-700"
                  >
                    ارسال پیام
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
