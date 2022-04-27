import { useState } from 'react'

export const useToggle = (defaultOpen = false) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const toggle = () => setOpen(!isOpen);

  return [isOpen, toggle];
};