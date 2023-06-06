import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import { translateRequest } from '../../redux/slices/translateSlice'
import { AppDispatch } from '../../redux/store'
import styles from './InputBlock.module.scss'

const InputBlock = () => {
	const [value, setValue] = useState<string>('')
	const dispatch = useDispatch<AppDispatch>()

	const onChangeText = useCallback(
		debounce(str => {
			console.log(str)
			dispatch(translateRequest(str))
		}, 350),
		[]
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>RUS</div>
			<textarea
				onChange={e => {
					onChangeText(e.target.value)
					setValue(e.target.value)
				}}
				className={styles.field}
				value={value}
			/>
		</div>
	)
}

export default InputBlock
