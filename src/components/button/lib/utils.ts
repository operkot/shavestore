export const getBtnVariant = (variant: string) =>
  ({
    default: 'bg-gray-300 text-black',
    primary: 'bg-primary-0 text-white',
  }[variant])
