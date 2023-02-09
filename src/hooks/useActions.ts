import {ActionCreatorsMapObject, bindActionCreators} from '@reduxjs/toolkit'
import {useAppDispatch} from 'hooks/useAppDispatch'
import {useMemo} from 'react'

export const useActions = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(actions, dispatch), [])
}
