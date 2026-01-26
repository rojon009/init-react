import { MailIcon } from "lucide-react"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/shared/_shadcn/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/shared/_shadcn/components/ui/input-group"

interface EmailInputFieldProps {
  field: {
    name: string
    state: {
      value: string
      meta: {
        isTouched: boolean
        isValid: boolean
        errors: Array<{ message?: string } | undefined>
      }
    }
    handleBlur: () => void
    handleChange: (value: string) => void
  }
}

export function EmailInputField({ field }: EmailInputFieldProps) {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <InputGroup aria-invalid={isInvalid}>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <MailIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id={field.name}
          name={field.name}
          type="email"
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          aria-invalid={isInvalid}
        />
      </InputGroup>
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  )
}
