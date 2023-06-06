import { useAppSelector } from '../../hooks/useAppSelector'

import styles from './OutputBlock.module.scss'

const OutputBlock = () => {
	const { outputValue, isFetching } = useAppSelector(state => state.translate)
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>ENG</div>
			<div className={styles.field}>
				{isFetching ? 'Translation...' : outputValue}
			</div>
		</div>
	)
}

export default OutputBlock
