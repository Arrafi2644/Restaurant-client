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

const signupSchema = z.object({
    fullname: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: 'You must accept the terms and conditions',
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

type SignupFormValues = z.infer<typeof signupSchema>

interface SignupFormProps {
    isOpen: boolean
    onClose: () => void
    onSwitchToLogin: () => void
}

export function SignupForm({ isOpen, onClose, onSwitchToLogin }: SignupFormProps) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullname: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirmPassword: '',
            termsAccepted: false,
        },
    })

    const onSubmit = async (data: SignupFormValues) => {
        setIsLoading(true)
        try {
            // Handle signup logic here
            console.log('Signup form submitted:', data)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            onClose()
        } catch (error) {
            console.error('Signup error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
                <DialogHeader className="text-center">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-12 h-12 bg-[#FF2B85] rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">🍴</span>
                        </div>
                        <span className="text-[#FF2B85] text-2xl font-bold">FoodNest</span>
                    </div>

                    {/* Title */}
                    <DialogDescription className="text-gray-800 font-medium">
                        Create your account
                    </DialogDescription>
                </DialogHeader>

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

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Create a password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Confirm your password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="termsAccepted"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-sm font-normal text-gray-600">
                                            I agree to the{' '}
                                            <a href="#" className="text-[#FF2B85] hover:text-pink-600 font-medium">
                                                Terms of Service
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="text-[#FF2B85] hover:text-pink-600 font-medium">
                                                Privacy Policy
                                            </a>
                                        </FormLabel>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-[#FF2B85] hover:bg-pink-600"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating account...' : 'Create account'}
                        </Button>
                    </form>
                </Form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <button
                            onClick={() => {
                                onClose()
                                onSwitchToLogin()
                            }}
                            className="text-[#FF2B85] hover:text-pink-600 font-medium"
                        >
                            Log in
                        </button>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}