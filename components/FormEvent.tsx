"use client"

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';

const formSchema = z.object({
    fullName: z.string().min(1, 'Full Name is required'),
    phoneNumber: z.string().min(1, 'Phone Number is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    address: z.string().min(1, 'Your Valid Address is required'),
    occupation: z.string().min(1, 'Occupation is required'),
});

type FormSchema = z.infer<typeof formSchema>;

const FormEvent: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormSchema> = data => {
        console.log(data);
    };

    return (
        <div className="mx-auto border-none bg-white px-6 py-8 md:px-12 md:py-12">
            <h2 className="bodyText-dark-2">Complete the Form</h2>
            <p className='bodyParagraph-orange -mt-4'>Fill Form and Beacame Volonteer</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input
                        {...register('fullName')}
                        placeholder="Enter Full Name*"
                        className="inputStyle-3"
                    />
                    {errors.fullName && <span className="inputSpan-2">{errors.fullName.message}</span>}
                </div>
                <div>
                    <input
                        {...register('phoneNumber')}
                        placeholder="Phone Number*"
                        className="inputStyle-3"
                    />
                    {errors.phoneNumber && <span className="inputSpan-2">{errors.phoneNumber.message}</span>}
                </div>
                <div>
                    <input
                        {...register('email')}
                        placeholder="Email Address*"
                        className="inputStyle-3"
                    />
                    {errors.email && <span className="inputSpan-2">{errors.email.message}</span>}
                </div>
                <div>
                    <input
                        {...register('address')}
                        placeholder="Address*"
                        className="inputStyle-3"
                    />
                    {errors.address && <span className="inputSpan-2">{errors.address.message}</span>}
                </div>
                <div>
                    <textarea
                        {...register('occupation')}
                        placeholder="About Occupation*"
                        className="inputStyle-3 h-32"
                    />
                    {errors.occupation && <span className="inputSpan-2">{errors.occupation.message}</span>}
                </div>
                <Button type="submit" className="mt-4 button-dark">
                    Submit Now
                </Button>
            </form>
        </div>
    );
};

export default FormEvent;