import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  
  const sendEmail = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 400);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('E-mail Address Required'),
    message: Yup.string().required('Message Required')
  });


  return (
    <div className="flex justify-center">
     <div className="w-full space-y-8 bg-violet-100 p-4 rounded-md">
        
        <h1 className="text-3xl font-bold text-gray-700">
          We&apos;re here to answer your questions
        </h1>

        <Formik
          initialValues={{ email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="rounded-md">
                        
                        {/* TEXT INPUT  */}
                        <div className='relative mb-[28px]'>
                          <label htmlFor="email-address" className="font-medium">What&apos;s you&apos;re e-mail address?</label>
                          <Field 
                              id="email" 
                              type="email" 
                              name="email"
                              placeholder="Email address"
                              className="appearance-none rounded relative block w-full px-3 py-2 border border-indigo-900/50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic absolute bottom-[-18px] left-[8px]" />
                        </div>

                        {/* TEXT AREA */}
                        <div className='relative mb-[28px]'>
                          <label htmlFor="message" className="font-medium">What&apos;s you&apos;re question or issue?</label>
                          <Field
                              as="textarea"
                              rows="5"
                              cols="50"
                              id="message"
                              name="message"
                              placeholder="Your message"
                              className="appearance-none rounded relative block w-full px-3 py-2 border border-indigo-900/50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                          />
                          <ErrorMessage name="message" component="div" className="text-red-500 text-xs italic absolute bottom-[-18px] left-[8px]" />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="mt-8 ml-auto w-[180px] group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-700 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
</div>
);
};

export default ContactForm