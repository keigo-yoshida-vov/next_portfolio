import { CustomSpeedDial } from '@/components/molecules/dials/SpeedDial/SpeedDial'
import React, { memo } from 'react'
import scss from './home-template.module.scss'

export const HomeTemplate = memo(() => {
    return (
        <>
            <main className={`${scss.main}`}>
                <CustomSpeedDial />
            </main>
        </>
    )
})

HomeTemplate.displayName = 'HomeTemplate'
