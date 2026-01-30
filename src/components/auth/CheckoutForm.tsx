"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import logo from "../../../public/assets/logo-112.jpeg"
import Image from 'next/image'


const signupSchema = z.object({
    fullname: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    address: z.string().min(5, 'Address must be at least 5 characters')
})

type SignupFormValues = z.infer<typeof signupSchema>

export function CheckoutForm() {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullname: '',
            email: '',
            phone: '',
            address: ''
        },
    })

    const onSubmit = async (data: SignupFormValues) => {
        setIsLoading(true)
        try {
            // Handle signup logic here
            console.log('Signup form submitted:', data)
            // Simulate API call
        } catch (error) {
            console.error('Signup error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone number</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="Enter your phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-[#FF2B85] hover:bg-pink-600"
                            disabled={isLoading}
                        >
                           Checkout
                        </Button>
                    </form>
                </Form>
    )
}