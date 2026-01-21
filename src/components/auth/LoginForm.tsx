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

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean().optional(),
})

type LoginFormValues = z.infer<typeof loginSchema>

interface LoginFormProps {
    isOpen: boolean
    onClose: () => void
    onSwitchToSignup: () => void
}

export function LoginForm({ isOpen, onClose, onSwitchToSignup }: LoginFormProps) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    })

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true)
        try {
            // Handle login logic here
            console.log('Login form submitted:', data)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            onClose()
        } catch (error) {
            console.error('Login error:', error)
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
                    <DialogTitle className="text-2xl font-bold text-gray-800">Welcome back</DialogTitle>
                    <DialogDescription className="text-gray-800 font-medium">
                        Log in to continue to FoodNest
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email address</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            {...field}
                                        />
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
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex items-center justify-between">
                            <FormField
                                control={form.control}
                                name="rememberMe"
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
                                                Remember me
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <a href="#" className="text-sm text-[#FF2B85] hover:text-pink-600 font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#FF2B85] hover:bg-pink-600"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Log in'}
                        </Button>
                    </form>
                </Form>

                {/* Register Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <button
                            onClick={() => {
                                onClose()
                                onSwitchToSignup()
                            }}
                            className="text-[#FF2B85] hover:text-pink-600 font-medium"
                        >
                            Sign up
                        </button>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}