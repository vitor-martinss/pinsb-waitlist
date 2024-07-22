'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import informationIcon from "../../assets/information.svg"
import Image from 'next/image';


const formSchema = z.object({
  email: z
    .string({
      required_error: 'Please type your email.'
    })
    .email()
});

// This can come from your database or API.
const defaultValues: Partial<z.infer<typeof formSchema>> = {
  email: '',
};

export default function FormWaitList() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onSubmit'
  });

  return (
      <article className="flex flex-col items-start mb-10 2xl:max-w-[90%]">
        <Form {...form}>
          <form
            autoComplete="off"
            noValidate
            action='https://getlaunchlist.com/s/DEM82h'
            method='POST'
            className="flex flex-col gap-4 lg:flex-row lg:items-center w-full launchlist-form mb-6"
          >
            <FormField
                control={form.control}
                name="email"
                render={({ field }: { field: any }) => (
                <FormItem className="relative w-full lg:max-w-md">
                    <FormControl>
                    <Input
                        autoComplete="off"
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        required
                    />
                    </FormControl>
                    <FormMessage className="absolute bottom-[-24px]" />
                </FormItem>
                )}
            />
            <Button
              aria-label="form submit"
              type="submit"
              className="lg:ml-4 text-xl px-5 py-4 h-16 min-w-44"
              disabled={!form.formState.isValid}
            >
                {
                    form.formState.isValid ? 'Ok, go for it!' : 'Are you sure?'
                }
            </Button>
          </form>
        </Form>
        <div className='flex'>
            <Image src={informationIcon} alt="instagram icon" className="mr-1 size-4 dark:invert" />
            <p className="text-sm font-light ">In case you decide to wait, your data is completely safe and will only be used to tease you with updates about our secret spots.</p>
        </div>
      </article>
  );
}
