import { type ReactNode, useEffect } from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-4 shadow-xl transition-all sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex justify-end">
          <button onClick={onClose} className="text-md text-gray-500 hover:text-red-500 md:text-lg">
            Đóng ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
export default Modal
