import { useState, useContext, createContext } from 'react'
import {
	RegisterModal,
	LoginModal,
	ConfirmModal,
	ResetModal,
	SuccessModal,
	InstantBuyModal,
	InstallmentModal,
	ConnectModal,
	FeedbackModal,
} from '../components'

const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(null)
	const [modalError, setModalError] = useState(null)
	const [authData, setAuthData] = useState(null)
	const [successData, setSuccessData] = useState(null)
	const [instantData, setInstantData] = useState(null)
	const [connectData, setConnectData] = useState(null)
	const [installmentData, setInstallmentData] = useState(null)

	function openModal(id) {
		setShowModal(id)
		setModalError(null)
	}

	function closeModal(reset) {
		setShowModal(null)
		setModalError(null)
		setSuccessData(null)
		setInstantData(null)
		setInstallmentData(null)
		setConnectData(null)
		reset && reset()
	}

	const values = {
		showModal,
		openModal,
		closeModal,

		authData,
		setAuthData,

		successData,
		setSuccessData,

		instantData,
		setInstantData,

		installmentData,
		setInstallmentData,

		connectData,
		setConnectData,

		modalError,
		setModalError,
	}

	return (
		<ModalContext.Provider value={values}>
			{children}

			{/* Register Modal */}
			{<RegisterModal />}

			{/* Login Modal */}
			<LoginModal />

			{/* Reset Modal */}
			<ResetModal />

			{/* Confirm Modal */}
			<ConfirmModal />

			{/* Feedback Modal */}
			<FeedbackModal />

			{/* Success Modal */}
			{successData && <SuccessModal />}

			{/* Instant Buy Modal */}
			{instantData && <InstantBuyModal />}

			{/* Installment Modal */}
			{installmentData && <InstallmentModal />}

			{/* Connect Modal */}
			{connectData && <ConnectModal />}
		</ModalContext.Provider>
	)
}

export const useModal = () => useContext(ModalContext)
