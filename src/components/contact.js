import { useState } from 'react';
import { MdOutlineEmojiPeople } from 'react-icons/md';

const Contact = () => {
  const initialState = {
    email: '',
    message: '',
  };
  const [info, setInfo] = useState(initialState);

  const handleChange = (inp) => {
    if (inp.target.name === 'email') {
      setInfo((state) => ({ ...state, email: inp.target.value }));
    } else {
      setInfo((state) => ({ ...state, message: inp.target.value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://formspree.io/f/xbjboqzp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    setInfo(initialState);
  };

  return (
    <section className=" mt-20 w-full flex flex-col gap-5" id="contact">
      <div className="flex w-full gap-2 items-center">
        <MdOutlineEmojiPeople className="text-3xl text-orange-400" />
        <h3 className="text-3xl">Let's connect</h3>
        <hr className="bg-gray-500 flex-1 h-[1px] border-none" />
      </div>

      <div className="flex flex-col gap-5 my-20">
        <h2 className="text-center text-3xl text-orange-200">Get in touch!</h2>
        <p className="text-gray-300 text-center">
          I'm always interested in hearing about new projects, so if you'd like
          to chat please get in touch.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          <p
            className="text-center w-full lg:w-1/3 text-gray-500 text-2xl lg:text-3xl"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "The best dreams happen when we are awake!"
          </p>
          <div className="p-8">
            <form
              action=""
              method="post"
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={info.email}
                onChange={handleChange}
                placeholder="Email here.."
                className="border-gray-300 bg-gray-200/10 focus:outline focus:outline-orange-500 rounded-lg py-2 px-4 mb-4 w-full"
                required
              />

              <textarea
                type="text"
                name="message"
                value={info.message}
                onChange={(inp) => handleChange(inp)}
                placeholder="Leave your message.."
                className="border-gray-300 bg-gray-200/10 focus:outline focus:outline-orange-500 rounded-lg py-2 px-4 mb-4 w-full"
                required
              />
              <button
                type="submit"
                className="relative mt-5 px-4 py-2 border border-orange-400 block mx-auto text-orange-200 hover:-translate-x-2 hover:-translate-y-1 duration-300 hover:shadow-btnShadow w-max"
              >
                Shoot!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
