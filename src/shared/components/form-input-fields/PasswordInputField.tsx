import { useState } from "react"
import { LockIcon, EyeIcon, EyeOffIcon } from "lucide-react"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/shared/_shadcn/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/shared/_shadcn/components/ui/input-group"

interface PasswordInputFieldProps {
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

export function PasswordInputField({ field }: PasswordInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
      <InputGroup aria-invalid={isInvalid}>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <LockIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id={field.name}
          name={field.name}
          type={showPassword ? "text" : "password"}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          aria-invalid={isInvalid}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOffIcon className="size-4" />
            ) : (
              <EyeIcon className="size-4" />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  )
}
