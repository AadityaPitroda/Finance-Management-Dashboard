'use client';
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { z } from "zod" // React Hook Form using shadcn
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authformSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.actions';

// Form Schema of React Hook Form
const formSchema = z.object({
  email: z.string().email(),
})



const AuthForm = ({ type }: { type: string }) => {

  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false)

  const formSchema = authformSchema(type);


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true)

    try {
      // Sign Up Appwrite & Create a Plain link token

      if( type === 'sign-up'){
        const newUser = await signUp(data);
        setUser(newUser);
      }

      if( type === 'sign-in' ){
        const response = await signIn({
          email: data.email,
          password: data.password
        })
        if(response) router.push('/')
      }


    } catch (error) {

      console.log(error);

    } finally {

      setisLoading(false);

    }
  }

  return (
    <section className='auth-form'>
      <header className="flex felx-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer items-center flex gap-1 px-4" >
          <Image src="/icons/logo.svg" width={34} height={34} alt="FinFlow Logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinFlow</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
            {user
              // IF-ELSE Statement
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'Please Enter your details'
              }
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* Plaid Link */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control} name='firstName' label='First Name' placeholder="Enter your first name"
                    />
                    <CustomInput
                      control={form.control} name='lastName' label='Last Name' placeholder="Enter your last name"
                    />

                  </div>
                  <CustomInput
                    control={form.control} name='address1' label='Address' placeholder="Enter specific address"
                  />
                  <CustomInput
                    control={form.control} name='city' label='City' placeholder="Enter your city"
                  />
                  <div className="flex gap-4">

                    <CustomInput
                      control={form.control} name='state' label='State' placeholder="ex: GJ"
                    />
                    <CustomInput
                      control={form.control} name='postalCode' label='Postal Code' placeholder="ex: 390001"
                    />
                  </div>
                  <div className="flex gap-4">

                    <CustomInput
                      control={form.control} name='dateOfBirth' label='Date of Birth' placeholder="DD-MM-YYYY"
                    />
                    <CustomInput
                      control={form.control} name='ssn' label='SSN' placeholder="ex: 1234"
                    />
                  </div>
                </>
              )

              }

              {/* Please Check-it out long code for FORM FIELD jsm_banking/components/CustomInput.tsx */}

              <CustomInput
                control={form.control} name='email' label='Email' placeholder="Enter your email"
              />

              <CustomInput
                control={form.control} name='password' label='Password' placeholder="Enter your password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className='form-btn'>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className='animate-spin' /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in'
                    ? 'Sign-In' : 'Sign-up'
                  }
                </Button>
              </div>

            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className='text-14 font-normal text-gray-600'>
              {type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"
              }
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>


        </>
      )}
    </section>
  )
}

export default AuthForm