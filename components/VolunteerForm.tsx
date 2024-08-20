"use client"

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';

const formSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  message: z.string().min(1, 'Message is required'),
});

type FormSchema = z.infer<typeof formSchema>;

const VolunteerForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = data => {
    console.log(data);
  };

  return (
    <div className=" mx-auto border px-6 py-8 md:px-12 md:py-16">
      <h2 className="bodyText-white-1">Become A Volunteer</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('fullName')}
            placeholder="Full Name*"
            className="inputStyle"
          />
          {errors.fullName && <span className="inputSpan">{errors.fullName.message}</span>}
        </div>
        <div>
          <input
            {...register('email')}
            placeholder="Email Address*"
            className="inputStyle"
          />
          {errors.email && <span className="inputSpan">{errors.email.message}</span>}
        </div>
        <div>
          <input
            {...register('phoneNumber')}
            placeholder="Phone Number*"
            className="inputStyle"
          />
          {errors.phoneNumber && <span className="inputSpan">{errors.phoneNumber.message}</span>}
        </div>
        <div>
          <textarea
            {...register('message')}
            placeholder="Message*"
            className="inputStyle"
          />
          {errors.message && <span className="inputSpan">{errors.message.message}</span>}
        </div>
        <Button type="submit" className="mt-4 button-white">
            Submit Now
        </Button>
      </form>
    </div>
  );
};

export default VolunteerForm;