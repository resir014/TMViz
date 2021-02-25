import create from 'zustand'

type SidebarDisclosureState = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

const useSidebarDisclosure = create<SidebarDisclosureState>(set => ({
  isOpen: false,
  onOpen: () => {
    set(() => ({ isOpen: true }))
  },
  onClose: () => {
    set(() => ({ isOpen: false }))
  },
  onToggle: () => {
    set(state => ({ isOpen: !state.isOpen }))
  }
}))

export default useSidebarDisclosure
