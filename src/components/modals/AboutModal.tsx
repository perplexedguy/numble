import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a Twitter-themed clone of the game Wordle modified by <a href="https://twitter.com/pimpprint" className="underline font-bold">@pimpprint</a> on Twitter. In this version of Wordle there will be words associated with Twitter, Stan Twitter, pop/music culture in general. Common slang and abbreviations might also be solutions. Thank you <a href="https://www.hannahmariepark.com" className="underline font-bold">Hannah Park</a> for the open-source code. Check out her code <a href="https://github.com/hannahcode/GAME" className="underline font-bold">here</a> or play the original game <a href="https://www.powerlanguage.co.uk/wordle/" className="underline font-bold">here</a>.
      </p>
    </BaseModal>
  )
}
