"use client"

import { useForm } from "@tanstack/react-form"
import * as z from "zod"

import { Button } from "@/shared/_shadcn/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/_shadcn/components/ui/card"
import { Field, FieldGroup } from "@/shared/_shadcn/components/ui/field"
import { EmailInputField } from "@/shared/components/form-input-fields/EmailInputField"
import { PasswordInputField } from "@/shared/components/form-input-fields/PasswordInputField"
import { toast } from "sonner"

const formSchema = z.object({
  email: z
    .email("Please enter a valid email address."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(12, "Password must be at most 100 characters."),
})

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast.success("Login successful", {
        description: `Email: ${value.email} Password: ${value.password}`,
        action: {
          label: "Undo",
          onClick: () => {
            toast.error("Login failed", {
              description: `Email: ${value.email} Password: ${value.password}`,
              action: {
                label: "Close",
                onClick: () => toast.dismiss(),
              },
            })
          }
        }
      })
    },
  })

  return (
    <Card className="w-full sm:max-w-md shadow-xl">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email and password to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="login-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="email"
              children={(field) => <EmailInputField field={field} />}
            />
            <form.Field
              name="password"
              children={(field) => <PasswordInputField field={field} />}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="login-form">
            Login
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
