import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className='min-h-[calc(100vh-100px)] flex flex-col gap-20 items-center justify-center'>
      <div className="w-full shadow-black shadow-md">
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.850990092843!2d85.25979837582642!3d23.3936073023794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4df7c943305a3%3A0x893097521cb3d6dd!2sKamre%20Ashram!5e0!3m2!1sen!2sin!4v1690262366341!5m2!1sen!2sin'
          width='100%'
          height='450'
          style={{ border: "0" }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='bg-slate-900 shadow-black shadow-md rounded px-8 pt-6 pb-8 mb-10'>
        <h2 className='text-3xl font-bold mb-6 text-slate-300'>Contact Us</h2>
        <form className='w-96' action="" method="POST">
          <div className='mb-4'>
            <label
              className='block text-gray-500 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Username
            </label>
            <input
              className='shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:shadow-outline bg-slate-400 text-white'
              id='name'
              type='text'
              name="username"
              placeholder='Your UserName'
              autoComplete="off"
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-500 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:shadow-outline bg-slate-400 text-white'
              id='email'
              type='email'
              name="email"
              placeholder='Your Email'
              autoComplete="off"
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-500 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:shadow-outline bg-slate-400 text-white'
              id='message'
              rows='4'
              placeholder='Your Message'
              name="message"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className='flex items-center justify-between'>
            <Button text='Send Message' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
