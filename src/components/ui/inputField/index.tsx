interface inputFieldProps {
  type: string
  placeholder: string
}

export default function InputField({ type, placeholder }: inputFieldProps) {
  return (
    <>
      <input placeholder={placeholder} type={type} className="bg-gray-600 py-1 px-2 rounded-md border-none w-2/4 placeholder:text-sm placeholder:text-gray-400" />
    </>
  )
}