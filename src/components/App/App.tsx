import InputBlock from '../InputBlock/InputBlock'
import OutputBlock from '../OutputBlock/OutputBlock'
import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.app}>
			<InputBlock />
			<OutputBlock />
		</div>
	)
}

export default App
